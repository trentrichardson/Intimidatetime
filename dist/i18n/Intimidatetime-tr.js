/* Turkish translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['tr'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Yıl'
				},
			month: { 
					format: 'MMM',
					label: 'Ay',
					names: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
					namesAbbr: ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara']
				},
			day: { 
					format: 'd',
					label: 'Gün',
					names: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
					namesAbbr: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
					namesHead: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct']
				},
			hour: {  
					format: 'HH',
					label: 'Saat',
					am: ['ÖÖ', 'Ö'],
					pm: ['ÖS', 'S']
				},
			minute: { 
					format: 'mm',
					label: 'Dakika'
				},
			second: { 
					format: 'ss',
					label: 'Saniye'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisaniye'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosaniye'
				},
			timezone: { 
					format: 'z',
					label: 'Zaman Dilimi'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['tr']);
})(window.jQuery || window.Zepto || window.$);
