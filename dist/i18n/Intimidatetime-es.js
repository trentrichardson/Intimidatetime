/* Spanish translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['es'] = {
		format: 'dd/mm/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'año'
				},
			month: { 
					format: 'MMM',
					label: 'mes',
					names: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'], 
					namesAbbr: ['ene','feb','mar','abr','may','jun','jul','ogo','sep','oct','nov','dic']
				},
			day: { 
					format: 'd',
					label: 'día',
					names: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
					namesAbbr: ['dom','lun','mar','mié','juv','vie','sáb'],
					namesHead: ['D','L','M','X','J','V','S']
				},
			hour: {  
					format: 'HH',
					label: 'Horas',
					am: ['a.m.', 'AM', 'A'],
					pm: ['p.m.', 'PM', 'P']
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
