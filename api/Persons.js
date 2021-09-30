const { Router } = require('express')
const router = Router()
const Person = require('../model/person')
router.get('/', (request, response) => {
    Person.find({}).then((persons) => {
        response.json(persons)
    })
})

router.get('/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then((person) => {
            if (person) {
                return response.json(person)
            } else {
                return response.status(404).end()
            }
        })
        .catch((error) => {
            next(error)
        })
})

router.delete('/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then((person) => {
            console.log('delete', person)
            return response.status('204').end()
        })
        .catch((err) => next(err))
})

router.post('/', (request, response, next) => {
    const body = request.body

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person
        .save()
        .then((personSaved) => {
            return response.json(personSaved)
        })
        .catch((errorMessage) => next(errorMessage))
})

router.put('/:id', (request, response, next) => {
    const body = request.body

    const person = {
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then((updatedNote) => {
            response.json(updatedNote)
        })
        .catch((error) => next(error))
})


module.exports = router
