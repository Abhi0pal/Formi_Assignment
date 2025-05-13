const chunkService = require('../services/kbChunkService');
const knowledge = require('../data/kbData.json');

exports.getChunk = (req, res) => {
  const { query } = req.body;
  const chunk = chunkService.findRelevantChunk(query, knowledge);

  if (!chunk) return res.json({ message: 'Couldn’t find anything helpful' });

  res.json({ data: chunk });
};

