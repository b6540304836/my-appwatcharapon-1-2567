//models\ProductModel.js
import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    project: { type: String, required: true },
    imprementation: { type: String, required: true },
    Email: { type: String, required: true },
    mobile: { type: String, required: true },
    budget: { type: Number, required: true },
    year: { type: Number, required: true },
    evaluation: { type: Number, required: true },
    stregth: { type: String, required: true },
    weak: { type: String, required: true },
    development: { type: String, required: true },
    suggestion: { type: String, required: true },


    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", topicSchema);

export default ProductModel;
