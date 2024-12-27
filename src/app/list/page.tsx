'use client';

import { useState } from 'react';
import Pagination from '@/components/common/Pagination';
import usePosts from '@/hooks/usePost';
import Loading from '@/components/common/Loading';
import { Post } from '@/types';

const ListOfPosts = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading, error } = usePosts(page, limit);

  if (isLoading) {
    return <Loading />;
  }

  if (error instanceof Error) {
    return <div className="text-center text-red-500">خطا: {error.message}</div>;
  }

  const { data: posts, totalCount } = data!;
  const totalPages = Math.ceil(totalCount / limit);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">لیست پست‌ها</h1>
      <div className="space-y-4">
        {posts.map((post: Post) => (
          <div key={post.id} className="bg-dark-bg rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default ListOfPosts;
