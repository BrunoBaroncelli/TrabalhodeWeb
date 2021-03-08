'use strict'

const User = use("App/Models/User")

class AuthController {
    async register({request}) {
        const data = reuqest.only(['username','email','password']);
        const user = await User.create(data);
        return user;
    }
    async authenticate({request, auth}) {
        const {email, password} = reuqest.all();
        const token = await auth.attempt(email, password);
        return token;

    }
}

module.exports = AuthController
