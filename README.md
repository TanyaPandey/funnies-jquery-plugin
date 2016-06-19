# funnies-jquery-plugin

Make users laugh when your app loads.<br>
Port from https://github.com/1egoman/funnies.

## Setup

Include necessary css/js files

```html
<link type="text/css" href="css/funnies.css" rel="stylesheet">
<script src="js/jquery.funnies.js"></script>
```

Add a div
```html
<div id="funnies"></div>
```
## Initialize plugin

```javascript
$('#funnies').funnies();
```

## Usage

Open funny loader
```javascript
$('#funnies').funnies();
$('#funnies').data('funnies').show();
```

Close funny loder
```javascript
$('#funnies').data('funnies').hide();
```
