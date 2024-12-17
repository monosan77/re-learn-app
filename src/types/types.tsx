export interface Auth_Data {
  id: number;
  provider: string;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
  profile: Profile;
}

export interface Profile {
  id: string;
  image: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  auth_data: Auth_Data;
}

export interface Problem_Set {
  id: string;
  name: string;
  color: string;
  text_color: string;
  profile_id: string;

  category?: Category[];
}

export interface Category {
  id: number;
  name: string;
  color: string;
  text_color: string;
  problem_set_id: string;

  problem?: Problem[];
}

export interface Problem {
  id: number;
  title: string;
  format: "select" | "write";
  statement: string;
  answer: string;
  otherOptions: string;
  explanation: string;
  category_id: number;
  createdAt: Date;
  updatedAt: Date;

  history_problem?: History_Problem[];
}

export interface History_Problem {
  id: number;
  profile_id: string;
  problem_id: number;
  solvedAt: Date;
  isCorrect: Date;
  attemptedAnswer: string;
}
