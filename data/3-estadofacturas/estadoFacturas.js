const { getObjectId } = require("mongo-seeding");

const estadoFactura = [
  {
    "_id": { "$oid": "62742f2c2a7060d6f80dccd4" },
    estado: "Emitida"
  },
  {
    "_id": { "$oid": "62742f344bfd356e0033f8f8" },
    estado: "Registrada"
  },
  {
    "_id": { "$oid": "62742f3acf2a6b8755b94bf1" },
    estado: "Anulada"
  },
  {
    "_id": { "$oid": "62742f4200c67031380b02aa" },
    estado: "Solicitada anulación"
  },
  {
    "_id": { "$oid": "62742f48088b38b3a3e89d4b" },
    estado: "Anulación aceptada"
  },
  {
    "_id": { "$oid": "62742f4cf5947715547f7968" },
    estado: "Rechazada"
  },
  {
    "_id": { "$oid": "62742f5031bb89416892d2f4" },
    estado: "Reenviada"
  },
  {
    "_id": { "$oid": "62742f570d737613daa803a7" },
    estado: "Aceptada"
  },
  {
    "_id": { "$oid": "62742f5cdb4452f2d46f7870" },
    estado: "Pendiente"
  },
  {
    "_id": { "$oid": "62742f615516aa050916c2eb" },
    estado: "Cobrada"
  }
];

const mapToEntities = (estadosFacturas) => {
  return estadosFacturas.map((estadoFactura, index) => {
    return {
      _id : getObjectId(estadoFactura.estado),
      estado: estadoFactura.estado
    };
  });
};

module.exports = mapToEntities(estadoFactura);
