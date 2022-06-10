const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newVehicle = await Car.create({
      ...req.body,
      owner_id: req.session.owner_id,
    });

    res.status(200).json(newVehicle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedVehicle = await Car.update(
      {
        current_bid: req.session.user_id,
      },
      {
        where: { id: req.params.id },
      }
    );

    console.log(updatedVehicle);

    res.status(200).json(updatedVehicle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const carData = await Car.destroy({
      where: {
        id: req.params.id,
        seller_id: req.session.owner_id,
      },
    });

    if (!carData) {
      res.status(404).json({ message: 'No vehicles to remove!' });
      return;
    }

    res.status(200).json(carData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
