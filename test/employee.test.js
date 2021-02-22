import { getAllEmp } from "../services/employee.js";
import server from "../index.js";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const user = {
  name: "xyz",
  empId: "20",
  location: "GDV",
  company: "mine",
};

describe("Employee!", () => {
  it("get employee endpoint", (done) => {
    const userId = 1;
    chai
      .request(server)
      .get(`/emp?userId=${userId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("save employee endpoint", (done) => {
    chai
      .request(server)
      .post(`/emp`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });

  it("delete employee endpoint", async () => {
    const users = await getAllEmp();
    const userId = users.pop().id;
    chai
      .request(server)
      .delete(`/emp?userId=${userId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
      });
  });

  it("get all employees endpoint", (done) => {
    chai
      .request(server)
      .get(`/emp/all`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

server.close();

/* describe("emp controller", function () {
  describe("#save()", function () {
    it("should save without error", async function () {
      const user_ = await saveEmp(user);
      assert.notEqual(user_, null);
    });
  });
});

 */

/* describe("Server!", () => {
  it("welcomes user to the api", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
}); */
