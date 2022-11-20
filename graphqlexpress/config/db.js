import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;
const DB_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`

export const dbconnect = () => {
    // mongoose.set('useNewUrlParser', true);
    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useCreateIndex', true);
    // mongoose.set('useUnifiedTopology', true);
    // console.log(DB_URL);
    mongoose.connect(DB_URL);

    //Log an error if we fail to connect
    mongoose.connection.on('error', err => {
        console.error(err);
        console.log(
        'MongoDB connection failed: ' + DB_URL
    );

    process.exit();

    });
}


export const dbclose = () => {
    console.log('gghgjggj');
}