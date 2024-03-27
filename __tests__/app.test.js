const request = require("supertest");
const app = require("../bmi-calculator");

describe("POST /calculate", () => {
  it("should return 400 if weight or height is not provided", async () => {
    const response = await request(app).post("/calculate").send({});
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
  });

  it("should calculate BMI correctly", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ weight: 70, height: 1.75 });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("bmi", 22.857142857142858); // Change the expected value as per your calculation
  });
});
