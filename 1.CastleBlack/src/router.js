const { Router } = require("express");
const router = Router();

router.get("/health", function(req, res) {
  res.body = "Up and running";
// QUESTION: why this endpoint blocks the app?
// there is not answer to client,
// res does not have a property o method called body, 
// body belong to req, if we wish data to client with res could use res.send()
});

module.exports = router;
