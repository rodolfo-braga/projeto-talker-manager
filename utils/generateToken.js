function generateToken(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < length; i += 1) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}

module.exports = generateToken;

/*
Referência para geração do token:
https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details
*/
