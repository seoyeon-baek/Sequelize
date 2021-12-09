//Sequelize를 사용하여 데이터베이스 관리
//Table의 역할을 파일들을 관리하고 연결해줌
'use strict';

const path = require('path');
const Sequelize = require('sequelize');

// path 인자값 중 '..'은 경로의 이동값으로, 이전 디렉토리에 있음을 의미
// 'config'는 현재 디렉토리 안에 있는 'config' 디렉토리로 들어감
// 'db.json'은 'config'디렉토리 안의 'db.json'파일을 가져오겠단 의미
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[
	env
];
const db = {};

// config 변수를 사용해 Sequelize에 RDS 정보할당
// 연동 성공시, "Connectoin has been established successfully." 출력
// 연동 실패시, "Unable to connect to the database: "출력
let sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config,
	{
		define: {
			charset: 'utf-8',
			collate: 'utf8_general_ci'
		}
	}
);

	db.sequelize = sequelize;
	db.Sequelize = Sequelize;

db.sequelize
.authenticate()
.then(() => {
	console.log('Connectoin has been established successfully.');
})
.catch(err => {
	console.log('Unable to connect to the database: ', err);
})

db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
module.exports = db;
