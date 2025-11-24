import Link from 'next/link';
import { Course } from '@/types/course';
import CourseIcon from './CourseIcon';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // Get the icon emoji for background
  const getIconEmoji = (course: Course): string => {
    const title = course.title;
    const category = course.category;
    const titleLower = title.toLowerCase();
    const categoryLower = category.toLowerCase();

    if (titleLower.includes('excel') || title.includes('Excel')) return '📊';
    if (titleLower.includes('machine learning') || titleLower.includes('deep learning') || 
        titleLower.includes('ml') || titleLower.includes('dl') || 
        title.includes('تعلم') || title.includes('ذكاء')) return '🤖';
    if ((title.includes('تطوير') && title.includes('ويب')) || 
        titleLower.includes('web') || titleLower.includes('react') ||
        categoryLower.includes('ويب') || category.includes('تطوير الويب')) return '💻';
    if (title.includes('أمن') || titleLower.includes('security') || 
        titleLower.includes('cyber') || category.includes('أمن')) return '🔒';
    if (titleLower.includes('python') || title.includes('Python')) return '🐍';
    if (titleLower.includes('sql') || title.includes('قواعد البيانات') || 
        titleLower.includes('database') || category.includes('قواعد البيانات')) return '🗄️';
    if (category.includes('برمجة') || categoryLower.includes('programming')) return '⚙️';
    if (category.includes('ذكاء') || categoryLower.includes('ai')) return '🧠';
    if (category.includes('حاسوب') || categoryLower.includes('computer') ||
        category.includes('مهارات')) return '💻';
    return '📚';
  };

  const iconEmoji = getIconEmoji(course);

  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-primary-red relative">
        <div className="h-52 bg-gradient-to-br from-primary-blue via-blue-800 to-blue-700 flex items-center justify-center p-6 relative overflow-hidden">
          {/* Large transparent background icon in the header */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
            <span className="text-8xl leading-none">{iconEmoji}</span>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <span className="bg-white text-primary-blue px-4 py-2 rounded-full text-xs font-bold shadow-lg inline-block">
              {course.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-[1]"></div>
        </div>
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 h-14">{course.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3 h-16 text-sm leading-relaxed">{course.description}</p>
          <div className="space-y-3 space-y-reverse mb-5">
            <div className="flex items-center text-gray-700 text-sm">
              <span className="font-bold ml-2 text-primary-red">المدة:</span>
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-700 text-sm">
              <span className="font-bold ml-2 text-primary-red">الموقع:</span>
              <span className="font-medium">{course.location}</span>
            </div>
            {course.schedule && (
              <div className="flex items-center text-gray-700 text-sm">
                <span className="font-bold ml-2 text-primary-red">الجدول:</span>
                <span className="font-medium text-xs">{course.schedule.substring(0, 30)}...</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between pt-4 border-t-2 border-primary-red/20">
            <div className="flex items-center text-primary-red">
              <span className="font-bold text-xl">{course.price.toLocaleString()}</span>
              <span className="text-sm mr-1">دينار</span>
            </div>
            <div className="text-left">
              <span className="text-xs text-gray-500 block">المدرب</span>
              <span className="text-sm font-semibold text-gray-700">{course.instructor}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
