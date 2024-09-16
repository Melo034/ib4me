import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  condition: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  goal: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
});

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;
