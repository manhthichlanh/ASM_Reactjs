const obj1 = {
    client: 0,
    admin1: 1,
    admin2: 2,
    admin3: 3,
    admin4: 4,
    admin5: 5,
}

const homeGuard = (req, res, next) => {
    const { userId, userRole, userActive } = req;
    if (userRole !== obj1.client && userActive==1) {
        next()
    } else {
        res.status(403).send('Forbidden - You do not have permission to access this route.');
    }
}

const categoryGuard = (req, res, next) => {
    const { userId, userRole, userActive } = req;
    if (userRole === obj1.admin1 || userRole === obj1.admin5 && userActive==1) {
        next()
    } else {
        res.status(403).send('Forbidden - You do not have permission to access this route.');
    }
}
const productGuard = (req, res, next) => {
    const { userId, userRole, userActive } = req;
    console.log(userRole)
    if (userRole === obj1.admin2 || userRole === obj1.admin5 && userActive==1) {
        next()
    } else {
        res.status(403).send('Forbidden - You do not have permission to access this route.');
    }
}
const userGuard = (req, res, next) => {
    const { userId, userRole, userActive } = req;
    if (userRole === obj1.admin3 || userRole === obj1.admin5 && userActive==1) {
        next()
    } else {
        res.status(403).send('Forbidden - You do not have permission to access this route.');
    }
}
const orderGuard = (req, res, next) => {
    const { userId, userRole, userActive } = req;
    if (userRole === obj1.admin4 || userRole === obj1.admin5 && userActive==1) {
        next()
    } else {
        res.status(403).send('Forbidden - You do not have permission to access this route.');
    }
}
export { homeGuard, categoryGuard, productGuard, userGuard, orderGuard }