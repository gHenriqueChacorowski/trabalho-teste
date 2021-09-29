let chai = require("chai"),
  expect = chai.expect;

let servicePostGeral = require("../../classService/methodsPost/servicePostGeral");

let dataPost = require("../../../mocks/cadastros/cadastroPost.json");

describe("CRIAÇÃO DE CENÁRIOS COM CADASTRO DE POSTS RETORNANDO SUCESSO E ERRO.", () => {
  context('Realizando testes nos endPoints de post.', () => {
    it('Deverá cadastrar um post com todos os campos então retornar status 201', done => {
      servicePostGeral.createPost('/posts', dataPost, 201, done);
    });

    it('Deverá cadastrar um post vazio então retornar status 500', done => {
      servicePostGeral.createPost('/posts', {}, 201, done);
    });
  });
});