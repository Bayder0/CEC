import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseIcon from '@/components/CourseIcon';
import { getCourseById, getCourses } from '@/lib/courses';

interface PageProps {
  params: {
    id: string;
  };
}

export const dynamic = 'force-dynamic';

export default function CourseDetailPage({ params }: PageProps) {
  const course = getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-smoky-white">
        <div className="container mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-red hover:text-primary-blue mb-6 font-medium"
          >
            ← العودة إلى الصفحة الرئيسية
          </Link>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-primary-red/30">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-red via-red-600 to-red-700 text-white p-8 border-b-4 border-red-800">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start gap-4">
                  <CourseIcon course={course} size="lg" />
                  <div>
                    <span className="bg-white text-primary-red px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block shadow-lg">
                      {course.category}
                    </span>
                    <h1 className="text-4xl font-bold mb-4 text-white">{course.title}</h1>
                    <p className="text-lg text-red-100">👤 {course.instructor}</p>
                  </div>
                </div>
                <div className="text-right bg-white rounded-lg p-6 border-4 border-red-300 shadow-xl">
                  <p className="text-4xl font-bold mb-2 text-primary-red">{course.price.toLocaleString()}</p>
                  <p className="text-gray-600 font-semibold">دينار</p>
                  <p className="text-xs text-gray-500 mt-2">سعر الدورة</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">وصف الدورة</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{course.description}</p>
                </div>

                {/* Details */}
                <div className="bg-smoky-white rounded-lg p-6 border-2 border-smoky-dark">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل الدورة</h2>
                  <div className="space-y-4 space-y-reverse">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">المدة:</span>
                      <span className="text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">الموقع:</span>
                      <span className="text-gray-600">{course.location}</span>
                    </div>
                    {course.startDate && (
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-semibold text-gray-700">تاريخ البدء:</span>
                        <span className="text-gray-600">{course.startDate}</span>
                      </div>
                    )}
                    {course.schedule && (
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-semibold text-gray-700">الجدول:</span>
                        <span className="text-gray-600 text-sm">{course.schedule}</span>
                      </div>
                    )}
                    {course.maxStudents && (
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-semibold text-gray-700">عدد الطلاب الأقصى:</span>
                        <span className="text-gray-600">{course.maxStudents}</span>
                      </div>
                    )}
                    {course.prerequisites && (
                      <div className="pt-2">
                        <span className="font-semibold text-gray-700 block mb-2">المتطلبات المسبقة:</span>
                        <span className="text-gray-600">{course.prerequisites}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded">
                <p className="text-blue-800">
                  <strong>ملاحظة:</strong> هذه الدورة متاحة حاليًا للمشاهدة فقط. سيتم تفعيل نظام التسجيل والالتحاق قريباً.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
