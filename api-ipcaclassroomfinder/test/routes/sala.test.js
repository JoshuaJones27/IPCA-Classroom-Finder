const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/sala';
let salaA;
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

  const createSalaA = await app.services.sala.create({
    nomeSala: 'Auditorio Antonio Tavares',
    descricao: 'Auditorio da EST',
    localizacao: '41.536902, -8.627616',
    lotacao: '84',
  });

  salaA = { ...createSalaA[0] };
});

test('Test #1 - Listar as salas', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar as salas por ID', () => {
  return request(app).get(`${ROUTE}/${salaA.id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #3 - Apagar sala', () => {
  return app.db('sala').insert({
    nomeSala: 'Auditorio Antonio Tavares',
    descricao: 'Auditorio da EST',
    localizacao: '41.536902, -8.627616',
    lotacao: '84',
  }, ['id']).then((result) => request(app).delete(`${ROUTE}/${result[0].id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }));
});
