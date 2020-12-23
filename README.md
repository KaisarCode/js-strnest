# STRNest
[js] Nest strings into callbacks.

## What
Pass a string into a callback.
Each time the function is nested,
the new string is concatenated.
When function returns the
previous string is restored.

### Install
```
npm install kc-strnest
```

### Use
```js
var strnest = require('kc-strnest');
strnest('#str1', function(x){
    strnest('.str2', function(x, o){
        console.log(x);
    }); console.log(x);
});
```


