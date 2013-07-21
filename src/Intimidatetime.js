/*
 * Intimidatetime
 * By: Trent Richardson [http://trentrichardson.com]
 * 
 * Copyright 2013 Trent Richardson
 * licensed under the MIT license.
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 */
 /*jslint white: true, undef: false, nomen: true */
(function($){
	'use strict';

	/*
		Notes:
		- http://about.me/jdunck 
			click the Github link, modal pops up would be nice to 
			have the title bar with Year dropdown, then list of months
			next row would be calendar and column 2 would be time
		- calendar look and feel http://www.andrewspixels.com/light-and-deep-ui-kit-freebie/
		- use mode option to appy pre-defined modes (basically option overrides that 
			can be defined at $.intimidatetime.modes = {} just like types
	*/

	//########################################################################
	// create our base object
	//########################################################################
	$.intimidatetime = function($this, options){
		
		return this.constructor($this, options);
	};


	//########################################################################
	// extend our object instance properties and methods
	//########################################################################
	$.extend($.intimidatetime.prototype, {

		/* 
		* Create a new instance of our object
		* @param $this jQuery - the jquery/zepto object of the element we're attaching to
		* @param options object - the object option values
		* @return this
		*/
		constructor: function($this, options){
			var k, s,
				d = new Date();
			
			// apply default options
			this.settings = $.extend(true, {}, $.intimidatetime.i18n[''], $.intimidatetime.defaults, options);
			s = this.settings;

			// mode engage...
			if(s.mode !== null && $.intimidatetime.modes[s.mode] !== undefined){
				$.extend(true, s, $.intimidatetime.modes[s.mode]);
			}
			
			// turn on or off support depending on the format
			s.support = $.intimidatetime.detectSupport(s.format);			
			for(k in s.units){
				if(s.units[k].show === undefined){
					s.units[k].show = s.support[k];
				}
			}

			// picker format defaults to format for input field
			s.pickerFormat = s.pickerFormat || s.format;


			// find all our elements
			this.$el = $this;      // the input or container if inline
			this.$p = null;        // the picker object itself
			this.$w = $(window);   // should I waist my energy explaining?
			this.$d = $(document); // should I waist my energy explaining?
			
			// compute the default value
			k = this.$el.val();
			if(k !== undefined && k !== ''){
				s.value = $.intimidatetime.dateRangeParse(k, s.format, s);
			}
			if(s.value === null){
				s.value = [new Date(d.getTime())];
			}
			if(!$.isArray(s.value)){
				s.value = [s.value];
			}
			if(s.ranges > s.value.length-1){
				for(k=0; k<s.ranges; k+=1){
					d.setDate(d.getDate()+1);
					s.value.push(new Date(d.getTime()));
				}
			}

			// kickstart
			this.enable();
			return this;
		},

		/* 
		* Enable the object
		* @return jQuery - the manager object
		*/
		enable: function(){
				var inst = this,
					s = inst.settings,
					k;

				// bind all events
				for(k in inst.settings.events){
					inst.$el.on('intimidatetime:'+k, s.events[k]);
				}

				// build the ui
				inst.refresh();
				
				// show or hide it
				if(inst.settings.inline){
					inst.$p.show();
				}
				else{
					inst.$el.on('focus.intimidatetime', function(e){ inst.$p.show(); });

					inst.$d.on('click.intimidatetime', function(e){
						var target = e.target;
						if(inst.$el[0] !== target && inst.$p[0] !== target && inst.$p.has(target).length === 0){
							inst.close();
						}
					});
					
					inst.$w.on('resize.intimidatetime', function(){ inst._reposition(); });
				}

				return inst.$el;
			},

		/* 
		* Disable the object.  Object remains
		* @return jQuery - the manager object
		*/
		disable: function(){
				this.$el.off('.intimidatetime');
				this.$d.off('.intimidatetime');
				this.$w.off('.intimidatetime');
				return this.$el;
			},

		/* 
		* Destroy the object, removes everything
		* @return jQuery - the manager object
		*/
		destroy: function(){
				this.disable();
				this.$el.removeData('intimidatetime');
				this.$p.remove();
				return this.$el;
			},

		/* 
		* Destroy the object, removes everything
		* @return jQuery - the manager object
		*/
		close: function(){
			var inst = this,
				e = new $.Event('intimidatetime:close'),
				result = inst.$el.trigger(e, [inst]);

				if(result.isDefaultPrevented === undefined || !result.isDefaultPrevented()){
					inst.$p.hide();
				}
				
				return inst.$el;
			},

		/* 
		* set/get options from the object (may use dot notation for nested values)
		* @param key string - the object name to get or set
		* @param val string - the value to assign
		* @return mixed - jQuery when setting value, option value when getting
		*/
		option: function(key, val){
				var s = this.settings;

				if(val !== undefined){
					s[key] = val;
					return this.$el;
				}
				return s[key];
			},

		/* 
		* refresh the ui of the datepicker
		* @return jQuery - the manager object
		*/
		refresh: function(){
				var inst = this,
					s = inst.settings,
					c,$h,i,g,gl,gv,j,jl,jv,$tmp1,$tmp2,numUnits;

				// (re)build the ui
				if(inst.$p === null){
					c = [s.theme, s.theme+'-mode-'+s.mode];
					if(s.rtl){
						c.push(s.theme+'-rtl');
					}
					if(s.support.date){
						c.push(s.theme+'-hasDate');
					}
					if(s.support.time){
						c.push(s.theme+'-hasTime');
					}

					inst.$p = $('<div class="'+c.join(' ')+'"></div>');
					if(s.inline){
						inst.$p.addClass(s.theme+'-inline');
						inst.$el.append(inst.$p);
					}
					else{
						inst.$p.css('display','none');
						inst.$el.after(inst.$p);
					}
				}

				// create a set for each datetime in a range
				inst.$p.empty();
				for(i=0; i<=s.ranges; i+=1){
					$h = $('<div class="'+s.theme+'-range '+s.theme+'-range-'+i+'"><div class="'+s.theme+'-preview">'+ $.intimidatetime.dateFormat(s.value[i], s.pickerFormat, s) +'</div></div>').appendTo(inst.$p);

					// build out the defined groups
					for(g=0,gl=s.groups.length; g<gl; g+=1){
						gv = s.groups[g];
						numUnits = 0;
						$tmp1 = $('<div class="'+s.theme+'-group '+ s.theme +'-group-'+ gv.name +'"></div>').appendTo($h);
						for(j=0,jl=gv.units.length; j<jl; j+=1){
							jv = gv.units[j];
							if(s.support[jv]){
								numUnits++;
								$tmp2 = $('<div class="'+s.theme+'-unit '+s.theme+'-unit-'+ jv +'" data-range="'+ i +'" data-unit="'+ jv +'"></div>').appendTo($tmp1);
								$.intimidatetime.types[s.units[jv].type].create(inst, $tmp2, s.value[i]);
							}
						} // end units
						if(numUnits === 0){
							$tmp1.remove();
						}
					} // end groups
				} // end ranges

				// add any buttons: Done, Now, etc
				jl = s.buttons.length;
				if(jl > 0){
					$tmp1 = $('<div class="'+s.theme+'-buttons"></div>').appendTo(inst.$p);
					for(j=0; j<jl; j+=1){
						jv = s.buttons[j];
						jv.tag = jv.tag || 'button';
						jv.classes = jv.classes || '';
						$tmp2 = $('<'+ jv.tag +' href="javascript:void();" class="'+ jv.classes +'">'+ jv.text +'</'+ jv.tag +'>')
									.on('click.intimidatetime', function(e){ e.preventDefault(); jv.action.call(inst,inst); } )
									.appendTo($tmp1);
					}
				}
				
				if(!s.inline){
					inst._reposition();
				}

				inst.$el.trigger('intimidatetime:refresh', [inst]);
				return inst.$el;
			},

		/* 
		* reposition the picker depending on the window/document/input
		* @return jQuery - the manager object
		*/
		_reposition: function(){
				var inst = this,
					elpos = inst.$el.position(),
					outerSize = function($el){
							return {
								w: ($el.width() + $el.css('padding-left') + $el.css('padding-right') + $el.css('border-left-width') + $el.css('border-right-width')),
								h: ($el.height() + $el.css('padding-top') + $el.css('padding-bottom') + $el.css('border-top-width') + $el.css('border-bottom-width'))
							};
						},
					els = outerSize(inst.$el),
					ps = outerSize(inst.$p),
					docs = { w: inst.$d.width(), h: inst.$d.height() },
					top = elpos.top + els.h,
					left = elpos.left;

				// if this extends pass docheight show upward, 
				// as long as its not out the top of document
				if((top + ps.h) > docs.h && (elpos.top-ps.h) > 0){
					top = elpos.top - ps.h;
				}

				// if its wider than the document just align 
				// with the side of document
				if((left + ps.w) > docs.w){
					left = docs.w - ps.w;
				}

				inst.$p.css({ top: top, left: left });
				
				return inst.$el;
			},

		/* 
		* the change event has occured on an input, update everything
		* @return jQuery - the manager object
		*/
		_change: function(){
				var inst = this,
					e = new $.Event('intimidatetime:change'),
					result = inst.$el.trigger(e, [inst]);

				if(result.isDefaultPrevented()){
					return false;
				}

				return this.$el;
			}

	});



	//########################################################################
	// extend our object static properties and methods
	//########################################################################
	$.extend($.intimidatetime, {
		i18n: {
			'': {                                // Default regional settings
				format: 'yyyy-MM-dd HH:mm',      // default format 'yyyy-MM-dd hh:mm:ss:l tt z'
				units: {
					year: { 
							format: 'yyyy',      // how should hour be forrmated in drowdown
							label: 'Year'        // year label
						},
					month: { 
							format: 'MMM',       // how should hour be forrmated in drowdown
							label: 'Month',      // month label
							names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 
							namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
						},
					day: { 
							format: 'd',         // how should hour be forrmated in drowdown 
							label: 'Day',        // day label
							names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
							namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
							namesHead: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
						},
					hour: {  
							format: 'HH',        // how should hour be forrmated in drowdown
							label: 'Hour',       // hour label
							am: ['AM', 'A'],     // possible am names
							pm: ['PM', 'P']     // possible pm names
						},
					minute: { 
							format: 'mm',        // how should minute be formatted in dropdown
							label: 'Minute'      // minute label
						},
					second: { 
							format: 'ss',        // how should second be formatted in dropdown
							label: 'Second'      // second label
						},
					millisecond: { 
							format: 'l',         // how should millisecond be formatted in dropdown
							label: 'Millisecond' // millisecond label
						},
					microsecond: { 
							format: 'c',         // how should millisecond be formatted in dropdown
							label: 'Microsecond' // microsecond label
						},
					timezone: { 
							format: 'z',         // how should timezone be formatted in dropdown
							label: 'Timezone'    // minute label
						}
				},
				rtl: false
			}
		},

		defaults: {

			// Date object, array of Date objects, or strict formatted string to set as the value
			value: null,

			// picker time format
			pickerFormat: null,

			// format shown in the alt field if used, defaults to format option
			altFormat: null,

			// jQuery element or selector for an alternate input
			alt: null,

			// min allowed date - date object or relative string '-1M'
			min: null,

			// max allowed date - date object or relative string '-1M'
			max: null,

			// number of ranges or pick list of dates, will generate a calendar side by side for each date
			ranges: 0,

			// string to delimit ranges. this string MUST NOT occur in the time format
			rangeDelimiter: ' - ',

			// number of months to show at once
			months: 1,

			// 0-6, which day is the start of the week
			startOfWeek: 0,

			// whether the picker should be inline
			inline: false,

			// use theme to prefix all class names, change your css accordingly
			theme: 'intimidatetime',

			// how the picker is aligned: vertical, horizontal (maps to css styling, no logic). Or should this be "classes"?
			mode: 'basic',

			// define any and all units
			units: {
				year: { map: 'FullYear', type: 'select', range: 20, step: 1, format: 'yyyy', value: null},
				month: { map: 'Month', type: 'select', min: 0, max: 11, step: 1, format: 'MMM', value: null },
				day: { map: 'Date', type: 'select', min: 1, max: 31, step: 1, value: null },
				hour: { map: 'Hours', type: 'select', min: 0, max: 23, step: 1, value: null },
				minute: { map: 'Minutes', type: 'select', min: 0, max: 59, step: 1, value: null },
				second: { map: 'Seconds', type: 'select', min: 0, max: 59, step: 1, value: null },
				milli: { map: 'Milliseconds', type: 'select', min: 0, max: 999, step: 10, value: null },
				micro: { map: 'Microseconds', type: 'select', min: 0, max: 999, step: 10, value: null },
				timezone: { map: 'Timezone', type: 'select', value: null, options: [720,660,600,570,540,480,420,360,300,270,240,210,180,120,60, // just like Date.getTimezoneOffset()
						0,-60,-120,-180,-210,-240,-270,-300,-330,-345,-360,-390,-420,-480,-525,-540,-570,-600,-630,-660,-690,-720,-765,-780,-840],
						names: {} // Key value pairs mapping timezone values to text values { "-240": "EDT", "-300": "CDT".. }
					}
			},

			// the order which each module appears
			groups: [
				{ name: 'date', units: ['year', 'month', 'day'] },
				{ name: 'time', units: ['hour', 'minute', 'second', 'millisecond', 'microsecond', 'timezone'] }
			],

			// buttons can be added at the bottom of the picker
			buttons: [
				//{ text: 'Done', classes: '', tag: 'button', action: function(inst){} }
			],

			events: {
				// event fired on value change request, use event.preventDefault() or return false to prevent value change
				change: function(e, date, inst){},

				// event
				refresh: function(e, inst){},

				// event fired to validate a day, use event.preventDefault() or return false to disable the day
				enableDay: function(e, date, inst){},

				// event
				close: function(e, inst){}
			}
		},

		/* 
		* Override the default settings for all instances of the time picker.
		* @param  settings  object - the new settings to use as defaults (anonymous object)
		* @return jQuery - the manager object
		*/
		setDefaults: function(settings) {
			$.extend(true, $.intimidatetime.defaults, settings || {});
			return this;
		},

		/* 
		* Create key pairs of options to set "modes", these may imply specific
		* options and styling, like using the calendar or dropdowns
		*/
		modes: {
			basic: {},
			horizontal: {},
			vertical: {}
		},


		/* 
		* object of available types to each unit. Must implement:
		* - create($.intimidatetime inst, string unit, function onChange)
		*		generates the html and binds necessary change event functions
		* - option($.intimidatetime inst, string unit, string key, mixed val)
		*		updates the html with the needed option
		* - value(Intimidateetime inst, string unit, val)
		*		gets or sets the value of the specified unit
		*/
		types: {
			
				// static label
				label: {
					create: function(inst, $parent, date, onChange){
						var s = inst.settings,
							unit = $parent.data('unit'),
							u = s.units[unit],
							h = '<label class="unit-label unit-label-'+ unit +'">';

						// build the label
						if(u.label !== '' && u.label !== false){
							h +='<span>'+ u.label +'</span>';
						}

						// add the unit
						h += $.intimidatetime.dateFormat(date, u.format, s);
						h += '</label>';

						$parent.html(h);
					},
					option: function(inst, unit, key, val){

					},
					value: function(inst, unit, val){

					}
				},

				// list of clickable links (or calendar for months) (uses hidden inputs)
				list: {
					create: function(inst, $parent, date, onChange){
						window.console.log('create list');
					},
					option: function(inst, unit, key, val){

					},
					value: function(inst, unit, val){

					}
				},

				// dropdowns
				select: {
					create: function(inst, $parent, date, onChange){
						var s = inst.settings,
							unit = $parent.data('unit'),
							u = s.units[unit],
							$label = $('<label class="unit-label unit-label-'+ unit +'"></label>'),
							$input = $('<select class="unit-input unit-input-'+ unit +'"></select>'),
							val = date['get'+u.map](), 
							tmpd = $.intimidatetime.dateClone(date),
							max = u.max,
							min = u.min,
							h = '',	
							moMax, i;

						// min/max check
						if(unit === 'day'){
							moMax = $.intimidatetime.daysInMonth(date.getMonth(), date.getFullYear());
							if(moMax < max){
								max = moMax;
							}
						}
						if(u.range !== undefined){
							if(min === undefined){
								min = date.getFullYear()-u.range;
							}
							if(max === undefined){
								max = date.getFullYear()+u.range;
							}
						}

						// build the options
						for(i=min; i<=max; i+=u.step){
							tmpd['set'+u.map](i);
							h += '<option value="'+ i +'">'+ $.intimidatetime.dateFormat(tmpd, u.format, s) +'</option>';
						}

						// build the label
						if(u.label !== '' && u.label !== false){
							$label.append('<span>'+ u.label +'</span>');
						}

						// append it all to the parent
						$input.html(h).val(val);
						$label.append($input).appendTo($parent);
					},
					option: function(inst, unit, key, val){

					},
					value: function(inst, unit, val){

					}
				}
				// select, label, calendar, ui slider
		},

		/* 
		* create a clone of the date with our custom extended properties
		* @param date string - base date to compute from
		* @return Date - a clone of the original date
		*/
		dateClone: function(d){
			return (new Date(d.getTime()))
						.setMicroseconds(d.getMicroseconds())
						.setTimezone(d.getTimezone());		
		},

		/* 
		* parse a date depending on the options
		* @param date string - date string to parse
		* @param format string - date string to parse by
		* @param options object - includes things like i18n
		* @return Date
		*/
		dateParse: function(date, format, options){
			var o = $.extend(true, {}, $.intimidatetime.i18n[''], $.intimidatetime.defaults, options || {}),
				getAmpmPattern = function(amNames, pmNames) {
					var markers = [];
					if (amNames) {
						$.merge(markers, amNames);
					}
					if (pmNames) {
						$.merge(markers, pmNames);
					}
					markers = $.map(markers, function(val) {
						return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
					});
					return '(' + markers.join('|') + ')?';
				},
				t1t2d = '(\\d{1,2})', // 0 - 99
				t1t3d = '(\\d{1,3})', // 0 - 999
				t2t4d = '(\\d{2,4})', // 0 - 9999
				tword = '([0-9A-Za-z\\u00A0-\\u05FF\\u0700-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]+|[\\u0600-\\u06FF\\/]+)', // any word (or two) characters or numbers including two/three word month in arabic.
				//tword = '(\\w+)',
				ttz = '(Z|[-+]\\d\\d:?\\d\\d|\\S+)?', // +00:00 -00:00 +0000 -0000 or Z
				tstmp = '([\\+\\-]?\\d+(\\.\\d{1,3})?)', // 123456789 123456789.123
				finds = format.match(/(u{1,2}|y{1,4}|M{1,4}|d{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|T{1,2}|z{1,3}|'.*?')/g),
				order = { u: -1, y: -1, M: -1, d: -1, h: -1, H: -1, m: -1, s: -1, l: -1, c: -1, t: -1, T: -1, z: -1 },
				d = { u: 0, y: 0, M: 0, d: 0, h: 0, m: 0, s: 0, l: 0, c: 0, z: 0 }, 
				char0, i, l, regstr, matches, newd;

			// figure out what order everything is in 
			if (finds) {
				for (i=0, l=finds.length; i < l; i+=1) {
					char0 = finds[i].toString().charAt(0);
					// if d the days of week is irrelevent, we need the number day
					if (order[char0] === -1 && (char0 !== 'd' || !(/^d{3,4}$/).test(finds[i])) ) {
						order[char0] = i + 1;
					}
				}
			}

			// create a regex to parse the formatted time (considering that it could be words, numbers, etc)
			regstr = '^' + format.toString()
					.replace(/(u{1,2}|y{1,4}|M{1,4}|d{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|T{1,2}|z{1,3}|'.*?')/g, function (match) {
							var r;
							switch (match) {
								case 'u': r = tstmp; break;
								case 'yy': 
								case 'yyyy': r = t2t4d; break;
								case 'M':
								case 'MM': r = t1t2d; break;
								case 'MMM':
								case 'MMMM': r = tword; break;
								case 'd':
								case 'dd': r = t1t2d; break;
								case 'ddd':
								case 'dddd': r = tword; break;
								case 'H':
								case 'HH':
								case 'h':
								case 'hh':
								case 'm':
								case 'mm':
								case 's':
								case 'ss': r = t1t2d; break;
								case 'l': 
								case 'c': r = t1t3d; break;
								case 'z':
								case 'zz': r = ttz; break;
								case 'zzz': r = tword; break;
								case 't': r = getAmpmPattern(o.units.hour.am, o.units.hour.pm); break;
								default:    // literal escaped in quotes
									return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
							}
							return r;
						})
					.replace(/\s/g, '\\s') + '$';
			matches = date.match(new RegExp(regstr, 'i'));
			
			if(!matches){
				$.intimidatetime.log('Unable to parse date '+ date +' with '+ regstr);
			}
			else{	
				// set the year		
				if (order.y !== -1) {
					i = matches[order.y];
					if(i < 100){
						i = parseInt('20'+''+i, 10);
					}
					d.y=i;
				}
				// set the month
				if (order.M !== -1) {
					if(isNaN(matches[order.M])){
						i = $.inArray(matches[order.M], o.units.month.namesAbbr);
						if(i === -1){
							i = $.inArray(matches[order.M], o.units.month.names);
						}
					}
					else{
						i = parseInt(matches[order.M],10)-1;
					}
					d.M = i;
				}
				// set the day
				if (order.d !== -1) {
					d.d = parseInt(matches[order.d],10);
				}
				// set the hours (12hr)
				if (order.h !== -1) {
					i = parseInt(matches[order.h],10);
					l = 'am';
					if($.inArray(matches[order.t], o.units.hour.pm) || $.inArray(matches[order.T], o.units.hour.pm)){
						l = 'pm';
					}
					if(l === 'am' && i === 12){
						i = 0;
					}
					else if(l === 'pm' && i !== 12){
						i+=12;
					}
					d.h = i;
				}
				// set the hours
				if (order.H !== -1) {
					d.h = parseInt(matches[order.H],10);
				}
				// set the minutes
				if (order.m !== -1) {
					d.m = parseInt(matches[order.m],10);
				}
				// set the seconds
				if (order.s !== -1) {
					d.s = parseInt(matches[order.s],10);
				}
				// set the milliseconds
				if (order.l !== -1) {
					d.l = parseInt(matches[order.l],10);
				}
				// set the microseconds
				if (order.c !== -1) {
					d.c = parseInt(matches[order.c],10);
				}
				
				newd = new Date(d.y, d.M, d.d, d.h, d.m, d.s, d.l);
				newd.setMicroseconds(d.c);
				
				// set the timezone
				if (order.z !== -1) {
					newd.setTimezone($.intimidatetime.timezoneOffsetNumber(matches[order.z], o.units.timezone.names));
				}
				// set the unix timestamp (seconds since Jan 01 1970), but js Date wants milliseconds
				if (order.u !== -1) {
					newd.setTime(matches[order.u] * 1000);
				}
			}
			return newd;
		},

		/* 
		* parse a date range depending on the options
		* @param dates string - date range as a string
		* @param format string - date string to parse by
		* @param delimiter string - string that delimits dates
		* @param options object - includes things like i18n
		* @return Date
		*/
		dateRangeParse: function(dates, format, delimiter, options){
			var i, l;
			dates = dates.split(delimiter);

			for(i=0,l=dates.length; i<l; i+=1){
				dates[i] = $.intimidatetime.dateParse(dates[i], format, options);
			}

			return dates;
		},

		/* 
		* create a date relative to the given date "-1h +12s"
		* @param date string - base date to compute from
		* @param relative string - relative string format
		* @param options object - includes things like i18n
		* @return Date
		*/
		dateRelative: function(date, relative, options){
			var d = $.intimidatetime.dateClone(date),
				map = { y:'FullYear', M:'Month', d:'Date', h:'Hours', m:'Minutes', s:'Seconds', l:'Milliseconds', c:'Microseconds' },
				i,l,p,t;

			if(typeof relative === 'number'){
				d.setDate(d.getDate()+d);
			}
			else if(typeof relative === 'string'){
				p = relative.split(/(\s+|\,)/g);
				if(p){
					for(i=0,l=p.length; i<l; i+=1){
						t=p[i].match(/(\-?\+?\d+)(\w)/);
						if(t && map[t[2]] !== undefined){
							d['set'+map[t[2]]]( d['get'+map[t[2]]]() + parseInt(t[1],10));
						}
					}
				}
			}
			return d;
		},
		
		/* 
		* format a date string
		* @param date Date - date object
		* @param format string - date string to format to
		* @param options object - includes things like i18n
		* @return string
		*/
		dateFormat: function(date, format, options){
			var o = $.extend(true, {}, $.intimidatetime.i18n[''], $.intimidatetime.defaults, options || {}),
				tmpdate = format,
				hour = parseInt(date.getHours(), 10),
				ampm = (hour > 11)? o.units.hour.pm[0] : o.units.hour.am[0],
				pad = function(str, num){// we never need over 2 :)
					return ('000'+str).slice(num*-1); 
				},
				hr24to12 = function(h){
					return ((h > 12)? (h-12) : (h === 0)? 12 : h)+'';
				},
				tzStr = function(tzMinutes, iso8601) {
					var o;
					if(isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720){
						o = tzMinutes;
					}
					else{
						var off = tzMinutes * -1,
							minutes = off % 60,
							hours = (off - minutes) / 60,
							iso = iso8601? ':':'';
						
						o = (off >= 0 ? '+' : '-') + ('0' + (hours * 101).toString()).slice(-2) + iso + ('0' + (minutes * 101).toString()).slice(-2);
						
						if(o === '+00:00'){
							o = 'Z';
						}
					}
					return o;
				},
				tzLabel = function(tz){
					return o.units.timezone.names[tz] || tzStr(tz,false);
				};

			tmpdate = tmpdate.replace(/(?:u{1,3}|yyyy|yy|M{1,4}|d{1,4}|HH?|hh?|mm?|ss?|[tT]{1,2}|z{1,3}|[lc]|('.*?'|".*?"))/g, function(match) {
				var r='';
				switch (match) {
					case 'u': r = parseInt(date.getTime()/1000,10); break;
					case 'uu': r = date.getTime()/1000; break;
					case 'uuu': r = date.getTime(); break;
					// date
					case 'yy': r = date.getYear(); break;
					case 'yyyy': r = date.getFullYear(); break;
					case 'M': r = date.getMonth()+1; break;
					case 'MM': r = pad(date.getMonth()+1, 2); break;
					case 'MMM': r = o.units.month.namesAbbr[date.getMonth()]; break;
					case 'MMMM': r = o.units.month.names[date.getMonth()]; break;
					case 'd': r = date.getDate(); break;
					case 'dd': r = pad(date.getDate(), 2); break;
					case 'ddd': r = o.units.day.namesAbbr[date.getDay()]; break;
					case 'dddd': r = o.units.day.names[date.getDay()]; break;
					// time
					case 'HH': r = pad(hour, 2); break;
					case 'H': r = hour; break;
					case 'hh': r = pad(hr24to12(hour), 2); break;
					case 'h': r = hr24to12(hour); break;
					case 'mm': r = pad(date.getMinutes(), 2); break;
					case 'm': r = date.getMinutes(); break;
					case 'ss': r = pad(date.getSeconds(), 2); break;
					case 's': r = date.getSeconds(); break;
					case 'l': r = pad(date.getMilliseconds(), 3); break;
					case 'c': r = pad(date.getMicroseconds(), 3); break;
					case 'T': r = ampm.charAt(0).toUpperCase(); break;
					case 'TT': r = ampm.toUpperCase(); break;
					case 't': r = ampm.charAt(0).toLowerCase(); break;
					case 'tt': r = ampm.toLowerCase(); break;
					// timezone
					case 'z': r = tzStr(date.getTimezone(), false); break;
					case 'zz': r = tzStr(date.getTimezone(), true); break; // iso8601
					case 'zzz': r = tzLabel(date.getTimezone()); break; // uses timezone label if available
					// literal string
					default: r = match.replace(/\'/g, "") || "'";
				}
				return r;
			});

			tmpdate = $.trim(tmpdate);
			return tmpdate;
		},

		/* 
		* parse a date range depending on the options
		* @param dates array - array of date objects
		* @param format string - date string to parse by
		* @param delimiter string - string that delimits dates
		* @param options object - includes things like i18n
		* @return Date
		*/
		dateRangeFormat: function(dates, format, delimiter, options){
			var i, l;
			
			for(i=0,l=dates.length; i<l; i+=1){
				dates[i] = $.intimidatetime.dateParse(dates[i], format, options);
			}
			dates = dates.join(delimiter);

			return dates;
		},

		/*
		* Get the number in minutes that represents a timezone string
		* @param  string formated like "+0500", "-1245"
		* @return number
		*/
		timezoneOffsetNumber: function(tzString, lookup) {
			var i;
			tzString = tzString.toString().replace(':',''); // excuse any iso8601, end up with "+1245"

			// if iso8601 with Z, its 0 minute offset
			if(tzString.toUpperCase() === 'Z'){ 
				return 0;
			}

			// possibly a user defined tz, so see if it is in the lookup, if not just give it back
			if(!/^(\-|\+)\d{4}$/.test(tzString)){ 
				if(lookup !== undefined){
					for(i in lookup){
						if(lookup[i] === tzString){
							return i;
						}
					}
				}
				return tzString;
			}

			return ((tzString.substr(0,1) === '-'? -1 : 1) * // plus or minus
						((parseInt(tzString.substr(1,2),10)*60) + // hours (converted to minutes)
						parseInt(tzString.substr(3,2),10))); // minutes
		},

		/**
		* Get the number of days in a month
		* @param  number m - zero based month (in spirit of js's Date)
		* @param  number y - year to check for
		* @return number
		*/
		daysInMonth: function(m, y) {
			return (/3|5|8|10/).test(m)? 30 : m===1 ? ((y % 4) > 0 && y % 100) || (y % 400) > 0 ? 29 : 28 : 31;
		},

		/*
		* Determine by the time format which units are supported
		* Returns an object of booleans for each unit
		*/
		detectSupport: function(timeFormat){
			var tf = timeFormat.replace(/\'.*?\'/g,''), // removes literals
				isIn = function(f, t){ // does the format contain the token?
						return f.indexOf(t) !== -1? true:false; 
					},
				u = isIn('U'),
				s = {
						year: u || isIn(tf,'y'),
						month: u || isIn(tf,'M'),
						day: u || isIn(tf,'d'),
						hour: u || isIn(tf,'h') || isIn(tf,'H'),
						minute: u || isIn(tf,'m'),
						second: u || isIn(tf,'s'),
						milli: isIn(tf,'l'),
						micro: isIn(tf,'c'),
						timezone: isIn(tf,'z') || isIn(tf,'Z'),
						ampm: isIn(tf,'t') && isIn(tf,'h'),
						iso8601: isIn(tf, 'Z')
					};
				s.date = s.year || s.month || s.day;
				s.time = s.hour || s.minute || s.second || s.milli || s.micro || s.timezone;
				s.datetime = s.date && s.time;

			return s;
		},

		/*
		* Used for internal logging
		* Returns void
		*/
		log: function(){
			if(window.console && window.console.log){
				window.console.log.apply(window.console, arguments);
			}
		},

		/*
		* Used internally for intimidatetime to store 
		* instances.  Since zepto can't store complex
		* objects with data() we'll just store the key
		* Returns void
		*/
		lookup: {
			i: 0
		}
	});



	//########################################################################
	// extend jquery or zepto
	//########################################################################
	$.fn.intimidatetime = function() {
		var args = Array.prototype.slice.call(arguments),
			arg0 = args[0] || {},
			out, inst, $t;

		if (typeof(arg0) === 'string'){
			if(arg0.substr(0,3) === 'option' && args.length === 2){
				inst = $.intimidatetime.lookup[$(this[0]).data('intimidatetime')];
				out = inst[arg0].apply(inst, args.slice(1));
			}
			else{
				out = this.each(function() {
					inst = $.intimidatetime.lookup[$(this).data('intimidatetime')];
					inst[arg0].apply(inst, args.slice(1));
				});
			}
		}
		else{
			out = this.each(function() {
				$t = $(this);
				$.intimidatetime.lookup[++$.intimidatetime.lookup.i] = new $.intimidatetime($t, arg0);
				$t.data('intimidatetime', $.intimidatetime.lookup.i);
			});
		}
		return out;
	};

	
	//########################################################################
	// extend the Date instance properties
	//########################################################################
	/*
	* Microsecond support
	*/
	if(!Date.prototype.getMicroseconds){
		Date.prototype.microseconds = 0;
		Date.prototype.getMicroseconds = function(){ return this.microseconds; };
		Date.prototype.setMicroseconds = function(m){ 
			this.setMilliseconds(this.getMilliseconds() + Math.floor(m/1000));
			this.microseconds = m%1000;
			return this;
		};
	}


	/*
	* Timezone support. Changing timezone alone does not adjust time.
	*/
	if(!Date.prototype.getTimezone){
		Date.prototype.localTimezone = (new Date()).getTimezoneOffset();
		Date.prototype.timezone = (new Date()).getTimezoneOffset();
		Date.prototype.getTimezone = function(){ return this.timezone; };
		Date.prototype.setTimezone = function(toTz){ this.timezone = toTz; return this; };
		Date.prototype.adjustTimezone = function(toTz){
			this.setMinutes(this.getMinutes()+ (this.timezone - toTz) );
			this.setTimezone(toTz);
		};
	}


})(window.jQuery || window.Zepto || window.$);