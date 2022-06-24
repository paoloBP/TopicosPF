"C:\Program Files\MongoDB\Server\5.0\bin\mongod"  --port 27018 --dbpath ..\basesmongo\baserequisicoes --auth --repair
rem --repair

rem -- sem autenticação -- mongo --port 27018 
rem -- com autenticação -- mongo --port 27018 -u "admin" -p "admin" --authenticationDatabase "baserequisicoes"  
rem -- Compass/Node:  mongodb://admin:admin@localhost:27018/baserequisicoes?authSource=baserequisicoes
