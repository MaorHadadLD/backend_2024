const request = require('supertest');
const appInit = require('../App');
const mongoose = require('mongoose');
const Student = require('../models/studentModel');


let app;
beforAll(async () => {
    app = await appInit();
    consol.log("beforAll");
    await Student.deleteMany();
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