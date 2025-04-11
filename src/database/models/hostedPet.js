import mongoose from 'mongoose';

const hostedPetSchema = new mongoose.Schema({
    petName: String,
    petOwner: String,
    contact: String,
    species: String,
    breed: String,
    inputDate: { type: Date, default: Date.now },
    estimatedDeparture: Date,
    dailyRate: Number,
    totalExpectedDaily: Number,
});

export default mongoose.model('hostedPet', hostedPetSchema);