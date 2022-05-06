const Entity = require("../models/Nomenclators/MateriaPrima");

const getAllptions = function (page, limit) {
  const options = {
    select: "nombre clasificacion um_menas um_metal",
    sort: { createdAt: -1 },
    populate: [{ path: "clasificacion", select: "nombre" }],
    lean: true,
    page: page,
    limit: limit,
  };

  return options;
};

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const myCustomLabels = {
  totalDocs: 'totalItems',
  docs: 'tutorials',
  limit: 'pageSize',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'totalPages',
  pagingCounter: 'slNo',
  meta: 'paginator'
};

// Retrieve all Tutorials from the database.
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Entity.paginate(condition, { offset, limit ,select: 'nombre clasificacion um_menas um_metal', populate: [{ path: "clasificacion", select: "nombre" }],})
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

exports.findAllOld = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};
  const { limit, offset } = getPagination(page, size);
  Entity.paginate(condition, { offset, limit, customLabels: myCustomLabels })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        tutorials: data.docs,
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
// GET ALL WITH PAGINATION
exports.get_all_with_agination = async (req, res, next) => {
  try {
      const { page, size, title } = req.query;
      const { limit, offset } = getPagination(page, size);
      //const options = getAllptions(page, limit);
      const query = { };
    Entity.paginate(query, {
      select: 'nombre clasificacion um_menas um_metal',
      populate: [{ path: "clasificacion", select: "nombre" }],
      offset: 3, limit: 2,
      customLabels: myCustomLabels
    }, function (err, result) {
        if (err) next(err);
        res.status(200).json({
        totalItems: result.totalDocs,
        tutorials: result.docs,
        totalPages: result.totalPages,
        currentPage: result.page - 1,
      });
      });
  } catch (err) {
    next(err);
  }
};

// GET ALL
exports.get_all = async (req, res, next) => {
  try {
    const entities = await Entity.find().populate("clasificacion", "nombre");
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
