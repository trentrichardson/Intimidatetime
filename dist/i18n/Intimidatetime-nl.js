/* Dutch translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['nl'] = {
		format: 'dd-MM-yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Jaar'
				},
			month: { 
					format: 'MMM',
					label: 'Maand',
					names: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'], 
					namesAbbr: ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec']
				},
			day: { 
					format: 'd',
					label: 'Dag',
					names: ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'],
					namesAbbr: ['zon','maa','din','woe','don','vri','zat'],
					namesHead: ['zo','ma','di','wo','do','vr','za']
				},
			hour: {  
					format: 'HH',
					label: 'Uur',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minuut'
				},
			second: { 
					format: 'ss',
					label: 'Seconde'
				},
			millisecond: { 
					format: 'l',
					label: 'Milliseconde'
				},
			microsecond: { 
					format: 'c',
					label: 'Microseconde'
				},
			timezone: { 
					format: 'z',
					label: 'Tijdzone'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['nl']);
})(window.jQuery || window.Zepto || window.$);
