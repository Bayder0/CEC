import { Course } from '@/types/course';

interface CourseIconProps {
  course: Course;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CourseIcon({ course, size = 'md', className = '' }: CourseIconProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-24 h-24 text-5xl',
  };

  // Map courses to icons based on title/category
  const getIcon = (course: Course): string => {
    const title = course.title;
    const category = course.category;
    const titleLower = title.toLowerCase();
    const categoryLower = category.toLowerCase();

    // Excel
    if (titleLower.includes('excel') || title.includes('Excel')) return '📊';
    
    // Machine Learning / Deep Learning
    if (titleLower.includes('machine learning') || titleLower.includes('deep learning') || 
        titleLower.includes('ml') || titleLower.includes('dl') || 
        title.includes('تعلم') || title.includes('ذكاء')) {
      return '🤖';
    }
    
    // Web Development
    if ((title.includes('تطوير') && title.includes('ويب')) || 
        titleLower.includes('web') || titleLower.includes('react') ||
        categoryLower.includes('ويب') || category.includes('تطوير الويب')) {
      return '💻';
    }
    
    // Cybersecurity / Information Security
    if (title.includes('أمن') || titleLower.includes('security') || 
        titleLower.includes('cyber') || category.includes('أمن')) {
      return '🔒';
    }
    
    // Python
    if (titleLower.includes('python') || title.includes('Python')) {
      return '🐍';
    }
    
    // Database / SQL
    if (titleLower.includes('sql') || title.includes('قواعد البيانات') || 
        titleLower.includes('database') || category.includes('قواعد البيانات')) {
      return '🗄️';
    }
    
    // Programming (general)
    if (category.includes('برمجة') || categoryLower.includes('programming')) {
      return '⚙️';
    }
    
    // AI / Machine Learning category
    if (category.includes('ذكاء') || categoryLower.includes('ai')) {
      return '🧠';
    }
    
    // Computer Skills
    if (category.includes('حاسوب') || categoryLower.includes('computer') ||
        category.includes('مهارات')) {
      return '💻';
    }
    
    // Default icon
    return '📚';
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center rounded-lg bg-gradient-to-br from-smoky-white to-smoky-dark border-2 border-primary-red/20`}>
      <span>{getIcon(course)}</span>
    </div>
  );
}

