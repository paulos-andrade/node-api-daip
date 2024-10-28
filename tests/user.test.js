const request = require("supertest")
const app = require("../index")
const reqaddUser = require("./data/user.test.data")

let userId =
    describe("POST /users/createUser", () => {
    test("should create a user", async () => {
        return request(app)
            .post("/users/createUser")
            .send(reqaddUser)
            .expect(201)
            .then(({body})=>{
                userId = body.id
            })
    });
});
describe("GET /users/getAll", () => {
    it("should return all users", async () => {
        return request(app)
            .get("/users/getAll")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});

describe("GET users/getById/:id", () => {
    test('should return one user', async () => {
        return request(app)
            .get(`/users/getById/${userId}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    });
});