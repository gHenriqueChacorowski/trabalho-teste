let chai = require("chai"),
  expect = chai.expect;
let request = require("request");
let urlBaseAPI = "https://jsonplaceholder.typicode.com";

module.exports = {
  updatePost(urlVerification, newData, statusCodePut, done) {
    request.put({
      url: `${urlBaseAPI}${urlVerification}`,
      body: JSON.stringify(newData)
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(statusCodePut);
      done();
    })
  }
}