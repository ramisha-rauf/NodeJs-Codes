const detail = require('../models/Details');

exports.createDetail = async (req, res) => {
  try {
    const { brandName, brandIconUrl, links } = req.body;
    const newDetail = await detail.create({
      brandName,
      brandIconUrl,
      links,
    });
    //console.log(req)
    res.status(201).json(newDetail);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create detail.' });
  }
};