import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
    movie: { type: String, required: true, ref: 'Movie' },
    showDateTime: { type: String, Date: true},
    showPrice: { type: Number, required: true},
    occupiedSeats: { type: Object, default: {}},
}, {minimize: false})

const Show = mongoose.model('Show', showSchema)

export default Show