export interface Course {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  duration: string;
  instructor: string;
  startDate?: string;
  schedule?: string;
  maxStudents?: number;
  prerequisites?: string;
  category: string;
  image?: string;
  createdAt: string;
}

