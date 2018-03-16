webpackJsonp([1],{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(204),
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

/***/ 204:
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

exports.default = {
	name: 'list',
	data: function data() {
		return {
			tableData: [],
			cur_page: 1,
			multipleSelection: [],

			roles: [{
				val: '1',
				txt: '普通用户'
			}, {
				val: '10',
				txt: '管理员'
			}, {
				val: '100',
				txt: '超级管理员'
			}],

			curRow: null,

			load: false // loading
		};
	},


	methods: {
		fetchList: function fetchList() {
			var _this = this;

			this.load = true;
			var reqParams = {

				cur_page: this.cur_page

			};

			this.func.ajaxPost(this.api.userList, reqParams, function (res) {
				_this.tableData = res.data.resultList;
				_this.load = false;
			});
		},

		//分页
		handleCurrentChange: function handleCurrentChange(val) {
			this.cur_page = val;
			this.fetchList();
		},


		// 删除
		handleDelete: function handleDelete(row) {
			var _this2 = this;

			this.func.ajaxPost(this.api.userDelete, {
				id: row.id
			}, function (res) {
				if (res.data.code === 200) {
					var index = _this2.tableData.indexOf(row);
					_this2.tableData.splice(index, 1);
					_this2.$message.success('删除成功');
				}
			});
		},


		// 修改
		changeRole: function changeRole(val) {
			var _this3 = this;

			this.func.ajaxPost(this.api.userChangeRole, {
				change_role: val,
				id: this.curRow.id
			}, function (res) {
				if (res.data.code === 200) {
					_this3.$message.success('成功');
					_this3.fetchList();
				}
			});
		},

		//
		//			deleteMulti() {
		//				let multi = this.multipleSelection
		//				let id = multi.map(el => {
		//					return el.id;
		//				});
		//
		//				this.func.ajaxPost(this.api.userDeleteMulti, {
		//					id
		//				}, res => {
		//					if (res.data.code === 200) {
		//						this.$message.success('删除成功');
		//						multi.forEach(el => {
		//							let i = this.tableData.indexOf(el);
		//							this.tableData.splice(i, 1);
		//						});
		//					}
		//				});
		//			},

		handleSelectionChange: function handleSelectionChange(val) {
			this.multipleSelection = val;
		}
	},

	created: function created() {
		this.fetchList();
	}
};

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "admin-list"
  }, [_c('div', {
    staticClass: "crumbs"
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
  }, [_vm._v("首页")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("用户管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("用户列表")])], 1)], 1), _vm._v(" "), _c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/admin/user-form"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "success"
    }
  }, [_vm._v("新增用户")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "user_name",
      "label": "用户名"
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
      "label": "权限"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n\t\t\t                    " + _vm._s(scope.row.role) + "\n\t\t\t    ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-dropdown', {
          attrs: {
            "trigger": "click"
          },
          on: {
            "command": _vm.changeRole
          }
        }, [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.curRow = scope.row
            }
          }
        }, [_vm._v("\n\t\t                    修改权限"), _c('i', {
          staticClass: "el-icon-caret-bottom el-icon--right"
        })]), _vm._v(" "), _c('el-dropdown-menu', {
          attrs: {
            "slot": "dropdown"
          },
          slot: "dropdown"
        }, _vm._l((_vm.roles), function(role) {
          return _c('el-dropdown-item', {
            key: role.val,
            attrs: {
              "command": role.val,
              "disabled": scope.row.role == role.txt
            }
          }, [_vm._v(_vm._s(role.txt) + "\n\t\t                    ")])
        }))], 1), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.row)
            }
          }
        }, [_vm._v("删除用户\n\t\t            ")])]
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
//# sourceMappingURL=1.js.map