export interface Content {
  id: string | number;
  content: any;
}

export interface HmoItem {
  id: string | number;
  content: string;
  schedule: string;
}

export interface HmoTempArray {
  id: string | number;
  name: string;
  schedule: string
}

export interface RequiredFields {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dob: string;
  emergencyName: string;
  emergencyNumber: string;
  username: string;
  medical_condition: string;
  goal: string;
  address: string;
  occupation: string;
}

export interface NotRequiredFields {
  referral: string;
  middleName: string;
  consent: boolean;
  hmo: string;
  enrolleeId: string;
  reference: string;
}

export interface MembershipSetup {
  requiredFields: RequiredFields;
  notRequired: NotRequiredFields;
}

export interface MembershipSetupData {
  username: string;
  email: string;
  name: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  address: string;
  emergency_person: string;
  emergency_contact: string;
  occupation: string;
  goal: string;
  medical_condition: string;
  medical_consent: boolean;
  hmo: string;
  enrollee_id: string;
  reference: string;
}