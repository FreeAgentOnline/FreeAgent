const request = require('supertest')
const app = require('../server')

// .set({"Authorization": "Basic YW5uZTphbm5l"})

describe('GET /user', () => {
  test('Should return an array of all users', () => {
    return request(app)
      .get('/api/user')
      .expect(200)
      .then(res => {
        expect(res.body).toBeTruthy()
      })
  })
})

let createdUserId;

describe('POST /user', () => {
  test('Should create a new user', () => {
    return request(app)
      .post('/api/user')
      .type('form')
      .send({
        first_name: 'Test',
        last_name: 'McTesterson',
        username: 'testuser',
        email: 'unique@test.email',
        password: 'securepassword'
      })
      .expect(200)
      .then(res => {
        createdUserId = res.body._id;
        expect(res.body).toHaveProperty('_id')
        expect(res.body._id).toBeTruthy()
        expect(res.body).toHaveProperty('first_name')
        expect(res.body.first_name).toBe('Test')
        expect(res.body).toHaveProperty('last_name')
        expect(res.body.last_name).toBe('McTesterson')
        expect(res.body).toHaveProperty('username')
        expect(res.body.username).toBe('testuser')
        expect(res.body).toHaveProperty('email')
        expect(res.body.email).toBe('unique@test.email')
        expect(res.body).toHaveProperty('password')
        expect(res.body.password).toBeTruthy()
        expect(res.body).toHaveProperty('bio')
        expect(res.body.bio).toBe('')
      })
  })
})

describe('PATCH /user/:_id', () => {
  test('Should update user details', () => {
    return request(app)
      .patch('/api/user/' + createdUserId)
      .type('form')
      .send({
        first_name: 'T.',
        last_name: 'McT.',
        bio: 'Updated biography'
      })
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('_id')
        expect(res.body._id).toBeTruthy()
        expect(res.body).toHaveProperty('first_name')
        expect(res.body.first_name).toBe('T.')
        expect(res.body).toHaveProperty('last_name')
        expect(res.body.last_name).toBe('McT.')
        expect(res.body).toHaveProperty('username')
        expect(res.body.username).toBe('testuser')
        expect(res.body).toHaveProperty('email')
        expect(res.body.email).toBe('unique@test.email')
        expect(res.body).toHaveProperty('password')
        expect(res.body.password).toBeTruthy()
        expect(res.body).toHaveProperty('bio')
        expect(res.body.bio).toBe('Updated biography')
      })
  })
})

describe('DELETE /user/:_id', () => {
  test('Should delete specific user', () => {
    return request(app)
      .delete('/api/user/' + createdUserId)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('n')
        expect(res.body).toHaveProperty('ok')
      })
  })
})

// describe('GET /period/:id', () => {
//   test('Should find information about one period with given id', () => {
//     return request(app)
//       .get('/api/period/59c6bdb6e4af98547c7d15dd')
//       .expect(200)
//       .then(res => {
//         expect(res.body).toHaveProperty('status')
//         expect(res.body.status).toBe('success')
//         expect(res.body).toHaveProperty('data')
//         expect(res.body.data._id).toBeTruthy()
//       })
//   })
// })
//
// describe('POST /period/:id/student', () => {
//   test('Should create a new student in the given period', () => {
//     return request(app)
//       .post('/api/period/59c6bdb6e4af98547c7d15dd/student')
//       .type('form')
//       .send({
//         name: 'Test Student',
//         female: ''
//       })
//       .then(res => {
//         expect(res.body).toHaveProperty('status')
//         expect(res.body.status).toBe('success')
//         expect(res.body).toHaveProperty('data')
//         expect(res.body.data.name).toBeTruthy()
//       })
//   })
// })
// Need to have a student id to delete
// describe('"DELETE"(PUT) /period/:periodId/student/:studentId', () => {
//   test('Should remove student with given id from period student array', () => {
//     return request(app)
//       .put('/api/period/59c6bdb6e4af98547c7d15dd/student')
//   })
// })
