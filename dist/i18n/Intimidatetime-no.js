/* Norwegian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['no'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'År'
				},
			month: { 
					format: 'MMM',
					label: 'Måned',
					names: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'], 
					namesAbbr: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des']
				},
			day: { 
					format: 'd',
					label: 'Dag',
					names: ['søn','man','tir','ons','tor','fre','lør'],
					namesAbbr: ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'],
					namesHead: ['sø','ma','ti','on','to','fr','lø']
				},
			hour: {  
					format: 'HH',
					label: 'Time',
					am: ['am','AM','A'],
					pm: ['pm','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minutt'
				},
			second: { 
					format: 'ss',
					label: 'Sekund'
				},
			millisecond: { 
					format: 'l',
					label: 'Millisekund'
				},
			microsecond: { 
					format: 'c',
					label: 'mikrosekund'
				},
			timezone: { 
					format: 'z',
					label: 'Tidssone'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['no']);
})(window.jQuery || window.Zepto || window.$);
