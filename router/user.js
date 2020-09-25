const express = require('express')
const router = express.Router()
var formidable = require('formidable'); //文件上传
const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random;
const fs = require('fs-extra')

const {json} = require('body-parser')
const {response} = require('express')

router.get('/', (req, res) => {
    let data = Random.name()
    res.status(200).send({
        status: 200,
        data,
        msg: 'hi! User 1'
    })
});
/***
 * 请求验证码 6位纯数字
 */
router.post('/verificationCode', (req, res) => {
    let data = {
        verificationCode: Random.integer(100000, 999999),
        req: req.body
    }
    res.status(200).send({
        status: 200,
        // data: req.body ,
        data,
        msg: 'hi! verificationCode'
    })
});

/***
 * 获取首页应用
 */
router.get('/getApp', (req, res) => {
    let data = {
        appList: [
            {
                className: '校园',
                list: [
                    {name: "学生考勤", url: "studentAttendance"},
                    {name: "学校通知", url: "schoolNotice"},
                    {name: "作业通知", url: "homeworkNotice"},
                    {name: "请假记录", url: "leaveRecord"},
                    {name: "成绩档案", url: "sgrade"},
                    {name: "课程表", url: "classSchedule"},
                    {name: "通讯录", url: "addressBook"}
                ],
            },
            {
                className: '学习',
                list: [
                    {name: "校园考勤"},
                    {name: "校园通知"},
                    {name: "请假记录"},
                    {name: "作业通知"},
                    {name: "校园考勤"}
                ],
            },
            {
                className: '服务',
                list: [
                    {
                        name: "校园考勤"
                    },
                    {
                        name: "校园通知"
                    },
                    {
                        name: "请假记录"
                    },
                    {
                        name: "作业通知"
                    },
                    {name: "校园考勤"}
                ],
            },
            {
                className: '我的',
                list: [
                    {
                        name: "校园考勤"
                    },
                    {
                        name: "校园通知"
                    },
                    {
                        name: "请假记录"
                    },
                    {
                        name: "作业通知"
                    },
                    {name: "校园考勤"}
                ],
            }
        ],
        req: req.body
    }
    res.status(200).send({
        status: 200,
        // data: req.body ,
        data,
        msg: 'hi! getApp'
    })
});

/***
 * 获取子女信息
 */
router.get('/getKidsInfo', (req, res) => {
    let data = {
        list: [
            {
                kidsName: '赵C',
                kidsClass: "五年三班"

            },
            {
                kidsName: '张三',
                kidsClass: "五年一班"

            },
            {
                kidsName: '李四',
                kidsClass: "六年一班"

            },
        ],
        req: req.body
    }
    res.status(200).send({
        status: 200,
        // data: req.body ,
        data,
        msg: 'hi! getKidsInfo'
    })
});
/***
 * 绑定子女信息
 */
router.post('/bindKids', (req, res) => {
    let data = {
        list: [
            {
                kidsName: '哪里多',
                kidsClass: "三年一班"

            },
        ],
        req: req.body
    }
    res.status(200).send({
        status: 200,
        // data: req.body ,
        data,
        msg: 'hi! getKidsInfo'
    })
});
/***
 * 获取学生考勤信息
 */
router.get('/getStudentAttendance', (req, res) => {
    let data = {
        list: [
            {notice: "打卡成功", checkIn: 1598944946440, checkInType: 'gate'},
            {notice: "打卡成功", checkIn: 1598944946440, checkInType: 'gate'},
            {notice: "打卡成功", checkIn: 1598944946440, checkInType: 'gate'},
        ],
        req: req.body
    }
    res.status(200).send({
        status: 200,
        // data: req.body ,
        data,
        msg: 'hi! getKidsInfo'
    })
});
/***
 * 获取学校通知
 */
