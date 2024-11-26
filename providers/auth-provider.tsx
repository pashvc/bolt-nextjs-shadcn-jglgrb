'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { AuthState, LoginCredentials, RegisterCredentials, User } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const mockUsers = {
    'viewer@test.com': {
      id: '1',
      email: 'viewer@test.com',
      name: 'John Viewer',
      role: 'viewer',
    },
    'promoter@test.com': {
      id: '2',
      email: 'promoter@test.com',
      name: 'Sarah Promoter',
      role: 'promoter',
    },
    'admin@test.com': {
      id: '3',
      email: 'admin@test.com',
      name: 'Mike Admin',
      role: 'admin',
    },
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = document.cookie.includes('token=');

    if (storedUser && token) {
      setState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  const login = async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, isLoading: true }));

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      if (credentials.password !== 'password123') {
        throw new Error('Invalid email or password');
      }

      const mockUser = mockUsers[credentials.email as keyof typeof mockUsers];
      if (!mockUser) {
        throw new Error('Invalid email or password');
      }

      localStorage.setItem('user', JSON.stringify(mockUser));
      setCookie('token', 'mock-token', 7); // 7 days
      setState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      email: credentials.email,
      name: credentials.name,
      role: credentials.role || 'viewer',
      phone: credentials.phone,
    };

    localStorage.setItem('user', JSON.stringify(mockUser));
    setCookie('token', 'mock-token', 7); // 7 days
    setState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = async () => {
    localStorage.removeItem('user');
    deleteCookie('token');
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};