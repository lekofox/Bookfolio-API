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
            email: Yup.string().email('Email deve ser um email que existe.').required(),
            password: Yup.string().min(6, 'Senha deve conter no mínimo 6 caracteres.').required(),
            postalCode: Yup.string().min(8, 'Código Postal requer 8 números.').required(),
            readerClassification: Yup.string().required(),  
        });

        //Se algum dado estiver faltando retorna mensagem de falha de cadastro
        if (!(await schema.isValid(req.body))){
            try {
                let validated = await schema.validate(req.body, { abortEarly: false });
              } catch (err) {
                  var error = []
                for (let i = 0; i < err.errors.length; i++){
                    error.push(err.errors[i])
                }
                return res.status(400).json({
                    message: error
                })
              }
            
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

        if (logradouro === undefined){
            res.status(400).json({
                message: "CEP inexistente"
            })
        }
        //Gerando hashpassword
        const hashedpassword = await bcrypt.hash(req.body.password, 10)

        //Caso nenhuma condicional seja ativada, Usuário será registrado e User será redirecionado para login
        await User.create({ 
            name, username, email, password: hashedpassword, postalCode, readerClassification, logradouro, bairro, localidade, uf
        })
        return res.status(200).json({ message: "Novo Usuário criado"})
        } catch(err){
            console.log(err)
            return res.status(500).json({
                message: "Erro inesperado; Por favor tente novamente"
            });
        }
    }
}

export default new RegisterNewUser()