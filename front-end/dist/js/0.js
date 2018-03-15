webpackJsonp([0,1],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(196),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(209),
  /* template */
  __webpack_require__(215),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = __webpack_require__(195);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'admin',
	components: {
		'my-header': _header2.default
	},

	computed: {
		user: function user() {
			return this.$store.state.user;
		}
	},

	methods: {
		// 跳转控制
		controlJump: function controlJump(target) {
			if (this.user.role < 10) {
				this.$message.warning('权限不够，努力升级');
			} else {
				this.$router.push(target);
			}
		}
	},
	data: function data() {
		return {};
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 193:
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

exports.default = {
    name: 'header',

    computed: {
        user: function user() {
            return this.$store.state.user;
        }
    },

    methods: {
        login: function login() {
            if (!this.user) {
                this.$router.push('/');
            }
        },
        logout: function logout() {
            var _this = this;

            this.func.ajaxGet(this.api.userLogout, function (res) {
                if (res.data.code === 200) {
                    _this.$store.commit('user', null);
                    _this.$router.push('/');
                }
            });
        }
    }

};

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.7413fdb.png";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(197),
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
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "admin"
  }, [_c('my-header'), _vm._v(" "), _c('div', {
    staticClass: "admin-main"
  }, [_c('div', {
    staticClass: "admin-main-right"
  }, [_c('el-menu', {
    staticClass: "top-menu",
    attrs: {
      "theme": "dark"
    }
  }, [_c('el-submenu', {
    attrs: {
      "index": "1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("用户管理")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-1"
    },
    on: {
      "click": function($event) {
        _vm.controlJump('/admin/user-list')
      }
    }
  }, [_vm._v("用户列表\n\t\t\t\t\t\t")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-2"
    },
    on: {
      "click": function($event) {
        _vm.controlJump('/admin/user-form')
      }
    }
  }, [_vm._v("新增用户\n\t\t\t\t\t\t")])], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("会员管理")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/member-list"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "2-1"
    }
  }, [_vm._v("会员列表")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/member-form"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "2-2"
    }
  }, [_vm._v("新增会员")])], 1)], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "3"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("类型管理")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/goodstype-list"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "3-1"
    }
  }, [_vm._v("类型列表")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/goodstype-form"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("新增类型")])], 1)], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "4"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("商品管理")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/goods-list"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "4-1"
    }
  }, [_vm._v("商品列表")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/goods-form"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "4-2"
    }
  }, [_vm._v("新增商品")])], 1)], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "5"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("订单管理")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/admin/order-list"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "5-1"
    }
  }, [_vm._v("订单列表")])], 1)], 2)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "admin-main-left"
  }, [_c('router-view')], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('div', {
    staticClass: "wrap header-wrap"
  }, [_vm._m(0), _c('div', {
    staticClass: "header-links"
  }, [_c('li', [_c('button', {
    staticClass: "btn",
    on: {
      "click": _vm.login
    }
  }, [_vm._v(_vm._s(_vm.user ? _vm.user.user_name : '登录'))])]), _c('li', [_c('button', {
    staticClass: "btn",
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("注销")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(194)
    }
  })])
}]}

/***/ }),

/***/ 208:
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

exports.default = {
	name: 'list-main',
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

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _admin = __webpack_require__(180);

var _admin2 = _interopRequireDefault(_admin);

var _userListMain = __webpack_require__(210);

var _userListMain2 = _interopRequireDefault(_userListMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

exports.default = {
	name: 'list',
	components: {
		'child': _admin2.default
	},
	data: function data() {
		return {
			mods: _userListMain2.default,
			props: {
				mods: _userListMain2.default
			},

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

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(208),
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

/***/ 214:
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

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('child', {
    attrs: {
      "mods": _vm.mods
    }
  })], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=0.js.map