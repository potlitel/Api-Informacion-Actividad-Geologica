import http from "../http-common";

const getAll = () => {
  return http.get("/grupoMinerales");
};
const get = id => {
  return http.get(`/grupoMinerales/${id}`);
};
const create = data => {
  return http.post("/grupoMinerales", data);
};
const update = (id, data) => {
  return http.put(`/grupoMinerales/${id}`, data);
};
const remove = id => {
  return http.delete(`/grupoMinerales/${id}`);
};
const removeAll = () => {
  return http.delete(`/grupoMinerales`);
};
const findByTitle = title => {
  return http.get(`/grupoMinerales?title=${title}`);
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