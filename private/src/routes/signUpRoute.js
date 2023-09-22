import { getDbConnection } from "../db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;

        const db  = getDbConnection('react-auth-db');
        const user = await db.collection('users').findOne({email});

        if(user) {
            res.sendStatus(409);
        }

        const passwordHash  = await bcrypt.hash(password, 10);

        const startingInfo = {
            partnerGirl: 'Hsu',
            hair: 'black',
            birth: 'feb'
        };

        const results = db.collection('users').insertOne({
            email,
            passwordHash,
            info: startingInfo,
            isVerified: false
        });

        const { insertId } = results;

        jwt.sign(
            {
                id: insertId,
                email,
                info: startingInfo,
                isVerified: false
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '2d'
            },
            (err, token) => {
                if(err) {
                    return res.status(500).send(err);
                }
                return res.status(200).json({token});
            }
        );
    }
}