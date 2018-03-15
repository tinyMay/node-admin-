webpackJsonp([7],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(81)(
  /* script */
  __webpack_require__(198),
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

/***/ 198:
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


exports.default = {
    name: 'list',
    data: function data() {
        return {
            tableData: [],
            cur_page: 1,
            goods_typename: '',

            multipleSelection: [],

            load: false // loading
        };
    },


    methods: {
        fetchList: function fetchList() {
            var _this = this;

            this.load = true;
            var reqParams = {
                goods_typename: this.goods_typename,
                cur_page: this.cur_page

            };

            this.func.ajaxPost(this.api.goodstypeList, reqParams, function (res) {
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

            this.func.ajaxPost(this.api.goodstypeDelete, { goods_type: row.goods_type }, function (res) {
                if (res.data.code === 200) {
                    var index = _this2.tableData.indexOf(row);
                    _this2.tableData.splice(index, 1);
                    _this2.$message.success('删除成功');
                }
            });
        },


        //            // 修改
        //            editGoods (row) {
        //                this.$router.push({path: '/admin/goodstype-form', query: {id: row.id}});
        //            },


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
  }, [_vm._v("首页")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("类型管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("类型列表")])], 1)], 1), _vm._v(" "), _c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "筛选类型名称"
    },
    model: {
      value: (_vm.goods_typename),
      callback: function($$v) {
        _vm.goods_typename = $$v
      },
      expression: "goods_typename"
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
      "to": "/admin/goodstype-form"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "success"
    }
  }, [_vm._v("新增类型")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "goods_typename",
      "label": "类型名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "goods_type",
      "label": "类型"
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
      "prop": "remarks",
      "label": "备注"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.row)
            }
          }
        }, [_vm._v("删除类型\n                    ")])]
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
//# sourceMappingURL=7.js.map