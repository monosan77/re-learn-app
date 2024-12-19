export interface Auth_DataModel {
  id: string;
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
  id: string;
  name: string;
  color: string;
  text_color: string;
  problem_set_id: string;

  problem?: ProblemModel[];
}

export interface ProblemModel {
  id: string;
  title: string;
  format: string;
  statement: string;
  answer: string;
  otherOptions: string[];
  explanation: string | null;
  category_id: string;
  createdAt: Date;
  updatedAt: Date;

  history_problem?: History_Problem[];
}

export interface History_Problem {
  id: string;
  profile_id: string;
  problem_id: string;
  solvedAt: Date;
  isCorrect: Date;
  attemptedAnswer: string;
}
