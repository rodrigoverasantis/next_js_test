export type Persona = {
	run: String,
	pasaporte: String,
	nombres: String,
	apellido_paterno: String,
	apellido_materno: String,
	genero: String,
	fecha_nacimineto: Date,
	contacto: {
		telefono_personal: String,
		email_personal: String,
	},
}