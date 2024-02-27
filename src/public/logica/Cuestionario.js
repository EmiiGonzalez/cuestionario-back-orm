export const cuestionarioEsp = {
    edad: {
        texto: '¿Cuál es su edad?',
        tipo: 'edad',
    },
    sexo: {
        texto: '¿Cuál es su sexo?',
        tipo: 'sexo',
        opciones: {
            1: 'Masculino',
            2: 'Femenino'
        }
    },
    p1:{
        texto: '¿Tenía ud. Conocimiento sobre lo que es la Ciber Seguridad o toma recién conocimiento de lo que es la Ciber Seguridad?',
        tipo: 'unico',
        opciones: {
            1: 'Tenia Conocimiento',
            2: 'Recién tomo conocimiento'
        }
    },
    p2:{
        texto: 'Al momento de Conectarse con su dispositivo electrónico ya sea en internet o a Wi Fi Ud. Diría que....',
        tipo: 'unico',
        opciones: {
            1: 'Nunca Tiene en cuenta si el sitio es seguro o no',
            2:'A veces tiene en cuenta si el sitio es seguro o no',
            3: 'Siempre Tengo en cuenta si el Sitio es Seguro o No'
        }
    },
    p3:{
        texto: 'Ahora le voy a pedir que evalue que tan importante es para ud. La ciber seguridad y le voy a pedir que lo haga como en el colegio donde 1 es nada importante y 10 totalmente importante. ¿Que puntaje le asigna ud?',
        tipo: 'escala',
        opciones: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    p4:{
        texto: 'Respecto al uso del contraseñas ud. Diría que…',
        tipo: 'abierto',
        opciones: [{
            texto: {
                1: 'Utiliza siempre la misma contraseña para todas las aplicaciones y/o accesos',
                2: 'Utiliza siempre distintas contraseñas para los accesos y aplicaciones'},
            otraForma: {3: 'Otra forma que no mencione: '}
        }]
    },
    p5:{
        texto: 'Respecto a como acostumbra ud. A generar contraseñas. Ud. Diría que…',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'Que sea Facil de recordar sin tener en cuenta la seguridad ',
            2: 'Que sea compleja teniendo en cuenta la Seguridad ',
            3: 'Que la genere una aplicación' },
            otraForma: {4: 'Otra(Especificar): '}
        }]
    },
    p6:{
        texto: '¿Como acostumbra ud. a guardar sus contraseñas para recordarlas?',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'En forma Digital (incluye gestores, archivos, mensajes en redes sociales)',
            2: 'Fisica (en papel)',
            3: 'Las recuerdo todas de memoria',
            4: 'Uso Siempre la misma para todo',},
            otraForma: {5: 'Otra(Especificar): '}
        }]
    },
    p7:{
        texto: 'Además del uso de contraseñas, ¿Que otros métodos utiliza para acceder a distintas aplicaciones en el uso cotidiano de dispositivos electrónicos?',
        tipo: 'abierto multiple',
        opciones: [{
            texto: {
            1: 'Teléfonos (recepción de código por sms, código por wpp, códigos por email)',
            2: 'Huella digital - Biometrico',
            3: 'Reconocimiento Facial',
           },
            otraForma: {4: 'Otra(Especificar): '}
        }]
    },
    p8:{
        texto: 'Hablemos ahora del uso de redes sociales: de las siguientes situaciones que le voy a mencionar digame cual es la que ud. acostumbra',
        tipo: 'unico',
        opciones: {
            1: 'Siempre utilizo Dispositivos que sean de mi propiedad',
            2: 'A veces utilizo Dispositivos Ajenos',
            3: 'Siempre utilizo dispositivos que no son de mi propiedad'
        }
    },
    p9:{
        texto: 'Respecto a Tu dispositivo Celular me podrías decir según el tipo de abono si es….',
        tipo: 'unico',
        opciones: {
            1: 'Prepago',
            2:'Pago con abono',
            3: 'Solo lo uso con wifi'
        }
    },
    p10:{
        texto: 'En cuanto al uso del celular me gustaría que me dijera ¿con que frecuencia ud. está pendiente del Celular o cada cuanto lo mira para ver si tiene notificaciones o para usar redes sociales y/o aplicaciones?',
        tipo: 'unico',
        opciones: {
            1: 'Estoy pendiente todo el tiempo',
            2: 'Cada 5 minutos',
            3: 'Entre 10 y 15 minutos',
            4: 'Entre 15 y 20 minutos',
            5: 'Entre 20 y 30 minutos',
            6: 'Entre 30 y 45 minutos',
            7: 'Entre 45 y 60 minutos',
            8: 'Menor Frecuencia',
        }
    },
    p11:{
        texto: '¿Cuales es la red social que mas utiliza?',
        tipo: 'ranking',
        rank: 2,
        texto2:'Seleccione la primer red social a la izquierda y la segunda red social a la derecha',
        opciones: [{
            texto: {
            1: 'Facebook',
            2: 'Instagram',
            3: 'Twitter',
            4: 'Tik Tok',
            },
            otraForma: {5: 'Otra(Especificar): '}
        }]
    },
    p12:{
        texto: 'De la siguiente lista de Dispositivos electrónicos me podría decir ud. ¿cual o cuales tiene?',
        tipo: 'abierto multiple',
        opciones: [{
            texto: {
            1: 'Celular',
            2: 'PC',
            3: 'Note Book',
            4: 'I Pad',
            5: 'NetBook del Estado',
            },
            otraForma: {6: 'Otra(Especificar): '}
        }]
    },
    p13:{
        texto: 'Cuando ud. instala Programas o aplicaciones ¿lee los términos y condiciones, No los lee o no sabia que existen los términos y condiciones?',
        tipo: 'unico',
        opciones: {
            1: 'Lee los términos y condiciones',
            2: 'NO lee los términos y condiciones',
            3: 'No sabe de la existencia de Terminos y Condiciones'
        }
    },
    p14:{
        texto: 'Cuando ud. instala programas nuevos a su dispositivo electrónico. ¿Que busca?',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'Busca usar programas con licencia abierta',
            2: 'Busca programas con licencia paga',
            3: 'Busca utilizar con licencia paga pero crackeadas o Piratas'
            },
            otraForma: {4: 'Otra(Especificar): '}
        }]
    },
    p15:{
        texto: 'Cuando ud. instala programas nuevos a su dispositivo electrónico. ¿Que busca?',
        tipo: 'unico',
        opciones: {
            1: 'Utiliza Software de Antivirus Pagos',
            2: 'Utiliza Software de Antivirus Gratuitos',
            3: 'No utiliza software antivirus'
        }
    },
    p16:{
        texto: '¿Utiliza servicios donde ingrese datos bancarios como billeteras virtuales o sitios de Compra?',
        tipo: 'unico',
        opciones: {
            1: 'Si Utiliza',
            2: 'No utiliza',
        }
    },
    p17:{
        texto: 'Para finalizar, me podría comentar ud. ¿cuales son las cosas debe cambiar para ser un usuario ciber seguro o aprovechar al máximo posible la Ciber Seguridad?',
        tipo: 'final'
    }
}

