
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useLocalStorage } from '@/hooks/use-local-storage';

export interface Plant {
  id: string;
  name: string;
  lines: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  employeeId: string;
  plantId: string;
  lineNumber: string;
  role: 'user' | 'admin' | 'manager' | 'qc';
  createdAt: string;
  plant?: Plant;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<UserProfile, 'id' | 'role' | 'createdAt' | 'plant'> & { password: string }) => Promise<void>;
  logout: () => void;
  error: string | null;
  // Admin functions
  getAllUsers: () => UserProfile[];
  deleteUser: (userId: string) => void;
  updateUser: (userId: string, userData: Partial<UserProfile>) => void;
  addUser: (userData: Omit<UserProfile, 'id' | 'createdAt' | 'plant'> & { password: string }) => void;
  getAllPlants: () => Plant[];
  addPlant: (plant: Omit<Plant, 'id'>) => void;
  updatePlant: (plantId: string, plantData: Partial<Plant>) => void;
  deletePlant: (plantId: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useLocalStorage<UserProfile[]>('users', [
    // Add admin user only if no users exist
    {
      id: 'admin-1',
      name: 'System Administrator',
      email: 'admin@jayjay.com',
      employeeId: 'ADMIN-001',
      plantId: 'f1',
      lineNumber: 'L1',
      role: 'admin',
      createdAt: new Date().toISOString()
    }
  ]);
  const [currentUser, setCurrentUser] = useLocalStorage<UserProfile | null>('currentUser', null);
  const [plants, setPlants] = useLocalStorage<Plant[]>('plants', [
    { id: 'f1', name: 'Factory Alpha', lines: ['L1', 'L2', 'L3'] },
    { id: 'f2', name: 'Factory Beta', lines: ['L1', 'L2', 'L3', 'L4'] }
  ]);
  
  // Check if user is admin
  const isAdmin = !!currentUser && currentUser.role === 'admin';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Create default admin credentials if none exist
      const credentials = localStorage.getItem('userCredentials');
      const parsedCredentials = credentials ? JSON.parse(credentials) : {};
      
      if (!parsedCredentials['admin@jayjay.com']) {
        parsedCredentials['admin@jayjay.com'] = 'admin123';
        localStorage.setItem('userCredentials', JSON.stringify(parsedCredentials));
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const credentials = localStorage.getItem('userCredentials');
      const parsedCredentials = credentials ? JSON.parse(credentials) : {};
      
      const userExists = users.find(user => user.email === email);
      
      if (!userExists) {
        throw new Error('User not found. Please check your email or register.');
      }
      
      const userPassword = parsedCredentials[email];
      
      if (userPassword !== password) {
        throw new Error('Incorrect password. Please try again.');
      }
      
      // Find user's plant information
      const userPlant = plants.find(plant => plant.id === userExists.plantId);
      const userWithPlant = {
        ...userExists,
        plant: userPlant
      };
      
      setCurrentUser(userWithPlant);
      toast.success(`Welcome back, ${userWithPlant.name}!`, {
        description: "You've successfully logged in"
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      toast.error("Login failed", {
        description: err instanceof Error ? err.message : 'Could not log in. Please try again.'
      });
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Omit<UserProfile, 'id' | 'role' | 'createdAt' | 'plant'> & { password: string }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const userExists = users.some(user => user.email === userData.email);
      
      if (userExists) {
        throw new Error('User with this email already exists');
      }
      
      // Verify plant exists
      const plantExists = plants.some(plant => plant.id === userData.plantId);
      if (!plantExists) {
        throw new Error('Selected plant does not exist');
      }
      
      const userPlant = plants.find(plant => plant.id === userData.plantId);
      
      const newUser: UserProfile = {
        id: crypto.randomUUID(),
        name: userData.name,
        email: userData.email,
        employeeId: userData.employeeId,
        plantId: userData.plantId,
        lineNumber: userData.lineNumber,
        role: 'user',
        createdAt: new Date().toISOString(),
        plant: userPlant
      };
      
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      
      const credentials = localStorage.getItem('userCredentials');
      const parsedCredentials = credentials ? JSON.parse(credentials) : {};
      parsedCredentials[userData.email] = userData.password;
      localStorage.setItem('userCredentials', JSON.stringify(parsedCredentials));
      
      setCurrentUser(newUser);
      toast.success("Account created successfully!", {
        description: "Welcome to Jay Jay Quality"
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      toast.error("Registration failed", {
        description: err instanceof Error ? err.message : 'Could not create account. Please try again.'
      });
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    toast.info("You've been logged out", {
      description: "Come back soon!"
    });
  };
  
  // Admin functions
  const getAllUsers = () => {
    if (!isAdmin) {
      toast.error("Unauthorized", { description: "You don't have permission to view users" });
      return [];
    }
    return users;
  };
  
  const deleteUser = (userId: string) => {
    if (!isAdmin) {
      toast.error("Unauthorized", { description: "You don't have permission to delete users" });
      return;
    }
    
    if (userId === currentUser?.id) {
      toast.error("Cannot delete", { description: "You cannot delete your own account" });
      return;
    }
    
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    toast.success("User deleted", { description: "The user has been removed from the system" });
  };
  
  const updateUser = (userId: string, userData: Partial<UserProfile>) => {
    if (!isAdmin && currentUser?.id !== userId) {
      toast.error("Unauthorized", { description: "You don't have permission to update this user" });
      return;
    }
    
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = { ...user, ...userData };
        
        // Update user's plant information if plantId changed
        if (userData.plantId && userData.plantId !== user.plantId) {
          const newPlant = plants.find(plant => plant.id === userData.plantId);
          updatedUser.plant = newPlant;
        }
        
        // If we're updating the current user, also update currentUser state
        if (userId === currentUser?.id) {
          setCurrentUser(updatedUser);
        }
        
        return updatedUser;
      }
      return user;
    });
    
    setUsers(updatedUsers);
    toast.success("User updated", { description: "The user information has been updated" });
  };
  
  const addUser = (userData: Omit<UserProfile, 'id' | 'createdAt' | 'plant'> & { password: string }) => {
    if (!isAdmin) {
      toast.error("Unauthorized", { description: "You don't have permission to add users" });
      return;
    }
    
    const userExists = users.some(user => user.email === userData.email);
    if (userExists) {
      toast.error("User exists", { description: "A user with this email already exists" });
      return;
    }
    
    // Verify plant exists
    const plantExists = plants.some(plant => plant.id === userData.plantId);
    if (!plantExists) {
      toast.error("Invalid plant", { description: "Selected plant does not exist" });
      return;
    }
    
    const userPlant = plants.find(plant => plant.id === userData.plantId);
    
    const newUser: UserProfile = {
      id: crypto.randomUUID(),
      name: userData.name,
      email: userData.email,
      employeeId: userData.employeeId,
      plantId: userData.plantId,
      lineNumber: userData.lineNumber,
      role: userData.role,
      createdAt: new Date().toISOString(),
      plant: userPlant
    };
    
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    
    // Save password
    const credentials = localStorage.getItem('userCredentials');
    const parsedCredentials = credentials ? JSON.parse(credentials) : {};
    parsedCredentials[userData.email] = userData.password;
    localStorage.setItem('userCredentials', JSON.stringify(parsedCredentials));
    
    toast.success("User added", { description: "The new user has been created successfully" });
  };
  
  const getAllPlants = () => {
    return plants;
  };
  
  const addPlant = (plantData: Omit<Plant, 'id'>) => {
    if (!isAdmin) {
      toast.error("Unauthorized", { description: "You don't have permission to add plants" });
      return;
    }
    
    const newPlant: Plant = {
      id: `f${plants.length + 1}`,
      name: plantData.name,
      lines: plantData.lines
    };
    
    setPlants([...plants, newPlant]);
    toast.success("Plant added", { description: "The new plant has been added to the system" });
  };
  
  const updatePlant = (plantId: string, plantData: Partial<Plant>) => {
    if (!isAdmin) {
      toast.error("Unauthorized", { description: "You don't have permission to update plants" });
      return;
    }
    
    const updatedPlants = plants.map(plant => 
      plant.id === plantId ? { ...plant, ...plantData } : plant
    );
    
    setPlants(updatedPlants);
    
    // Update plant info in all users with this plant
    const updatedUsers = users.map(user => {
      if (user.plantId === plantId) {
        const updatedPlant = updatedPlants.find(p => p.id === plantId);
        return { ...user, plant: updatedPlant };
      }
      return user;
    });
    
    setUsers(updatedUsers);
    
    // Update current user if needed
    if (currentUser?.plantId === plantId) {
      const updatedPlant = updatedPlants.find(p => p.id === plantId);
      setCurrentUser({ ...currentUser, plant: updatedPlant });
    }
    
    toast.success("Plant updated", { description: "The plant information has been updated" });
  };
  
  const deletePlant = (plantId: string) => {
    if (!isAdmin) {
      toast.error("Unauthorized", { description: "You don't have permission to delete plants" });
      return;
    }
    
    // Check if any users are assigned to this plant
    const usersWithPlant = users.filter(user => user.plantId === plantId);
    if (usersWithPlant.length > 0) {
      toast.error("Cannot delete", { 
        description: "This plant has users assigned to it. Reassign them first." 
      });
      return;
    }
    
    const updatedPlants = plants.filter(plant => plant.id !== plantId);
    setPlants(updatedPlants);
    toast.success("Plant deleted", { description: "The plant has been removed from the system" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        isAuthenticated: !!currentUser,
        isAdmin,
        isLoading,
        login,
        register,
        logout,
        error,
        // Admin functions
        getAllUsers,
        deleteUser,
        updateUser,
        addUser,
        getAllPlants,
        addPlant,
        updatePlant,
        deletePlant
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
