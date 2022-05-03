import http from "../http-common";

const getAll = () => {
  return http.get("/escala");
};
const get = id => {
  return http.get(`/escala/${id}`);
};
const create = data => {
  return http.post("/escala", data);
};
const update = (id, data) => {
  return http.put(`/escala/${id}`, data);
};
const remove = id => {
  return http.delete(`/escala/${id}`);
};
const removeAll = () => {
  return http.delete(`/escala`);
};
const findByTitle = title => {
  return http.get(`/escala?title=${title}`);
};
const grupoMineralesService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
export default grupoMineralesService;