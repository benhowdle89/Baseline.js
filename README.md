# BaselineJS.js

BaselineJS.js is a simple Javascript plugin for restoring baselines thrown off by odd image sizes. Based on : [Dan Eden's Baseline.js jQuery plugin](http://daneden.me/baseline/ "Baseline.js")

Simply call the plugin like so, passing a selector and the height of your baseline as a variable. It even works on responsive designs!

```javascript
// call like so
baseline.init('img', '24');
baseline.init('.post img', '48');
```