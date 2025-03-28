
import { GarmentPart, DefectType } from '@/lib/types';

// List of all garment parts
export const GARMENT_PARTS: GarmentPart[] = [
  { code: 'SL', name: 'Sleeve' },
  { code: 'CL', name: 'Collar' },
  { code: 'CF', name: 'Cuff' },
  { code: 'PK', name: 'Pocket' },
  { code: 'SH', name: 'Shoulder' },
  { code: 'YK', name: 'Yoke' },
  { code: 'FS', name: 'Front Seam' },
  { code: 'BS', name: 'Back Seam' },
  { code: 'SS', name: 'Side Seam' },
  { code: 'HM', name: 'Hem' },
  { code: 'BT', name: 'Button' },
  { code: 'BH', name: 'Buttonhole' },
  { code: 'LB', name: 'Label' },
  { code: 'ZP', name: 'Zipper' },
  { code: 'WB', name: 'Waistband' },
  { code: 'CP', name: 'Center Panel' },
  { code: 'EP', name: 'Elbow Patch' },
  { code: 'HD', name: 'Hood' },
  { code: 'PL', name: 'Placket' },
  { code: 'TB', name: 'Tab' },
];

// List of all defect types
export const DEFECT_TYPES: DefectType[] = [
  { code: 1, name: 'Broken Stitch' },
  { code: 2, name: 'Skip Stitch' },
  { code: 3, name: 'Open Seam' },
  { code: 4, name: 'Raw Edge' },
  { code: 5, name: 'Puckering' },
  { code: 6, name: 'Oil Stain' },
  { code: 7, name: 'Dirt Mark' },
  { code: 8, name: 'Needle Mark' },
  { code: 9, name: 'Uneven Stitch' },
  { code: 10, name: 'Loose Thread' },
  { code: 11, name: 'Wrong Measurement' },
  { code: 12, name: 'Wrong Position' },
  { code: 13, name: 'Missing Component' },
  { code: 14, name: 'Color Variation' },
  { code: 15, name: 'Pleating' },
  { code: 16, name: 'Incorrect Trim' },
  { code: 17, name: 'Hole' },
  { code: 18, name: 'Run-off' },
  { code: 19, name: 'Twisted Seam' },
  { code: 20, name: 'Uneven Hem' },
];

// Factory data
export const FACTORIES = [
  {
    id: 'A6',
    name: 'Plant A6',
    lines: ['L1', 'L2', 'L3', 'L4', 'L5'],
    location: 'Colombo',
    manager: 'Sarah Johnson'
  },
  {
    id: 'C5',
    name: 'Plant C5',
    lines: ['L1', 'L2', 'L3'],
    location: 'Gampaha',
    manager: 'David Lee'
  },
  {
    id: 'M1',
    name: 'Plant M1',
    lines: ['L1', 'L2', 'L3', 'L4'],
    location: 'Kandy',
    manager: 'Maria Rodriguez'
  },
  {
    id: 'B7',
    name: 'Plant B7',
    lines: ['L1', 'L2', 'L3'],
    location: 'Negombo',
    manager: 'James Wilson'
  },
  {
    id: 'D2',
    name: 'Plant D2',
    lines: ['L1', 'L2'],
    location: 'Galle',
    manager: 'Lisa Chen'
  },
  {
    id: 'E4',
    name: 'Plant E4',
    lines: ['L1', 'L2', 'L3', 'L4'],
    location: 'Jaffna',
    manager: 'Robert Kim'
  },
  {
    id: 'F8',
    name: 'Plant F8',
    lines: ['L1', 'L2', 'L3'],
    location: 'Matara',
    manager: 'Emily Patel'
  },
  {
    id: 'G3',
    name: 'Plant G3',
    lines: ['L1', 'L2', 'L3', 'L4', 'L5'],
    location: 'Batticaloa',
    manager: 'Michael Zhang'
  },
  {
    id: 'H9',
    name: 'Plant H9',
    lines: ['L1', 'L2'],
    location: 'Trincomalee',
    manager: 'Sophia Gupta'
  },
  {
    id: 'J5',
    name: 'Plant J5',
    lines: ['L1', 'L2', 'L3'],
    location: 'Anuradhapura',
    manager: 'Daniel Martinez'
  },
  {
    id: 'K1',
    name: 'Plant K1',
    lines: ['L1', 'L2', 'L3', 'L4'],
    location: 'Kurunegala',
    manager: 'Isabella Wong'
  },
  {
    id: 'L6',
    name: 'Plant L6',
    lines: ['L1', 'L2', 'L3'],
    location: 'Ratnapura',
    manager: 'William Brown'
  },
  {
    id: 'N2',
    name: 'Plant N2',
    lines: ['L1', 'L2'],
    location: 'Badulla',
    manager: 'Olivia Nakamura'
  }
];

// Operations data
export const OPERATIONS = [
  { id: 'OP01', name: 'Cutting' },
  { id: 'OP02', name: 'Front Placket Attach' },
  { id: 'OP03', name: 'Collar Making' },
  { id: 'OP04', name: 'Collar Attach' },
  { id: 'OP05', name: 'Sleeve Hemming' },
  { id: 'OP06', name: 'Sleeve Attach' },
  { id: 'OP07', name: 'Cuff Making' },
  { id: 'OP08', name: 'Cuff Attach' },
  { id: 'OP09', name: 'Side Seam' },
  { id: 'OP10', name: 'Bottom Hemming' },
  { id: 'OP11', name: 'Button Attach' },
  { id: 'OP12', name: 'Buttonhole' },
  { id: 'OP13', name: 'Label Attach' },
  { id: 'OP14', name: 'Thread Trimming' },
  { id: 'OP15', name: 'Ironing' },
  { id: 'OP16', name: 'Final Inspection' },
  { id: 'OP17', name: 'Packing' }
];

