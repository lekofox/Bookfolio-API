import { Op } from "sequelize"
import Book from "../../models/book"
import Genre from "../../models/genre"
class ListBook {
    async listAll(req, res){
         const result = await Book.findAll()

         return res.status(200).json(result)
    }

    async listById(req, res){
        const {id} = req.params
        const result = await Book.findOne({where: {id}})

        if(!result){
            return res.status(404).json({
                error: 404,
                message: 'Not Found'
            })
        }
        return res.status(200).json(result)
    }

    async listByTitles(req, res){
        const {title} = req.params
        const result = await Book.findAll(
            { where: {
                title: {
                    [Op.like]: '%' + title + '%'
                }
            }
        }
        )
        if(!result){
            return res.status(404).json({
                error: 404,
                message: 'Not Found'
            })
        }

        return res.status(200).json(result)
    }

    async listByGenre(req,res){
        const {genre} = req.params

        const result = await Genre.findAll(
            {
                where:{
                    [Op.or]: [
                        {name: genre},
                        {id: genre}
                    ],
                },
                attributes: ['name'],
                include: {
                    through: {
                        attributes:[],
                    },
                    model:Book,
                    attributes:['title', 'author', 'publishingCompany', 'language', 'publishDate', 'pageNumber', 'rating']
                }
            }
        )
        
        if (result == '') {
            return res.status(404).json({
                error: 404,
              message: 'Gênero não encontrado',
            });
          }
          // Se achar a especialidade passada como parametro mas não houver nenhum médico associado a ela, retorna erro 400 com a mensagem descrita abaixo
          if (result[0].Books.length == 0) {
            return res.status(400).json({
                error: 400,
              message: 'Não existe nenhum livro com esse gênero em nossa base',
            });
          }
        return res.status(200).json(result)
    }

}

export default new ListBook()