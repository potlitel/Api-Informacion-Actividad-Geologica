import http from "../http-common";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getAll = (params) => {
  return http.get("/materiaprima", { params });
};
const get = id => {
  return http.get(`/materiaprima/${id}`);
};
const create = data => {
  return http.post("/materiaprima", data);
};
const update = (id, data) => {
  return http.put(`/materiaprima/${id}`, data);
};
const remove = id => {
  return http.delete(`/materiaprima/${id}`);
};
const removeAll = () => {
  return http.delete(`/materiaprima`);
};
const findByTitle = title => {
  return http.get(`/materiaprima?title=${title}`);
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