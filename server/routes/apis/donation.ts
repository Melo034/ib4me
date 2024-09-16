import express from "express";
import * as controller from "../../app/controllers/donation_controller";
import multer from "multer";
import path from "path";

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

// Route to create a donation with image upload
router.post("/create", upload.single("image"), controller.createDonation);

// Add routes for other operations (get, update, delete)
router.get("/all", controller.getAllDonations);
router.get("/:id", controller.getDonationById);
router.put("/update/:id", controller.updateDonation);
router.delete("/delete/:id", controller.deleteDonation);

export default router;
