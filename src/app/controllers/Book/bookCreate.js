import Book from "../../models/book";
import * as Yup from 'yup'
import Genre from "../../models/genre";
import BookGenre from "../../models/bookgenre";


class CreateBookController {
    // Cria um novo registro de um médico
    async store(req, res) {
      try {
        // Validação realizada via YUP para que os valores descritos sejam obrigatórios no body
        const schema = await Yup.object().shape({
          title: Yup.string().required(),
          author: Yup.string().required(),
          publishingCompany: Yup.string().required(),
          language: Yup.string().required(),
          publishDate: Yup.date().required(),
          pageNumber: Yup.number().required(),
          rating: Yup.number().required(),
          genres: Yup.array().required()
        });
  
        // Caso o body não possua todos os campos marcados como obrigatório via YUP, retorna erro 400 com a mensagem descrita abaixo
        if (!(await schema.isValid(req.body))) {
          return res.status(400).json({
            message: 'Falha ao cadastrar livro; Por favor corrija os dados de cadastro',
          });
        }
        const {
            title, author, publishingCompany, language, publishDate, pageNumber, rating, genres
          } = req.body;
    
  
        // Busca no banco de dados por registros existentes com o CRM informado no body
        const bookExist = await Book.findOne({
          where: { title: title },
        });
  
        if (bookExist) {
          return res.status(400).json({ message: 'Livro já existe no sistema' });
        }
  
      
  
        
  
        // Faz a checagem se todas as especialidades passadas no body existem
        for (let i = 0; i < genres.length; i++) {
          const genres_check = genres[i];
          const find = await Genre.findOne({where: {name:genres_check}});
  
          // Se o retorno da constante find for nulo em qualquer posição do array informado, retorna erro 404 com a mensagem descrita abaixo
          if (find === null) {
            return res.status(404).json({
              message: 'Gênero não encontrado; Por favor corrija os dados de cadastro ou adcione uma nova categoria.',
            });
          }
        }
  
        // Caso não haja exceções, cria todos os dados informados no body e os dados coletados via fetch na API do viacep
        await Book.create({
          title, author, publishingCompany, language, publishDate, pageNumber, rating, genres
        });
  

  
        for (let i = 0; i < genres.length; i++) {
          const arraygenreid = []
          const arraybookid = []
          const genre_id = await Genre.findOne({where: {name: genres[i]}});
          arraygenreid.push(genre_id.dataValues.id)
        
          const book_id = await Book.findOne({where: {title:title}})
          arraybookid.push(book_id.dataValues.id)          
          const genre_name = genre_id.dataValues.name;
          const book_title = book_id.dataValues.title
          

          
            
          BookGenre.create({ genre_id: genre_id.dataValues.id, book_id: book_id.dataValues.id , genre_name, book_title});
            
          
          
          
        }
  
        return res.status(201).json({
          title,
          author,
          publishingCompany,
          language,
          publishDate,
          pageNumber,
          rating,
          genres
  
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Erro inesperado; Por favor tente novamente',
        });
      }
    }}

    export default new CreateBookController()