/* Lithuanian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['lt'] = {
		format: 'yyyy-MM-dd HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Metai'
				},
			month: { 
					format: 'MMM',
					label: 'Mėnuo',
					names: ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis','Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Gruodis'],
					namesAbbr: ['Sau','Vas','Kov','Bal','Geg','Bir','Lie','Rugp','Rugs','Spa','Lap','Gru']
				},
			day: { 
					format: 'd',
					label: 'Diena',
					names: ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],
					namesAbbr: ['sek','pir','ant','tre','ket','pen','šeš'],
					namesHead: ['Se','Pr','An','Tr','Ke','Pe','Še']
				},
			hour: {  
					format: 'HH',
					label: 'Valandos',
					am: ['priešpiet', 'AM', 'A'],
					pm: ['popiet','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minutės'
				},
			second: { 
					format: 'ss',
					label: 'Sekundės'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisekundės'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosekundės'
				},
			timezone: { 
					format: 'z',
					label: 'Laiko zona'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['lt']);
})(window.jQuery || window.Zepto || window.$);
