const request = require('supertest')
const app = require('../server')


describe('GET /meet', () => {
  test('Should display meets', () => {
    return request(app)
      .get('/api/meet')
      .expect(200)
      .then(res => {
        expect(res.body).toBeTruthy()
      })
  })
})


let createdMeetId;
let newMeetId = "1234567890098765432asdfghjkjhgfd"

describe('POST /meet', () => {
  test('Should create a new meet', () => {
    return request(app)
      .post('/api/meet')
      .type('form')
      .send({
          name: 'sampleMEET',
          date_start: '2017-03-16T04:00:00.000Z',
          date_end: '2017-03-18T04:00:00.000Z',
          location_name: 'blah',
          street: 'blah',
          city: 'Somewhere',
          state: 'PD',
          country: 'USO',
          zip: 'blah',
          cost: 20,
          url: 'http://google.com'
      })
      .expect(200)
      .then(res => {
        createdMeetId = res.body._id;
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('date_start')
        expect(res.body).toHaveProperty('date_end')
        expect(res.body).toHaveProperty('country')
        expect(res.body).toHaveProperty('location_name')
        expect(res.body).toHaveProperty('state')
        expect(res.body).toHaveProperty('cost')
        expect(res.body).toHaveProperty('city')
        expect(res.body).toHaveProperty('street')
        expect(res.body).toHaveProperty('zip')
        expect(res.body).toHaveProperty('url')

        })
  })
})

describe('GET /meet/:id', () => {
  test('Should display specific meet with specified id', () => {
    return request(app)
      .get('/api/meet/' + createdMeetId)
      .expect(200)
      .then(res => {
        expect(res.body).toBeTruthy()
        expect(res.body._id).toBe(createdMeetId)

      })
  })
})
console.log("this is the createdMeetId: ", createdMeetId);

describe('PUT /meet/:id', () => {
  test('Should update meet details', () => {
    return request(app)
      .put('/api/meet/' + createdMeetId)
      .type('form')
      .send({
          name: 'change1',
          date_start: '2018-03-16T04:00:00.000Z',
          date_end: '2018-03-18T04:00:00.000Z',
          location_name: 'blah',
          street: 'blah',
          city: 'Somewhere',
          state: 'PD',
          country: 'USO',
          zip: 'blah',
          cost: 30,
          url: 'http://yahoo.com'
      })
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty("n")
        expect(res.body).toHaveProperty("ok")
        expect(res.body).toHaveProperty("nModified")
        expect(res.body.n).toBe(1)
        expect(res.body.ok).toBe(1)
        expect(res.body.nModified).toBe(1)





      })
  })
})

describe('DELETE /meet/:id', () => {
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
