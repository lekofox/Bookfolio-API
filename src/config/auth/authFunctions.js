import User from '../../app/models/user';


class auth{
    //Loga usuário
    async Login(name){
        try {
        const login_with_user = await User.findOne({ where:{ username: name } })
        
        if (login_with_user === null){
            const login_with_email = await User.findOne({ where:{ email: name} })
            if (login_with_email === null){
                return null
            }

            return login_with_email.dataValues
        }
        
        else{
            return login_with_user.dataValues
        }

        } catch (error) {
            console.log(error)
        }
    }
    async getUserbyID(id){
        try {
            const user_by_id = await User.findOne({ where: { id: id } })
            return user_by_id.dataValues
         
        } catch (error) {
            console.log(error)
            
        }
    }
}

export default new auth