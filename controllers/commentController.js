// ---------------------------------IMPORTING---------------------------------
const Comment = require('../models').Comment

module.exports = {

    comments: (req, res) => {

        let {body, commentableId, commentableType} = req.body
        let id = req.params.id

        // http://localhost:3000/api/questions (POST)
        if (req.method === "POST") {

            Comment.create({body, commentableId, commentableType})
                .then(comment => {

                    return res.status(201).json({
                        "comment":comment
                    })//return

                }).catch(error => {
                return res.status(400).json({error})
            })

        }//if


        // http://localhost:3000/api/questions/:id (PUT)
        else if (req.method === "PUT") {

            Comment.findOne({where: {id: id}})
                .then(comment => {
                    comment.update({body})
                        .then(update_comment => {

                            return res.status(202).json({
                                "update_comment":update_comment
                            })//return

                        })
                }).catch(error => {
                return res.status(400).json({"error": error})
            })

        }//else if


        // http://localhost:3000/api/questions/:id (DELETE)
        else if (req.method === "DELETE") {

            Comment.destroy({where: {id: id}})

                .then(data => {
                    return res.status(200).json({
                        "data": {
                            "message": `${id} deleted`
                        },

                    })//return

                }).catch(error => {
                return res.status(400).json({error})
            })

        }//else if


        //bad request
        else {
            return res.status(400).json({
                "data": {
                    "message": "Sorry bad request!"
                }
            })//return
        }//else end

    },
    // http://localhost:3000/api/answers/:id (GET)
    commentsView:(req,res) => {

        // let id = req.params.id
        Comment.findAll()
            .then(comment =>{
                return res.status(200).json({
                    "details": {
                        "comment": comment
                    }
                })
            }).catch(error => {return res.status(400).json({error})})

    }

}