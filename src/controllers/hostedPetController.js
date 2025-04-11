import hostedPet from '../database/models/hostedPet.js';

export const createHostedPet = async (req, res) => {
    try {
        const newHostedPet = await hostedPet.create(req.body);
        res.json(newHostedPet);
        console.error('Novo pet hospedado cadastrado no sistema!', newHostedPet);
    } catch (error) {
        res.send(error.message);
        console.error('Erro createHostedPet:', error.message);
    }
}

