export interface QuizInfoInterface {
  id?: string;
  name?: string;
  questions?: Array<{
    id: number;
    text: string;
    type: string;
    hint: string;
  }>;
  time?: number;
  category?: string;
  active?: boolean;
  description?: string;
}
