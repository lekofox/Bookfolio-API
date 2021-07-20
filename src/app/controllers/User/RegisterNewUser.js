import * as Yup from 'yup';
import User from '../../models/user';
import bcrypt from 'bcrypt'
import { getCep } from '../http/getCep';



class RegisterNewUser {
    //Cria um usuário novo
    async store(req, res){
        try {

        //Validação da requisição usando YUP, tornando os valores descritos obrigatórios
        const schema = await Yup.object().shape({
            name: Yup.string().required(),
            username: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),
            postalCode: Yup.string().required(),
            readerClassification: Yup.string().required(),  
        });

        //Se algum dado estiver faltando retorna mensagem de falha de cadastro
        if (!(await schema.isValid(req.body))){
            return res.status(400).json({
                message: 'Falha ao cadastrar usuário; Por favor corrija os dados de cadastro'
            })
        };

        //Constante que retorna verdadeiro se o username enviado já está sendo utilizado
        const UserExists = await User.findOne({
            where: { username: req.body.username},
        });

        //Constante que retorna verdadeiro se o E-mail enviado já está sendo utilizado
        const EmailExists = await User.findOne({
            where: {email: req.body.email},
        });

        //Condicional verificando se E-mail e Username já está registrado
        if (UserExists){
            if (EmailExists){
                return res.status(400).json({
                    message: "Nome de Usuário e e-mail já etão sendo utilizados"
                })
            }
        }

        //Condicional verificando se apenas o Username já está registrado
        if (UserExists){
            return res.status(400).json({
                message: "Nome de Usuário já existe. Por favor escolha outro nome de ususário"
            })
        }

        //Condicional verificando se apenas o E-mail já está registrado
        if (EmailExists){
            return res.status(400).json({
                message: "Impossível completar cadastro. Email já registrado"
            })
        }

        const { 
            name, username, email, postalCode, readerClassification 
        } = req.body

        const {logradouro, bairro, localidade, uf} = await getCep(postalCode)
        //Gerando hashpassword
        const hashedpassword = await bcrypt.hash(req.body.password, 10)

        //Caso nenhuma condicional seja ativada, Usuário será registrado e User será redirecionado para login
        await User.create({ 
            name, username, email, password: hashedpassword, postalCode, readerClassification, logradouro, bairro, localidade, uf
        })
        console.log("Novo Usuário criado")
        res.redirect('/v1/login')
        } catch(err){
            console.log(err)
            return res.status(500).json({
                message: "Erro inesperado; Por favor tente novamente"
            });
        }
    }
}

export default new RegisterNewUser()