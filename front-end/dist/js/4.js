webpackJsonp([4],{

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(218),
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
//
//
//
//
//

exports.default = {
	name: 'list',

	data: function data() {
		return {
			isNew: 1, // 是否是添加
			tableData: [],
			multipleSelection: [],
			load: false // loading

		};
	},


	methods: {
		onCancel: function onCancel() {
			this.$router.push('/admin/order-list');
		},
		handleSelectionChange: function handleSelectionChange(val) {
			this.multipleSelection = val;
		}
	},

	created: function created() {
		var _this = this;

		var member_id = this.$route.query.member_id;

		if (member_id) {
			this.isNew = 0;

			this.func.ajaxPost(this.api.orderDetail, {
				member_id: member_id
			}, function (res) {

				_this.tableData = res.data.resultList;
				_this.load = false;
			});
		}
	}
};

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    ref: "form",
    staticClass: "form-contain",
    attrs: {
      "model": _vm.form,
      "label-width": "80px"
    }
  }, [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.load),
      expression: "load"
    }],
    ref: "multipleTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": "",
      "tooltip-effect": "dark"
    },
    on: {
      "selection-change": _vm.handleSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_id",
      "label": "订单号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "member_name",
      "label": "用户名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "members_addr",
      "label": "收货地址"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "goods_name",
      "label": "产品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "产品价格"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                    " + _vm._s(scope.row.goods_price) + "元\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "purchase_quantity",
      "label": "购买数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "state_name",
      "label": "订单状态"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "160",
      "label": "添加日期"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-icon', {
          attrs: {
            "name": "time"
          }
        }), _vm._v(" "), _c('span', {
          staticStyle: {
            "margin-left": "10px"
          }
        }, [_vm._v(_vm._s(scope.row.create_time))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "300"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.editGoods(scope.row)
            }
          }
        }, [_vm._v("修改订单\n                    ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.row)
            }
          }
        }, [_vm._v("删除订单\n                    ")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
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
//# sourceMappingURL=4.js.map