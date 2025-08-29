import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";

const jwtSecret = '30r89i2cq49k30l=]0p439kwb55v8kq30x=]tewb43521';

export default {
    register(userData){
        return User.create(userData);
    },
    async login(email, password){
        const user = await User.findOne({ email });

        if(!user){
            return new Error('No such user!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid){
            return new Error('Invalid password');
        }

        const payload = {
            id: user.id,
            email: user.email,
        };

        const token = jsonwebtoken.sign(payload, jwtSecret, { expiresIn: '2h' });

        return token;
    },
}