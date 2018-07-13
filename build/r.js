const fs = require('fs');

fs.readFile("./bit/static/css/app.css", 'utf8',(err,data)=>{
  if(err) throw err;
  data = data.replace("static/fonts","../fonts")
  fs.writeFile("./bit/static/css/app.css",data,'utf8',(e)=>{
    if(e) throw e;
    console.log('修改成功')
  })
})