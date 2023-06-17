export interface PaymentFormData {
  id: number;
  userId: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  planName: string;
  amount: number;
  planId: string | number;
  properties: any;
  isNewClient: string | boolean;
  isValid: boolean;
}

export interface PaymentPlans {
  name: string;
  amount: number;
  id: string | number;
  properties: any;
  duration: string | number;
  selected: boolean;
}

export interface ServerPlan {
  id: string | number;
  title: string;
  duration: string | number;
  amount: number;
  properties: any;
}

export interface Instructor {
  id: number;
  avatar: string;
  name: string;
  specialty: string;
}