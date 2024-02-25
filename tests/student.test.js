const request = require('supertest');
const app = require('../App');
const mongoose = require('mongoose');




beforeAll((done) => {
    console.log('Before all tests')
    done();
});

afterAll((done) => {
    console.log('After all tests')
    mongoose.connect.close();
    done();
});

describe("Student tests", () => {
    test("Test Student get all", async () => {
        console.log('Test Student get all');
        const res = await request(app).get('/student');
        expect(res.statusCode).toBe(200);
    });
});  