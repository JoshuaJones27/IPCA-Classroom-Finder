const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/rota';
let rotaA;
let user;

beforeAll(async () => {

  const createUser = await app.services.utilizador.create({
    nome: 'Alberto',
    sobrenome: 'Duraes',
    email: 'aduraes@ipca.pt',
    palavraPasse: 'adura123_asd',
  });

  user = { ...createUser[0] };
  user.token = jwt.encode(user, secret);

  const createRotaA = await app.services.rota.create({
    distanciaRota: '12',
    coordenadaInicio: '41.544823, -8.612043',
    coordenadaFim: '41.536744, -8.627160',
  });

  rotaA = { ...createRotaA[0] };
});

test('Test #1 - Listar as rotas', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar as rotas por ID', () => {
  return request(app).get(`${ROUTE}/${rotaA.id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #3 - Apagar rota', () => {
  return app.db('rota').insert({
    distanciaRota: '12',
    coordenadaInicio: '41.544823, -8.612043',
    coordenadaFim: '41.536744, -8.627160',
  }, ['id']).then((result) => request(app).delete(`${ROUTE}/${result[0].id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }));
});
