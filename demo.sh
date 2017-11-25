if [ -d $1 ]; then
  echo '已经存在$1'
  exit
else
  cd ~/Desktop
  mkdir $1
  cd $1
  mkdir css
  cd css
  echo 'h1{color:red;}'>style.css
  cd ../
  touch index.html
  echo '<!DOCTYPE>' > index.html
  echo '<title>Hello</title>' >> index.html
  echo '<h1>Hi</h1>' >> index.html
  mkdir js
  cd js
  echo 'var string = "Hello World"' > main.js
  echo 'alert(string)' >> main.js
 
  echo '创建成功'
  exit
fi
