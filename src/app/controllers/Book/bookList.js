import { INTEGER, Op } from "sequelize"
import Book from "../../models/book"
import Genre from "../../models/genre"
import Author from "../../models/author"
class ListBook {
    async listAll(req, res){
        const {typeFilter} = req.query
        const{filter} = req.query
        const{search} =req.query

        //Busca por genero sem titulo
        if(typeFilter == 1 && (filter!== 'undefined' && filter !==null)){
            const result = await Book.findAll({
                raw: true,
                attributes: ["id","title","synopsis","pageNumber", 'image', 'buy_link'],
                include:[{
                    through: {
                        attributes:[],
                    },
                    model: Genre,
                    attributes: ['name'],
                    where:{
                        name: filter
                    }
                }, {
                    model: Author,
                    attributes: ['name']
                    }
                ]
            })
            
            if (result == '') {
                return res.status(400).json({
                    error: 404,
                    message: 'Gênero não encontrado',
                });
                }
    
            const response = []
            for(let i in result){
                const object = result[i]
                if (req.user.readerClassification == 1){
    
                    object.time_to_read = object.time_to_read = Math.round(object.pageNumber/10)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 2){
                    object.time_to_read = Math.round(object.pageNumber/25)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 3){
                    object.time_to_read = Math.round(object.pageNumber/35)
                    response.push(object)
                    
                }
    
            }
            
    
                res.status(200).json(response)

            
            
        }
        //Busca por autor sem título
        else if (typeFilter == 2 && (filter!== 'undefined' && filter !==null)){
            const result = await Book.findAll({
                raw: true,
                attributes: ["id","title","synopsis","pageNumber", 'image', 'buy_link'],
                include:[{
                    through: {
                        attributes:[],
                    },
                    model: Genre,
                    attributes: ['name']
                }, {
                    model: Author,
                    attributes: ['name'],
                    where:{
                        name: filter
                    }
                    }
                ]
            })
        
            if (result == '') {
            return res.status(400).json({
                error: 404,
                message: 'Autor não encontrado',
            });
            }
        
            const response = []
            for(let i in result){
                const object = result[i]
                if (req.user.readerClassification == 1){
        
                    object.time_to_read = object.time_to_read = Math.round(object.pageNumber/10)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 2){
                    object.time_to_read = Math.round(object.pageNumber/25)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 3){
                    object.time_to_read = Math.round(object.pageNumber/35)
                    response.push(object)
                    
                }
        
            }
            
            return res.status(200).json(response)
        }

        else{
            const result = await Book.findAll({
                raw: true,
                attributes: ["id","title","synopsis","pageNumber", 'image', 'buy_link'],
                include:[{
                    through: {
                        attributes:[],
                    },
                    model: Genre,
                    attributes: ['name'],
                }, {
                    model: Author,
                    attributes: ['name']
                    }
                ]
            })

            const response = []
            for(let i in result){
                const object = result[i]
                if (req.user.readerClassification == 1){
    
                    object.time_to_read = object.time_to_read = Math.round(object.pageNumber/10)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 2){
                    object.time_to_read = Math.round(object.pageNumber/25)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 3){
                    object.time_to_read = Math.round(object.pageNumber/35)
                    response.push(object)
                    
                }
    
            }
            res.status(200).json(response)
        }
    }

    async listById(req, res){
        const {id} = req.params
        const result = await Book.findOne({
            raw: true,
            where: {id},
            attributes: ["id","title","synopsis","pageNumber", 'image', 'buy_link'],
                include:[{
                    through: {
                        attributes:[],
                    },
                    model: Genre,
                    attributes: ['name'],
                }, {
                    model: Author,
                    attributes: ['name', 'description']
                    }
                ]
        })

        if(!result){
            return res.status(404).json({
                error: 404,
                message: 'Not Found'
            })
        }
            if (req.user.readerClassification == 1){

                result.time_to_read = result.time_to_read = Math.round(result.pageNumber/10)
                
            }

            if (req.user.readerClassification == 2){
                result.time_to_read = Math.round(result.pageNumber/25)
                
            }

            if (req.user.readerClassification == 3){
                result.time_to_read = Math.round(result.pageNumber/35)
                
            }
        return res.status(200).json(result)
    }

    async listByTitles(req, res){
        const{typeFilter} = req.query
        const{filter} = req.query
        const{search} =req.query

        console.log(typeFilter, filter, search)

         //Busca por genero com título
        if(typeFilter == 1 && (filter!== 'undefined' && filter !==null)){
            const result = await Book.findAll({
                raw: true,
                where: {
                title: {
                    [Op.like]: '%' + search + '%'
                }
            },
                attributes: ["id","title","synopsis","pageNumber", 'image', 'buy_link'],
                include:[{
                    through: {
                        attributes:[],
                    },
                    model: Genre,
                    attributes: ['name'],
                    where:{
                        name: filter
                    }
                }, {
                    model: Author,
                    attributes: ['name']
                    }
                ]
            })
            
            if (result == '') {
                return res.status(400).json({
                    error: 404,
                    message: 'Gênero não encontrado',
                });
                }
    
            const response = []
            for(let i in result){
                const object = result[i]
                if (req.user.readerClassification == 1){
    
                    object.time_to_read = object.time_to_read = Math.round(object.pageNumber/10)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 2){
                    object.time_to_read = Math.round(object.pageNumber/25)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 3){
                    object.time_to_read = Math.round(object.pageNumber/35)
                    response.push(object)
                    
                }
    
            }
            
    
                res.status(200).json(response)

            
            
        }
        //Busca por autor com título
        else if (typeFilter == 2 && (filter!== 'undefined' && filter !==null)){
            const result = await Book.findAll({
                raw: true,
                where: {
                title: {
                    [Op.like]: '%' + search + '%'
                }
            },
                attributes: ["id","title","synopsis","pageNumber", 'image', 'buy_link'],
                include:[{
                    through: {
                        attributes:[],
                    },
                    model: Genre,
                    attributes: ['name']
                }, {
                    model: Author,
                    attributes: ['name'],
                    where:{
                        name: filter
                    }
                    }
                ]
            })
        
            if (result == '') {
            return res.status(400).json({
                error: 404,
                message: 'Autor não encontrado',
            });
            }
        
            const response = []
            for(let i in result){
                const object = result[i]
                if (req.user.readerClassification == 1){
        
                    object.time_to_read = object.time_to_read = Math.round(object.pageNumber/10)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 2){
                    object.time_to_read = Math.round(object.pageNumber/25)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 3){
                    object.time_to_read = Math.round(object.pageNumber/35)
                    response.push(object)
                    
                }
        
            }
            
            
            return res.status(200).json(response)
        }
        //busca apenas com título
        else{
            const result = await Book.findAll({
                raw: true,
                where: {
                title: {
                    [Op.like]: '%' + search + '%'
                }
            },
                attributes: ["id","title","synopsis","pageNumber", 'image', 'buy_link'],
                include:[{
                    through: {
                        attributes:[],
                    },
                    model: Genre,
                    attributes: ['name'],
                }, {
                    model: Author,
                    attributes: ['name']
                    }
                ]
            })

            const response = []
            for(let i in result){
                const object = result[i]
                if (req.user.readerClassification == 1){
    
                    object.time_to_read = object.time_to_read = Math.round(object.pageNumber/10)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 2){
                    object.time_to_read = Math.round(object.pageNumber/25)
                    response.push(object)
                    
                }
        
                if (req.user.readerClassification == 3){
                    object.time_to_read = Math.round(object.pageNumber/35)
                    response.push(object)
                    
                }
    
            }
            res.status(200).json(response)
        }
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