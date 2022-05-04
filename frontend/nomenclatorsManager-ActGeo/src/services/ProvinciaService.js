import http from "../http-common";

const getAll = () => {
  return http.get("/provincia");
};
const get = id => {
  return http.get(`/provincia/${id}`);
};
const create = data => {
  return http.post("/provincia", data);
};
const update = (id, data) => {
  return http.put(`/provincia/${id}`, data);
};
const remove = id => {
  return http.delete(`/provincia/${id}`);
};
const removeAll = () => {
  return http.delete(`/provincia`);
};
const findByTitle = title => {
  return http.get(`/provincia?title=${title}`);
};
const provinciaService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
export default provinciaService;