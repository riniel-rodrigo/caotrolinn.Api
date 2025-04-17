import hostedPet from '../database/models/hostedPet.js';
import { calculateDailyInfo } from '../utils/calculateDailyInfo.js';

export const getHostedPets = async (req, res) => {
    try {
      const pets = await hostedPet.find();
      const petsWithInfo = pets.map(pet => {
        const { currentDailyCount, totalExpectedDaily } = calculateDailyInfo(pet);
        return {
          ...pet.toObject(),               // converter o mongose doc pra objet JS
          currentDailyCount,               // adicionar a contagem atual
          totalExpectedDaily               // adicionar o total esperado
        };
      });
  
      console.log('sucesso na requisição, pets hospedados:', petsWithInfo);
      res.json(petsWithInfo);
    } catch (error) {
      console.error('erro getAllHostedPets:', error.message);
      res.send(error.message);
    }
  };
  

  export const getHostedPetById = async (req, res) => {
    try {
      const pet = await hostedPet.findById(req.params.id);
      if (!pet) {
        return res.status(404).send({ error: 'Pet não encontrado' });
      }
  
      const { currentDailyCount, totalExpectedDaily } = calculateDailyInfo(pet);
      const petWithInfo = {
        ...pet.toObject(),
        currentDailyCount,
        totalExpectedDaily
      };
  
      console.log('sucesso na requisição, pet hospedado:', petWithInfo);
      res.json(petWithInfo);
    } catch (error) {
      console.error('erro getHostedPetById:', error.message);
      res.send(error.message);
    }
  };

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
