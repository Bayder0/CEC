'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Course } from '@/types/course';

export default function AdminPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    duration: '',
    instructor: '',
    startDate: '',
    schedule: '',
    maxStudents: '',
    prerequisites: '',
    category: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseInt(formData.price),
          maxStudents: formData.maxStudents ? parseInt(formData.maxStudents) : undefined,
        }),
      });

      if (response.ok) {
        setFormData({
          title: '',
          description: '',
          location: '',
          price: '',
          duration: '',
          instructor: '',
          startDate: '',
          schedule: '',
          maxStudents: '',
          prerequisites: '',
          category: '',
        });
        setShowForm(false);
        fetchCourses();
        alert('تمت إضافة الدورة بنجاح!');
      } else {
        alert('حدث خطأ أثناء إضافة الدورة');
      }
    } catch (error) {
      console.error('Error adding course:', error);
      alert('حدث خطأ أثناء إضافة الدورة');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const categories = [
    'مهارات الحاسوب',
    'الذكاء الاصطناعي',
    'تطوير الويب',
    'الأمن السيبراني',
    'البرمجة',
    'قواعد البيانات',
    'أخرى',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-6 md:py-12 bg-gray-50">
        <div className="container mx-auto px-3 md:px-4">
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 border-2 border-primary-red/30">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">لوحة التحكم - إدارة الدورات</h1>
                <p className="text-xs md:text-sm text-gray-500">Designed and created by Bayder Bassim</p>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full md:w-auto bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-primary-red/90 transition font-semibold shadow-md text-sm md:text-base"
              >
                {showForm ? 'إلغاء' : 'إضافة دورة جديدة'}
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-4 md:p-6 rounded-lg border-2 border-primary-red/30">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">إضافة دورة جديدة</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">عنوان الدورة *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الفئة *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    >
                      <option value="">اختر الفئة</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">الوصف *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الموقع *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">السعر (دينار) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">المدة *</label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      placeholder="مثال: 6 أسابيع"
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">المدرب *</label>
                    <input
                      type="text"
                      name="instructor"
                      value={formData.instructor}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">تاريخ البدء</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الجدول الزمني</label>
                    <input
                      type="text"
                      name="schedule"
                      value={formData.schedule}
                      onChange={handleChange}
                      placeholder="مثال: السبت والثلاثاء من 2:00 مساءً إلى 4:00 مساءً"
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">العدد الأقصى للطلاب</label>
                    <input
                      type="number"
                      name="maxStudents"
                      value={formData.maxStudents}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">المتطلبات المسبقة</label>
                    <input
                      type="text"
                      name="prerequisites"
                      value={formData.prerequisites}
                      onChange={handleChange}
                      placeholder="مثال: معرفة أساسية بـ Python"
                      className="w-full px-4 py-2 border border-smoky-dark rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-primary-red/90 transition font-semibold shadow-md"
                >
                  إضافة الدورة
                </button>
              </form>
            )}

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">الدورات الحالية ({courses.length})</h2>
              {loading ? (
                <p className="text-gray-600">جاري التحميل...</p>
              ) : courses.length === 0 ? (
                <p className="text-gray-600">لا توجد دورات حالياً</p>
              ) : (
                <div className="space-y-4 space-y-reverse">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white border-2 border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-lg transition hover:border-primary-red"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-grow w-full">
                          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 break-words">{course.title}</h3>
                          <p className="text-sm md:text-base text-primary-red font-semibold mb-2">{course.category}</p>
                          <p className="text-sm md:text-base text-gray-700 mb-3 line-clamp-2 break-words">{course.description}</p>
                          <div className="mt-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:space-x-reverse text-xs md:text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <span className="font-semibold">المدرب:</span>
                              <span>{course.instructor}</span>
                            </span>
                            <span className="hidden md:inline">•</span>
                            <span className="flex items-center gap-1 break-words">
                              <span className="font-semibold">الموقع:</span>
                              <span>{course.location}</span>
                            </span>
                            <span className="hidden md:inline">•</span>
                            <span className="font-bold text-primary-red">
                              {course.price.toLocaleString()} دينار
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => router.push(`/courses/${course.id}`)}
                          className="w-full md:w-auto bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-primary-red/90 transition text-sm font-semibold shadow-md"
                        >
                          عرض التفاصيل
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
