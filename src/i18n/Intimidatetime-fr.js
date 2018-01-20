/* French translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['fr'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Année'
				},
			month: { 
					format: 'MMM',
					label: 'Mois',
					names: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
					namesAbbr: ['Jan','Fev','Mar','Avr','Mai','Jun','Jul','Aou','Sep','Oct','Nov','Dec']
				},
			day: { 
					format: 'd',
					label: 'Jour',
					names: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
					namesAbbr: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
					namesHead: ['D','L','M','M','J','V','S']
				},
			hour: {  
					format: 'HH',
					label: 'Heures',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minutes'
				},
			second: { 
					format: 'ss',
					label: 'Secondes'
				},
			millisecond: { 
					format: 'l',
					label: 'Millisecondes'
				},
			microsecond: { 
					format: 'c',
					label: 'Microsecondes'
				},
			timezone: { 
					format: 'z',
					label: 'Fuseau horaire'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['fr']);
})(window.jQuery || window.Zepto || window.$);
