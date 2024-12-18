export interface Auth_DataModel {
  id: number;
  provider: string;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
  profile: ProfileModel;
}

export interface ProfileModel {
  id: string;
  image: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  auth_data: Auth_DataModel;
}

export interface Problem_SetModel {
  id: string;
  name: string;
  color: string;
  text_color: string;
  profile_id: string;

  category?: CategoryModel[];
}

export interface CategoryModel {
  id: number;
  name: string;
  color: string;
  text_color: string;
  problem_set_id: string;

  problem?: ProblemModel[];
}

export interface ProblemModel {
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
