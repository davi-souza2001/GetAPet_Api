const User = require('../models/User')

module.exports = class UserController {
    static async register(req, res) {
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword

        //validations
        if(!name) {
            res.status(422).json({ message: 'O nome é obrigatório'})
            return
        }
        if(!email) {
            res.status(422).json({ message: 'O nome é email'})
            return
        }
        if(!phone) {
            res.status(422).json({ message: 'O telefone é obrigatório'})
            return
        }
        if(!password) {
            res.status(422).json({ message: 'A senha é obrigatória'})
            return
        }
        if(!confirmpassword) {
            res.status(422).json({ message: 'A confirmação de senha é obrigatória'})
            return
        }

        if(password !== confirmpassword){
            res.status(422).json({message: "A confirmação de senha precisa ser igual à senha !"})
            return
        }

        //check if user exists
        const userExists = await User.findOne({email: email})

        if(userExists){
            res.status(422).json({message: "Email já cadastrado !"})
            return
        }


        res.send({message: "Todos os dados passaram"})
    }
}