export const cuestionarioEng = {
    edad: {
        texto: 'What is your age?',
        tipo: 'edad',
    },
    sexo: {
        texto: 'What is your gender?',
        tipo: 'sexo',
        opciones: {
            1: 'Male',
            2: 'Female'
        }
    },
    p1:{
        texto: 'Did you have knowledge about Cyber Security or did you just become aware of what Cyber Security is?',
        tipo: 'unico',
        opciones: {
            1: 'Had Knowledge',
            2: 'Just became aware'
        }
    },
    p2:{
        texto: 'When connecting with your electronic device either on the internet or via Wi-Fi, would you say...',
        tipo: 'unico',
        opciones: {
            1: 'Never consider whether the site is secure or not',
            2:'Sometimes consider whether the site is secure or not',
            3: 'Always consider whether the site is secure or not'
        }
    },
    p3:{
        texto: 'Now I will ask you to rate how important Cyber Security is to you, on a scale of 1 to 10, where 1 is not important at all and 10 is extremely important. What score would you give?',
        tipo: 'escala',
        opciones: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    p4:{
        texto: 'Regarding the use of passwords, would you say...',
        tipo: 'abierto',
        opciones: [{
            texto: {
                1: 'I always use the same password for all applications and/or logins',
                2: 'I always use different passwords for logins and applications'},
            otraForma: {3: 'Another way not mentioned: '}
        }]
    },
    p5:{
        texto: 'Regarding how you usually generate passwords. Would you say...',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'It is easy to remember regardless of security',
            2: 'It is complex, taking security into account',
            3: 'I use an application to generate them' },
            otraForma: {4: 'Another (Specify): '}
        }]
    },
    p6:{
        texto: 'How do you usually store your passwords to remember them?',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'Digitally (includes managers, files, messages on social networks)',
            2: 'Physically (on paper)',
            3: 'I remember them all by memory',
            4: 'I always use the same one for everything',},
            otraForma: {5: 'Another (Specify): '}
        }]
    },
    p7:{
        texto: 'In addition to using passwords, what other methods do you use to access different applications in the daily use of electronic devices?',
        tipo: 'abierto multiple',
        opciones: [{
            texto: {
            1: 'Phones (receiving code by SMS, code by WhatsApp, codes by email)',
            2: 'Fingerprint - Biometric',
            3: 'Facial Recognition',
           },
            otraForma: {4: 'Another (Specify): '}
        }]
    },
    p8:{
        texto: 'Let\'s talk now about the use of social networks: of the following situations that I am going to mention, tell me which one you usually do',
        tipo: 'unico',
        opciones: {
            1: 'I always use devices that are my own',
            2: 'Sometimes I use other people\'s devices',
            3: 'I always use devices that are not my own'
        }
    },
    p9:{
        texto: 'Regarding Your Cell Phone, could you tell me according to the type of plan if it is…',
        tipo: 'unico',
        opciones: {
            1: 'Prepaid',
            2:'Paid with plan',
            3: 'I only use it with Wi-Fi'
        }
    },
    p10:{
        texto: 'Regarding the use of the cell phone, I would like you to tell me how often you are attentive to the cell phone or how often you check it for notifications or to use social networks and/or applications?',
        tipo: 'unico',
        opciones: {
            1: 'I am attentive all the time',
            2: 'Every 5 minutes',
            3: 'Between 10 and 15 minutes',
            4: 'Between 15 and 20 minutes',
            5: 'Between 20 and 30 minutes',
            6: 'Between 30 and 45 minutes',
            7: 'Between 45 and 60 minutes',
            8: 'Less frequently',
        }
    },
    p11:{
        texto: 'Which is the social network that you use the most?',
        tipo: 'ranking',
        rank: 2,
        texto2:'Select the first social network on the left and the second social network on the right',
        opciones: [{
            texto: {
            1: 'Facebook',
            2: 'Instagram',
            3: 'Twitter',
            4: 'Tik Tok',
            },
            otraForma: {5: 'Another (Specify): '}
        }]
    },
    p12:{
        texto: 'From the following list of electronic devices, could you tell me which one(s) you have?',
        tipo: 'abierto multiple',
        opciones: [{
            texto: {
            1: 'Cell Phone',
            2: 'PC',
            3: 'Notebook',
            4: 'iPad',
            5: 'State NetBook',
            },
            otraForma: {6: 'Another (Specify): '}
        }]
    },
    p13:{
        texto: 'When you install programs or applications, do you read the terms and conditions, do not read them, or did not know that terms and conditions exist?',
        tipo: 'unico',
        opciones: {
            1: 'Read the terms and conditions',
            2: 'Do not read the terms and conditions',
            3: 'Did not know the existence of terms and conditions'
        }
    },
    p14:{
        texto: 'When you install new programs on your electronic device, what do you seek?',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'Look for programs with open licenses',
            2: 'Look for programs with paid licenses',
            3: 'Look to use with paid licenses but cracked or pirated'
            },
            otraForma: {4: 'Another (Specify): '}
        }]
    },
    p15:{
        texto: 'When you install new programs on your electronic device, what do you seek?',
        tipo: 'unico',
        opciones: {
            1: 'Use Paid Antivirus Software',
            2: 'Use Free Antivirus Software',
            3: 'Do not use antivirus software'
        }
    },
    p16:{
        texto: 'Do you use services where you enter banking data such as virtual wallets or shopping sites?',
        tipo: 'unico',
        opciones: {
            1: 'Yes, I use',
            2: 'Do not use',
        }
    },
    p17:{
        texto: 'Finally, could you tell me what things you should change to be a cyber-secure user or to make the most of Cyber Security?',
        tipo: 'final'
    }
}

export const valores = {
    sexo: [1, 2],
    p1: [1, 2],
    p2: [1, 2, 3],
    p3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    p4: [1, 2, 3],
    p5: [1, 2, 3, 4],
    p6: [1, 2, 3, 4, 5],
    p7: [1, 2, 3, 4],
    p8: [1, 2, 3],
    p9: [1, 2, 3],
    p10: [1, 2, 3, 4, 5, 6, 7, 8],
    p11: [1, 2, 3, 4, 5],
    p12: [1, 2, 3, 4, 5, 6],
    p13: [1, 2, 3, 4, 5],
    p14: [1, 2, 3, 4],
    p15: [1, 2, 3, 4],
    p16: [1, 2, 3],
    p17: [1, 2],
  };

export const valoresPreguntas = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "sexo", "edad"];

export const cantRespuestasAceptadas = {
    p7: 3,
    p12: 5,
}