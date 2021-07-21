class Logout {
    //Faz o logout do usuário
    async User(req,res){
        //faz o logout
        req.logOut()

        //Redireciona o usuário para a página de login
        res.status(200).json({
            message: "usuário deslogado"
        })
    }
}

export default new Logout()