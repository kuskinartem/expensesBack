const { check, validationResult } = require('express-validator');

const handleValidationError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ message: 'Validation error', error: errors.array() });
    next();
  };

const creatValidator = [
    check('text').notEmpty().isLength({ min: 1 }).isString(),
    check('cost').notEmpty().isLength({ min: 1 }).isNumeric(),
    check('date').notEmpty().isLength({ min: 1 }).isString(),
    handleValidationError,
  ];

  const changeTextValidator = [
    check('_id').notEmpty().isLength({ min: 1 }).isString(),
    check('text').notEmpty().isLength({ min: 1 }),
    handleValidationError,
  ];

  const changeCostValidator = [
    check('_id').notEmpty().isLength({ min: 1 }).isString(),
    check('cost').notEmpty().isLength({ min: 1 }),
    handleValidationError,
  ];

  const changeDateValidator = [
    check('_id').notEmpty().isLength({ min: 1 }).isString(),
    check('date').notEmpty().isLength({ min: 1 }).isString(),
    handleValidationError,
  ];

  module.exports = {
    creatValidator,
    changeTextValidator,
    changeCostValidator,
    changeDateValidator
  }