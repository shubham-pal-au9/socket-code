var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//Whenever someone connects this gets executed
io.on("connection", function (socket) {
  console.log("A user connected");

  console.log("Check SocketId:", socket.id);

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

http.listen(1337, function () {
  console.log("listening on *:1337");
});
