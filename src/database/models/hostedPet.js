import mongoose from 'mongoose';

const hostedPetSchema = new mongoose.Schema({
    petName: String,
    petOwner: String,
    contact: String,
    species: {
        type: String,
        enum: ['dog', 'cat'],
    },
    breed: String,
    inputDate: { type: Date, default: Date.now },
    estimatedDeparture: Date,
    currentDailyCount: Number,
    totalExpectedDaily: Number,
});

export default mongoose.model('hostedPet', hostedPetSchema);