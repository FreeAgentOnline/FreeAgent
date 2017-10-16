const request = require('supertest')
const app = require('../server')

// .set({"Authorization": "Basic YW5uZTphbm5l"})

// describe('GET /meet', () => {
//   test('Should display meets', () => {
//     return request(app)
//       .get('/api/user')
//       .expect(200)
//       .then(res => {
//         expect(res.body).toBeTruthy()
//       })
//   })
// })


let createdMeetId;

describe('POST /meet', () => {
  test('Should create a new meet', () => {
    return request(app)
      .post('/api/meet')
      .type('form')
      .send({
          name : 'sampleMEET',
          date_start : '2017-03-16T04:00:00.000Z',
          date_end : '2017-03-18T04:00:00.000Z',
          location_name : 'blah',
          street : 'blah',
          city : 'Somewhere',
          state : 'PD',
          country : 'USO',
          zip : 'blah',
          cost : 'blah',
          url : 'http://google.com'
      })
      .expect(200)
      .then(res => {
        createdMeetId = res.body._id;
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('date_start')
        expect(res.body).toHaveProperty('date_end')
        expect(res.body).toHaveProperty('country')


      })
  })
})

// describe('PATCH /user/:_id', () => {
//   test('Should update user details', () => {
//     return request(app)
//       .patch('/api/user/' + createdUserId)
//       .type('form')
//       .send({
//         first_name: 'T.',
//         last_name: 'T.',
//         bio: 'Updated biography'
//       })
//       .expect(200)
//       .then(res => {
//         expect(res.body).toHaveProperty('_id')
//         expect(res.body._id).toBeTruthy()
//         expect(res.body).toHaveProperty('first_name')
//
//       })
//   })
// })

describe('DELETE /meet/:_id', () => {
  test('should delete specified meet by id', () => {
    return request(app)
      .delete('/api/meet/' + createdMeetId)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('n')
        expect(res.body).toHaveProperty('ok')
      })
  })
})
