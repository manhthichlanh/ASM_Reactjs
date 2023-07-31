import session from "express-session";

const configSession = (app) => {
    app.use(session({
        secret: 'my-secret-key',
        resave: false,
        saveUninitialized: true
      }));
}

export default configSession;

