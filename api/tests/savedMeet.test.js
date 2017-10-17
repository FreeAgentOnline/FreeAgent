const request = require('supertest')
const app = require('../server')

// .set({"Authorization": "Basic YW5uZTphbm5l"})

let userId = '59e2c1c519681f192af05082';
let meetId = '59e2c1c519681f192af0MEET';

describe('GET /meet/save', () => {
  test('Should return an array of all saved Meets', () => {
    return request(app)
      .get('/api/meet/save')
      .expect(200)
      .then(res => {
        expect(res.body).toBeTruthy()
      })
  })
})

let createdSaveId;

describe('POST /meet/:meetId/save/user/:userId', () => {
  test('Should create a new save', () => {
    return request(app)
      .post('/api/meet/' + meetId + '/save/user/' + userId)
      .type('form')
      .send({
        name: 'Test meet',
        date_start: '10/16/2017',
        date_end: '10/17/2017',
        country: 'TST'
      })
      .expect(200)
      .then(res => {
        createdSaveId = res.body._id;
        expect(res.body).toHaveProperty('_id')
        expect(res.body._id).toBeTruthy()
        expect(res.body).toHaveProperty('userId')
        expect(res.body.userId).toBe(userId)
        expect(res.body).toHaveProperty('meetId')
        expect(res.body.meetId).toBe(meetId)
        expect(res.body).toHaveProperty('name')
        expect(res.body.name).toBe('Test meet')
        expect(res.body).toHaveProperty('date_start')
        expect(res.body.date_start).toBe('10/16/2017')
        expect(res.body).toHaveProperty('date_end')
        expect(res.body.date_end).toBe('10/17/2017')
        expect(res.body).toHaveProperty('isScheduled')
        expect(res.body.isScheduled).toBe(false)
        expect(res.body).toHaveProperty('location_name')
        expect(res.body).toHaveProperty('street')
        expect(res.body).toHaveProperty('city')
        expect(res.body).toHaveProperty('state')
        expect(res.body).toHaveProperty('zip')
        expect(res.body).toHaveProperty('cost')
        expect(res.body).toHaveProperty('url')
      })
  })
})

describe('GET /meet/save/user/:userId', () => {
  test('Should return all saved events for given user', () => {
    return request(app)
      .get('/api/meet/save/user/' + userId)
      .expect(200)
      .then(res => {
        expect(res.body).toBeTruthy()
      })
  })
})

describe('PATCH /meet/save/:saveId 1', () => {
  test('Should set isScheduled to be true on given save', () => {
    return request(app)
      .patch('/api/meet/save/' + createdSaveId)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('isScheduled')
        expect(res.body.isScheduled).toBe(true)
      })
  })
})

describe('PATCH /meet/save/:saveId 2', () => {
  test('Should set isScheduled to be false on given save', () => {
    return request(app)
      .patch('/api/meet/save/' + createdSaveId)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('isScheduled')
        expect(res.body.isScheduled).toBe(false)
      })
  })
})

describe('DELETE /meet/save/:saveId', () => {
  test('Should delete specific save', () => {
    return request(app)
      .delete('/api/meet/save/' + createdSaveId)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveProperty('n')
        expect(res.body).toHaveProperty('ok')
      })
  })
})
