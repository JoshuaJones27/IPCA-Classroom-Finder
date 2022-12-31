const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/horario';
let horarioA;
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

  const createHorarioA = await app.services.horario.create({
    horaInicio: '11:00:00',
    horaFim: '13:00:00',
  });

  horarioA = { ...createHorarioA[0] };
});

test('Test #1 - Listar os horarios', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar os horarios por ID', () => {
  return request(app).get(`${ROUTE}/${horarioA.id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #3 - Apagar horario', () => {
  return app.db('horario').insert({
    horaInicio: '11:00:00',
    horaFim: '13:00:00',
  }, ['id']).then((result) => request(app).delete(`${ROUTE}/${result[0].id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }));
});
