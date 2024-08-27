const app = require('../../app')
const supertest = require('supertest')
const req = supertest(app)
//const Note = require("../../models/note")

// Integration Tests programmatically test the API used by the application

jest.setTimeout(20000); //increase timeout cause its maxing out (or there is something else)

describe('Add Note', () => {
    it('Should add a new note and redirect to login', async () => {

        const res = await req
            .post('/')
            .send({
                title: "[INTEGRATION TEST] New Note",
                description: "This note was created at " + new Date(),
            })

        expect(res.statusCode).toEqual(200)
        expect(res.headers['location']).toEqual('/')
    })
})
