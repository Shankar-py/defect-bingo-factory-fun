
import { useState } from 'react';
import { BingoCell } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, Move, Plus } from 'lucide-react';
import { toast } from 'sonner';

interface BingoCardProps {
  cell: BingoCell;
  isHighlighted?: boolean;
  isBingoLine?: boolean;
  isDragging?: boolean;
  rowIndex: number;
  colIndex: number;
  onCellClick?: (rowIndex: number, colIndex: number) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (rowIndex: number, colIndex: number) => void;
}

const BingoCard = ({ 
  cell, 
  isHighlighted, 
  isBingoLine, 
  isDragging,
  rowIndex,
  colIndex,
  onCellClick,
  onDragOver,
  onDrop
}: BingoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  
  const handleClick = () => {
    if (onCellClick) {
      onCellClick(rowIndex, colIndex);
    }
    
    if (!cell.marked && cell.garmentPart && cell.defectType) {
      toast.success('Validating defect...', {
        description: `${cell.garmentPart.name} - ${cell.defectType.name}`,
        position: 'bottom-right',
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
    if (onDragOver) onDragOver(e);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (onDrop) onDrop(rowIndex, colIndex);
  };

  const isEmpty = !cell.garmentPart && !cell.defectType;
  const isComplete = cell.garmentPart && cell.defectType;

  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-lg border transition-all duration-200 ease-in-out",
        cell.marked 
          ? "border-primary/40 bg-primary/10" 
          : isEmpty 
            ? isDragOver
              ? "border-dashed border-primary/70 bg-primary/5 shadow-md scale-105"
              : "border-dashed border-muted-foreground/30 bg-accent/10 hover:border-primary/20" 
            : "border-border bg-card hover:border-primary/20 hover:bg-accent/30",
        isHighlighted && isComplete && !cell.marked && "bg-accent border-primary/20 shadow-sm",
        isBingoLine && cell.marked && "bg-primary/10 border-primary/50 shadow-md",
        isDragging && "opacity-80 border-primary/30 shadow-inner",
        isDragOver && "ring-2 ring-primary/40 scale-105 shadow-lg",
        "hover:shadow-md hover:scale-[1.02] hover:z-10",
        cell.marked ? "glass-effect-success" : isDragOver ? "glass-effect-active" : "glass-effect"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isEmpty ? (
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          {isDragOver ? (
            <Plus className="h-6 w-6 text-primary animate-pulse" />
          ) : (
            <Move className="h-5 w-5 opacity-40" />
          )}
          {!isDragOver && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-xs text-muted-foreground">
              Drop here
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1 p-1 sm:p-2">
          {cell.defectType && (
            <div className={cn(
              "text-xs font-medium uppercase tracking-wider transition-colors duration-300",
              cell.marked ? "text-primary" : "text-muted-foreground"
            )}>
              {cell.defectType.code}
            </div>
          )}
          
          <div className="text-center truncate w-full">
            {cell.defectType && (
              <div className={cn(
                "text-xs sm:text-sm font-medium transition-colors duration-300",
                cell.marked ? "text-foreground" : "text-foreground/80"
              )}>
                {cell.defectType.name}
              </div>
            )}
            
            {cell.garmentPart && (
              <div className={cn(
                "text-xs truncate w-full transition-colors duration-300 border-t border-dashed border-muted mt-1 pt-1",
                cell.marked ? "text-foreground/90" : "text-foreground/70"
              )}>
                {cell.garmentPart.code}: {cell.garmentPart.name}
              </div>
            )}
          </div>
          
          {/* Marked indicator */}
          {cell.marked && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/0">
              <div className="absolute inset-0 bg-primary/5 animate-pulse-subtle"></div>
              <CheckCircle className="h-8 w-8 text-primary opacity-80" />
            </div>
          )}
          
          {/* Hover effect for complete cells that aren't marked yet */}
          {isHovered && isComplete && !cell.marked && (
            <div className="absolute inset-x-0 bottom-2 flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 bg-primary/10 text-primary hover:bg-primary/20 px-2 py-1 text-xs rounded-full animate-fade-in"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
              >
                Validate
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BingoCard;
