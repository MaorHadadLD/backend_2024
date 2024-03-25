import request from 'supertest';
import appInit from '../App';
import mongoose, { set } from 'mongoose';
import { Express } from 'express';
import User from '../models/userModel';

const user = {
    email: "test2@gmail.com",
    password: "123456"
}

let app: Express;
beforeAll(async () => {
    app = await appInit();
    console.log("beforAll");
    await User.deleteMany({email: user.email});
});


afterAll(async () => {
    console.log('After all tests')
    await mongoose.connection.close();
});

describe("Auth test ", () => {
    test("Post /register", async () => {
        const res = await request(app).post('/auth/register').send(user);
        expect(res.statusCode).toBe(200);
    });

    test("Post /login", async () => {
        const res = await request(app).post('/auth/login').send(user);
        expect(res.statusCode).toBe(200);
        console.log(res.body);

        const accessToken = res.body.accessToken;
        const refreshToken = res.body.refreshToken;
        expect(accessToken).toBeNull();
        expect(refreshToken).toBeNull();


        const res2 = await request(app).get('/student').set('Authorization', 'Bearer ' + accessToken);
        expect(res2.statusCode).toBe(200); 

        const fakeToken = accessToken + "0";
        const res3 = await request(app).get('/student').set('Authorization', 'Bearer ' + fakeToken);
        expect(res3.statusCode).not.toBe(200);
    });

    const timeout = (ms: Number) => {
        return new Promise((resolve) => {
            setTimeout(resolve, 6000);
        });
    }

    jest.setTimeout(10000);

    test("refresh token", async () => {
        const res = await request(app).post('/auth/login').send(user);
        expect(res.statusCode).toBe(200);
        console.log(res.body);

        //const accessToken = res.body.accessToken;
        const refreshToken = res.body.refreshToken;

        const res2 = await request(app).get("/auth/refresh")
        .set('Authorization', 'Bearer ' + refreshToken)
        .send();
        expect(res2.statusCode).toBe(200);

        const accessToken2 = res2.body.accessToken;
        const refreshToken2 = res2.body.refreshToken;
        expect(accessToken2).toBeNull();
        expect(refreshToken2).toBeNull();

        const res3 = await request(app).get('/student')
        .set('Authorization', 'Bearer ' + accessToken2);
        expect(res3.statusCode).toBe(200); 

        //sleep for 6s
        await timeout(6000);
        const res4 = await request(app).get('/student')
        .set('Authorization', 'Bearer ' + accessToken2);
        expect(res4.statusCode).not.toBe(200); 
    });
       
});



