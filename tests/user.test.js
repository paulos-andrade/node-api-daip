const request = require("supertest")
const app = require("../index")
const reqaddUser = require("./data/user.test.data")

// lets create the base used that will be used in all subsequent tests
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
        const res = await request(app)
            .get("/users/getAll")
            .expect("Content-Type", /json/)
            .expect(200);
        expect(res.statusCode).toBe(200);
    });
});

describe("GET /users/getById/:id", () => {
    it("should return one user", async () => {
        const res = await request(app)
            .get(`/users/getById/${userId}`)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(res.body).toHaveProperty("id", userId);
    });
});

describe("PUT /updateUser/:id", () => {
    it("should return an updated user", async () => {
        const updatedTestUserData = {
            name: "New Name",
            email: "newemail@test.com"
        };
        const res = await request(app)
            .put(`/users/updateUser/${userId}`)
            .send(updatedTestUserData)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(res.body.data).toHaveProperty("id", userId);
        expect(res.body.data).toHaveProperty("name", updatedTestUserData.name);
        expect(res.body.data).toHaveProperty("email", updatedTestUserData.email);
    });
});

describe("DELETE /users/deleteUser/:id", () => {
    it("should delete one user", async () => {
        const res = await request(app)
            .del(`/users/deleteUser/${userId}`)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });
});