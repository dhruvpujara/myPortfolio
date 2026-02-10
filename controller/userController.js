const {sendEmail} = require('../utils/nodeMailer');

module.exports.inquiryReceived = async (req, res) => {
    console.log(req.body);
}