import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary-red text-white shadow-lg">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:space-x-reverse">
            <Link href="/" className="text-xl md:text-2xl font-bold hover:text-red-100 transition">
              مركز التعليم المستمر
            </Link>
            <span className="text-red-100 text-xs md:text-sm font-medium border-r-0 md:border-r border-red-400 pr-0 md:pr-4 block md:inline">
              جامعة النهرين
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 space-x-reverse">
            <Link href="/" className="hover:text-red-100 transition font-medium text-sm md:text-base">
              الرئيسية
            </Link>
            <Link href="/admin" className="hover:text-red-100 transition font-medium text-sm md:text-base">
              لوحة التحكم
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
