/* Danish translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['da'] = {
		format: 'dd-MM-yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'år'
				},
			month: { 
					format: 'MMM',
					label: 'måned',
					names: ['Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'], 
					namesAbbr: ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec']
				},
			day: { 
					format: 'd',
					label: 'dag',
					names: ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
					namesAbbr: ['Søn','Man','Tir','Ons','Tor','Fre','Lør'],
					namesHead: ['Sø','Ma','Ti','On','To','Fr','Lø']
				},
			hour: {  
					format: 'HH',
					label: 'Time',
					am: ['am','AM','A'],
					pm: ['pm','PM','P']
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
					label: 'Millisekund'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekund'
				},
			timezone: { 
					format: 'z',
					label: 'Tidszone'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['da']);
})(window.jQuery || window.Zepto || window.$);
