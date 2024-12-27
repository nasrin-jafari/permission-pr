import { PaginationProps } from '@/types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="mt-6 flex items-center justify-center gap-2 space-x-4">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="transform rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        قبلی
      </button>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="transform rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
