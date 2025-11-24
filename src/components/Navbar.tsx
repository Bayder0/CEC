import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary-red text-white shadow-lg">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Hide title/university on mobile, show on desktop */}
          <div className="hidden md:flex md:flex-row md:items-center gap-6 space-x-reverse">
            <Link href="/" className="text-2xl font-bold hover:text-red-100 transition">
              مركز التعليم المستمر
            </Link>
            <span className="text-red-100 text-sm font-medium border-r border-red-400 pr-4">
              جامعة النهرين
            </span>
          </div>
          {/* Navigation buttons with icons */}
          <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4 space-x-reverse w-full md:w-auto">
            <Link 
              href="/" 
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition font-medium text-sm md:text-base backdrop-blur-sm border border-white/30"
            >
              <span className="text-lg">🏠</span>
              <span>الرئيسية</span>
            </Link>
            <Link 
              href="/admin" 
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition font-medium text-sm md:text-base backdrop-blur-sm border border-white/30"
            >
              <span className="text-lg">📊</span>
              <span>لوحة التحكم</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
