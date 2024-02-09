'use strict'

import Animal from './animal.model.js'

export const addAnimal = async (req, res) => {
    try {
        //Capturar los datos del animal
        let data = req.body
        console.log(data)
        //Crear instancia del model
        let animal = new Animal(data)
        //Guardar datos
        await animal.save()
        //Responder al admin
        return res.send({ message: 'The animal was registered succesfully' })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Error registering an animal' })
    }
}

export const updateAnimal = async (req, res) => {
    try {
        //Obtener el id del animal
        let { id } = req.params
        //Obtener los datos a Actualizar
        let data = req.body
        //Validar si trae datos a Actualizar
        let animalUpdated = await Animal.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        //Validar si se actualizo
        if (!animalUpdated) return res.status(401).send({ message: 'Animal not found and not updated' })
        //Responder con el dato actualizado
        return res.send({ message: 'Updated Animal', animalUpdated })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error updating an animal' })
    }
}
export const deleteAnimal = async (req, res) => {
    try {
        //Obtener el id del animal
        let { id } = req.params
        //Eliminar
        let deletedAnimal = await Animal.findOneAndDelete({ _id: id })
        //Verificar que se elimino
        if (!deletedAnimal) return res.status(404).send({ message: 'Animal not found and not deleted' })
        return res.send({ message: `Animal with name ${deletedAnimal.name} deleted succesfully` })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error deleting an animal' })
    }
}

export const allAnimal = async (req, res)=>{
    try {
        let data = Animal()
        await data.find({})
        console.log(data)
    } catch (error) {
        console.error(error)
        return res.status(444).send({message: 'Error displaying data '})
    }
} 