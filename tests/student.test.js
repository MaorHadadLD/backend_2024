const request = require('supertest');
const appInit = require('../App');
const mongoose = require('mongoose');
const Student = require('../models/studentModel');


let app;
beforeAll( (done) => {
    appInit(async (app_) => {
        app = app_;
        console.log('Before all tests');
        Student.deleteMany().them(() => {
            done()
        });
    })
});

afterAll(async () => {
    console.log('After all tests')
    await mongoose.connection.close();
});

describe("Student tests", () => {
    test("Test Student get all", async () => {
        const res = await request(app).get('/student');
        expect(res.statusCode).toBe(200);
        const data = res.body;
        expect(data).toEqual([]);
    });
});  