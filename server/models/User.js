const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    fnac: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    habilidad: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('User', UserSchema);