// Incentive levels - For use in the incentive configuration
export const INCENTIVE_LEVELS = [
  {
    level: 1,
    name: 'Bronze',
    threshold: 10,
    reward: '50 Points',
    icon: 'Award'
  },
  {
    level: 2,
    name: 'Silver',
    threshold: 25,
    reward: '150 Points + Recognition Certificate',
    icon: 'Award'
  },
  {
    level: 3,
    name: 'Gold',
    threshold: 50,
    reward: '300 Points + Quality Champion Badge',
    icon: 'Trophy'
  },
  {
    level: 4,
    name: 'Platinum',
    threshold: 100,
    reward: '500 Points + Quality Elite Status',
    icon: 'Medal'
  }
];

// Bingo rewards
export const BINGO_REWARDS = [
  {
    type: 'row',
    points: 25,
    description: 'Complete any horizontal row'
  },
  {
    type: 'column',
    points: 25,
    description: 'Complete any vertical column'
  },
  {
    type: 'diagonal',
    points: 40,
    description: 'Complete any diagonal line'
  },
  {
    type: 'fullBoard',
    points: 200,
    description: 'Complete the entire board'
  }
];

// Define the bingo board size
export const BOARD_SIZE = 5;

// Common defect pairs - Mapping garment parts to their common defect types
export const COMMON_DEFECT_PAIRS = [
  { garmentCode: 'SL', defectCodes: [1, 2, 3, 4, 9, 10, 11, 19] }, // Sleeve
  { garmentCode: 'CL', defectCodes: [1, 2, 5, 9, 10, 11, 12, 15] }, // Collar
  { garmentCode: 'CF', defectCodes: [1, 2, 3, 5, 9, 10, 11] }, // Cuff
  { garmentCode: 'PK', defectCodes: [1, 2, 3, 4, 9, 10, 12] }, // Pocket
  { garmentCode: 'SH', defectCodes: [1, 2, 3, 9, 19] }, // Shoulder
  { garmentCode: 'YK', defectCodes: [1, 2, 3, 4, 9, 10, 11] }, // Yoke
  { garmentCode: 'FS', defectCodes: [1, 2, 3, 4, 5, 9, 10, 19] }, // Front Seam
  { garmentCode: 'BS', defectCodes: [1, 2, 3, 4, 5, 9, 10, 19] }, // Back Seam
  { garmentCode: 'SS', defectCodes: [1, 2, 3, 4, 5, 9, 10, 19] }, // Side Seam
  { garmentCode: 'HM', defectCodes: [1, 2, 3, 4, 5, 9, 10, 20] }, // Hem
  { garmentCode: 'BT', defectCodes: [10, 11, 12, 13] }, // Button
  { garmentCode: 'BH', defectCodes: [1, 2, 9, 11, 13, 17] }, // Buttonhole
  { garmentCode: 'LB', defectCodes: [12, 13, 14] }, // Label
  { garmentCode: 'ZP', defectCodes: [3, 9, 12, 13, 18] }, // Zipper
  { garmentCode: 'WB', defectCodes: [1, 2, 3, 4, 5, 9, 10, 11, 12] }, // Waistband
  { garmentCode: 'CP', defectCodes: [1, 2, 3, 4, 5, 6, 7, 9, 10, 14] }, // Center Panel
  { garmentCode: 'EP', defectCodes: [1, 2, 3, 9, 10, 12] }, // Elbow Patch
  { garmentCode: 'HD', defectCodes: [1, 2, 3, 4, 5, 9, 10, 12] }, // Hood
  { garmentCode: 'PL', defectCodes: [1, 2, 3, 4, 9, 10, 12] }, // Placket
  { garmentCode: 'TB', defectCodes: [1, 2, 3, 9, 10, 12, 16] }, // Tab
];

// Awards for players
export const AWARDS = [
  {
    id: 'a1',
    name: 'Quality Champion',
    description: 'Found 50+ defects in a month',
    icon: 'Trophy',
    recipients: []
  },
  {
    id: 'a2',
    name: 'Bingo Master',
    description: 'Completed 10+ bingo lines',
    icon: 'Award',
    recipients: []
  },
  {
    id: 'a3',
    name: 'Eagle Eye',
    description: 'Found 5 defects in a single day',
    icon: 'Eye',
    recipients: []
  },
  {
    id: 'a4',
    name: 'Team Leader',
    description: 'Helped team achieve highest quality score',
    icon: 'Users',
    recipients: []
  }
];

// Function to check if a defect type and garment part combination is valid
export const isValidCombination = (garmentPart: GarmentPart, defectType: DefectType): boolean => {
  // Find the garment part in the common defect pairs
  const pair = COMMON_DEFECT_PAIRS.find(p => p.garmentCode === garmentPart.code);
  
  // If no specific rules for this garment part, consider all combinations valid
  if (!pair) return true;
  
  // Check if the defect code is in the list of common defects for this garment part
  return pair.defectCodes.includes(defectType.code);
};
