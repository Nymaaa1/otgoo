const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(compression());
app.use(cors());
app.options('*', cors());
const knex = require('knex')(require("./knex"));

let server;

// knex
//     .raw('SELECT 1+1 as result')
//     .then(() => {
//         console.log('MySQL connected');
//         server = app.listen(5000, () => {
//             console.log(`Listening to port 5000`);
//         });
//     })
//     .catch((error) => {
//         console.log('MySQL connection error:', error);
//     });
server = app.listen(5000, () => {
    console.log(`Listening to port 5000`);
});
app.use('/v1', routes);

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.log('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    console.log(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
        server.close();
    }
});
