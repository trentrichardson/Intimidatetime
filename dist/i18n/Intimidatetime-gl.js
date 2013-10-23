/* Galician translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['gl'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Ano'
				},
			month: { 
					format: 'MMM',
					label: 'Mes',
					names: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xuño','Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'], 
					namesAbbr: ['Xan','Feb','Mar','Abr','Mai','Xuñ','Xul','Ago','Set','Out','Nov','Dec']
				},
			day: { 
					format: 'd',
					label: 'Día',
					names: ['Domingo','Luns','Martes','Mércores','Xoves','Venres','Sábado'],
					namesAbbr: ['Dom','Lun','Mar','Mér','Xov','Ven','Sáb'],
					namesHead: ['Do','Lu','Ma','Mé','Xo','Ve','Sá']
				},
			hour: {  
					format: 'HH',
					label: 'Horas',
					am: ['a.m.','AM','A'],
					pm: ['p.m.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minutos'
				},
			second: { 
					format: 'ss',
					label: 'Segundos'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisegundos'
				},
			microsecond: { 
					format: 'c',
					label: 'Microssegundos'
				},
			timezone: { 
					format: 'z',
					label: 'Fuso horario'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['gl']);
})(window.jQuery || window.Zepto || window.$);
