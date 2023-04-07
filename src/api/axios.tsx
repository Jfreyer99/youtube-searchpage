import axios from 'axios'
import { QueryOptions } from '../typedef/typedef';

export const api = axios.create({
    baseURL : `http://localhost:8000/v1/youtubeVideoList`
});

export const getPostsPage = async (pageParam = 0, handle = "", searchOptions : QueryOptions, options = {}) => {
    const response = await api.get(`/${handle}/?page=${pageParam}&sort=${searchOptions.sort}`, options)
    return response.data;
}