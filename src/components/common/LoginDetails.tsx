const LoginDetails: React.FC = () => {
  return (
    <div className="mt-8 flex gap-4 rounded-lg border border-dashed border-gray-500">
      <div className="mb-2">
        <strong>ادمین</strong>:
        <p>
          <strong>نام کاربری:</strong> admin
          <br />
          <strong>رمز عبور:</strong> admin123
        </p>
        <p>پرمیشن‌ها: دسترسی کامل به همه بخش‌ها.</p>
      </div>

      <div>
        <strong>کاربر تست</strong>:
        <p>
          <strong>نام کاربری:</strong> test
          <br />
          <strong>رمز عبور:</strong> test123
        </p>
        <p>پرمیشن‌ها: دسترسی محدود به بخش‌های خاص .</p>
      </div>
    </div>
  );
};

export default LoginDetails;
