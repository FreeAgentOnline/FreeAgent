const request = require('supertest')
const app = require('../server')

// .set({"Authorization": "Basic YW5uZTphbm5l"})

let userId = '59e2c1c519681f192af05082';

describe('GET /result', () => {
  test('Should return an array of all results', () => {
    return request(app)
      .get('/api/result')
      .expect(200)
      .then(res => {
        expect(res.body).toBeTruthy()
      })
  })
})

let createdResultId;

describe('POST /result/user/:userId', () => {
  test('Should create a new result', () => {
    return request(app)
      .post('/api/result/user/' + userId)
      .type('form')
      .send({
        event: 'Event',
        measurement: 'Distance',
        unit: 'm',
        date: '10/16/2017',
        performance: 14.02,
        location: '',
        reference: ''
      })
      .expect(200)
      .then(res => {
        createdResultId = res.body._id;
        expect(res.body).toHaveProperty('_id')
        expect(res.body._id).toBeTruthy()
        expect(res.body).toHaveProperty('userId')
        expect(res.body.userId).toBe(userId)
        expect(res.body).toHaveProperty('event')
        expect(res.body.event).toBe('Event')
        expect(res.body).toHaveProperty('measurement')
        expect(res.body.measurement).toBe('Distance')
        expect(res.body).toHaveProperty('unit')
        expect(res.body.unit).toBe('m')
        expect(res.body).toHaveProperty('date')
        expect(res.body.date).toBe('10/16/2017')
        expect(res.body).toHaveProperty('performance')
        expect(res.body.performance).toBe(14.02)
        expect(res.body).toHaveProperty('location')
        expect(res.body.location).toBe('')
        expect(res.body).toHaveProperty('reference')
        expect(res.body.reference).toBe('')
      })
  })
})

describe('GET /result/:_id', () => {
  test('Should pull specific result', () => {
    return request(app)
      .get('/api/result/' + createdResultId)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('_id')
        expect(res.body._id).toBe(createdResultId)
        expect(res.body).toHaveProperty('userId')
        expect(res.body.userId).toBe(userId)
        expect(res.body).toHaveProperty('event')
        expect(res.body.event).toBe('Event')
        expect(res.body).toHaveProperty('measurement')
        expect(res.body.measurement).toBe('Distance')
        expect(res.body).toHaveProperty('unit')
        expect(res.body.unit).toBe('m')
        expect(res.body).toHaveProperty('date')
        expect(res.body.date).toBe('10/16/2017')
        expect(res.body).toHaveProperty('performance')
        expect(res.body.performance).toBe(14.02)
        expect(res.body).toHaveProperty('location')
        expect(res.body.location).toBe('')
        expect(res.body).toHaveProperty('reference')
        expect(res.body.reference).toBe('')
      })
  })
})

describe('PATCH /result/:_id', () => {
  test('Should update result details', () => {
    return request(app)
      .patch('/api/result/' + createdResultId)
      .type('form')
      .send({
        event: 'Event',
        measurement: 'Distance',
        unit: 'm',
        date: '10/16/2017',
        performance: 14.02,
        location: 'Atlanta, GA',
        reference: 'http://test.com'
      })
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('_id')
        expect(res.body._id).toBe(createdResultId)
        expect(res.body).toHaveProperty('userId')
        expect(res.body.userId).toBe(userId)
        expect(res.body).toHaveProperty('event')
        expect(res.body.event).toBe('Event')
        expect(res.body).toHaveProperty('measurement')
        expect(res.body.measurement).toBe('Distance')
        expect(res.body).toHaveProperty('unit')
        expect(res.body.unit).toBe('m')
        expect(res.body).toHaveProperty('date')
        expect(res.body.date).toBe('10/16/2017')
        expect(res.body).toHaveProperty('performance')
        expect(res.body.performance).toBe(14.02)
        expect(res.body).toHaveProperty('location')
        expect(res.body.location).toBe('Atlanta, GA')
        expect(res.body).toHaveProperty('reference')
        expect(res.body.reference).toBe('http://test.com')
      })
  })
})

describe('DELETE /result/:_id', () => {
  test('Should delete specific result', () => {
    return request(app)
      .delete('/api/result/' + createdResultId)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('n')
        expect(res.body).toHaveProperty('ok')
      })
  })
})
