const app = require('./app');

const port = process.env.PORT || 3000;
const host = '127.0.0.1';

app.listen(port, host, () => console.log(`Server is Running! ${port}, Hosted in ${host}`));
