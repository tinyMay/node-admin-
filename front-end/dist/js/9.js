webpackJsonp([9],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(208),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 196:
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
//
//
//

exports.default = {
	name: 'list',
	data: function data() {
		return {
			tableData: [],
			cur_page: 1,
			goods_name: '',

			multipleSelection: [],

			load: false // loading
		};
	},


	methods: {
		fetchList: function fetchList() {
			var _this = this;

			this.load = true;
			var reqParams = {
				goods_name: this.goods_name,
				cur_page: this.cur_page

			};

			this.func.ajaxPost(this.api.goodsList, reqParams, function (res) {
				_this.tableData = res.data.resultList;
				_this.load = false;
			});
		},


		//分页
		handleCurrentChange: function handleCurrentChange(val) {
			this.cur_page = val;
			this.fetchList();
		},


		//搜索
		search: function search() {

			this.fetchList();
		},

		// 删除
		handleDelete: function handleDelete(row) {
			var _this2 = this;

			this.func.ajaxPost(this.api.goodsDelete, {
				goods_id: row.goods_id
			}, function (res) {
				if (res.data.code === 200) {
					var index = _this2.tableData.indexOf(row);
					_this2.tableData.splice(index, 1);
					_this2.$message.success('删除成功');
				}
			});
		},


		// 修改
		editGoods: function editGoods(row) {
			this.$router.push({
				path: '/admin/goods-form',
				query: {
					goods_id: row.goods_id
				}
			});
		},
		handleSelectionChange: function handleSelectionChange(val) {
			this.multipleSelection = val;
		}
	},

	created: function created() {
		this.fetchList();
	}
};

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "admin-list"
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "30px"
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("商品管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("商品列表")])], 1)], 1), _vm._v(" "), _c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "筛选商品名称"
    },
    model: {
      value: (_vm.goods_name),
      callback: function($$v) {
        _vm.goods_name = $$v
      },
      expression: "goods_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/goods-form"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "success"
    }
  }, [_vm._v("新增商品")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "goods_name",
      "label": "商品名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "价格"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                    " + _vm._s(scope.row.goods_price) + "元\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "goods_typename",
      "label": "商品类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "goods_details",
      "label": "商品详情"
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
        }, [_vm._v("修改商品\n                    ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.row)
            }
          }
        }, [_vm._v("删除商品\n                    ")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "layout": "prev, pager, next",
      "total": 500
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=9.js.map