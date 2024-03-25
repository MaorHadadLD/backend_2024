import request from 'supertest';
import appInit from '../App';
import mongoose from 'mongoose';
import Post from '../models/postModel';
import { Express } from 'express';
import User from '../models/userModel';

let app: Express;


const testUser = {
    email: "post@gmail.com",
    password: "123456",
    accessToken: String ? String : null
}


beforeAll(async () => {
    app = await appInit();
    console.log("beforAll");
    await Post.deleteMany();
    await User.deleteMany({ email: testUser.email });
    await request(app).post('/auth/register').send(testUser);
    const res = await request(app).post('/auth/login').send(testUser);
    testUser.accessToken = res.body.accessToken;
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

describe("Student ", () => {
    test("Get /post - empty collection", async () => {
        const res = await request(app).get('/post');
        expect(res.statusCode).toBe(200);
        const data = res.body;
        expect(data).toEqual([]);
    });

    const post = {
        title: 'Post 1',
        content: 'Content 1',
        owner: 'Owner 1'
    }

    test("Post /post - empty collection", async () => {
        const res = await request(app).post('/post')
            .set('Authorization', 'Bearer ' + testUser.accessToken)
            .send(post);
        expect(res.statusCode).toBe(201);
    });
});

