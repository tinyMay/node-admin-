webpackJsonp([5],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(216),
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
//
//
//
//
//
//
//
//
//
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
			member_phone: '',
			multipleSelection: [],

			membership_levels: [{
				val: '1',
				txt: '普通会员'
			}, {
				val: '10',
				txt: '金牌会员'
			}, {
				val: '100',
				txt: 'VIP会员'
			}],

			curRow: null,

			load: false // loading
		};
	},


	methods: {

		//会员转换
		formatLevel: function formatLevel(row, column) {
			return row.membership_level == 1 ? '普通会员' : row.membership_level == 10 ? '金牌会员' : row.membership_level == 100 ? 'VIP会员' : '未知';
		},

		//列表数据

		fetchList: function fetchList() {
			var _this = this;

			this.load = true;
			var reqParams = {

				member_phone: this.member_phone,
				cur_page: this.cur_page

			};

			this.func.ajaxPost(this.api.memberList, reqParams, function (res) {
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


		// 修改
		editMember: function editMember(row) {
			console.log(row);
			this.$router.push({
				path: '/admin/member-form',
				query: {
					member_id: row.member_id
				}
			});
		},


		// 删除
		handleDelete: function handleDelete(row) {
			var _this2 = this;

			this.func.ajaxPost(this.api.memberDelete, {
				member_id: row.member_id
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

			this.func.ajaxPost(this.api.memberChangeRole, {
				change_role: val,
				member_id: this.curRow.member_id
			}, function (res) {
				if (res.data.code === 200) {
					_this3.$message.success('成功');
					_this3.fetchList();
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

/***/ 216:
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
  }, [_vm._v("首页")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("会员管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("会员列表")])], 1)], 1), _vm._v(" "), _c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "筛选手机号码"
    },
    model: {
      value: (_vm.member_phone),
      callback: function($$v) {
        _vm.member_phone = $$v
      },
      expression: "member_phone"
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
      "to": "/admin/member-form"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "success"
    }
  }, [_vm._v("新增会员")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "member_name",
      "label": "会员名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "member_phone",
      "label": "手机号码"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "recommendation_code",
      "label": "推荐码"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "membership_level",
      "label": "等级",
      "formatter": _vm.formatLevel,
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "sortable": "",
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
        }, [_vm._v("\n                            变更等级"), _c('i', {
          staticClass: "el-icon-caret-bottom el-icon--right"
        })]), _vm._v(" "), _c('el-dropdown-menu', {
          attrs: {
            "slot": "dropdown"
          },
          slot: "dropdown"
        }, _vm._l((_vm.membership_levels), function(membership_level) {
          return _c('el-dropdown-item', {
            key: membership_level.val,
            attrs: {
              "command": membership_level.val,
              "disabled": scope.row.membership_level == membership_level.txt
            }
          }, [_vm._v(_vm._s(membership_level.txt) + "\n                            ")])
        }))], 1), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.editMember(scope.row)
            }
          }
        }, [_vm._v("修改会员\n                    ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.row)
            }
          }
        }, [_vm._v("删除\n                    ")])]
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
//# sourceMappingURL=5.js.map