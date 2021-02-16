import mocha from "mocha";
import { assert } from "chai";
import { saveUser } from "../services/employee.js";

describe("emp controller", function () {
  describe("#save()", function () {
    it("should save without error", async function () {
      var user = {
        name: "kishore",
        empId: "20",
        location: "GDV",
        company: "mine",
      };
      const user_ =await saveUser(user);
      assert.notEqual(user_, null);
    });
  });
});
