/* Hebrew translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['he'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'שנה'
				},
			month: { 
					format: 'MMM',
					label: 'חודש',
					names: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'], 
					namesAbbr: ['ינו','פבר','מרץ','אפר','מאי','יוני','יולי','אוג','ספט','אוק','נוב','דצמ']
				},
			day: { 
					format: 'd',
					label: 'יום',
					names: ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'],
					namesAbbr: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
					namesHead: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת']
				},
			hour: {  
					format: 'HH',
					label: 'שעות',
					am: ['לפנה"צ','AM','A'],
					pm: ['אחה"צ','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'דקות'
				},
			second: { 
					format: 'ss',
					label: 'שניות'
				},
			millisecond: { 
					format: 'l',
					label: 'אלפית השנייה'
				},
			microsecond: { 
					format: 'c',
					label: 'מיקרו'
				},
			timezone: { 
					format: 'z',
					label: 'אזור זמן'
				}
		},
		rtl: true
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['he']);
})(window.jQuery || window.Zepto || window.$);
