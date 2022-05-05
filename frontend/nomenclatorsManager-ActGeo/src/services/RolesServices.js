import http from "../http-common";

const getAll = () => {
  return http.get("/rol");
};
const get = id => {
  return http.get(`/rol/${id}`);
};
const create = data => {
  return http.post("/rol", data);
};
const update = (id, data) => {
  return http.put(`/rol/${id}`, data);
};
const remove = id => {
  return http.delete(`/rol/${id}`);
};
const removeAll = () => {
  return http.delete(`/rol`);
};
const findByTitle = title => {
  return http.get(`/rol?title=${title}`);
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