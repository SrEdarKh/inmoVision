import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // URL del back
});

export const getPropiedades = () => API.get("propiedades/");
export const createPropiedad = (data) => API.post("propiedades/", data);
export const updatePropiedad = (id, data) => API.put(`propiedades/${id}/`, data);
export const deletePropiedad = (id) => API.delete(`propiedades/${id}/`);
