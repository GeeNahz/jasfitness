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

export interface GenericStoreState {
  showSplashScreen: boolean;
}


export interface PlanProperties {
  billing: string;
  duration: number;
  instructor: boolean;
  new_sub_charges: number;
  resub_charges: number;
  setup_fee: number;
  type: string;
  offers: string[]
}

export interface Plan {
  id: number;
  amount: number;
  freeze_duration: number;
  freezeable: boolean;
  properties: PlanProperties;
  title: string;
}

export interface Review {
  id?: number;
  name: string;
  reviewUrl: string;
  imageUrl: string;
  imageAlt: string;
  review: string;
  stars: number;
}