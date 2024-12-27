export const pages = [
  { path: '/', label: 'صفحه اصلی' },
  { path: '/list', label: 'لیست' },
  { path: '/setting', label: 'تنظیمات' },
];
export const users = [
  { username: 'admin', password: 'admin123', permissions: ['all'] },
  {
    username: 'test',
    password: 'test123',
    permissions: ['/'],
  },
];
