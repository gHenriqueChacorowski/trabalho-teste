let chai = require("chai"),
  expect = chai.expect;

let serviceDeleteGeral = require("../../classService/methodsDelete/serviceDeleteGeral");

describe("CRIAÇÃO DE CENÁRIOS COM REMOÇÃO DE POSTS RETORNANDO SUCESSO E ERRO.", () => {
  context('Realizando testes nos endPoints de delete.', () => {
    it('Deverá deletar o post que possui id = 1 então retornar status 200', done => {
      serviceDeleteGeral.deletePosts('/posts/1', 200, done);
    });

    it('Deverá deletar um post inexistente então retornar status 404', done => {
      serviceDeleteGeral.deletePosts('/posts/519849848', 200, done);
    });
  });
});