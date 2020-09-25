const express = require('express')
const router = express.Router()
var formidable = require('formidable'); //文件上传
const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random;
const fs = require('fs-extra')

const {json} = require('body-parser')
const {response} = require('express')

/**
 * 文章数据模板
 */
const articleTemplate=[
    {
        id: '@id',
        avatar: '@Image("125x125")',
        guid: '@guid',
        name: '@cname',
        content: '@cparagraph(100,300)',
        studentNumber: '@integer(1000000,9999999)',
        'sex|1': [1, 2, 3],
        'type|1': ['走读生', '住校生'],
        'className|1': ['一年级一班', '一年级二班', '二年级三班'],
        deviceCode: '@integer(100000000,999999999)',
        cardNumber: '@integer(100000000,999999999)',
        'inOrOut|1': [1, 2],
        clockIn: '@datetime',
        'status|1': [1, 2, 3],
        deviceLocation: '@ctitle(2, 10)',
        relation: [{
            id: 1,
            call: '爸爸',
            phone: '13800138000'
        },
            {
                id: 2,
                call: '妈妈',
                phone: '13800138999'
            }]
        // display_time: '@datetime',
        // pageviews: '@integer(300, 5000)'
    }
]
/**
 * 文章数据详情
 */
const articleDetailDara = Mock.mock({
    'items': articleTemplate
})
/**
 * 文章数据列表
 */
const articleListDara = Mock.mock({
    'items|30': articleTemplate
})
router.get('/list', (req, res) => {
    const items = articleListDara.items
    res.status(200).send({
        code: 20000,
        data: {
            'total': items.length,
            'items': items
        }
    })
});
router.get('/detail', (req, res) => {
    res.status(200).send({
        "code": 20000,
        "data": {
            "detail": articleDetailDara.items[0]
        }
    })
});

module.exports = router
