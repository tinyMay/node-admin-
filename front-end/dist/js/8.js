webpackJsonp([8],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(222),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 201:
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

exports.default = {
	name: 'form',

	data: function data() {
		return {
			isNew: 1, // 是否是添加
			form: {
				goods_type: undefined,
				goods_typename: '',
				remarks: ''

			}
		};
	},

	methods: {
		onSubmit: function onSubmit() {
			var _this = this;

			if (!this.form.goods_typename) {
				this.$message.warning('请填写完整信息');
				return;
			}

			this.func.ajaxPost(this.api.goodstypeAdd, this.form, function (res) {
				if (res.data.code === 200) {
					_this.$message.success('操作成功');
					_this.$router.push('/admin/goodstype-list');
				}
			});
		},
		onCancel: function onCancel() {
			this.$router.push('/admin/goodstype-list');
		}
	},

	created: function created() {
		var _this2 = this;

		var goods_type = this.$route.query.goods_type;

		if (goods_type) {
			this.isNew = 0;

			this.func.ajaxPost(this.api.goodsDetail, {
				goods_type: goods_type
			}, function (res) {
				_this2.form = res.data.resultList;
				_this2.form.goods_type = res.data.resultList.goods_type;
			});
		}
	}
};

/***/ }),

/***/ 222:
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
      "label": "类型名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.goods_typename),
      callback: function($$v) {
        _vm.$set(_vm.form, "goods_typename", $$v)
      },
      expression: "form.goods_typename"
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
  }, [_vm._v(_vm._s(_vm.isNew ? '添加类型' : '修改类型'))]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.onCancel
    }
  }, [_vm._v("取消")])], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=8.js.map