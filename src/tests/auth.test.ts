import request from 'supertest';
import appInit from '../App';
import mongoose from 'mongoose';
import { Express } from 'express';

let app: Express;
beforeAll(async () => {
    app = await appInit();
    console.log("beforAll");
});


afterAll(async () => {
    console.log('After all tests')
    await mongoose.connection.close();
});


// const students = [
//     {
//         name: 'John Doe',
//         _id : '12345',
//         age : 22
//     },
//     {
//         name: 'Jane Doe',
//         _id: '12346',
//         age: 23
//     }
// ];

describe("Auth test ", () => {
    test("Post /register", async () => {
        const res = await request(app).post('/auth/register').send(
            {
                email: "test2@gmail.com",
                password: "123456"
            }
        );
        expect(res.statusCode).toBe(200);
    });
});

