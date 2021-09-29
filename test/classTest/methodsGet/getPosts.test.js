let chai = require("chai"),
  expect = chai.expect;

let serviceGetGeral = require("../../classService/methodsGet/serviceGetGeral");

describe('CRIAÇÃO DE CENÁRIOS COM CONSULTA GET NOS POSTS E COMMENTS RETORNANDO SUCESSO E ERRO.', () => {
  context('Realizando testes nos endPoints de get.', () => {
    it('Deverá listar todos os posts cadastrados então retornar status 200', done => {
      serviceGetGeral.consultListPosts("/posts", 200, done);
    });

    it('Deverá listar o post que possui id = 1 então retornar status 200', done => {
      serviceGetGeral.consultListPosts("/posts/1", 200, done);
    });

    it('Deverá listar todos os comentários do post que possui id = 1 então retornar status 200', done => {
      serviceGetGeral.consultListPosts("/posts/1/comments", 200, done);
    });

    it('Deverá listar todos os comentários do post que possui id = 1 então retornar status 200', done => {
      serviceGetGeral.consultListPosts("/comments?postId=1", 200, done);
    });

    it('Deverá dar erro ao listar os posts passando um id inválido então retornar status 404', done => {
      serviceGetGeral.consultListPosts("/posts/101", 404, done);
    });
  });
});