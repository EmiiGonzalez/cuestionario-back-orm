# Cuestionario Back ORM

Este es un proyecto de código abierto que utiliza Node.js y Express.js para crear una API RESTful que maneja preguntas y respuestas para un cuestionario. El repositorio también utiliza Sequelize ORM para interactuar con una base de datos MySql.

## Características

- API RESTful para manejar preguntas y respuestas
- Utiliza Sequelize ORM para interactuar con una base de datos MySql
- Escrito en Node.js y Express.js

## Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando:
npm install

## Configuracion
Devido a que el proyecto es en base a un proyecto estipulado por un profesor, el mismo almacena todo en una misma tabla y rellena los espacios vacios de los campos con el caracter elegido, en caso de que no se deseen rellenar los caracteres se debe configurar el archivo .env

Archivo env
DB_NAME --> nombre de la base de datos
DB_USERNAME --> usuario
DB_PASSWORD  --> contraseña
DB_HOST  --> ip 
DB_DIALECT --> tipo de base de datos a usar
DB_TIMEZONE --> zona horaria 
FILL --> true/false si se desea rellenar los espacios sin usar en los campos
CHAR  --> con que se desea rellenar en caso de FILL = true

## Uso

Para iniciar el servidor, ejecute el siguiente comando:

npm start

Después de iniciar el servidor, puede acceder a la API en `http://localhost:3000`.

## Rutas
para obtener todos los registro: "/rFormWeb" 
para obtener un registro en especifico se debe enviar el id del registro: "/rFormWeb/:id"
para crear un registro: "/rFormWeb/create"
para actualizar un registro se debe enviar el id del registro: "/rFormWeb/edit/:id"
para eliminar un registro se debe enviar el id del registro a eliminar: "/rFormWeb/delete/:id"

## Contribución

Si está interesado en contribuir al proyecto, puede hacerlo creando un fork del repositorio y enviando una solicitud de extracción con sus cambios. Si tiene alguna pregunta sobre el proyecto, no dude en comunicarse conmigo a través de la página del repositorio en GitHub.
