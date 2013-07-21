(function($) {
	/*
		======== A Handy Little QUnit Reference ========
		http://api.qunitjs.com/

		Test methods:
			module(name, {[setup][ ,teardown]})
			test(name, callback)
			expect(numberOfAssertions)
			stop(increment)
			start(decrement)
		Test assertions:
			ok(value, [message])
			equal(actual, expected, [message])
			notEqual(actual, expected, [message])
			deepEqual(actual, expected, [message])
			notDeepEqual(actual, expected, [message])
			strictEqual(actual, expected, [message])
			notStrictEqual(actual, expected, [message])
			throws(block, [expected], [message])
	*/

	module('jQuery#intimedatetime', {
		// This will run before each test in this module.
		setup: function() {
			this.elems = $('#qunit-fixture').children();
		}
	});
	
	test('is chainable', function() {
		expect(1);
		// Not a bad test to run on collection methods.
		strictEqual(this.elems.intimidatetime(), this.elems, 'should be chainable');
	});

	// ########################################################
	// ########################################################
	module('Date prototype additions');

	test('microsecond assignment', function() {
		expect(3);
		var d = new Date();
		d.setMicroseconds(123);
		strictEqual(d.getMicroseconds(), 123, 'microseconds should be 123');	

		d = new Date();
		d.setMilliseconds(10);
		d.setMicroseconds(2023);
		strictEqual(d.getMilliseconds(), 12, 'milliseconds should be 12');
		strictEqual(d.getMicroseconds(), 23, 'microseconds should be 23');	
	});

	test('timezone assignment', function() {
		expect(3);
		var d = new Date();
		d.setTimezone(-360);
		strictEqual(d.getTimezone(), -360, 'timezone should be -360');		

		var d1 = new Date(),
			d2 = new Date(d1.getTime()),
			thisTz = d1.getTimezoneOffset();

		d1.adjustTimezone(thisTz-120);
		d2.setHours(d2.getHours()+2);

		strictEqual(d1.getTime(), d2.getTime(), 'timezone adjustments forward');	

		d1 = new Date(),
		d2 = new Date(d1.getTime()),
		thisTz = d1.getTimezoneOffset();

		d1.adjustTimezone(thisTz+180);
		d2.setHours(d2.getHours()-3);

		strictEqual(d1.getTime(), d2.getTime(), 'timezone adjustments backwards');	
	});

	// ########################################################
	// ########################################################
	module('dateFormat');

	test('simple date format', function() {
		expect(1);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			formattedDate;
		d.setMicroseconds(45);

		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd HH:mm:ss:l:c');
		strictEqual(formattedDate, '2001-06-23 14:02:10:123:045', 'Format matches all basic units');		
	});

	test('check am/pm', function() {
		expect(4);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			formattedDate;

		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd hh:mm tt');
		strictEqual(formattedDate, '2001-06-23 02:02 pm', 'Format matches pm');

		d.setHours(2);
		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd hh:mm tt');
		strictEqual(formattedDate, '2001-06-23 02:02 am', 'Format matches am');

		d.setHours(0);
		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd hh:mm tt');
		strictEqual(formattedDate, '2001-06-23 12:02 am', 'Format matches 12am');

		d.setHours(12);
		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd hh:mm tt');
		strictEqual(formattedDate, '2001-06-23 12:02 pm', 'Format matches 12pm');
	});
	
	test('check timezone', function() {
		expect(4);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			formattedDate;

		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd HH:mm z');
		strictEqual(formattedDate, '2001-06-23 14:02 -0400', 'Format match basic timezone');

		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd HH:mm zz');
		strictEqual(formattedDate, '2001-06-23 14:02 -04:00', 'Format match iso8601 timezone');

		d.setTimezone(0);		
		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd HH:mm zz');
		strictEqual(formattedDate, '2001-06-23 14:02 Z', 'Format match iso8601 at +00:00 (Z)');

		d.setTimezone(240);
		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd HH:mm zzz', { 
			units: { 
				timezone: {
					names: { '240': 'EDT' }
				} 
			}
		});
		strictEqual(formattedDate, '2001-06-23 14:02 EDT', 'Format match timezone label');

	});

	test('check DST', function() {
		expect(2);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			formattedDate;

		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd HH:mm z');
		strictEqual(formattedDate, '2001-06-23 14:02 -0400', 'Format matches pm');

		d.setMonth(0);
		formattedDate = $.intimidatetime.dateFormat(d, 'yyyy-MM-dd HH:mm z');
		strictEqual(formattedDate, '2001-01-23 14:02 -0400', 'Format matches am');
	});
	
	test('month day names', function() {
		expect(1);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			formattedDate;
		d.setMicroseconds(45);

		formattedDate = $.intimidatetime.dateFormat(d, 'MMMM MMM dddd ddd');
		strictEqual(formattedDate, 'June Jun Saturday Sat', 'Verify month and day names');		
	});

	test('literal strings', function() {
		expect(1);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			formattedDate;

		formattedDate = $.intimidatetime.dateFormat(d, "dddd, MMMM dd 'of' yyyy '@' H 'hours and' m 'minutes'");
		strictEqual(formattedDate, 'Saturday, June 23 of 2001 @ 14 hours and 2 minutes', 'Verify month and day names');
	});

	test('unix timestamp', function() {
		expect(2);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			formattedDate;

		formattedDate = $.intimidatetime.dateFormat(d, 'u');
		equal(formattedDate, 993319330, 'Unix timestamp');

		formattedDate = $.intimidatetime.dateFormat(d, 'uu');
		equal(formattedDate, 993319330.123, 'Unix timestamp with milliseconds');
	});

	// ########################################################
	// ########################################################
	module('dateParse');

	test('simple date parse', function() {
		expect(1);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			parsedDate;
		d.setMicroseconds(45);
		//
		parsedDate = $.intimidatetime.dateParse('2001-06-23 14:02:10:123:045', 'yyyy-MM-dd HH:mm:ss:l:c');
		strictEqual(parsedDate.getTime(), d.getTime(), 'parse matches all basic units');
	});

	test('check Daylight Savings Time', function() {
		expect(6);
		var d, parsedDate;
		
		d = new Date(2013, 0, 1, 0, 0, 0, 0);
		parsedDate = $.intimidatetime.dateParse('2013-01-01 00:00:00:000', 'yyyy-MM-dd HH:mm:ss:l');
		strictEqual(parsedDate.getTime(), 1357016400000, 'first of year');

		d = new Date(2013, 11, 31, 23, 59, 59, 999);
		parsedDate = $.intimidatetime.dateParse('2013-12-31 23:59:59:999', 'yyyy-MM-dd HH:mm:ss:l');
		strictEqual(parsedDate.getTime(), 1388552399999, 'end of year');

		d = new Date(2013, 2, 10, 1, 59, 59, 999);
		parsedDate = $.intimidatetime.dateParse('2013-03-09 01:59:59:999', 'yyyy-MM-dd HH:mm:ss:l');
		strictEqual(parsedDate.getTime(), 1362812399999, 'last before dst');

		d = new Date(2013, 2, 10, 2, 0, 0, 0);
		parsedDate = $.intimidatetime.dateParse('2013-03-10 02:00:00:000', 'yyyy-MM-dd HH:mm:ss:l');
		strictEqual(parsedDate.getTime(), 1362895200000, 'start dst');

		d = new Date(2013, 10, 3, 1, 59, 59, 999);
		parsedDate = $.intimidatetime.dateParse('2013-11-03 01:59:59:999', 'yyyy-MM-dd HH:mm:ss:l');
		strictEqual(parsedDate.getTime(), 1383461999999, 'end dst');

		d = new Date(2013, 10, 3, 2, 0, 0, 0);
		parsedDate = $.intimidatetime.dateParse('2013-11-03 02:00:00:000', 'yyyy-MM-dd HH:mm:ss:l');
		strictEqual(parsedDate.getTime(), 1383462000000, 'first after dst');

	});

	
	test('check word units', function() {
		expect(2);
		var d = new Date(2001, 5, 23),
			parsedDate;
		d.setMicroseconds(45);
		
		parsedDate = $.intimidatetime.dateParse('Sat, Jun 23, 2001', 'ddd, MMM d, yyyy');
		strictEqual(parsedDate.getTime(), d.getTime(), 'parse matches all basic units');

		d = new Date('2001-05-23 20:14 -0400');
		parsedDate = $.intimidatetime.dateParse('2001-05-23 20:14 CDT', 'yyyy-MM-dd HH:mm zzz', { 
			units: { 
				timezone: {
					names: { '300': 'CDT' }
				} 
			}
		});
		equal(parsedDate.getTimezone(), 300, 'parse matches all basic units');
	});


	test('check literal strings', function() {
		expect(1);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			parsedDate;
		
		parsedDate = $.intimidatetime.dateParse('Saturday, on Jun 23, 2001 @ 14:02:10:123', "dddd, 'on' MMM d, yyyy '@' HH:mm:ss:l");
		strictEqual(parsedDate.getTime(), d.getTime(), 'parse matches all basic units');
	});
	

	// ########################################################
	// ########################################################
	module('dateRelative');


	test('check adding units', function() {
		expect(7);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			parsedDate, d2;
		d.setMicroseconds(45);
		
		d2 = new Date(2003, 5, 23, 14, 2, 10, 123);
		parsedDate = $.intimidatetime.dateRelative(d, '+2y');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test year unit');

		d2 = new Date(2001, 3, 23, 14, 2, 10, 123);
		parsedDate = $.intimidatetime.dateRelative(d, '-2M');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test month unit');

		d2 = new Date(2001, 5, 21, 14, 2, 10, 123);
		parsedDate = $.intimidatetime.dateRelative(d, '-2d');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test day unit');

		d2 = new Date(2001, 5, 23, 12, 2, 10, 123);
		parsedDate = $.intimidatetime.dateRelative(d, '-2h');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test hour unit');

		d2 = new Date(2001, 5, 23, 14, 0, 10, 123);
		parsedDate = $.intimidatetime.dateRelative(d, '-2m');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test minute unit');

		d2 = new Date(2001, 5, 23, 14, 2, 30, 123);
		parsedDate = $.intimidatetime.dateRelative(d, '+20s');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test second unit');

		d2 = new Date(2001, 5, 23, 14, 2, 10, 223);
		parsedDate = $.intimidatetime.dateRelative(d, '+100l');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test millisecond unit');
	});

	test('check adding multiple units', function() {
		expect(1);
		var d = new Date(2001, 5, 23, 14, 2, 10, 123),
			parsedDate, d2;
		d.setMicroseconds(45);
		
		d2 = new Date(2003, 7, 23, 18, 2, 10, 123);
		parsedDate = $.intimidatetime.dateRelative(d, '+2y 2M 4h');
		strictEqual(parsedDate.getTime(), d2.getTime(), 'Test multiple unit addition');
	});


	/*
	test('is blank', function() {
		expect(1);
		strictEqual(this.elems.intimidatetime().text(), '', 'should be blank');
	});
	
	module('jQuery.intimidatetime');

	test('is awesome', function() {
		expect(2);
		strictEqual($.awesome(), 'awesome.', 'should be awesome');
		strictEqual($.awesome({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
	});

	module(':awesome selector', {
		// This will run before each test in this module.
		setup: function() {
			this.elems = $('#qunit-fixture').children();
		}
	});

	test('is awesome', function() {
		expect(1);
		// Use deepEqual & .get() when comparing jQuery objects.
		deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
	});
	*/
}(jQuery));
