# Intimidatetime

A wicked good date time picker for jQuery and Zepto.

Intimidatetime is still young, but already comes with many features like timezones, i18n, unix timestamps, date time ranges, and more!

- Author: [Trent Richardson](http://trentrichardson.com)
- Documentation: [http://trentrichardson.com/examples/Intimidatetime/](http://trentrichardson.com/examples/Intimidatetime/)
- Twitter: [@practicalweb](http://twitter.com/practicalweb)

## Getting Started
Download the [production version][jsmin] or the [development version][jsmax] and css [production version][cssmin] or the [development version][cssmax].

[jsmin]: https://raw.github.com/trentrichardson/Intimidatetime/master/dist/Intimidatetime.min.js
[jsmax]: https://raw.github.com/trentrichardson/Intimidatetime/master/dist/Intimidatetime.js
[cssmin]: https://raw.github.com/trentrichardson/Intimidatetime/master/dist/Intimidatetime.min.css
[cssmax]: https://raw.github.com/trentrichardson/Intimidatetime/master/dist/Intimidatetime.css

In your web page:

```html
<link rel="stylesheet" media="all" type="text/css" href="Intimidatetime.min.css" />
<script src="jquery.js"></script>
<script src="dist/Intimidatetime.min.js"></script>
<script>
jQuery(function($) {
	$('.myInputs').intimidatetime();
});
</script>
```

I also recommend getting the eBook [Handling Time](https://sellfy.com/p/8gxZ).  Although it uses jQueryUI Timepicker Addon many of the principles are the same.

## Documentation
[http://trentrichardson.com/examples/Intimidatetime/](http://trentrichardson.com/examples/Intimidatetime/)

## Todo (Help if you can)

1) Much like jQueryUI Timepicker Addon, Intimidatetime has a control type abstraction (select dropdown, label, list).  List is not yet implemented, but it should generate clickable links to set the value.  This will implement the calendar grid for the "day" selection, and simply a list of links for the other units.  The type is specified in the option for unites.day.type.

2) Once the control type for list is working there is a modes functionality.  Modes are groups of presets.  So if you want all select boxes, you could have a modes for those.

3) I18N improvements.  If you are fluent in a language other than English, please help.  It only takes a couple minutes.

## Release History
0.1.0: First release