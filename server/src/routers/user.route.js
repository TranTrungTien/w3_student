const userControllers = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", userControllers.getAll);
router.get("/:id", userControllers.getById);
router.post("/save", userControllers.save);
router.delete("/delete", userControllers.deleteUser);
router.put("/update", userControllers.update);

module.exports = router;
