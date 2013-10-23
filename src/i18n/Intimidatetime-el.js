/* Hellenic translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['el'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Year'
				},
			month: { 
					format: 'MMM',
					label: 'Month',
					names: ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'], 
					namesAbbr: ['Ιαν','Φεβ','Μαρ','Απρ','Μαι','Ιουν','Ιουλ','Αυγ','Σεπ','Οκτ','Νοε','Δεκ']
				},
			day: { 
					format: 'd',
					label: 'Day',
					names: ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο'],
					namesAbbr: ['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'],
					namesHead: ['Κυ','Δε','Τρ','Τε','Πε','Πα','Σα']
				},
			hour: {  
					format: 'HH',
					label: 'Ώρες',
					am: ['π.μ.','AM','A'],
					pm: ['μ.μ.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Λεπτά'
				},
			second: { 
					format: 'ss',
					label: 'Δευτερόλεπτα'
				},
			millisecond: { 
					format: 'l',
					label: 'μιλιδευτερόλεπτο'
				},
			microsecond: { 
					format: 'c',
					label: 'Microseconds'
				},
			timezone: { 
					format: 'z',
					label: 'Ζώνη ώρας'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['el']);
})(window.jQuery || window.Zepto || window.$);
