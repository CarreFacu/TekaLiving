module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    SECRETJWT: process.env.SECRETJWT || 'secret',
    PORT: process.env.PORT || '8080',
    SESSION_SECRET: process.env.SESSION_SECRET || 'secret',

    MONGO_URL: 'mongodb://localhost:27017/tekaLiving' ,
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL,
    MONGO_DBNAME: process.env.MONGO_DBNAME,


    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,

    TWILIO_ACCOUNT_SID: process.env.ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.AUTH_TOKEN,
    TWILIO_WHATSAPP: process.env.WHATSAPP,
    TWILIO_NUMBER: process.env.NUMBER,
    TWILIO_ADMIN_NUMBER: process.env.ADMIN_NUMBER,
}