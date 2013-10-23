/* Czech translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['cs'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'rok'
				},
			month: { 
					format: 'MMM',
					label: 'měsíc',
					names: ['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'], 
					namesAbbr: ['led','úno','bře','dub','kvě','čer','čvc','srp','zář','říj','lis','pro']
				},
			day: { 
					format: 'd',
					label: 'den',
					names: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
					namesAbbr: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
					namesHead: ['ne','po','út','st','čt','pá','so']
				},
			hour: {  
					format: 'HH',
					label: 'Hodiny',
					am: ['dop.','AM','A'],
					pm: ['odp.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minuty'
				},
			second: { 
					format: 'ss',
					label: 'Vteřiny'
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
	$.intimidatetime.setDefaults($.intimidatetime.i18n['cs']);
})(window.jQuery || window.Zepto || window.$);
