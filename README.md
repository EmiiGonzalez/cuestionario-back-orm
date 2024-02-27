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
| Obtener todos los registros | `/api/rFormWeb` |
| Obtener un registro específico | `/api/rFormWeb/:id` |
| Crear un registro | `/api/rFormWeb/create` |
| Actualizar un registro | `/api/rFormWeb/edit/:id` |
| Eliminar un registro | `/api/rFormWeb/delete/:id` |

## Contribución

Si está interesado en contribuir al proyecto, puede hacerlo creando un fork del repositorio y enviando una solicitud de extracción con sus cambios. Si tiene alguna pregunta sobre el proyecto, no dude en comunicarse conmigo a través de la página del repositorio en GitHub.

## Valores de las respuestas

Aquí está la tabla actualizada con los valores numéricos correspondientes a cada respuesta:

| Pregunta | Respuestas                                                                                              | Respuestas Múltiples | Respuestas Únicas |
|----------|--------------------------------------------------------------------------------------------------------|----------------------|-------------------|
| p1       | 1. Tenia Conocimiento<br>2. Recién tomo conocimiento                                                   |                      | ✓                 |
| p2       | 1. Nunca Tiene en cuenta si el sitio es seguro o no<br>2. A veces tiene en cuenta si el sitio es seguro o no<br>3. Siempre Tengo en cuenta si el Sitio es Seguro o No |                      | ✓                 |
| p3       | 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10                                                      |                      | ✓                 |
| p4       | 1. Utiliza siempre la misma contraseña para todas las aplicaciones y/o accesos<br>2. Utiliza siempre distintas contraseñas para los accesos y aplicaciones<br>3. Otra forma que no mencione |                      | ✓                 |
| p5       | 1. Que sea Facil de recordar sin tener en cuenta la seguridad<br>2. Que sea compleja teniendo en cuenta la Seguridad<br>3. Que la genere una aplicación<br>4. Otra(Especificar) |                      | ✓                 |
| p6       | 1. En forma Digital (incluye gestores, archivos, mensajes en redes sociales)<br>2. Fisica (en papel)<br>3. Las recuerdo todas de memoria<br>4. Uso Siempre la misma para todo<br>5. Otra(Especificar) |                      | ✓                 |
| p7       | 1. Teléfonos (recepción de código por sms, código por wpp, códigos por email)<br>2. Huella digital - Biometrico<br>3. Reconocimiento Facial<br>4. Otra(Especificar)             | ✓                    |                   |
| p8       | 1. Siempre utilizo Dispositivos que sean de mi propiedad<br>2. A veces utilizo Dispositivos Ajenos<br>3. Siempre utilizo dispositivos que no son de mi propiedad |                      | ✓                 |
| p9       | 1. Prepago<br>2. Pago con abono<br>3. Solo lo uso con wifi                                            |                      | ✓                 |
| p10      | 1. Estoy pendiente todo el tiempo<br>2. Cada 5 minutos<br>3. Entre 10 y 15 minutos<br>4. Entre 15 y 20 minutos<br>5. Entre 20 y 30 minutos<br>6. Entre 30 y 45 minutos<br>7. Entre 45 y 60 minutos<br>8. Menor Frecuencia |                      | ✓                 |
| p11      | 1. Facebook e Instagram<br>2. Facebook y Twitter<br>3. Facebook y Tik Tok<br>4. Instagram y Twitter<br>5. Instagram y Tik Tok<br>6. Otra(Especificar): |                      | ✓                 |
| p12      | 1. Celular<br>2. PC<br>3. Note Book<br>4. I Pad<br>5. NetBook del Estado<br>6. Otra(Especificar):      | ✓                    |                   |
| p13      | 1. Lee los términos y condiciones<br>2. NO lee los términos y condiciones<br>3. No sabe de la existencia de Terminos y Condiciones |                      | ✓                 |
| p14      | 1. Busca usar programas con licencia abierta<br>2. Busca programas con licencia paga<br>3. Busca utilizar con licencia paga pero crackeadas o Piratas<br>4. Otra(Especificar): |                      | ✓                 |
| p15      | 1. Utiliza Software de Antivirus Pagos<br>2. Utiliza Software de Antivirus Gratuitos<br>3. No utiliza software antivirus |                      | ✓                 |
| p16      | 1. Si Utiliza<br>2. No utiliza                                                                        |                      | ✓                 |
| p17      | -                                                                                                      |                      | ✓                 |

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
| Get all records | `/api/rFormWeb` |
| Get a specific record | `/api/rFormWeb/:id` |  
| Create a record | `/api/rFormWeb/create` |
| Update a record | `/api/rFormWeb/edit/:id` |
| Delete a record | `/api/rFormWeb/delete/:id` |

