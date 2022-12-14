const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require('./routes/goods')
const cartsRouter = require("./routes/carts.js");
const connect = require("./schemas");
connect();


app.use(express.json());
app.use("/api", [goodsRouter, cartsRouter]);

app.get('/', (req, res) => {
 res.send('Hello World!');
});


app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

// app.use(express.json());

// app.post("/", (req,res) => {
//   console.log(req.body);

//   res.send("기본 URI에 POST 메소드가 정상적으로 실행");
// })

// app.get("/", (req,res) => {
//   console.log(req.query);



//   res.json(400).json({
//     "KeyKey" : "value 입니다.",
//     "이름입니다." : "이름일까요?",
//   });
// });

// app.get("/:id", (req,res) => {
//   console.log(req.params)

//   res.send(":id URI에 정상 반환")
// })