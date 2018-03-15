webpackJsonp([3],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(202),
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

/***/ 202:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            state: '',
            member_name: '',
            multipleSelection: [],

            load: false // loading
        };
    },


    methods: {
        fetchList: function fetchList() {
            var _this = this;

            this.load = true;
            var reqParams = {
                state: this.state,
                member_name: this.member_name,
                cur_page: this.cur_page

            };
            console.log(this.state);
            this.func.ajaxPost(this.api.orderList, reqParams, function (res) {

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

            this.func.ajaxPost(this.api.orderDelete, { order_id: row.order_id }, function (res) {
                if (res.data.code === 200) {
                    var index = _this2.tableData.indexOf(row);
                    _this2.tableData.splice(index, 1);
                    _this2.$message.success('删除成功');
                }
            });
        },


        // 修改
        editGoods: function editGoods(row) {
            this.$router.push({ path: '/admin/order-form', query: { member_id: row.member_id } });
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

/***/ 215:
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
  }, [_vm._v("首页")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("订单管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("订单列表")])], 1)], 1), _vm._v(" "), _c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "订单状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择订单状态"
    },
    model: {
      value: (_vm.state),
      callback: function($$v) {
        _vm.state = $$v
      },
      expression: "state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "加入购物车",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已付款/待发货",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "待收货",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已完成",
      "value": "3"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "筛选用户名称"
    },
    model: {
      value: (_vm.member_name),
      callback: function($$v) {
        _vm.member_name = $$v
      },
      expression: "member_name"
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
      "to": "/admin/order-form"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "success"
    }
  }, [_vm._v("新增订单")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
        }, [_vm._v("查看订单\n                    ")]), _vm._v(" "), _c('el-button', {
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
//# sourceMappingURL=3.js.map