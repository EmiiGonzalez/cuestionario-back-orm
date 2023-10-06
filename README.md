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

| Variable | Descripción |
|---|---|
| DB_NAME | Nombre de la base de datos |
| DB_USERNAME | Usuario |
| DB_PASSWORD | Contraseña |
| DB_HOST | IP |
| DB_DIALECT | Tipo de base de datos a usar |
| DB_TIMEZONE | Zona horaria |
| FILL | True/false si se desea rellenar los espacios sin usar en los campos |
| CHAR | Con que se desea rellenar en caso de FILL = true |

## Uso

Para iniciar el servidor, ejecute el siguiente comando:

npm start

Después de iniciar el servidor, puede acceder a la API en `http://localhost:3000`.

## Rutas
| Acción | Ruta |
|---|---|
| Obtener todos los registros | `/rFormWeb` |
| Obtener un registro específico | `/rFormWeb/:id` |
| Crear un registro | `/rFormWeb/create` |
| Actualizar un registro | `/rFormWeb/edit/:id` |
| Eliminar un registro | `/rFormWeb/delete/:id` |

## Contribución

Si está interesado en contribuir al proyecto, puede hacerlo creando un fork del repositorio y enviando una solicitud de extracción con sus cambios. Si tiene alguna pregunta sobre el proyecto, no dude en comunicarse conmigo a través de la página del repositorio en GitHub.

# Back ORM Questionnaire

This is an open source project that uses Node.js and Express.js to create a RESTful API that handles questions and answers for a questionnaire. The repository also uses Sequelize ORM to interact with a MySql database.

## Features

- RESTful API to handle questions and answers
- Uses Sequelize ORM to interact with a MySql database
- Written in Node.js and Express.js  

## Installation

To install the project dependencies, run the following command:

npm install


## Configuration

Since the project is based on a project stipulated by a teacher, it stores everything in the same table and fills in the empty field spaces with the chosen character. If you do not want to fill in the characters, you must configure the .env file.

| Variable | Description |
|-|-|
| DB_NAME | Database name |
| DB_USERNAME | Username |
| DB_PASSWORD | Password |
| DB_HOST | IP |
| DB_DIALECT | Type of database to use |
| DB_TIMEZONE | Timezone |
| FILL | True/false if you want to fill unused spaces in fields |
| CHAR | What to fill with if FILL = true |

## Usage

To start the server, run the following command:

npm start


After starting the server, you can access the API at `http://localhost:3000`.

## Routes  

| Action | Route |
|-|-|
| Get all records | `/rFormWeb` |
| Get a specific record | `rFormWeb/:id` |  
| Create a record | `/rFormWeb/create` |
| Update a record | `/rFormWeb/edit/:id` |
| Delete a record | `/rFormWeb/delete/:id` |

## Contributing

If you are interested in contributing to the project, you can do so by forking the repository and submitting a pull request with your changes. If you have any questions about the project, feel free to contact me through the repository page on GitHub.