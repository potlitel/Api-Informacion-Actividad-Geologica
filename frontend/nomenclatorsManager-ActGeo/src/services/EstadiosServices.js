import http from "../http-common";

const getAll = () => {
  return http.get("/estadio");
};
const get = id => {
  return http.get(`/estadio/${id}`);
};
const create = data => {
  return http.post("/estadio", data);
};
const update = (id, data) => {
  return http.put(`/estadio/${id}`, data);
};
const remove = id => {
  return http.delete(`/estadio/${id}`);
};
const removeAll = () => {
  return http.delete(`/estadio`);
};
const findByTitle = title => {
  return http.get(`/estadio?title=${title}`);
};
const estadiosService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
export default estadiosService;