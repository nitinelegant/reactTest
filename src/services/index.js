import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export const fetch__Posts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const posts = await axios.get(url);
  return posts;
};
export const fetch1__Post = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/4";
  const post = await axios.get(url);
  return post;
};
export const delete_Post = async (id) => {
  const url = `${baseUrl}/${id}`;
  const post = await axios.delete(url);
  return post;
};
