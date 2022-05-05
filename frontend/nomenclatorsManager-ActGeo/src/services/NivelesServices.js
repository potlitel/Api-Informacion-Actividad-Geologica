import http from "../http-common";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getAll = () => {
  return http.get("/nivel");
};
const get = id => {
  return http.get(`/nivel/${id}`);
};
const create = data => {
  return http.post("/nivel", data);
};
const update = (id, data) => {
  return http.put(`/nivel/${id}`, data);
};
const remove = id => {
  return http.delete(`/nivel/${id}`);
};
const removeAll = () => {
  return http.delete(`/nivel`);
};
const findByTitle = title => {
  return http.get(`/nivel?title=${title}`);
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