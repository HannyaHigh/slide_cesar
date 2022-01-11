const User = require("../models/User");

exports.createUser = async (req, res) => {
    
    try{
        let user;

        //creation of new User
        user = new User(req.body);

        await user.save();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an unexpected Error!');
    }

}

exports.getUser = async (req, res) => {
    try{
        
        const users = await User.find();
        res.json(users);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an unexpected Error!');
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { nombre, email, puesto, fnac, domicilio, habilidad, grade } = req.body;
        let user = await User.findById(req.params.id);

        if(!user) {
           res.status(404).json({ msg: 'There is not data!' }) 
        }

        user.nombre = nombre;
        user.email = email;
        user.puesto = puesto;
        user.fnac = fnac;
        user.domicilio = domicilio;
        user.habilidad = habilidad;
        user.grade = grade;

        user = await User.findOneAndUpdate({ _id: req.params.id },user, { new: true } )
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an unexpected Error!');
    }
}

exports.getOneUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if(!user) {
           res.status(404).json({ msg: 'There is not data!' }) 
        }

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an unexpected Error!');
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if(!user) {
           res.status(404).json({ msg: 'There is not data!' }) 
        }
        
        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'The User has been eliminated successfully!' });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an unexpected Error!');
    }
}