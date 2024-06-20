import express from 'express';
import connection from '../Db.js';

const Configrouter = express.Router();

const errorHandler = (res, err) => {
    console.error(err);
    return res.status(500).send('Internal Server Error');
};

Configrouter.get('/', (req, res) => {
    var flag;

    connection.execute('CREATE DATABASE IF NOT EXISTS projectbuilder;', (err) => {
        if (err) {
            return errorHandler(res, err);
        }
        console.log('Database "projectbuilder" created or already exists.');});

    connection.execute(`CREATE TABLE IF NOT EXISTS projectbuilder.User (\
        uid INT PRIMARY KEY,\
        name VARCHAR(200),\
        phone_num VARCHAR(20),\
        address VARCHAR(200),\
        email VARCHAR(100),\
        paaswd VARCHAR(20)
    );`, (err) => {
        if (err) {
            return errorHandler(res, err);
        }
    
    });
    
    connection.execute(`CREATE TABLE IF NOT EXISTS projectbuilder.projects (\
        pno int primary key ,\
        pname varchar(100),\
        tech int,\
        description varchar(200),\
        type_ varchar(100)
    );`, (err) => {
        if (err) {
            return errorHandler(res, err);
        }
    });

    connection.execute(`CREATE TABLE IF NOT EXISTS projectbuilder.Works (\
        uid INT , \
        pno int ,\
        Deadline date,
        constraint pk_work \
        primary key(uid, pno),
        constraint fk_uid_work
        foreign key(uid)
        references user(uid));`, (err) => {
        if (err) {
            return errorHandler(res, err);
        }
        
    });

    connection.execute(`CREATE TABLE IF NOT EXISTS projectbuilder.Query (\
        qid INT PRIMARY KEY,\
        uid int,\
        pid int, \
        pname VARCHAR(200),\
        type varchar(100),\
        tech int, \
        status varchar(200),
        constraint fk_query
        foreign key(uid)
        references user(uid)
    );`, (err) => {
        if (err) {
            return errorHandler(res, err);
        }
        
    });

    connection.execute(`CREATE TABLE IF NOT EXISTS projectbuilder.Testimonals (\
        uid INT PRIMARY KEY,\
        star_rating int,\
        review varchar(200),
        constraint fk_testi
        foreign key(uid)
        references user(uid)
    );`, (err) => {
        if (err) {
            return errorHandler(res, err);
        }
        
    });
    res.sendStatus(200)
});
    
export default Configrouter;