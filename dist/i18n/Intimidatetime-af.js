/* Afrikaans translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['af'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Jaar'
				},
			month: { 
					format: 'MMM',
					label: 'Maand',
					names: ['Januarie','Februarie','Maart','April','Mei','Junie','Julie','Augustus','September','Oktober','November','Desember'], 
					namesAbbr: ['Jan','Feb','Mrt','Apr','Mei','Jun','Jul','Aug','Sep','Okt','Nov','Des']
				},
			day: { 
					format: 'd',
					label: 'Dag',
					names: ['Sondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrydag','Saterdag'],
					namesAbbr: ['Son','Maa','Din','Woe','Don','Vry','Sat'],
					namesHead: ['So','Ma','Di','Wo','Do','Vr','Sa']
				},
			hour: {  
					format: 'HH',
					label: 'Ure ',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minute'
				},
			second: { 
					format: 'ss',
					label: 'Sekondes'
				},
			millisecond: { 
					format: 'l',
					label: 'Millisekondes'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekondes'
				},
			timezone: { 
					format: 'z',
					label: 'Tydsone'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['af']);
})(window.jQuery || window.Zepto || window.$);
