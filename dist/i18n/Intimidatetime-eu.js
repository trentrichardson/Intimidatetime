/* Basque translation for Intimidatetime */
(function($) {
	$.intimidatetime.i18n['eu'] = {
		format: 'yyyy-MM-dd HH:mm',
		units: {
			year: { 
					format: 'yyyy',
					label: 'Urtea'
				},
			month: { 
					format: 'MMM',
					label: 'hilabetea',
					names: ['urtarrila','otsaila','martxoa','apirila','maiatza','ekaina','uztaila','abuztua','iraila','urria','azaroa','abendua'], 
					namesAbbr: ['urt.','ots.','mar.','api.','mai.','eka.','uzt.','abu.','ira.','urr.','aza.','abe.']
				},
			day: { 
					format: 'd',
					label: 'eguna',
					names: ['igandea','astelehena','asteartea','asteazkena','osteguna','ostirala','larunbata'],
					namesAbbr: ['ig.','al.','ar.','az.','og.','ol.','lr.'],
					namesHead: ['ig','al','ar','az','og','ol','lr']
				},
			hour: {  
					format: 'HH',
					label: 'Orduak',
					am: ['a.m.','AM','A'],
					pm: ['p.m.','PM','P']
				},
			minute: { 
					format: 'mm',
					label: 'Minutuak'
				},
			second: { 
					format: 'ss',
					label: 'Segunduak'
				},
			millisecond: { 
					format: 'l',
					label: 'Milisegunduak'
				},
			microsecond: { 
					format: 'c',
					label: 'Mikrosegundotan'
				},
			timezone: { 
					format: 'z',
					label: 'Ordu-eremua'
				}
		},
		rtl: false
	};
	$.intimidatetime.setDefaults($.intimidatetime.i18n['eu']);
})(window.jQuery || window.Zepto || window.$);
