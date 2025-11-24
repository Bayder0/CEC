export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-t-4 border-primary-red py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-red">مركز التعليم المستمر</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              نقدم دورات تدريبية متخصصة لتطوير مهارات طلاب الهندسة المعلوماتية. نحن ملتزمون بتقديم أفضل تجربة تعليمية عملية ومحتوى عالي الجودة.
            </p>
            <p className="text-gray-400 text-sm">
              جامعة النهرين - بغداد، العراق
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-red">روابط سريعة</h3>
            <ul className="space-y-2 space-y-reverse">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition">الصفحة الرئيسية</a>
              </li>
              <li>
                <a href="/admin" className="text-gray-300 hover:text-white transition">لوحة التحكم</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">الدورات المتاحة</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-red">معلومات</h3>
            <ul className="space-y-2 space-y-reverse">
              <li className="text-gray-300">📧 info@nahrain.edu.iq</li>
              <li className="text-gray-300">📞 +964 123 456 789</li>
              <li className="text-gray-300">📍 بغداد، العراق</li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">المطور</p>
              <p className="text-gray-300 text-sm">Designed and created by Bayder Bassim</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} مركز التعليم المستمر - جامعة النهرين. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