## Contributing

If you are interested in contributing to the project, you can do so by forking the repository and submitting a pull request with your changes. If you have any questions about the project, feel free to contact me through the repository page on GitHub.

## Question values
| Question | Responses                                                                                              | Multiple Responses | Single Response |
|----------|--------------------------------------------------------------------------------------------------------|---------------------|-----------------|
| p1       | 1. Had knowledge<br>2. Recently became aware                                                            |                     | ✓               |
| p2       | 1. Never consider whether the site is secure or not<br>2. Sometimes consider if the site is secure or not<br>3. Always consider if the site is secure or not |                     | ✓               |
| p3       | 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10                                                       |                     | ✓               |
| p4       | 1. Always use the same password for all applications and/or accesses<br>2. Always use different passwords for accesses and applications<br>3. Another way not mentioned |                     | ✓               |
| p5       | 1. Easy to remember without considering security<br>2. Complex considering security<br>3. Generated by an application<br>4. Another (Specify) |                     | ✓               |
| p6       | 1. Digitally (includes managers, files, messages on social networks)<br>2. Physical (on paper)<br>3. Remember all from memory<br>4. Always use the same for everything<br>5. Another (Specify) |                     | ✓               |
| p7       | 1. Phones (receive code by SMS, code by WhatsApp, codes by email)<br>2. Fingerprint - Biometric<br>3. Facial Recognition<br>4. Another (Specify)             | ✓                   |                 |
| p8       | 1. Always use devices that are my own<br>2. Sometimes use other people's devices<br>3. Always use devices that are not my own |                     | ✓               |
| p9       | 1. Prepaid<br>2. Pay with a subscription<br>3. Only use it with Wi-Fi                                  |                     | ✓               |
| p10      | 1. I'm always on it<br>2. Every 5 minutes<br>3. Between 10 and 15 minutes<br>4. Between 15 and 20 minutes<br>5. Between 20 and 30 minutes<br>6. Between 30 and 45 minutes<br>7. Between 45 and 60 minutes<br>8. Less frequently |                     | ✓               |
| p11      | 1. Facebook and Instagram<br>2. Facebook and Twitter<br>3. Facebook and Tik Tok<br>4. Instagram and Twitter<br>5. Instagram and Tik Tok<br>6. Another (Specify): |                     | ✓               |
| p12      | 1. Cellphone<br>2. PC<br>3. Note Book<br>4. I Pad<br>5. NetBook from the State<br>6. Another (Specify):      | ✓                   |                 |
| p13      | 1. Read the terms and conditions<br>2. Do not read the terms and conditions<br>3. Did not know about the existence of Terms and Conditions |                     | ✓               |
| p14      | 1. Look for open license programs<br>2. Look for paid license programs<br>3. Look to use paid licenses but cracked or Pirated<br>4. Another (Specify): |                     | ✓               |
| p15      | 1. Use Paid Antivirus Software<br>2. Use Free Antivirus Software<br>3. Do not use antivirus software |                     | ✓               |
| p16      | 1. Yes, I use<br>2. I do not use                                                                      |                     | ✓               |
| p17      | -                                                                                                      |                     | ✓               |
