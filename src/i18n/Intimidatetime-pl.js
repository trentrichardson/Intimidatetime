/* Polish translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['pl'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Rok'
				},
			month: { 
					format: 'MMM',
					label: 'Miesiąc',
					names: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
					namesAbbr: ['Sty','Lu','Mar','Kw','Maj','Cze','Lip','Sie','Wrz','Pa','Lis','Gru']
				},
			day: { 
					format: 'd',
					label: 'Dzień',
					names: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
					namesAbbr: ['Nie','Pn','Wt','Śr','Czw','Pt','So'],
					namesHead: ['N','Pn','Wt','Śr','Cz','Pt','So']
				},
			hour: {  
					format: 'HH',
					label: 'Godzina',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minuta'
				},
			second: { 
					format: 'ss',
					label: 'Sekunda'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisekunda'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekunda'
				},
			timezone: { 
					format: 'z',
					label: 'Strefa czasowa'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['pl']);
})(window.jQuery || window.Zepto || window.$);
