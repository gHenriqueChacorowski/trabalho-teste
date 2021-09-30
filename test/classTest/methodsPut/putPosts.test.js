let chai = require("chai"),
  expect = chai.expect;

let servicePutGeral = require("../../classService/methodsPut/servicePutGeral");

let data = require("../../../mocks/cadastros/cadastroPost.json");

describe("CRIAÇÃO DE CENÁRIOS COM UPDATES DE POSTS RETORNANDO SUCESSO E ERRO.", () => {
  context('Realizando testes nos endPoints de put.', () => {
    it('Deverá atualizar o title do post que possui id = 1 então retornar status 200', done => {
      data.title = "title updated";
      data.body = "body updated";
      servicePutGeral.updatePost('/posts/1', data, 200, done);
    });

    it('Deverá tentar atualizar o title de um post inexistente então retornar status 500', done => {
      data.title = "title updated";
      data.body = "body updated";
      servicePutGeral.updatePost('/posts/101', data, 500, done);
    });
  });
});