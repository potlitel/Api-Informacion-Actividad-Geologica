import http from "../http-common";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getAll = (params) => {
  return http.get("/municipio", { params });
};
const get = id => {
  return http.get(`/municipio/${id}`);
};
const create = data => {
  return http.post("/municipio", data);
};
const update = (id, data) => {
  return http.put(`/municipio/${id}`, data);
};
const remove = id => {
  return http.delete(`/municipio/${id}`);
};
const removeAll = () => {
  return http.delete(`/municipio`);
};
const findByTitle = title => {
  return http.get(`/municipio?title=${title}`);
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