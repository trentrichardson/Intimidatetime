/* Italian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['it'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Anno'
				},
			month: { 
					format: 'MMM',
					label: 'Mese',
					names: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'], 
					namesAbbr: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic']
				},
			day: { 
					format: 'd',
					label: 'Giorno',
					names: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
					namesAbbr: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
					namesHead: ['Do','Lu','Ma','Me','Gi','Ve','Sa']
				},
			hour: {  
					format: 'HH',
					label: 'Ora',
					am: ['m.','AM','A'],
					pm: ['p.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minuti'
				},
			second: { 
					format: 'ss',
					label: 'Secondi'
				},
			millisecond: { 
					format: 'l',
					label: 'Millisecondi'
				},
			microsecond: { 
					format: 'c',
					label: 'Microsecondi'
				},
			timezone: { 
					format: 'z',
					label: 'Fuso orario'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['it']);
})(window.jQuery || window.Zepto || window.$);
