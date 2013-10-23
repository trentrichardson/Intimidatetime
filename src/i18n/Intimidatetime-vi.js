/* Vietnamese translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['vi'] = {
		format: 'dd/MM/yyyy H:m',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Năm'
				},
			month: { 
					format: 'MMM',
					label: 'Tháng',
					names: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
					namesAbbr: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
				},
			day: { 
					format: 'd',
					label: 'Ngày',
					names: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
					namesAbbr: ['CN','T2','T3','T4','T5','T6','T7'],
					namesHead: ['CN','T2','T3','T4','T5','T6','T7']
				},
			hour: {  
					format: 'H',
					label: 'Giờ',
					am: ['SA','AM','A'],
					pm: ['CH','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Phút'
				},
			second: { 
					format: 'ss',
					label: 'Giây'
				},
			millisecond: { 
					format: 'l',
					label: 'Phần nghìn giây'
				},
			microsecond: { 
					format: 'c',
					label: 'Miligiây'
				},
			timezone: { 
					format: 'z',
					label: 'Múi giờ'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['vi']);
})(window.jQuery || window.Zepto || window.$);
