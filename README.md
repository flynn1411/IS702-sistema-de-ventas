npm init -y

npm install -D typescript@3.3.3 npm install -D tslint@5.12.1

npm install -S express@4.16.4 npm install -D @types/express@4.16.1

npm install mysql npm install express-mysql-session

npm install passport npm install passport-local npm install jsonwebtoken npm install bcrypt // ! npm install bcryptjs

npm install body-parser

tsc --init

./node_modules/.bin/tslint --init



---------- D B ------------
instancia db: database-1.cjjjph5q4chk.us-east-1.rds.amazonaws.com
user: admin
pass: admin123

------------ api -------------------
IP: 3.95.214.239
DNS: ec2-3-95-214-239.compute-1.amazonaws.com
Port: 3000
connection: ssh ubuntu@3.95.214.239 -i nodekey.pem

-------------- frontend ---------------------
IP: 35.174.204.46
DNS: ec2-35-174-204-46.compute-1.amazonaws.com
Port: 3001
connection: ssh ubuntu@35.174.204.46 -i frontendkey.pem

----------------- sh connection instance -----------------
sudo apt-get update & sudo apt-get upgrade
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm --version
nvm install --lts
git clone --single-branch --branch <branchname> https://github.com/flynn1411/IS702-sistema-de-ventas.git