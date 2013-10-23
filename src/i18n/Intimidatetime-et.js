/* Estonian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['et'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Aasta'
				},
			month: { 
					format: 'MMM',
					label: 'Kuu',
					names: ['Jaanuar','Veebruar','Märts','Aprill','Mai','Juuni','Juuli','August','September','Oktoober','November','Detsember'], 
					namesAbbr: ['Jaan','Veebr','Märts','Apr','Mai','Juuni','Juuli','Aug','Sept','Okt','Nov','Dets']
				},
			day: { 
					format: 'd',
					label: 'Päev',
					names: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'],
					namesAbbr: ['Pühap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
					namesHead: ['P','E','T','K','N','R','L']
				},
			hour: {  
					format: 'HH',
					label: 'Tund',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minut'
				},
			second: { 
					format: 'ss',
					label: 'Sekund'
				},
			millisecond: { 
					format: 'l',
					label: 'Millisekundis'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekundis'
				},
			timezone: { 
					format: 'z',
					label: 'Ajavöönd'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['et']);
})(window.jQuery || window.Zepto || window.$);
