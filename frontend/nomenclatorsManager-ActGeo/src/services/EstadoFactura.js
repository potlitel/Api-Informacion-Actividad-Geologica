import http from "../http-common";

const getAll = () => {
  return http.get("/estadoFactura");
};
const get = id => {
  return http.get(`/estadoFactura/${id}`);
};
const create = data => {
  return http.post("/estadoFactura", data);
};
const update = (id, data) => {
  return http.put(`/estadoFactura/${id}`, data);
};
const remove = id => {
  return http.delete(`/estadoFactura/${id}`);
};
const removeAll = () => {
  return http.delete(`/estadoFactura`);
};
const findByTitle = title => {
  return http.get(`/estadoFactura?title=${title}`);
};
const estadosFacturasService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
export default estadosFacturasService;