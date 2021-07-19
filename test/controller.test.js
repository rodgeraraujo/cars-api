import supertest from 'supertest';
import { expect } from 'chai';

const apitPath = 'http://localhost:3000';
const server = supertest.agent(apitPath);

describe('Test API', () => {
  it('should return a 200 status code', done => {
    server.get('/hearth').expect(200, done);
  });

  it('Should save new car', function (done) {
    const endpoint = '/api/v1/cars';
    const data = {
      license_plate: '4232-sad',
      chassi: '38943749233428237',
      renavam: '34234342434234',
      model: 'Camaro',
      brand: 'Chevrolet',
      year: '2014',
    };
    server
      .post(endpoint)
      .send(data)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.status).to.be.an('number').to.equal(200);
        done();
      });
  });

  it('Should get car', function (done) {
    const endpoint = '/api/v1/cars';

    server
      .get(`${endpoint}/2`)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.status).to.be.an('number').to.equal(200);
        expect(res.body.id).to.equal(2);
        expect(res.body.model).to.equal('911 Carrera');
        expect(res.body.brand).to.equal('Porsche');
        expect(res.body.year).to.equal('2005');
        done();
      });
  });

  it('Should get a list of cars', function (done) {
    const endpoint = '/api/v1/cars';

    server
      .get(endpoint)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.status).to.be.an('number').to.equal(200);
        expect(res.body.length >= 0).to.equal(true);
        done();
      });
  });

  it('Should get a list of cars', function (done) {
    const endpoint = '/api/v1/cars';

    server
      .get(endpoint)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.status).to.be.an('number').to.equal(200);
        expect(res.body.length >= 0).to.equal(true);
        done();
      });
  });

  it('Should update a car by id', function (done) {
    const endpoint = '/api/v1/cars';

    server
      .put(`${endpoint}/2`)
      .send({ license_plate: 'abc-1234' })
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.body.id).to.equal(2);
        expect(res.body.license_plate).to.equal('abc-1234');
        expect(res.body.model).to.equal('911 Carrera');
        expect(res.body.brand).to.equal('Porsche');
        expect(res.body.chassi).to.equal('23122343324344324');
        expect(res.body.renavam).to.equal('32434234234234');
        expect(res.body.year).to.equal('2005');
        done();
      });
  });
});
