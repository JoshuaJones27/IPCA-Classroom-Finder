const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/professor';
let professorA;
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

  const createProfessorA = await app.services.professor.create({
    nome: 'Rodrigo',
    sobrenome: 'Arantes',
    especialidade: 'Analise e Modelacao de Software',
  });

  professorA = { ...createProfessorA[0] };
});

test('Test #1 - Listar os professores', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar professor por ID', () => {
  return request(app).get(`${ROUTE}/${professorA.id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #3 - Apagar professor', () => {
  return app.db('professor').insert({
    nome: 'Rodrigo',
    sobrenome: 'Arantes',
    especialidade: 'Analise e Modelacao de Software',
  }, ['id']).then((result) => request(app).delete(`${ROUTE}/${result[0].id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }));
});
