export const pages = [
  { path: '/', label: 'صفحه اصلی' },
  { path: '/list', label: 'لیست' },
  { path: '/setting', label: 'تنظیمات' },
];
export const users = [
  { username: 'admin', password: 'admin123', permissions: ['all'] }, // دسترسی به همه صفحات
  {
    username: 'test',
    password: 'test123',
    permissions: ['/'], // دسترسی فقط به صفحه اصلی
  },
];
