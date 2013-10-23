/* Ukrainian translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['uk'] = {
		format: 'dd/MM/yyyy HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Рік'
				},
			month: { 
					format: 'MMM',
					label: 'Місяць',
					names: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
					namesAbbr: ['Січ','Лют','Бер','Кві','Тра','Чер','Лип','Сер','Вер','Жов','Лис','Гру']
				},
			day: { 
					format: 'd',
					label: 'День',
					names: ['неділя','понеділок','вівторок','середа','четвер','п’ятниця','субота'],
					namesAbbr: ['нед','пнд','вів','срд','чтв','птн','сбт'],
					namesHead: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб']
				},
			hour: {  
					format: 'HH',
					label: 'Години',
					am: ['AM','A'],
					pm: ['PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Хвилини'
				},
			second: { 
					format: 'ss',
					label: 'Секунди'
				},
			millisecond: { 
					format: 'l',
					label: 'Мілісекунди'
				},
			microsecond: { 
					format: 'c',
					label: 'Мікросекунди'
				},
			timezone: { 
					format: 'z',
					label: 'Часовий пояс'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['uk']);
})(window.jQuery || window.Zepto || window.$);
