const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });

  describe('GET /available_payments', () => {
    it('should return the correct payment methods object', (done) => {
      request(app)
        .get('/available_payments')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with the provided username', (done) => {
      request(app)
        .post('/login')
        .send({ userName: 'Betty' })
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal('Welcome Betty');
          done();
        });
    });

    it('should return a welcome message with "Unknown" if no username is provided', (done) => {
      request(app)
        .post('/login')
        .send({})
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal('Welcome Unknown');
          done();
        });
    });
  });
});
