import pg from 'pg';
const {Client} = pg;

const client = new Client(`postgresql://${process.env.DBUSER}:${process.env.DBPWD}@localhost/${process.env.DB}`);

client.connect();

export default client;
