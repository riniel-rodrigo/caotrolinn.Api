import hostedPet from '../database/models/hostedPet.js';

export const getHostedPets = async (req, res) => {
    try {
        const hostedPets = await hostedPet.find();
        res.json(hostedPets);
        console.log('sucesso na requisição,pets hospedados:', hostedPets);
    } catch (error) {
        res.send(error.message);
        console.error('erro getAllHostedPets:', error.message);
    }
}

export const createHostedPet = async (req, res) => {
    try {
        const newHostedPet = await hostedPet.create(req.body);
        res.json(newHostedPet);
        console.log('novo pet hospedado cadastrado no sistema!', newHostedPet);
    } catch (error) {
        res.send(error.message);
        console.error('erro createHostedPet:', error.message);
    }
}

export const updateHostedPet = async (req, res) => {
    try {
        const newHostedPet = await hostedPet.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(newHostedPet);
        console.log('registro de pet atualizado:', newHostedPet);
    } catch (error) {
        res.send(error.message);
        console.error('erro updateHostedPet:', error.message);
    }
}

export const deleteHostedPet = async (req, res) => {
    try {
        const deleteHostedPet = await hostedPet.findByIdAndDelete(req.params.id);
        res.json(deleteHostedPet);
        console.log('registro de pet apagado:', deleteHostedPet);
    } catch (error) {
        res.send(error.message);
        console.error('erro deleteHostedPet:', error.message);
    }
} 
