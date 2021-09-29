let chai = require("chai"),
  expect = chai.expect;
let request = require("request");
let urlBaseAPI = "https://jsonplaceholder.typicode.com";

module.exports = {
  consultListPosts(urlVerification, statusCodeGet, done) {
    request.get({
      url: `${urlBaseAPI}${urlVerification}`
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(statusCodeGet);
      done();
    })
  },
}