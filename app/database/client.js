import "dotenv/config";
import pg from 'pg';
const {Client} = pg;

const client = new Client(`postgresql://${process.env.DBUSER}:${process.env.DBPWD}@localhost/${process.env.DB}`);
// const client = new Client(`postgresql://oquiz:oquiz@localhost/oquiz`);

client.connect();

export default client;
