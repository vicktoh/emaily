module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieEncKey: process.env.COOKIE_ENC_KEY,
    payStackPubKey: process.env.PAYSTACK_PUB_KEY,
    payStackSecKey: process.env.PAYSTACK_SEC_KEY,
    googleCallbackUrl: '/auth/google/callback'
};