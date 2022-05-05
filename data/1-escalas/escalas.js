const { getObjectId } = require("mongo-seeding");

const escalas = [
  {
    "_id": { "$oid": "62742d1f20ad81f9a566a2a6" },
    valor_escala: "1:500"
  },
  {
    "_id": { "$oid": "62742d29c9e93172dba49c6d" },
    valor_escala: "1:1000"
  },
  {
    "_id": { "$oid": "62742d2feb120c2b74756b45" },
    valor_escala: "1:5000"
  },
  {
    "_id": { "$oid": "62742d4b041ad302f88672d6" },
    valor_escala: "1:10000"
  },
  {
    "_id": { "$oid": "62742d52f57b8521b112ea29" },
    valor_escala: "1:25000"
  },
  {
    "_id": { "$oid": "62742d59055f3ab53068e91e" },
    valor_escala: "1:50000"
  }
];

const mapToEntities = (escalas) => {
  return escalas.map((escala, index) => {
    return {
      _id : getObjectId(escala.valor_escala),
      valor_escala: escala.valor_escala
    };
  });
};

module.exports = mapToEntities(escalas);
