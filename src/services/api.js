
import axios from 'axios';

const API_KEY = '6761e5de3d20f3ac36b904d02ab8823a';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendingApi = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data;
};

// export const requestPostDetails = async (postId = '1') => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );

//   return data;
// };

// export const requestComments = async (postId = '1') => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//   );

//   return data;
// };
