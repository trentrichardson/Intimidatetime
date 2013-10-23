/* Indonesian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['id'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Tahun'
				},
			month: { 
					format: 'MMM',
					label: 'Bulan',
					names: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'], 
					namesAbbr: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agus','Sep','Okt','Nop','Des']
				},
			day: { 
					format: 'd',
					label: 'Hari',
					names: ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
					namesAbbr: ['Min','Sen','Sel','Rab','kam','Jum','Sab'],
					namesHead: ['Mg','Sn','Sl','Rb','Km','jm','Sb']
				},
			hour: {  
					format: 'HH',
					label: 'Pukul',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Menit'
				},
			second: { 
					format: 'ss',
					label: 'Detik'
				},
			millisecond: { 
					format: 'l',
					label: 'Milidetik'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrodetik'
				},
			timezone: { 
					format: 'z',
					label: 'Zona Waktu'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['id']);
})(window.jQuery || window.Zepto || window.$);
