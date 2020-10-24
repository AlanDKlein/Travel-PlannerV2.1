import 'regenerator-runtime/runtime'
const app = require('../src/server/server.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('gets the "keys" endpoint', async done => {
    const response = await request.get('/keys')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("PixKey")
    done()
  })