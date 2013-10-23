/* Swedish translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['sv'] = {
		format: 'yyyy-MM-dd HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'År'
				},
			month: { 
					format: 'MMM',
					label: 'Månad',
					names: ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'], 
					namesAbbr: ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec']
				},
			day: { 
					format: 'd',
					label: 'Dag',
					names: ['Sön','Mån','Tis','Ons','Tor','Fre','Lör'],
					namesAbbr: ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'],
					namesHead: ['Sö','Må','Ti','On','To','Fr','Lö']
				},
			hour: {  
					format: 'HH',
					label: 'Timme',
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
					label: 'Millisekund'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekund'
				},
			timezone: { 
					format: 'z',
					label: 'Tidszon'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['sv']);
})(window.jQuery || window.Zepto || window.$);
