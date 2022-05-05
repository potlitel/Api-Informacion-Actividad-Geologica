import http from "../http-common";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getAll = () => {
  return http.get("/objetivoGeologico");
};
const get = id => {
  return http.get(`/objetivoGeologico/${id}`);
};
const create = data => {
  return http.post("/objetivoGeologico", data);
};
const update = (id, data) => {
  return http.put(`/objetivoGeologico/${id}`, data);
};
const remove = id => {
  return http.delete(`/objetivoGeologico/${id}`);
};
const removeAll = () => {
  return http.delete(`/objetivoGeologico`);
};
const findByTitle = title => {
  return http.get(`/objetivoGeologico?title=${title}`);
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