const request = require('supertest')
const app = require('../server')

describe('GET /', () => {
  test('Should send object sucessfully', () => {
    return request(app)
      .get('/api')
      .expect(200)
      // .set({"Authorization": "Basic YW5uZTphbm5l"})
      .then(res => {
        expect(res.body).toHaveProperty('status')
        expect(res.body.status).toBe('success')
        expect(res.body).toHaveProperty('data')
        expect(res.body.data).toBeTruthy()
      })
  })
})

describe('GET /period/:id', () => {
  test('Should find information about one period with given id', () => {
    return request(app)
      .get('/api/period/59c6bdb6e4af98547c7d15dd')
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('status')
        expect(res.body.status).toBe('success')
        expect(res.body).toHaveProperty('data')
        expect(res.body.data._id).toBeTruthy()
      })
  })
})

describe('POST /period/:id/student', () => {
  test('Should create a new student in the given period', () => {
    return request(app)
      .post('/api/period/59c6bdb6e4af98547c7d15dd/student')
      .type('form')
      .send({
        name: 'Test Student',
        female: ''
      })
      .then(res => {
        expect(res.body).toHaveProperty('status')
        expect(res.body.status).toBe('success')
        expect(res.body).toHaveProperty('data')
        expect(res.body.data.name).toBeTruthy()
      })
  })
})
// Need to have a student id to delete
// describe('"DELETE"(PUT) /period/:periodId/student/:studentId', () => {
//   test('Should remove student with given id from period student array', () => {
//     return request(app)
//       .put('/api/period/59c6bdb6e4af98547c7d15dd/student')
//   })
// })
