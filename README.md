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
