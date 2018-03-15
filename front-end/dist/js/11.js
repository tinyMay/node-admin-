webpackJsonp([11],{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(212),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    name: 'login',

    data: function data() {
        return {
            loginForm: {
                user_name: '',
                password: ''
            },
            rules: {
                user_name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },


    methods: {
        submitForm: function submitForm(param) {
            var _this = this;

            var paramArr = param.split(",");
            var formName = paramArr[0];
            var type = paramArr[1];
            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    if (type != 2) {
                        _this.func.ajaxPost(_this.api.userLogin, _this.loginForm, function (res) {

                            if (res.data.code === 200) {
                                _this.$store.commit('user', res.data.user);
                                _this.$message.success('登陆成功');
                                _this.$router.push('/admin');
                            }
                        });
                    } else {
                        _this.func.ajaxPost(_this.api.userRegister, _this.loginForm, function (res) {

                            if (res.data.code === 200) {
                                _this.$store.commit('user', res.data.user);
                                _this.$message.success('注册成功');
                                _this.$router.push('/admin');
                            }
                        });
                    }
                }
            });
        },
        resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },

    created: function created() {
        if (this.$store.state.user) {
            this.$router.push('/admin');
        }
    }
};

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('el-form', {
    ref: "loginForm",
    staticClass: "login-form",
    attrs: {
      "model": _vm.loginForm,
      "rules": _vm.rules,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "账号",
      "prop": "user_name"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.loginForm.user_name),
      callback: function($$v) {
        _vm.$set(_vm.loginForm, "user_name", $$v)
      },
      expression: "loginForm.user_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密码",
      "prop": "pass"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.loginForm.password),
      callback: function($$v) {
        _vm.$set(_vm.loginForm, "password", $$v)
      },
      expression: "loginForm.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('loginForm,1')
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.resetForm('loginForm')
      }
    }
  }, [_vm._v("重置")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "type",
      rawName: "v-type",
      value: (2),
      expression: "2"
    }],
    attrs: {
      "type": "info"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('loginForm,2')
      }
    }
  }, [_vm._v("注册")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=11.js.map