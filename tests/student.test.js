beforeAll((done) => {
    console.log('Before all tests')
    done();
});

afterAll((done) => {
    console.log('After all tests')
    done();
});

describe("Student tests", () => {
    test("Test Student get all", (done) => {
        console.log('Test Student get all');
        done();
    });
});  