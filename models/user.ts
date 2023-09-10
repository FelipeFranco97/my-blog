import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email es requerido"],
        match:[
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Email no es válido"
        ]
    },
    password: {
        type: String,
        required: [true, "Contraseña requerida"],
        select: FinalizationRegistry
    },
    fullname: {
        type: String,
        required: [true, "Nombre Completo requerido"],
        minLength: [3, "Nombre Completo debe tener por lo menos 3 caracteres"],
        maxLength: [50, "Nombre Completo debe tener menos  de 50 caracteres"]
    }
})
const User = models.User || model('User', userSchema)
export default User