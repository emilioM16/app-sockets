var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//on para escuchar 
socket.on('disconnect',function(){
    console.log('Conexión con el servidor perdida');
});

//enviar informacion = emit
// socket.emit('enviarMensaje',{
//     usuario: 'Emilio',
//     mensaje: 'hola mundo'
// }, function(respuesta){
//     console.log('Respuesta del servidor: ', respuesta.mensaje);
// });

//escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje.usuario + ': ' + mensaje.mensaje);
});