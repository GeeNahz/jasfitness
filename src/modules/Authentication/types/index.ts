import type { Status } from "@/types";

export interface User {
  avatar: string;
  is_oriented: boolean;
  token: string;
  user_id: number;
  username: string;
}
export interface AuthState {
  status: Status;
  user: User | null;
  isLoggedIn: boolean;
}