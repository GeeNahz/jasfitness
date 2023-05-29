import type { Status } from "@/types";

export interface FreezeBase { total: number; value: number; }
export interface FreezeState extends FreezeBase { is_active: boolean }
export interface Profile {
  address: null | string;
  date_of_birth: null | string;
  eligibility: boolean;
  email: null | string;
  emergency_contact: null | string;
  emergency_person: null | string;
  enrollee_id: null | string | number;
  gender: null | string;
  hmo: null | any
  id: null | number
  joined_at: null | string;
  name: null | null | string;
  occupation: null | string;
  phone_number: null | string;
  referal_code: null | string | number;
  referred: null | string;
  username: null | string;
}
export interface DashboardBase {
  average: null | number;
  freeze: null | FreezeState;
  frozen: boolean;
  is_expired: boolean;
  month_total: number;
  sub_plan: string;
  sub_status: null | string;
  year_total: number;
}
export interface FitnessProfile { average: number; goal: string; }
export interface FitnessAssessment {
  height: null | string | number;
  weight: null | string | number;
  arm_size: null | string | number;
  thigh_size: null | string | number;
  waist_size: null | string | number;
  strength: null | string | number;
  endurance: null | string | number;
  flexibility: null | string | number;
}
export interface GymAttendance {
  count: number;
  next: null | string;
  previous: null | string;
  results: null | any[];
}
export interface DashboardSubscription {
  end_date: null | string;
  freeze: null | FreezeBase;
  freezeable: boolean;
  frozen: boolean;
  is_expired: boolean;
  start_date: string;
  sub_plan: string;
  sub_status: number;
  sub_wheel: number;
}
export interface ModalItem { id: string; open: boolean; }
export interface Modal {
  accessmentRecord: ModalItem;
  feedback: ModalItem;
  freezeSub: ModalItem;
  healthRecord: ModalItem;
  passwordReset: ModalItem;
  profile: ModalItem;
  shareSub: ModalItem;
}
export interface FreezeStatus { details: { message: string; }; is_freezed: boolean; }

export interface DashboardState {
  status: Status;
  profile: null | Profile;
  dashboardBase: null | DashboardBase;
  dashboardFitness: null | FitnessProfile;
  dashboardGymAttendance: null | GymAttendance;
  dashboardSubscription: null | DashboardSubscription;
  dashboardFitnessAssessment: null | any;
  modals: Modal;
  freezedSubStatus: FreezeStatus;
}

export type Payload = any | Profile | DashboardBase | FitnessProfile | FitnessAssessment | GymAttendance | DashboardSubscription | Modal | FreezeStatus | Status | FreezeBase | FreezeState;

export interface ShareSubscription { username: string; duration: number; }

export interface ChangePassword { old_password: string; new_password: string; user_id: number; }
