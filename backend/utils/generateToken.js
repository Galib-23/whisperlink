import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {expiresIn: '10d'}
    );
    res.cookie("jwt_token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevent XSS attacks (now it's not accessible by javascript attacks)
        sameSite: "strict", //prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development",
    })
}

export default generateTokenAndSetCookie;