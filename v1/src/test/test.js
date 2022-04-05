const request = require("supertest");
const app = require("../app");
const { BilgilerRoutes } = require("../api-routes");
const { closeConnection } = require("../loaders/db");
const config = require("../config");
const loaders = require("../loaders");
const Bilgi = require("../models/Bilgi")

describe("Uygulama Testi", () => {
  beforeAll(() => {
    config();
    loaders();

  });

  afterAll(() => {
    closeConnection();
  });

  app.use(BilgilerRoutes);

  test("/test/testBilgiler GET test", async () => {
    const response = await request(app).get("/test/testBilgiler");
    expect(response.statusCode).toBe(200);
  });
  test("/test/bilgiekle ", async () => {
    const yenidüzenlibilgi = {
      bilgiMetni: "yeni oluşturulmuş test metini",
      yapilanYorumlar: [],
      begeniler: [],
    }
    const response = await request(app).post("/test/bilgiekle").send(yenidüzenlibilgi);
    expect(response.statusCode).toBe(200);
  });
});


