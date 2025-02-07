import session from 'express-session';

export const setupSession = session({ 
    secret: 'coucouCKi?', 
    resave: true, 
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 3600000 }});