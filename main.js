
// var fs=require("fs");
// var data=fs.readFileSync('test.txt');
// console.log(typeof data);
// console.log(data.toString());
// console.log('程序 阻塞代码 执行结束');
// fs.readFile('test.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// //     console.log('程序 非阻塞代码 执行结束')
// })
// console.log('程序 非阻塞代码 执行结束');
/*--------------------------------------------- */





// var events=require('events');//引入events模块
// var eventEmitter=new events.EventEmitter();//创建event.EventEmitter对象
// var connectHandler=function (){
//     console.log('connection');
//     eventEmitter.emit('data_received_o_o_o')//触发data_receive_o_o_o事件【事件名称可自定义】
// }
// eventEmitter.on('connection', connectHandler);
// eventEmitter.on('data_received_o_o_o', function(){
//    console.log('data_received_o_o_o');
// });
// eventEmitter.emit('connection');//触发connection事件【事件名称可自定义】
// console.log('执行完毕')

/**
 * ----------------------------------------------------------
 */
// var events = require('events');
// var eve = new events.EventEmitter();
// var num = 0;
// var testeveHandle = function () {
//     if (num < 10) {
//         num++;
//         console.log('执行次数：' + num);
//         // console.log(eve.listeners('testeve'));
//         eve.emit('testeve');
//     } else {
//         eve.removeListener('testeve', testeveHandle)
//     }
//     if (num == 5) {
//         eve.emit('error')
//     }
// };
// eve.on('testeve', testeveHandle);
// eve.on('error', function (data) {
//     console.log('出错了')
// })
// var evecount = events.EventEmitter.listenerCount(eve, 'testeve');
// console.log('监听器个数' + evecount);
// eve.emit('testeve');

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // 监听器 #1
// var listener1 = function listener1() {
//    console.log('监听器 listener1 执行。');
// }

// // 监听器 #2
// var listener2 = function listener2() {
//   console.log('监听器 listener2 执行。');
// }

// // 绑定 connection 事件，处理函数为 listener1 
// eventEmitter.addListener('connection', listener1);

// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection', listener2);

// var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// // 处理 connection 事件 
// eventEmitter.emit('connection');

// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log("listener1 不再受监听。");

// // 触发连接事件
// eventEmitter.emit('connection');

// eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// console.log("程序执行完毕。");

// var buf=new Buffer([230, 136, 145, 231, 136, 177, 228, 189, 160]);
// // var len=buf.write('我爱你');
// var buf=Buffer.concat([buf,buf,buf])
// console.log(buf.toJSON());
// // console.log(len+'');
// console.log(buf);
// console.log(buf.toString('utf-8'))

var fs=require('fs');
var data='';
// 创建可读流
var readStream=fs.createReadStream('test.txt');
//设置编码为utf8
readStream.setEncoding('UTF-8');
readStream.on('data',function(chunk){
    console.log('data',chunk)
    data+=chunk;
});
readStream.on('end',function(res){
    console.log('end',res)
    console.log(data);
});
readStream.on('error',function(err){
    console.log(JSON.stringify(err))
});
console.log("程序执行完毕");

// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');

// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");