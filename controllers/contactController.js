exports.submitContact = function (req, res) {
  console.log("From our controller!");
  console.log(req.body);
  res.send("Thanks for sending data to us");
};
