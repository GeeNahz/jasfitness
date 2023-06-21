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