import passport from "passport"


class Checking{
    async Authenticated(req, res, next){
        if (req.isAuthenticated()){
            return next()
        }
        return res.status(401).send("Unothorized")
    }

    async  NotAuthenticated(req, res, next){
        if (req.isAuthenticated()){
            return res.status(401).send("Unothorized")
        }

        return next()
    }
}

export default new Checking()