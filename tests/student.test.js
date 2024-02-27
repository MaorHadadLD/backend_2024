const request = require('supertest');
const app = require('../App');
const mongoose = require('mongoose');
const Student = require('../models/studentModel');



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
        const data = res.body;
    });
});  