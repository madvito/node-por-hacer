// const opciones = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc:'Descripcion de la tarea por hacer'
//     },
//     completado: {
//         alias: 'c',
//         default: true,
//         desc:'Marca como completada una tarea'
//     }
// }
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    desc: 'Marca como completada una tarea',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}