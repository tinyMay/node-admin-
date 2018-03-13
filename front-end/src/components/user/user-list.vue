<template id="main">
    <div><child :mods="mods"></child></div>

</template>

<script>
	import Admin from '../admin.vue';
	import userListMain from './user-list-main.vue';
	export default {
		name: 'list',
		components: {
			'child': Admin,
		},
		data() {
			return {
				mods: userListMain,
				props: {
					mods: userListMain
				},
				
				tableData: [],
				cur_page: 1,
				multipleSelection: [],
				
				roles: [{
						val: '1',
						txt: '普通用户'
					},
					{
						val: '10',
						txt: '管理员'
					},
					{
						val: '100',
						txt: '超级管理员'
					},
				],

				curRow: null,

				load: false, // loading
			}
		},

		methods: {
			
			fetchList() {
			
				 this.load = true;
					var reqParams ={
						
						cur_page :this.cur_page,
					
					};
			
	            this.func.ajaxPost(this.api.userList,reqParams,res => {
	                this.tableData = res.data.resultList;
	                this.load = false;
	            });
				
		
			},
			//分页
			handleCurrentChange(val) {
				this.cur_page = val;
				this.fetchList();
			},

			// 删除
			handleDelete(row) {
				this.func.ajaxPost(this.api.userDelete, {
					id: row.id
				}, res => {
					if (res.data.code === 200) {
						let index = this.tableData.indexOf(row);
						this.tableData.splice(index, 1);
						this.$message.success('删除成功');
					}
				});
			},

			// 修改
			changeRole(val) {
				this.func.ajaxPost(this.api.userChangeRole, {
						change_role: val,
						id: this.curRow.id
					},
					res => {
						if (res.data.code === 200) {
							this.$message.success('成功');
							this.fetchList();
						}
					}
				);

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

			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		},

		created() {
			this.fetchList();
		},

	}

</script>
