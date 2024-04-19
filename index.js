const { Socket } = require("dgram");
var express = require("express");
var app =  express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log("X desconectou: " + socket.id)
    })
    socket.on("palavra", (data) => {
        console.log(data);
        socket.emit("resultado", data + " - Chat com Socket.io")
    })
})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () =>{
    console.log("App rodando!")
})