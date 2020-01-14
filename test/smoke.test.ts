import { enterpriseCloud } from "../src";

describe("Smoke test", () => {
  it("is a function", () => {
    expect(enterpriseCloud).toBeInstanceOf(Function);
  });

  it("enterpriseCloud.VERSION is set", () => {
    expect(enterpriseCloud.VERSION).toEqual("0.0.0-development");
  });
});
