import cookieParser from "cookie-parser";

const configCookie = (app) => {
  app.use(cookieParser())
}

export default configCookie;