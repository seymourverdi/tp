
module.exports = function(){
var result;
Object.prototype.toString.call(a).replace(/(\[object\s)(\w+)(\])/, (m, p1, p2) =>{
    if(a instanceof $) p2 = '$';
    else if(window && window.Node && a instanceof window.Node) p2 = 'node';
    if(match)
    {
        if(Object.prototype.toString.call(match) == '[object String]') return result = !!(match == p2.toLowerCase());
        if(Array.isArray(match)) return result = !!($.inArray(p2.toLowerCase(), match) != -1);
    }
    return result = p2.toLowerCase();
});
return result;
}
