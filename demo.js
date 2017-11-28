var fs=require("fs");
fs.exists("dirName",function(exists){
  if(exists){
    console.log("文件存在")
  }
  else{
        var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
        
        fs.mkdirSync("./" + dirName) // mkdir $1
        process.chdir("./" + dirName) // cd $1
        fs.mkdirSync('css') // mkdir css
        fs.writeFileSync("css/style.css", "h1{color:red;}") //往css里面写东西
        fs.mkdirSync('js') // mkdir js
        fs.writeFileSync("./js/main.js", "var string = 'Hello World' \nalert(string)") //往js里面写东西
        fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title></title>\n<h1>Hi</h1>") //往html里面写东西
        console.log("文件创建成功")
       
     }
  })