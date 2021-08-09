import Author from '../../models/author'
import Book from '../../models/book'
import {Op} from 'sequelize'

class ListAuthorController {

    async listBookByAuthor(req, res) {
        const { author } = req.params
        // const pksearch = await Author.findByPk(author);
        // if(!pksearch){
        //   console.log(pksearch)
        //   return res.status(404).json({ error: 'Autor não encontrado' });
    
        // }
        // else{
        const result = await Author.findAll({
          attributes: ['id'],
          include: [{
            model: Book,
            where: {
                author_id: author
                },
            attributes: ['title', 'synopsis','language','page_number']
          }]
        })
       
        return res.json(result)
      }
      }



export default new ListAuthorController()