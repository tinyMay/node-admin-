webpackJsonp([2],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(217),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 203:
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
    name: 'form',
    data: function data() {
        return {
            form: {
                name: '',
                pass: '',
                role: ''
            }
        };
    },

    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            if (!this.form.name) {
                this.$message.warning('请填写完整信息');
                return;
            }

            this.func.ajaxPost(this.api.userAdd, this.form, function (res) {
                if (res.data.code === 200) {
                    _this.$message.success('操作成功');
                    _this.$router.push('/admin/user-list');
                }
            });
        },
        onCancel: function onCancel() {
            this.$router.push('/admin/user-list');
        }
    }

};

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "admin-list"
  }, [_c('div', {
    staticStyle: {
      "margin-top": "30px"
    }
  }), _vm._v(" "), _c('el-form', {
    ref: "form",
    staticClass: "form-contain",
    attrs: {
      "model": _vm.form,
      "label-width": "80px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密码"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.pass),
      callback: function($$v) {
        _vm.$set(_vm.form, "pass", $$v)
      },
      expression: "form.pass"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "用户权限"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.role),
      callback: function($$v) {
        _vm.$set(_vm.form, "role", $$v)
      },
      expression: "form.role"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("普通用户")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 10
    }
  }, [_vm._v("管理员")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 100
    }
  }, [_vm._v("超级管理员")])], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("添加用户")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.onCancel
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=2.js.map