router.get('/getSchoolNotice', (req, res) => {
    let data = {
        list: [
            {
                id: 1, isRead: false, title: "9月1日开学通知", date: 1598944946440, content: '（一）中小学校(含中等职业院校）\n' +
                    '\n' +
                    '9月1日(周二)，小学一、六年级；初一、初三年级；高一、高二、高三年级；中职学校新生开学；\n' +
                    '\n' +
                    '9月2日(周三)，小学二、三、四、五年级；初二年级；中职学校其他年级开学；\n' +
                    '\n' +
                    '（二）幼儿园\n' +
                    '\n' +
                    '9月1日(周二)，各类幼儿园大班、中班开园；\n' +
                    '\n' +
                    '9月2日(周三)，各类幼儿园小班开园。\n' +
                    '\n' +
                    '（三）高等学校(含高等职业院校)\n' +
                    '\n' +
                    '9月1日起，具备校园疫情防控条件的驻唐高校，可组织学生分期分批、错时错峰返校。高校新生开学时间根据高招录取工作进度，由各高校确定。\n' +
                    '\n' +
                    '（四）校外培训机构\n' +
                    '\n' +
                    '9月1日起，全市学科类校外培训机构可向审批机关书面申请，经核验评估合格后，方可安全有序开班。'
            },
            {
                id: 2, isRead: true, title: "国庆节放假通知", date: 1598944946440, content: '2020年节日放假安排时间日历表：对比2019年\n' +
                    '　　一、元旦放假安排：1月1日放假 无调休 共1天。\n' +
                    '\n' +
                    '　　二、春节放假安排：1月24日(除夕)~1月30日 1月19日(周日)、2月1日(周六)上班 共7天。\n' +
                    '\n' +
                    '　　三、清明节放假安排：4月4日~4月6日 无调休 共3天。\n' +
                    '\n' +
                    '　　四、劳动节放假安排：5月1日~5月5日 4月26日(周日)、5月9日(周六)上班 共5天\n' +
                    '\n' +
                    '　　五、端午节放假安排：6月25日~6月27日 6月28日(周日)上班 共3天。\n' +
                    '\n' +
                    '　　六、中秋节放假安排：10月1日~10月8日 9月27日(周日)、10月10日(周六)上班 共8天。\n' +
                    '\n' +
                    '　　七、国庆节放假安排：10月1日~10月8日 9月27日(周日)、10月10日(周六)上班 共8天。'
            },
        ],
        req: req.body
    }
    res.status(200).send({
        status: 200,
        // data: req.body ,
        data,
        msg: 'hi! getKidsInfo'
    })
});

/***
 * 图片上传
 */
router.post('/upload', (req, res) => {
    var form = formidable();
    var post = {},
        file = {};
    form.uploadDir = './tmp';  //文件上传 临时文件存放路径
    form.keepExtensions = true;//默认不保存,     是否保存文件名
    form.maxFieldSize = 2 * 1024 * 1024;//
    form.parse(req, (err, fields, files) => {
        console.log('fields:', fields);
        console.log('files:', files);
    });
    // console.log(form);
    let fileName = ''
    form.on('error', function (err) {
        console.log(err); //各种错误
    })
        // .on('fileBegin', function (field, value) {
        // console.log(field);
        // console.log(value);
        //     if (form.type == 'multipart') {  //有文件上传时 enctype="multipart/form-data" }
        //
        //     }

        // file.path = __dirname + '/uploads/' + file.name;
        // fileName = file.name;
        // })
        .on('file', function (field, file) {
            // console.log(field);
            // console.log(file);
            console.log('Uploaded ' + file.name);
            fileName = file.name;
            // fs.rename(file.path,  __dirname+ '/uploads' + file.filename,function (err){
            fs.move(file.path, 'D:/code/mock/uploads/' + file.name, function (err) {
                console.log(err);
            });
        }).on('end', function () {
        let data = {
            // url: "http://127.0.0.1:8050/uploads/" + fileName,
            url: "http://192.168.89.184:8050/uploads/" + fileName,
            req: req.body
        }
        res.status(200).send({
            code: 20000,
            // data: req.body ,
            data,
            msg: 'hi! upload'
        })
    });

});
router.post('/register', (req, res) => {
    let data = {
        userInfo: {
            userName: Random.cname(),
            guid: Random.guid(),
        },
        req: req.body
    }
    res.status(200).send({
        status: 200,
        // data: req.body,
        data,
        msg: 'hi! register'
    })
});
/**
 * 登录方法
 */
const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}
router.post('/login', (req, res) => {
    const {username} = req.body
    // const token = tokens[username]
    const token = tokens['admin']

    // mock error
    if (!token) {
        return {
            code: 60204,
            message: 'Account and password are incorrect.'
        }
    }

    // return {
    //     code: 20000,
    //     data: token
    // }
    res.status(200).send({code: 20000, data: token})
})
/**
 *  用户信息
 */
router.post('/info', (req, res) => {
    const {token} = req.query
    // const info = users[token]
    const info = {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    }
    // mock error
    if (!info) {
        return {
            code: 50008,
            message: 'Login failed, unable to get user details.'
        }
    }
    let data = {
        code:200,
        data: {
            token: 'admin-token'
        }
    }

    res.status(200).send({code: 20000, data: info})
})
/**
 * 登出
 */
router.post('/logout', (req, res) => {
    res.status(200).send({code: 20000, data: 'success'})
})
module.exports = router
