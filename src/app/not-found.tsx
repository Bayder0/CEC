import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-smoky-white py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-red mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">الصفحة غير موجودة</h2>
          <p className="text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
          <Link
            href="/"
            className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-primary-red/90 transition font-semibold inline-block shadow-md"
          >
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
