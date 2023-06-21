export interface SearchFilter {
  id: number;
  content: string;
  isActive?: boolean;
}

export interface Career {
  id: number;
  title: string;
  description: string;
  details: {
    [key: string]: string;
  }
}

export type Gender = "male" | "female";
export interface CareerPayload {
  career: number;
  name: string;
  email: string;
  phone_number: string; // +234
  gender: Gender;
  address: string;
  cv: string;
}
