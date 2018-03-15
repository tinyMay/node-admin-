webpackJsonp([6],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(213),
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
				member_name: '',
				member_phone: '',
				remarks: '',
				recommendation_code: '',
				membership_level: '',
				member_address1: '',
				member_address2: '',
				member_address3: ''
			}
		};
	},

	methods: {
		onSubmit: function onSubmit() {
			var _this = this;

			if (!this.form.member_name) {
				this.$message.warning('请填写完整信息');
				return;
			}

			console.log(this.form);

			this.func.ajaxPost(this.api.memberAdd, this.form, function (res) {

				if (res.data.code === 200) {
					_this.$message.success('操作成功');
					_this.$router.push('/admin/member-list');
				}
			});
		},
		onCancel: function onCancel() {
			this.$router.push('/admin/member-list');
		}
	},

	created: function created() {
		var _this2 = this;

		var member_id = this.$route.query.member_id;

		if (member_id) {
			this.isNew = 0;

			this.func.ajaxPost(this.api.memberDetail, {
				member_id: member_id
			}, function (res) {
				_this2.form = res.data.resultList;
				_this2.form.member_id = res.data.resultList.member_id;
			});
		}
	}
};

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    ref: "form",
    staticClass: "form-contain",
    attrs: {
      "model": _vm.form,
      "label-width": "80px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "会员名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.member_name),
      callback: function($$v) {
        _vm.$set(_vm.form, "member_name", $$v)
      },
      expression: "form.member_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "手机号码"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.member_phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "member_phone", $$v)
      },
      expression: "form.member_phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "推荐码"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.recommendation_code),
      callback: function($$v) {
        _vm.$set(_vm.form, "recommendation_code", $$v)
      },
      expression: "form.recommendation_code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "会员等级"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.membership_level),
      callback: function($$v) {
        _vm.$set(_vm.form, "membership_level", $$v)
      },
      expression: "form.membership_level"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("普通会员")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 10
    }
  }, [_vm._v("金牌会员")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 100
    }
  }, [_vm._v("VIP会员")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货地址1"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.member_address1),
      callback: function($$v) {
        _vm.$set(_vm.form, "member_address1", $$v)
      },
      expression: "form.member_address1"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货地址2"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.member_address2),
      callback: function($$v) {
        _vm.$set(_vm.form, "member_address2", $$v)
      },
      expression: "form.member_address2"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货地址3"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.member_address3),
      callback: function($$v) {
        _vm.$set(_vm.form, "member_address3", $$v)
      },
      expression: "form.member_address3"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 3,
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.form.remarks),
      callback: function($$v) {
        _vm.$set(_vm.form, "remarks", $$v)
      },
      expression: "form.remarks"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("添加会员")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.onCancel
    }
  }, [_vm._v("取消")])], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=6.js.map