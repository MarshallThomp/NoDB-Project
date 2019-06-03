let id = 1
let dogs = [
    {
        id: id++,
        name: 'Bongo',
        breed: 'Auggie',
        color: 'Brown/Gold Brindle',
        vaccinated: 'Yes',
        favoriteThings: ['balls', 'ropes', 'old socks']
    },
    {
        id: id++,
        name: 'Ava',
        breed: 'Australian Shepherd',
        color: 'Black/Gold Tri-Color',
        vaccinated: 'Yes',
        favoriteThings: ['sticks', 'treats', 'belly rubs']
    },
    {
        id: id++,
        name: 'Butch',
        breed: 'Pit Bull',
        color: 'Gray/Black Merle',
        vaccinated: 'Yes',
        favoriteThings: ['balls', 'bones', 'naps']
    },
    {
        id: id++,
        name: 'Scout',
        breed: 'Blood Hound',
        color: 'Brown/Gold Brindle',
        vaccinated: 'Yes',
        favoriteThings: ['balls', 'sticks', 'cuddles']
    }
]

module.exports = {
    read: (req, res) => {
        res.send(dogs)
    },

    create: (req, res) => {
        let newDog = req.body
        newDog.id = id++
        dogs.push(newDog)

        res.send(dogs)
    },

    update: (req, res) => {
        let { id } = req.params
        let { name, breed, color, vaccinated, favoriteThings } = req.body
        id = Number(id)

        let index =dogs.findIndex(dog => +dog.id === +id)
        let dog =dogs.find(dog => +dog.id === +id)

        let updDog = {
            id: dog.id, 
            name: name || dog.name,
            breed: breed || dog.breed,
            color: color || dog.color,
            vaccinated: vaccinated || dog.vaccinated,
            favoriteThings: favoriteThings || dog.favoriteThings
        }

        dogs.splice(index, 1, updDog)

        res.send(dogs)
    },

    delete: (req, res) => {
        let { id } = req.params
        let index = dogs.findIndex(dog => +dog.id === +id)
        dogs.splice(index, 1)
        res.send(dogs)
    }
}