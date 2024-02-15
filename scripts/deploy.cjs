const scp2 = require('scp2');
require("dotenv").config();


function main() {
    console.log('开始部署');
    scp2.scp('dist/', {
        host: process.env.IP,
        port: 22,
        username: 'root',       // 用户名
        password: process.env.PASSWORLD,     // 密码
        path: '/cv' //服务器存放文件路径
    }, err => {
        if (err) {
            console.log('部署失败', err);
        } else {
            console.log('部署成功');
        }
    })
}

main();