import jwt from 'jsonwebtoken';
import { option } from "../SSL";
import moment from 'moment';
const geneToken = (data,expiresIn) => {

    const jwtBearerToken = jwt.sign(data, option.key, {
        algorithm: 'RS256',
        expiresIn,
    })
    return jwtBearerToken;
}

const checkToken = (token) => {
    try {
        const extracted = jwt.verify(token, option.cert);
        console.log(moment(extracted.exp* 1000).format('MMMM Do YYYY, h:mm:ss a'))
        return true
    } catch (error) {
        return false;
    }
}
const extractToken = (token) => {
    try {
        const data = jwt.verify(token, option.cert);
        console.log(moment(data.exp* 1000).format('MMMM Do YYYY, h:mm:ss a'))
        return data
    } catch (error) {
        console.log(error)
        return {};
    }
}

export { geneToken, checkToken, extractToken };