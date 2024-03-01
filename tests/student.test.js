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


const students = [
    {
        name: 'John Doe',
        _id : '12345',
        age : 22
    },
    {
        name: 'Jane Doe',
        _id: '12346',
        age: 23
    }
];

describe("Student ", () => {
    test("Get /student - empty collection", async () => {
        const res = await request(app).get('/student');
        expect(res.statusCode).toBe(200);
        const data = res.body;
        expect(data).toEqual([]);
    });

    test("POST /student", async () => {
        const res = await request(app).post("/student")
          .send(students[0]).set('Authorization', 'Bearer ' + testUser.accessToken);
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual(students[0].name);
        // studentId = res.body._id; //
        const res2 = await request(app).get("/student")
          .set('Authorization', 'Bearer ' + testUser.accessToken);
        expect(res2.statusCode).toBe(200);
        const data = res2.body;
        expect(data[0].name).toBe(students[0].name);
        expect(data[0]._id).toBe(students[0]._id);
        expect(data[0].age).toBe(students[0].age);
    });

    test("GET /student/:id", async () => {
        const res = await request(app).get("/student/" + students[0]._id)
          .set('Authorization', 'Bearer ' + testUser.accessToken);
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe(students[0].name);
        expect(res.body._id).toBe(students[0]._id);
        expect(res.body.age).toBe(students[0].age);
    });

    test("Fail GET /student/:id", async () => {
        const res = await request(app).get("/student/00000")
          .set('Authorization', 'Bearer ' + testUser.accessToken);
        expect(res.statusCode).toBe(404);
    });



    
});

