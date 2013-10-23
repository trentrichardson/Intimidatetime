/* Croatian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['hr'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Godina'
				},
			month: { 
					format: 'MMM',
					label: 'Mjesec',
					names: ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'], 
					namesAbbr: ['Sij','Velj','Ožu','Tra','Svi','Lip','Srp','Kol','Ruj','Lis','Stu','Pro']
				},
			day: { 
					format: 'd',
					label: 'Dan',
					names: ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'],
					namesAbbr: ['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],
					namesHead: ['Ne','Po','Ut','Sr','Če','Pe','Su']
				},
			hour: {  
					format: 'HH',
					label: 'Sati',
					am: ['a.m.','AM','A'],
					pm: ['p.m.','PM','P']
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
					label: 'Milisekunde'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekunde'
				},
			timezone: { 
					format: 'z',
					label: 'Vremenska zona'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['hr']);
})(window.jQuery || window.Zepto || window.$);
