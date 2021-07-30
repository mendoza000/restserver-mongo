const { Schema, model } = require('mongoose');


const UserSchema = Schema({
	name:{
		type: String,
		required: [true, 'El nombre es obligatorio']
	},
	mail:{
		type: String,
		required: [true, 'El correo es obligatorio'],
		unique: true
	},
	pass:{
		type: String,
		required: [true, 'La contraseña es obligatorio'],
	},
	img:{
		type: String,
	},
	role:{
		type: String,
		required: true,
		emun: ['ADMIN_ROLE', 'USER_ROLE']
	},
	status:{
		type: Boolean,
		default: true 
	},
	google:{
		type: Boolean,
		default: false 
	}
})


module.exports = model('User', UserSchema)