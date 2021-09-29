let chai = require("chai"),
  expect = chai.expect;
let request = require("request");
let urlBaseAPI = "https://jsonplaceholder.typicode.com";

module.exports = {
  deletePosts(urlVerification, statusCodeDelete, done) {
    request.delete({
      url: `${urlBaseAPI}${urlVerification}`
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(statusCodeDelete);
      done();
    })
  },
}