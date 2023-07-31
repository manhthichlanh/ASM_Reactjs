import UserModel from '../model/users';

const getAllUser = async (req, res) => {
    try {
        const user = await UserModel.find({});
        res.status(200).json({ success: true, message: "Get All Successfully!", data: user });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await UserModel.findOne({ _id: userId });
        res.status(200).json({ success: true, message: `Get ID ${userId} Successfully!`, data: user });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const postLogin = async (req, res, next) => {
    try {

        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatch = password === user.password ? true : false;

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Password is not match' });
        }

        res.status(200).json({ message: 'Logged in successfully', user });           

    } catch (error) {
        next(error);
    }
}
const postRegister = async (req, res, next) => {
    const role = req.query.role;
    try {
        const result = await UserModel.findOne({ username: req.body.username });
        if (result) {
            return res.json({ message: 'Username already exists' });
        }
        const { username, fullname, email, password, address, phone, active, role } = req.body;
        const user = { username, fullname, email, password, address, phone, active, role: role ? role : 0 };
        const newUser = new UserModel({ ...user, });

        const savedUser = await newUser.save();

        res.status(201).json({ message: 'Register in successfully', savedUser });
    } catch (err) {
        next(err);
    }
}
const postCreate = async (req, res, next) => {
    const role = req.query.role;
    try {
        const result = await UserModel.findOne({ username: req.body.username });
        if (result) {
            return res.json({ message: 'Username already exists' });
        }
        const { username, fullname, email, password, address, phone, active, role } = req.body;
        const user = { username, fullname, email, password, address, phone, active, role: role ? role : 0 };
        const newUser = new UserModel({ ...user, });

        const savedUser = await newUser.save();

        res.status(201).json({ message: 'Create New in successfully', savedUser });
    } catch (err) {
        next(err);
    }
}
const deleteUser = async (req, res, next) => {
    const userId = req.params.id;
    try {

        const result = await UserModel.findByIdAndDelete({ _id: userId });

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
}
const putUpdate = async (req, res, next) => {
    const userId = req.params.id;
    const updates = req.body;
    try {
        const result = await UserModel.findByIdAndUpdate({ _id: userId }, updates, { new: true });

        if (!result) {
            // if no document was found, it means the user with that ID was not found
            res.status(404).json({ message: `User with ID ${userId} not found` });
        } else {
            res.status(200).json({ message: `User with ID ${userId} updated successfully` });
        }
    } catch (error) {

        next(error)
    }
}
module.exports = { getAllUser, getUserById, postCreate, postLogin, postRegister, putUpdate, deleteUser }