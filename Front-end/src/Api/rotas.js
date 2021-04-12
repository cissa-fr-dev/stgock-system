import axios from 'axios';

const url = "http://localhost:8000";
const api = "/stock/api";
const apiVersion = "/v1";

export const getAllProductsRoute = () =>
    axios.get(`${url}${api}${apiVersion}/product`);

export const getProductByIdRoute = (id) =>
    axios.get(`${url}${api}${apiVersion}/product/${id}`);

export const createProductRoute = (params = {}) =>
    axios.post(`${url}${api}${apiVersion}/product`, params);

export const editProductByIdRoute = (params = {}, id) =>
    axios.put(`${url}${api}${apiVersion}/product/${id}`, params);

export const deleteProductByIdRoute = (id) =>
    axios.delete(`${url}${api}${apiVersion}/product/${id}`);

export const getAllCategoriesRoute = () =>
    axios.get(`${url}${api}${apiVersion}/product_category`);

export const createCategoryRoute = (params = {}) =>
    axios.post(`${url}${api}${apiVersion}/product_category`, params);

export const deleteCategoryByIdRoute = (id) =>
    axios.delete(`${url}${api}${apiVersion}/product_category/${id}`);