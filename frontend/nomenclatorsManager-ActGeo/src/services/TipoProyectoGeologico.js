import http from "../http-common";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getAll = () => {
  return http.get("/tipoProyectoGeologico");
};
const get = id => {
  return http.get(`/tipoProyectoGeologico/${id}`);
};
const create = data => {
  return http.post("/tipoProyectoGeologico", data);
};
const update = (id, data) => {
  return http.put(`/tipoProyectoGeologico/${id}`, data);
};
const remove = id => {
  return http.delete(`/tipoProyectoGeologico/${id}`);
};
const removeAll = () => {
  return http.delete(`/tipoProyectoGeologico`);
};
const findByTitle = title => {
  return http.get(`/tipoProyectoGeologico?title=${title}`);
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