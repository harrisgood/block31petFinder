// give each pet an id, name, owner, maybe type of pet
const pets = [
  { id: 1, name: 'shrek', owner: 'waldo'}, 
  { id: 2, name: 'david', owner: 'waldo'}, 
  { id: 3, name: 'buddy', owner: 'alice'}, 
  { id: 4, name: 'gravedigger', owner: 'alice'}, 
  { id: 5, name: 'spot', owner: 'kyle'}, 
  { id: 6, name: 'sunshine', owner: 'kyle'}, 
]

const express = require('express')
const app = express()
// 
// const cors = require("cors")
// app.use(cors())

app.listen(8080, () => { 
  console.log('listening on port 8080')
})

// create a route for all pets
app.get('/api/v1/pets', (req, res) => { 
  console.log('pets: ', pets)
  // send our array of pet data to be the api endpoint data
  res.send(pets)
})

app.get('/api/v1/pets/owner', (req, res) => { 
  
  let ownerToFind = req.query.owner
  let petOwnerSearch = pets
  if (ownerToFind) {
    petOwnerSearch = petOwnerSearch.filter((currentPet) =>{
      return currentPet.owner === ownerToFind
    })
    res.send(petOwnerSearch)
  }
})

// create a route for a pet of a specific name
app.get('/api/v1/pets/:name', (req, res) => { 
  // console.log(req.params.name)
  
  // get params from route url
  const {name} = req.params
  
  // find pet from data array with matching name for our url param
  const foundPet = pets.find((currentPet) => { 
    return currentPet.name === name 
  })

  // send that pet to be the api endpoint data
  res.send(foundPet)
})






