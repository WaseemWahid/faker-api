const { faker } = require("@faker-js/faker")
const express = require("express")
const app =  express()
const port = 8000;


class User {
    constructor() {
        this._id = faker.datatype.number(50);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email(this.firstName, this.lastName, "faker.com");
        this.password = faker.internet.password(10);
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.number(50);
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
})

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );
