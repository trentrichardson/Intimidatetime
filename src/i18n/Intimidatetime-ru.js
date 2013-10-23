/* Russian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['ru'] = {
		format: 'dd.MM.yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Год'
				},
			month: { 
					format: 'MMM',
					label: 'Месяц',
					names: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
					namesAbbr: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек']
				},
			day: { 
					format: 'd',
					label: 'День',
					names: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
					namesAbbr: ['вск','пнд','втр','срд','чтв','птн','сбт'],
					namesHead: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
				},
			hour: {  
					format: 'HH',
					label: 'Часы',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Минуты'
				},
			second: { 
					format: 'ss',
					label: 'Секунды'
				},
			millisecond: { 
					format: 'l',
					label: 'Миллисекунды'
				},
			microsecond: { 
					format: 'c',
					label: 'Микросекунды'
				},
			timezone: { 
					format: 'z',
					label: 'Часовой пояс'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['ru']);
})(window.jQuery || window.Zepto || window.$);
