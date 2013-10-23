/* Thai translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['th'] = {
		format: 'dd/MM/yyyy hh:mm tt',
		units: {
			year: { 
					format: 'yyyy',
					label: 'ปี'
				},
			month: { 
					format: 'MMM',
					label: 'เดือน',
					names: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
					namesAbbr: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.']
				},
			day: { 
					format: 'd',
					label: 'วัน',
					names: ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],
					namesAbbr: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'],
					namesHead: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.']
				},
			hour: {  
					format: 'hh',
					label: 'ชั่วโมง',
					am: ['AM', 'A'],
					pm: ['PM', 'P']
				},
			minute: { 
					format: 'mm',
					label: 'นาที'
				},
			second: { 
					format: 'ss',
					label: 'วินาที'
				},
			millisecond: { 
					format: 'l',
					label: 'มิลลิวินาที'
				},
			microsecond: { 
					format: 'c',
					label: 'ไมโคริวินาที'
				},
			timezone: { 
					format: 'z',
					label: 'เขตเวลา'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['th']);
})(window.jQuery || window.Zepto || window.$);
