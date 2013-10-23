/* Romanian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['ro'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'An'
				},
			month: { 
					format: 'MMM',
					label: 'Lună',
					names: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'], 
					namesAbbr: ['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct','Nov','Dec']
				},
			day: { 
					format: 'd',
					label: 'Zi',
					names: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
					namesAbbr: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
					namesHead: ['Du','Lu','Ma','Mi','Jo','Vi','Sâ']
				},
			hour: {  
					format: 'HH',
					label: 'Ore',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minute'
				},
			second: { 
					format: 'ss',
					label: 'Secunde'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisecunde'
				},
			microsecond: { 
					format: 'c',
					label: 'Microsecunde'
				},
			timezone: { 
					format: 'z',
					label: 'Fus orar'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['ro']);
})(window.jQuery || window.Zepto || window.$);
