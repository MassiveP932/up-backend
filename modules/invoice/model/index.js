const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    shop:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "shops",
      required: false,
    },
    branch:{ type: Date, required: false },
    invoiceDate: { type: Date, required: false },
    invoice: {
      seri: { type: String, default: false },
      no: { type: String, default: false },
    },
    shopman: { type: String, required: false },
   
    gate: { type: String, default: false },
    destCountry: { type: String, required: false },
    destCity: { type: String, required: false },
    destAirport: { type: String, required: false },
    airline: { type: String, required: false },
    flight: { type: String, required: false },
    deparDate: { type: Date, required: true },
    deparTime: { type: Date, required: false },
    agency: { type: String, required: false },
    guide: { type: String, required: false },
    client: {
      name:{ type: String, required: false },
      surname:{ type: String, required: false },
      cardNo:{ type: String, required: false },
      nation: { type: String, required: false },
      passportNo: { type: String, required: false },
      phone: { type: String, required: false },
      hotel: { type: String, required: false },
      address: { type: String, required: false },
    },
    details: [{ 
      productCategory: { type: String, default: false }, 
      productName: { type: String, default: false },
      kdv: { type: Number, default: false },
      productCode: { type: String, default: false },
      unit: { type: String, default: false },
      quantity: { type: Number, default: false },
      productTotal: { type: Number, default: false },
    }],
    note: { type: String, required: false },
    campaign: { type: String, required: false }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Invoice = mongoose.model("invoices", InvoiceSchema);

module.exports = {
  Invoice,

};
