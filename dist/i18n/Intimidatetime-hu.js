/* Hungarian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['hu'] = {
		format: 'yyyy.MM.dd HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Év'
				},
			month: { 
					format: 'MMM',
					label: 'Hónap',
					names: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június','Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
					namesAbbr: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún','Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec']
				},
			day: { 
					format: 'd',
					label: 'Nap',
					names: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
					namesAbbr: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
					namesHead: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo']
				},
			hour: {  
					format: 'HH',
					label: 'Óra',
					am: ['de.','AM','A'],
					pm: ['du.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Perc'
				},
			second: { 
					format: 'ss',
					label: 'Másodperc'
				},
			millisecond: { 
					format: 'l',
					label: 'Milliszekundumos'
				},
			microsecond: { 
					format: 'c',
					label: 'Ezredmásodperc'
				},
			timezone: { 
					format: 'z',
					label: 'Időzóna'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['hu']);
})(window.jQuery || window.Zepto || window.$);
