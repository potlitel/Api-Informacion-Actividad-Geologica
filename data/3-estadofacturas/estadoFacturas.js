const { getObjectId } = require("mongo-seeding");

const estadoFactura = [
  { estado: "Emitida"},
  { estado: "Registrada"},
  { estado: "Anulada"},
  { estado: "Solicitada anulación"},
  { estado: "Anulación aceptada"},
  { estado: "Rechazada"},
  { estado: "Reenviada"},
  { estado: "Aceptada"},
  { estado: "Pendiente"},
  { estado: "Cobrada"}
];

const mapToEntities = (estadosFacturas) => {
  return estadosFacturas.map((estadoFactura, index) => {
    return {
      estado: estadoFactura.estado
    };
  });
};

module.exports = mapToEntities(estadoFactura);
