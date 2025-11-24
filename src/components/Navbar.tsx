import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary-red text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link href="/" className="text-2xl font-bold hover:text-red-100 transition">
              مركز التعليم المستمر
            </Link>
            <span className="text-red-100 text-sm font-medium border-r border-red-400 pr-4">جامعة النهرين</span>
          </div>
          <div className="flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="hover:text-red-100 transition font-medium">
              الرئيسية
            </Link>
            <Link href="/admin" className="hover:text-red-100 transition font-medium">
              لوحة التحكم
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
