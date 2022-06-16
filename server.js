const express = require('express')
const faker = require('faker')
const app = express()

// not required for this assignment, however it is needed if post/put requests
app.use(express.json()) // allows to parse JSON obj comming from POST and PUT requests.
app.use(express.urlencoded({ extended: true })) // allows to parse strings and arrays comming in with JSON.

const createUser = () => ({
  _id: faker.datatype.uuid(),
  FirstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

const createCompany = () => ({
  _id: faker.datatype.uuid(),
  Name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country()
  }
})

app.get('/api/user/new', (request, response) => {
  response.json(createUser())
})

app.get('/api/companies/new', (request, response) => {
  response.json(createCompany())
})

app.get('/api/user/company', (request, response) => {
  response.json({
    user: createCompany(),
    company: createCompany()
  })
})
app.listen(8000, () =>
  console.log('You have successfully connected to port 8000')
)