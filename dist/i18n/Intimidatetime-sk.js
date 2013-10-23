/* Slovak translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['sk'] = {
		format: 'dd.MM.yyyy H:m',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Rok'
				},
			month: { 
					format: 'MMM',
					label: 'Mesiac',
					names: ['január','február','marec','apríl','máj','jún','júl','august','september','október','november','december'],
					namesAbbr: ['Jan','Feb','Mar','Apr','Máj','Jún','Júl','Aug','Sep','Okt','Nov','Dec']
				},
			day: { 
					format: 'd',
					label: 'Deň',
					names: ['nedeľa','pondelok','utorok','streda','štvrtok','piatok','sobota'],
					namesAbbr: ['Ned','Pon','Uto','Str','Štv','Pia','Sob'],
					namesHead: ['Ne','Po','Ut','St','Št','Pia','So']
				},
			hour: {  
					format: 'H',
					label: 'Hodiny',
					am: ['dop.','AM','A'],
					pm: ['pop.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minúty'
				},
			second: { 
					format: 'ss',
					label: 'Sekundy'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisekundy'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekundy'
				},
			timezone: { 
					format: 'z',
					label: 'Časové pásmo'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['sk']);
})(window.jQuery || window.Zepto || window.$);
