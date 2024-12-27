import { useQuery } from '@tanstack/react-query';
import customApi from '@/services/api';
import { FetchPostsResponse } from '@/types';

const fetchPosts = async (
  page: number,
  limit: number
): Promise<FetchPostsResponse> => {
  const response = await customApi.get('/posts', {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  const totalCount = parseInt(response.headers['x-total-count'], 10);
  return {
    data: response.data,
    totalCount,
  };
};

const usePosts = (page: number, limit: number) => {
  return useQuery<FetchPostsResponse, Error>({
    queryKey: ['posts', page],
    queryFn: () => fetchPosts(page, limit),
  });
};

export default usePosts;
