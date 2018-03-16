webpackJsonp([0],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(207),
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

var _header = __webpack_require__(206);

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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.7413fdb.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(211),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 207:
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

/***/ 211:
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
      "src": __webpack_require__(205)
    }
  })])
}]}

/***/ })

});
//# sourceMappingURL=0.js.map