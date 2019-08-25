import assert from 'assert'
import getData from '../get-data'
import nock from 'nock'

describe('Get Data', function () {
    it('Should return undefined when no url provided', async function () {
        const data = await getData()

        assert.strictEqual(data, undefined)
    })

    it('Should return expected data', async function () {
        nock('http://test.com')
            .get('/carousel')
            .reply(200, {
                data: [{
                    title: 'Sydney',
                    img: 'https://placeimg.com/640/480/animals',
                    location: 'Sydney, NSW'
                }]
            })

        const data = await getData('http://test.com/carousel')
        const expectedResponse = [{
            title: 'Sydney',
            img: 'https://placeimg.com/640/480/animals',
            location: 'Sydney, NSW'
        }]

        assert.deepStrictEqual(data, expectedResponse)
        nock.cleanAll()
    })
})
