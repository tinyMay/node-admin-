webpackJsonp([10],{

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(214),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 195:
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
				goods_id: undefined,
				goods_name: '',
				goods_price: 0,
				onsale: '',
				inventory: 0,
				imgs: '',
				goods_type: '',
				goods_typename: ''

			},
			goodsTpyeList: "",
			dialogImageUrl: '',
			dialogVisible: false
		};
	},


	methods: {
		onSubmit: function onSubmit() {
			var _this = this;

			if (!this.form.goods_name) {
				this.$message.warning('请填写完整信息');
				return;
			}

			this.func.ajaxPost(this.api.goodsAdd, this.form, function (res) {
				if (res.data.code === 200) {
					_this.$message.success('操作成功');
					_this.$router.push('/admin/goods-list');
				}
			});
		},
		goodsType: function goodsType() {
			var _this2 = this;

			this.func.ajaxPost(this.api.goodsType, this.form, function (res) {
				if (res.data.code === 200) {
					_this2.goodsTpyeList = res.data.resultList;
					console.log(res.data.resultList);
				}
			});
		},
		onCancel: function onCancel() {
			this.$router.push('/admin/goods-list');
		},
		handleRemove: function handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.form.imgs = file.url;
			//       this.dialogVisible = true;
		}
	},

	created: function created() {
		var _this3 = this;

		var goods_id = this.$route.query.goods_id;

		if (goods_id) {
			this.isNew = 0;

			this.func.ajaxPost(this.api.goodsDetail, {
				goods_id: goods_id
			}, function (res) {
				_this3.form = res.data.resultList;
				_this3.form.goods_id = res.data.resultList.goods_id;
			});
		}

		this.goodsType();
	}
};

/***/ }),

/***/ 214:
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
      "label": "商品名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.goods_name),
      callback: function($$v) {
        _vm.$set(_vm.form, "goods_name", $$v)
      },
      expression: "form.goods_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品价格"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入内容",
      "type": "number"
    },
    model: {
      value: (_vm.form.goods_price),
      callback: function($$v) {
        _vm.$set(_vm.form, "goods_price", $$v)
      },
      expression: "form.goods_price"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品库存"
    }
  }, [_c('el-input-number', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.form.inventory),
      callback: function($$v) {
        _vm.$set(_vm.form, "inventory", $$v)
      },
      expression: "form.inventory"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品类型"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择商品类型"
    },
    model: {
      value: (_vm.form.goods_typename),
      callback: function($$v) {
        _vm.$set(_vm.form, "goods_typename", $$v)
      },
      expression: "form.goods_typename"
    }
  }, _vm._l((_vm.goodsTpyeList), function(item) {
    return _c('el-option', {
      key: item.goods_typename,
      attrs: {
        "label": item.goods_typename,
        "value": item.goods_typename
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品状态"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.onsale),
      callback: function($$v) {
        _vm.$set(_vm.form, "onsale", $$v)
      },
      expression: "form.onsale"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("下架")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("上架")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品详情"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 3,
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.form.goods_details),
      callback: function($$v) {
        _vm.$set(_vm.form, "goods_details", $$v)
      },
      expression: "form.goods_details"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "上传图片"
    }
  }, [_c('el-upload', {
    attrs: {
      "action": "https://jsonplaceholder.typicode.com/posts/",
      "list-type": "picture-card",
      "on-preview": _vm.handlePictureCardPreview,
      "on-remove": _vm.handleRemove
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "size": "tiny"
    },
    model: {
      value: (_vm.dialogVisible),
      callback: function($$v) {
        _vm.dialogVisible = $$v
      },
      expression: "dialogVisible"
    }
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "src": _vm.dialogImageUrl,
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v(_vm._s(_vm.isNew ? '添加商品' : '修改商品'))]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.onCancel
    }
  }, [_vm._v("取消")])], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=10.js.map