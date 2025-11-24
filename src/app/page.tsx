import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { getCourses } from '@/lib/courses';

export default function Home() {
  const courses = getCourses();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-red via-red-600 to-red-700 text-white py-10 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4">مركز التعليم المستمر</h1>
              <p className="text-3xl md:text-2xl mb-4 md:mb-5 font-semibold text-red-100">جامعة النهرين</p>
              <p className="text-base md:text-lg text-red-50 leading-relaxed mb-4 md:mb-5 px-2">
                نوفر لكم مجموعة متنوعة من الدورات التدريبية المتخصصة لتطوير مهاراتكم التقنية والمعرفية
              </p>
              <p className="text-xs md:text-sm text-red-200 mt-5 md:mt-6">
                Designed and created by Bayder Bassim
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">الدورات المتاحة</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                اختر الدورة التي تناسب اهتماماتك ومهاراتك. نوفر مجموعة متنوعة من الدورات في مختلف المجالات التقنية
              </p>
            </div>

            {courses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-xl">لا توجد دورات متاحة حالياً</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
