import axios, { AxiosResponse } from 'axios'
import { QueryOptions } from '../types/queryParams.d';
import { User } from '../types/user.d';

const apiVideos = axios.create({
    baseURL : `http://localhost:8000/v1/youtubeVideoList`
});

const apiUsers = axios.create({
    baseURL : `http://localhost:8000/v1/user`,
    withCredentials: true,
});

export const getPostsPage = async (pageParam = 0, handle = "", searchOptions : QueryOptions, options = {}) => {
    const response = await apiVideos.get(`/${handle}/?page=${pageParam}&sort=${searchOptions.sort}&title=${searchOptions.title}&dateBefore=${searchOptions.dateBefore}`, options)
    return response.data;
}

export const postLogin = async (user : User, options = {}) => {
    const response = await apiUsers.post("/login", {username: user.username, password: user.password}, options);
    return response.data;
}

export const postRegister = async (user : User, options = {}) => {
    const response = await apiUsers.post("/register", user, options);
    return response.data;
}

export const getAuth = async () => {
    const response = await apiUsers.get("/isAuth");
    return response.data;
}

export const logout = async () => {
    const response = await apiUsers.get("/logout");
    return response.data;
}