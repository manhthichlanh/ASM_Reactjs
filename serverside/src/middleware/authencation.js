
import { extractToken } from "../configs/jwt";
const authencation = (req, res, next) => {
    // const { token } = req.cookies.user;
    const token = req.cookies.refreshToken;

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const data = extractToken(token)
        req.userId = data._id;
        req.userRole = data.role;
        req.userActive = data.active;
        return next();
    } catch (error) {
        return console.log(error)
        // return res.sendStatus(401);
    }
};

export default authencation;