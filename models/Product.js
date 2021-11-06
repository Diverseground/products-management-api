const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "Company is required"],
      maxlength: [50, "Company name must be less than 50 characters"],
      minlength: [2, "Company name must be at least 2 characters"],
    },
    product: {
      type: String,
      required: [true, "Product is required"],
      maxlength: [50, "Product name must be less than 50 characters"],
      minlength: [2, "Product name must be at least 2 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than 0"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    unit: {
      type: String,
      required: [true, "Product Unit is required"],
    },
    packageType: {
      type: String,
      required: [true, "Package Type is required"],
    },
    unitPrice: {
      type: Number,
      required: [true, "Unit Price is required"],
      min: [0, "Unit Price must be greater than 0"],
    },
    taxRate: {
      type: Number,
      required: [true, "Tax Rate is required"],
      min: [0, "Tax Rate must be greater than 0"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [2, "Description must be at least 2 characters"],
      maxlength: [500, "Description must be less than 500 characters"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Created By is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
