/* Brazilian Portuguese translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['pt-BR'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Ano'
				},
			month: { 
					format: 'MMM',
					label: 'Mês',
					names: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'], 
					namesAbbr: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
				},
			day: { 
					format: 'd',
					label: 'Dia',
					names: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
					namesAbbr: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
					namesHead: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
				},
			hour: {  
					format: 'HH',
					label: 'Hora',
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
					label: 'Milissegundos'
				},
			microsecond: { 
					format: 'c',
					label: 'Microssegundos'
				},
			timezone: { 
					format: 'z',
					label: 'Fuso horário'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['pt-BR']);
})(window.jQuery || window.Zepto || window.$);
