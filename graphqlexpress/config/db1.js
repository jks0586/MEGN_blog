import mongoose, { connect } from 'mongoose';


const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;

const DB_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
export  const dbconnect=DB_URL => {

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
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

export  const close=() => {
            mongoose.connection.close();
        }

// module.exports = {
//     connect: DB_URL => {

//         mongoose.set('useNewUrlParser', true);
//         mongoose.set('useFindAndModify', false);
//         mongoose.set('useCreateIndex', true);
//         mongoose.set('useUnifiedTopology', true);
//         mongoose.connect(DB_URL);

//         //Log an error if we fail to connect
//         mongoose.connection.on('error', err => {
//             console.error(err);
//             console.log(
//             'MongoDB connection failed: ' + DB_URL
//         );

//         process.exit();

//         });
//     },

//     //close the connection
//     close: () => {
//         mongoose.connection.close();
//     },
//     dbconnect:()=>{
//         self:connect(DB_URL);
//     }
// };