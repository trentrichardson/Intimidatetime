/* Finnish translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['fi'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Vuosi'
				},
			month: { 
					format: 'MMM',
					label: 'Kuukausi',
					names: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'], 
					namesAbbr: ['Tammi','Helmi','Maalis','Huhti','Touko','Kesä','Heinä','Elo','Syys','Loka','Marras','Joulu']
				},
			day: { 
					format: 'd',
					label: 'Päivä',
					names: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
					namesAbbr: ['Su','Ma','Ti','Ke','To','Pe','La'],
					namesHead: ['Su','Ma','Ti','Ke','To','Pe','La']
				},
			hour: {  
					format: 'HH',
					label: 'Tunti',
					am: ['ap.','AM','A'],
					pm: ['ip.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minuutti'
				},
			second: { 
					format: 'ss',
					label: 'Sekunti'
				},
			millisecond: { 
					format: 'l',
					label: 'Millisekunnin'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekuntia'
				},
			timezone: { 
					format: 'z',
					label: 'Aikavyöhyke'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['fi']);
})(window.jQuery || window.Zepto || window.$);
