const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/utilizador';
let userA;

beforeAll(async () => {
  const createUserA = await app.services.utilizador.create({
    nome: 'Alberto',
    sobrenome: 'Duraes',
    email: 'aduraes@ipca.pt',
    palavraPasse: 'adura123_asd',
  });

  userA = { ...createUserA[0] };
  userA.token = jwt.encode(userA, secret);
});

test('Test #1 - Listar os utilizadores', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${userA.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar utilizador por ID', () => {
  return request(app).get(`${ROUTE}/${userA.idUtilizador}`)
    .set('authorization', `bearer ${userA.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #1.2 - Listar os utilizadores por nome', () => {
  return request(app).get(`${ROUTE}/${userA.nome}`)
    .set('authorization', `bearer ${userA.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #2 - Atualizar dados de um utilizador', () => {
  return app.db('utilizador').update({
    nome: 'Alberto',
    sobrenome: 'Duraes',
    email: 'aduraes@ipca.com',
    palavraPasse: 'adura123_asd',
  }, ['idUtilizador']).then((result) => request(app).put(`${ROUTE}/${result[0]}`)
    .set('authorization', `bearer ${userA.token}`)
    .send({ nome: 'User Updated' })
    .then((res) => {
      expect(res.status).toBe(204);
      expect(res.body[0].nome).toBe('User Updated');
    }));
});

test('Test #3 - Apagar utilizador', () => {
  return app.db('utilizador').insert({
    nome: 'Alberto',
    sobrenome: 'Duraes',
    email: 'aduraes@ipca.com',
    palavraPasse: 'adura123_asd',
  }, ['idUtilizador']).then((result) =>{
    request(app).delete(`${ROUTE}/${result[0]}`)
    .set('authorization', `bearer ${userA.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }
    );
  })
});
