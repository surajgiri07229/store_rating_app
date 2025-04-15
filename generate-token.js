const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { id: 1, role: 'ADMIN' },
  'supersecret123',       
  { expiresIn: '1d' }
);

console.log('Generated Token:', token);
