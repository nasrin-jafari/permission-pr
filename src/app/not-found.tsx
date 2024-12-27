import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-4xl font-bold">صفحه مورد نظر پیدا نشد</h2>
      <p className="mb-6 text-lg">
        متاسفانه نتواستیم منبع درخواست شده را پیدا کنیم.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
