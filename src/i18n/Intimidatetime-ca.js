/* Catalan translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['ca'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Any'
				},
			month: { 
					format: 'MMM',
					label: 'Mes',
					names: ['gener','febrer','març','abril','maig','juny','juliol','agost','setembre','octubre','novembre','desembre'], 
					namesAbbr: ['gen','feb','març','abr','maig','juny','jul','ag','set','oct','nov','des']
				},
			day: { 
					format: 'd',
					label: 'Dia',
					names: ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'],
					namesAbbr: ['dg','dl','dt','dc','dj','dv','ds'],
					namesHead: ['dg','dl','dt','dc','dj','dv','ds']
				},
			hour: {  
					format: 'HH',
					label: 'Hores',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minuts'
				},
			second: { 
					format: 'ss',
					label: 'Segons'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisegons'
				},
			microsecond: { 
					format: 'c',
					label: 'Microsegons'
				},
			timezone: { 
					format: 'z',
					label: 'Fus horari'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['ca']);
})(window.jQuery || window.Zepto || window.$);
