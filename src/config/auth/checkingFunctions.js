import passport from "passport"


class Checking{
    async Authenticated(req, res, next){
        if (req.isAuthenticated()){
            return next()
        }

        return res.redirect('/v1/login')
    }

    async  NotAuthenticated(req, res, next){
        if (req.isAuthenticated()){
            return res.redirect('/v1')
        }

        return next()
    }
}

export default new Checking()