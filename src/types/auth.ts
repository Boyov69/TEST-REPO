export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export enum UserRole {
  ADMIN = 'admin',
  DOCTOR = 'doctor',
  NURSE = 'nurse',
  RECEPTIONIST = 'receptionist'
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  loginWithGoogle: () => Promise<User>;
  loginWithGithub: () => Promise<User>;
  loginWithApple: () => Promise<User>;
  logout: () => Promise<void>;
  hasRole: (role: UserRole | UserRole[]) => boolean;
}
