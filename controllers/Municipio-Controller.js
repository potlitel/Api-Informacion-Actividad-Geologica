const Entity = require("../models/Nomenclators/Municipio");

// GET ALL
exports.get_all = async (req, res, next) => {
  try {
    const entities = await Entity.find();
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
