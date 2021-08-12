import auth from './authFunctions'
import bcrypt from 'bcrypt'

const LocalStrategy = require('passport-local').Strategy





function initialize(passport){
    const authenticateLogin = async(name, password, done) =>{
        let user = await auth.Login(name)
        
        if (user === null){
            return done(null, false, {message: 'Usuário ou senha incorretos'})
        }
        
        try {
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            }
            else{
                return done(null, false, {message: 'Usuário ou senha incorretos'})
            }
        } catch (error) {
            return done(error)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'name', passwordField: 'password'}, authenticateLogin))
    passport.serializeUser(async (user, done) => {console.log(user)
        done(null, user.id)})
    passport.deserializeUser(async (id, done) => done(null, await auth.getUserbyID(id)))
}


module.exports = initialize