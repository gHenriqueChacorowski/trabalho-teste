let chai = require("chai"),
  expect = chai.expect;
let request = require("request");
let urlBaseAPI = "https://jsonplaceholder.typicode.com";

module.exports = {
  createPost(urlVerification, data, statusCodePost, done) {
    request.post({
      url: `${urlBaseAPI}${urlVerification}`,
      body: JSON.stringify(data)
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(statusCodePost);
      done();
    })
  }
}