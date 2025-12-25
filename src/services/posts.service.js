import api from "./api";

export const fetchPosts = () => api.get("/posts");

export const createPost = (data) =>
    api.post("/posts", data);

export const updatePostById = (id, data) =>
    api.patch(`/posts/${id}`, data);

export const deletePostById = (id) =>
    api.delete(`/posts/${id}`);
