import passport from 'passport'
import bcrypt from 'bcrypt'

class LoginUser{
    //logando o Usuário
    async login(req,res, next){
        try {
            passport.authenticate('local', function(err,user,info){
                console.log(user)
                if (user === false){
                  return res.status(400).json({
                    error: "Email/Senha incorretos"
                  })
                }
                else{
                    req.logIn(user, async (err) => {
                        if (err) throw err;

                        const token = await bcrypt.hash(user.id.toString(), 10)
                        res.status(200).send("Authorized")
                    })
                }
              })(req,res,next)
            } catch (err) {
            console.log(err)
            return res.status(500).json({
                message: "Erro inesperado; Por favor tente novamente"
            });
        }
    }
    async getinfo(req,res){
        const user = req.user
        res.status(200).json({
            name: user.name,
            username: user.username,
            email: user.email,
            postalCode: user.postalCode,
            logradouro:  user.logradouro,
            localidade:  user.localidade,
            uf: user.uf,
            bairro: user.bairro,
            readerClassification: user.readerClassification
        })
    }
}

export default new LoginUser