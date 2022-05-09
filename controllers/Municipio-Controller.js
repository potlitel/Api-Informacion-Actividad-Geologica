const Entity = require("../models/Nomenclators/Municipio");

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

// Retrieve all MateriaPrima from the database.
exports.findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Entity.paginate(condition, { offset, limit ,select: 'nombre provincia', populate: [{ path: "provincia", select: "nombre" }],})
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        docs: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// GET ALL
exports.get_all = async (req, res, next) => {
  try {
    const entities = await Entity.find().populate("provincia");
    return res.status(200).send(entities);
  } catch (err) {
    next(err);
  }
};

// POST
exports.create = async (req, res, next) => {
  try {
    const entity = new Entity(req.body);
    entity
      .save()
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
};

// GET SINGLE
exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const entity = await Entity.findById(id);
    if (!entity) return next();
    return res.status(200).send(entity);
  } catch (err) {
    next(err);
  }
};

//UPDATE
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    Entity.findOneAndUpdate(
      { _id: id },
      req.body,
      { upsert: true },
      function (err, doc) {
        if (err) next(err);
        return res.status(200).send(doc);
      }
    );
  } catch (err) {
    next(err);
  }
};

// DELETE
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    Entity.deleteOne({ _id: id })
      .then((result) => {
        return res.status(200).send(result);
      })
      .catch((err) => {
        next(err);
      });
  } catch (err) {
    next(err);
  }
};
