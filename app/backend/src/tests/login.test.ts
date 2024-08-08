import * as chai from 'chai';
import * as express from 'express';
import * as sinon from 'sinon';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import loginMiddleware from '../middlewares/loginMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
// @ts-ignore
import chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);

const app = express();
app.use(express.json());

app.post('/login', loginMiddleware, (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Login bem-sucedido' });
});

app.post('/login/role', authMiddleware, (_req: Request, res: Response) => {
  res.status(200).json({ role: 'admin' });
});

describe('Login Middleware', () => {
  it('should return 400 if email is missing', (done) => {
    chai.request(app)
      .post('/login')
      .send({ password: 'password123' })
      .end((err: any, res: any) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('All fields must be filled');
        done();
      });
  });

  it('should return 400 if password is missing', (done) => {
    chai.request(app)
      .post('/login')
      .send({ email: 'user@example.com' })
      .end((err: any, res: any) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('All fields must be filled');
        done();
      });
  });

  it('should return 401 if email is invalid', (done) => {
    chai.request(app)
      .post('/login')
      .send({ email: 'invalid-email', password: 'password123' })
      .end((err: any, res: any) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.equal('Invalid email or password');
        done();
      });
  });

  it('should return 401 if password is invalid', (done) => {
    chai.request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: '123' })
      .end((err: any, res: any) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.equal('Invalid email or password');
        done();
      });
  });

  it('should return 200 if email and password are valid', (done) => {
    chai.request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'password123' })
      .end((err: any, res: any) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Login bem-sucedido');
        done();
      });
  });
});
// describe('Auth Middleware', () => {
//   const jwtSecret = 'jwtsecret';

//   it('should return 401 if token is not provided', (done) => {
//     chai.request(app)
//       .get('/login/role')
//       .end((err: any, res: any) => {
//         expect(res).to.have.status(401);
//         expect(res.body.message).to.equal('Token not found');
//         done();
//       });
//   });

//   it('should return 401 if token is invalid', (done) => {
//     chai.request(app)
//       .get('/login/role')
//       .set('Authorization', 'Bearer invalidtoken')
//       .end((err: any, res: any) => {
//         expect(res).to.have.status(401);
//         expect(res.body.message).to.equal('Token must be a valid token');
//         done();
//       });
//   });

//   it('should return 200 if token is valid', (done) => {
//     const validToken = jwt.sign({ email: 'user@example.com', role: 'admin' }, jwtSecret, { expiresIn: '1h' });

//     chai.request(app)
//       .get('/login/role')
//       .set('Authorization', `Bearer ${validToken}`)
//       .end((err: any, res: any) => {
//         expect(res).to.have.status(200);
//         expect(res.body.role).to.equal('admin');
//         done();
//       });
//   });
// });