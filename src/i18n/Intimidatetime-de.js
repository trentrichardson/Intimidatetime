/* German translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['de'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Jahr'
				},
			month: { 
					format: 'MMM',
					label: 'Monat',
					names: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'], 
					namesAbbr: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']
				},
			day: { 
					format: 'd',
					label: 'Day',
					names: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
					namesAbbr: ['So','Mo','Di','Mi','Do','Fr','Sa'],
					namesHead: ['So','Mo','Di','Mi','Do','Fr','Sa']
				},
			hour: {  
					format: 'HH',
					label: 'Stunde',
					am: ['vorm.','AM','A'],
					pm: ['nachm.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minute'
				},
			second: { 
					format: 'ss',
					label: 'Sekunde'
				},
			millisecond: { 
					format: 'l',
					label: 'Millisekunde'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekunde'
				},
			timezone: { 
					format: 'z',
					label: 'Zeitzone'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['de']);
})(window.jQuery || window.Zepto || window.$);
