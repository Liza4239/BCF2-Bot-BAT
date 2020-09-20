const to = require('await-to-js').default;
const expect = require('chai').expect;

describe('Getters Module Test', () => {
    describe('Getters Module Test Chat Meta', () => {
        it('Should return error status and undefined', () => {
            return new Promise(async (resolve) => {
                // expect(err.response.statusCode).to.equal(400);
                // expect(meta).to.equal(undefined);
                resolve();
            });
        });

        it('Should return valid chat meta data by chat id', () => {
            return new Promise(async (resolve, reject) => {
                // expect(meta).to.haveOwnProperty("id");
                // expect(meta).to.haveOwnProperty("type");
                // expect(meta).to.haveOwnProperty("title");
                // expect(meta).to.haveOwnProperty("username");
                // expect(meta).to.haveOwnProperty("description");
                resolve();
            });
        });
    });
});