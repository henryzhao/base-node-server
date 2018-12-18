define({ "api": [
  {
    "type": "get",
    "url": "/api/data/listWithC",
    "title": "查询所有带经纬度信息的数据",
    "description": "<p>查询所有带经纬度信息的数据</p>",
    "name": "listWithC",
    "group": "Data",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: result\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/data/listWithC"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/data.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/data/listWithCById",
    "title": "通过Id查询带经纬度信息的数据",
    "description": "<p>通过Id查询带经纬度信息的数据</p>",
    "name": "listWithCById",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "data_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: result\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/data/listWithCById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/data.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/data/listWithoutC",
    "title": "查询所有位置数据",
    "description": "<p>查询所有位置数据</p>",
    "name": "listWithoutC",
    "group": "Data",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: result\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/data/listWithoutC"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/data.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/data/listWithoutCById",
    "title": "通过Id查询位置数据",
    "description": "<p>通过Id查询位置数据</p>",
    "name": "listWithoutCById",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "personId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: result\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/data/listWithoutCById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/data.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/api/data/save",
    "title": "存入单条带经纬度的数据",
    "description": "<p>存入单条带经纬度的数据</p>",
    "name": "save",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "data_id",
            "description": "<p>data_id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>type</p>"
          },
          {
            "group": "Parameter",
            "type": "double[]",
            "optional": false,
            "field": "location",
            "description": "<p>[double,double]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: '数据添加成功'\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/data/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/data.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/api/data/saveWithout",
    "title": "存入单条不带经纬度的数据",
    "description": "<p>存入单条不带经纬度的数据</p>",
    "name": "saveWithout",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "person_id",
            "description": "<p>人员编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>first_name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>last_name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "race",
            "description": "<p>race</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: '数据添加成功'\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/data/saveWithout"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/data.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/api/user/logout",
    "title": "用户注销",
    "description": "<p>用户注销</p>",
    "name": "logout",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: '退出成功'\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/user/logout"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userpassword",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: '注册成功'\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/user/register"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "user_login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userpassword",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code: Constant.RESULT.SUCCESS.code,\n    msg: Constant.RESULT.SUCCESS.msg,\n    data: '登录成功',\n    token: token\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3390/api/user/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  }
] });
