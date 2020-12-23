// STRNest
var strnest = (function(){
    var pfx = '';
    function fun(x, c) {
        var p = pfx;
        pfx = pfx+x;
        res = c(pfx, p);
        pfx = t;
        return res;
    }
    return fun;
})();
