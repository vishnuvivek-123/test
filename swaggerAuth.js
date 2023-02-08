import basicAuth from 'express-basic-auth';

function swaggerAuth(req, res, next) {
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    basicAuth({
      users: { dev: process.env.SWAGGER_PASSWORD },
      challenge: true,
    })(req, res, next);
  } else {
    next();
  }
}

export default swaggerAuth;
