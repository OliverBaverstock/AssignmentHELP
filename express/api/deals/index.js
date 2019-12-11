import express from 'express';
import Deal from './dealsModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();// eslint-disable-line

router.get('/', asyncHandler(async (req, res) => {
  const deals = await Deal.find();
  return res.send(deals);
}));

// Add a deal
router.post('/', asyncHandler(async (req, res) => {
    const newDeal = req.body;
    if (newDeal) {
          const deal = await Deal.create(newDeal);
          return res.status(201).send({deal});
      } else {
         return handleError(res, err);
      }
}));

// upvote a deal
router.post('/:id/upvotes', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deal = await Deal.findById(id);
  deal.upvotes++;
  await deal.save();
  return res.status(201).send({deal});
}));

// get deal
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deal = await Deal.findById(id);
    return res.send({deal});
}));



/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;