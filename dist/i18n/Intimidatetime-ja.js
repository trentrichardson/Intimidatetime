/* Japanese translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['ja'] = {
		format: 'yyyy/MM/dd HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: '年'
				},
			month: { 
					format: 'MMM',
					label: '月',
					names: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					namesAbbr: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				},
			day: { 
					format: 'd',
					label: 'デイ',
					names: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
					namesAbbr: ['日','月','火','水','木','金','土'],
					namesHead: ['日','月','火','水','木','金','土']
				},
			hour: {  
					format: 'HH',
					label: '時',
					am: ['午前', 'AM', 'A'],
					pm: ['午後', 'PM', 'P']
				},
			minute: { 
					format: 'mm',
					label: '分'
				},
			second: { 
					format: 'ss',
					label: '秒'
				},
			millisecond: { 
					format: 'l',
					label: 'ミリ秒'
				},
			microsecond: { 
					format: 'c',
					label: 'マイクロ秒'
				},
			timezone: { 
					format: 'z',
					label: 'タイムゾーン'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['ja']);
})(window.jQuery || window.Zepto || window.$);
