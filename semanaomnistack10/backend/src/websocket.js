const socketio = require('socket.io')

exports.setupWebsocket =  (server) => {
    const io = socketio(server)

    // Listener
    io.on('connection', socket => {
        console.log(socket.id)
    })
}