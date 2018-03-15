let moment = require('moment');

let formatData = function(rows) {
	return rows.map(row => {
		let date = moment(row.create_time).format('YYYY-MM-DD');
		return Object.assign({}, row, {
			create_time: date
		});
	});
}
module.exports = {
	formatData: formatData
}