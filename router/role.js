const express = require('express')
const router = express.Router()
var formidable = require('formidable'); //文件上传
const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random;
const fs = require('fs-extra')

const {json} = require('body-parser')
const {response} = require('express')

/**
 * 区域信息
 */
let SchoolAttendanceDara;
SchoolAttendanceDara = Mock.mock({
  'permissionsGroup': [
    {
      'id': 1,
      'name': 'schoolAttendance',
      'label': '基础信息管理',
      'status': true,
      'children': [
        {
          'id': 2,
          'name': 'schoolAttendance',
          'label': '行政区划管理',
          'status': true,
          'permission': [
            {
              'id': 3,
              'label': '新增行政区划',
              'name': 'add',
              'status': true
            },
            {
              'id': 4,
              'label': '修改行政区划',
              'name': 'export',
              'status': true
            },
            {
              'id': 41,
              'label': '删除行政区划',
              'name': 'export',
              'status': true
            }
          ]
        },
        {
          'id': 5,
          'name': 'schoolBusAttendance2',
          'label': '学校管理',
          'status': true,
          'children': [
            {
              'id': 6,
              'label': '学校列表',
              'name': 'add',
              'status': true,
              'children': [
                {
                  'id': 61,
                  'label': '新增学校',
                  'name': 'add',
                  'status': true
                },
                {
                  'id': 62,
                  'label': '导入学校',
                  'name': 'export',
                  'status': true
                },
                {
                  'id': 63,
                  'label': '导出学校',
                  'name': 'export',
                  'status': true
                },
                {
                  'id': 64,
                  'label': '修改学校',
                  'name': 'export',
                  'status': true
                },
                {
                  'id': 65,
                  'label': '删除学校',
                  'name': 'export',
                  'status': true
                }
              ]
            },
            {
              'id': 7,
              'label': '学校管理员列表',
              'name': 'export',
              'status': true,
              'children': [
                {
                  'id': 72,
                  'label': '修改学校管理员密码',
                  'name': 'export',
                  'status': true
                },
                {
                  'id': 73,
                  'label': '导出学校管理员列表',
                  'name': 'export',
                  'status': true
                },
                {
                  'id': 74,
                  'label': '编辑学校管理员信息',
                  'name': 'export',
                  'status': true
                },
                {
                  'id': 75,
                  'label': '删除学校管理员',
                  'name': 'export',
                  'status': true
                }
              ]
            }
          ]
        },
        {
          'id': 8,
          'name': 'schoolBusAttendance2',
          'label': '校车考勤',
          'status': true,
          'children': [
            {
              'id': 9,
              'label': '新增',
              'name': 'add',
              'status': true
            }, {
              'id': 10,
              'label': '导出',
              'name': 'export',
              'status': true
            }
          ]
        },
        {
          'id': 11,
          'name': 'schoolBusAttendance2',
          'label': '校车考勤',
          'status': true,
          'children': [
            {
              'id': 12,
              'label': '新增',
              'name': 'add',
              'status': true
            }, {
              'id': 13,
              'label': '导出',
              'name': 'export',
              'status': true
            }
          ]
        }
      ]
    }
  ],
  'items|20': [{
    id: '@id',
    // avatar: '@Image("125x125")',
    // guid: '@guid',
    // name: '@cname',
    // studentNumber: '@integer(1000000,9999999)',
    // 'sex|1': ['男', '女',],
    'roleName|1': ['教育局管理员', '机构管理员', '学校管理员', '专家', '教师'],
    'permissions': [
      4,5
    ],

    'roleGroup': [
      {
        label: '文章模块',
        value: 1
      },
      {
        label: '学校管理模块',
        value: 2
      },
      // {
      //   label: '机构管理模块',
      //   value: 3
      // },
      // {
      //   label: '项目模块',
      //   value: 4
      // },
      // {
      //   label: '系统设置模块',
      //   value: 5
      // },
      // {
      //   label: 'XXX模块',
      //   value: 6
      // }
    ],
    'roleGroupName|1':['文章模块','学校管理模块','机构管理模块','项目模块','系统设置模块','XXX模块'],
    'AllRoleGroup': [
      {
        label: '文章模块',
        value: 1
      }, {
        label: '学校管理模块',
        value: 2
      }, {
        label: '机构管理模块',
        value: 3
      }, {
        label: '项目模块',
        value: 4
      }, {
        label: '系统设置模块',
        value: 5
      }, {
        label: 'XXX模块',
        value: 6
      }
    ],
    // 'type|1': ['走读生', '住校生'],
    // 'className|1': ['一年级一班', '一年级二班', '二年级三班'],
    // deviceCode: '@integer(100000000,999999999)',
    // cardNumber: '@integer(100000000,999999999)',
    // 'inOrOut|1': [1, 2],
    // clockIn: '@datetime',
    // 'status|1': [1, 2, 3],
    // deviceLocation: '@ctitle(2, 10)',
    // regional: '@county',
    // postCode: '@zip',
    // 'schoolNumber|1': ['小学', '中学'],
    // 'relationship|1': ['公办', '私立'],
    // 'subject|1': ['语文', '数学', '英语', '地理', '物理', '化学', '体育', '历史', '生物'],
    // schoolName: '@county',
    // relation: [
    //   {
    //     id: 1,
    //     call: '爸爸',
    //     phone: '13800138000'
    //   },
    //   {
    //     id: 2,
    //     call: '妈妈',
    //     phone: '13800138999'
    //   }]
    // display_time: '@datetime',
    // pageviews: '@integer(300, 5000)'
  }]
});
router.post('/getRoleList', (req, res) => {
  const items = SchoolAttendanceDara.items
  const permissionsGroup = SchoolAttendanceDara.permissionsGroup
  res.status(200).send({
    code: 200,
    data: {
      'total': items.length,
      'items': items,
      'permissionsGroup': permissionsGroup
    }
  })
});
router.post('/addRole', (req, res) => {
  res.status(200).send({
    code: 200,
    data: true,
    msg: "creat successfull"
  })
});


module.exports = router
