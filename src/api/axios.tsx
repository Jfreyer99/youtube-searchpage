import axios from 'axios'


export const api = axios.create({
    baseURL : `http://localhost:8000/v1/youtubeVideoList`
});

export const getPostsPage = async (pageParam = 0, handle = "@PaulDavids", options = {}) => {
    const response = await api.get(`/${handle}/?page=${pageParam}`, options)
    return response.data;
}