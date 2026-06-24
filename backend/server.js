const  http = require('http');
const  app = require('./app');

const { connect } = require('http2');


const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})