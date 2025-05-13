const sheetService = require('../services/postCallSheetService');

exports.logConversation = async (req, res) => {
  const data = req.body;
  try {
    await sheetService.appendToSheet(data);
    res.json({ message: 'got it logged' });
  } catch {
    res.status(500).json({ message: 'couldn’t log this one' });
  }
};

