const express = require('express')
var cors = require('cors')
const app = express()  // express() 서버를 app에 담기
const port = 3000

app.use(cors())  // express() 서버에 사용하겠다. 조건 사용 가능. 어디서 요청 오면 허용하고 어디서 요청오면 거절하겠다...

/*
    add.get : http 메소드 (get: 주소창, post: 주소창x)
    '/'     : 라우팅
*/

 app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
  const {name} = req.params  // value값이 바로 name 변수에 저장
  console.log(name)          // localhost:3000/sound/dog -> dog가 name에 저장 -> 콘솔에 출력됨
  
  if(name == "dog") {
    res.json({'sound':'멍멍'})     
  } else if(name == "cat") {
    res.json({'sound' : '야옹'})    
  } else {
    res.json({'sound':'알수없음'})
  }

})


app.listen(3000)

// setTimeout(() => {console.log("5초지남")}, 5000);