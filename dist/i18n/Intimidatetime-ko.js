/* Korean translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['ko'] = {
		format: 'yyyy-MM-dd tt h:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: '년'
				},
			month: { 
					format: 'MMM',
					label: '달',
					names: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
					namesAbbr: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
				},
			day: { 
					format: 'd',
					label: '하루',
					names: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
					namesAbbr: ['일','월','화','수','목','금','토'],
					namesHead: ['일','월','화','수','목','금','토']
				},
			hour: {  
					format: 'tt',
					label: '시',
					am: ['오전', 'AM', 'A'],
					pm: ['오후', 'PM', 'P']
				},
			minute: { 
					format: 'mm',
					label: '분'
				},
			second: { 
					format: 'ss',
					label: '초'
				},
			millisecond: { 
					format: 'l',
					label: '밀리초'
				},
			microsecond: { 
					format: 'c',
					label: '마이크로'
				},
			timezone: { 
					format: 'z',
					label: '표준 시간대'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['ko']);
})(window.jQuery || window.Zepto || window.$);
