/* Bulgarian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['bg'] = {
		format: 'dd.MM.yy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'година'
				},
			month: { 
					format: 'MMM',
					label: 'Месец',
					names: ['Януари','Февруари','Март','Април','Май','Юни','Юли','Август','Септември','Октомври','Ноември','Декември'], 
					namesAbbr: ['Яну','Фев','Мар','Апр','Май','Юни','Юли','Авг','Сеп','Окт','Нов','Дек']
				},
			day: { 
					format: 'd',
					label: 'ден',
					names: ['Неделя','Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота'],
					namesAbbr: ['Нед','Пон','Вто','Сря','Чет','Пет','Съб'],
					namesHead: ['Не','По','Вт','Ср','Че','Пе','Съ']
				},
			hour: {  
					format: 'HH',
					label: 'Час',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Минути'
				},
			second: { 
					format: 'ss',
					label: 'Секунди'
				},
			millisecond: { 
					format: 'l',
					label: 'Милисекунди'
				},
			microsecond: { 
					format: 'c',
					label: 'Микросекунди'
				},
			timezone: { 
					format: 'z',
					label: 'Часови пояс'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['bg']);
})(window.jQuery || window.Zepto || window.$);
