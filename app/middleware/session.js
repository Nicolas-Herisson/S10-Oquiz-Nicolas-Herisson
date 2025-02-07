import session from 'express-session';

export const setupSession = session({ 
    secret: 'coucouCKi?', 
    resave: true, 
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600000 }});