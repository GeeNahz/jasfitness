import type { LocationQueryRaw, RouteParamsRaw, Router } from "vue-router";

export interface Status { success: boolean; isLoading: boolean; error: boolean; } 
export type ID = string
export type styleType = "info" | "success" | "warning" | "danger" 
export interface AlertOptions {
  timeout?: number | false;
  style?: string;
}
export interface Alert extends AlertOptions {
  id: ID;
  message: string;

}

export interface AuthToken {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
}

export interface DynamicRoute {
  router: Router;
  routeName: string;
  query?: LocationQueryRaw | undefined;
  params?: RouteParamsRaw | undefined;
  openInNewTab?: boolean;
}

export interface Plan {
  id: number;
  slug: string;
  price: string;
  setup: string;
  billing: string;
  offers: string[]
}