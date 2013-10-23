/* Spanish translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['es'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Año'
				},
			month: { 
					format: 'MMM',
					label: 'Mes',
					names: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'], 
					namesAbbr: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
				},
			day: { 
					format: 'd',
					label: 'Día',
					names: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
					namesAbbr: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
					namesHead: ['Do','Lu','Ma','Mi','Ju','Vi','Sá']
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
					label: 'Microsegundos'
				},
			timezone: { 
					format: 'z',
					label: 'Huso horario'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['es']);
})(window.jQuery || window.Zepto || window.$);
