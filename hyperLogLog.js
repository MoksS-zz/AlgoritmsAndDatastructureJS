var pow_2_32 = 0xFFFFFFFF + 1;

function HyperLogLog(std_error)
{
    function log2(x)
    {
        return Math.log(x) / Math.LN2;
    }
    
    function rank(hash, max)
    {
        var r = 1;
        while ((hash & 1) == 0 && r <= max) { ++r; hash >>>= 1; }
        return r;
    }
   
    var m = 1.04 / std_error;
    var k = Math.ceil(log2(m * m)), k_comp = 32 - k;
    m = Math.pow(2, k);
    
    var alpha_m = m == 16 ? 0.673
        : m == 32 ? 0.697
        : m == 64 ? 0.709
        : 0.7213 / (1 + 1.079 / m);
    
    var M = []; for (var i = 0; i < m; ++i) M[i] = 0;
    
    function count(hash)
    {
        if (hash !== undefined)
        {
            var j = hash >>> k_comp;
            M[j] = Math.max(M[j], rank(hash, k_comp));
        }
        else
        {
            var c = 0.0; for (var i = 0; i < m; ++i) c += 1 / Math.pow(2, M[i]);
            var E = alpha_m * m * m / c;
            
            // -- make corrections
            
            if (E <= 5/2 * m)
            {
                var V = 0; for (var i = 0; i < m; ++i) if (M[i] == 0) ++V;
                if (V > 0) E = m * Math.log(m / V);
            }
            else if (E > 1/30 * pow_2_32) E = -pow_2_32 * Math.log(1 - E / pow_2_32);
            
            // --

            return E;
        }
    }
   
    return {count: count};
}

function fnv1a(text)
{
    var hash = 2166136261;
    for (var i = 0; i < text.length; ++i)
    {
        hash ^= text.charCodeAt(i);
        hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    return hash >>> 0;
}

var words = ['aardvark', 'abyssinian', 'zoology']; // 2 336 words

var seed = Math.floor(Math.random() * pow_2_32); // make more fun

var log_log = HyperLogLog(0.065);
for (var i = 0; i < words.length; ++i) log_log.count(fnv1a(words[i]) ^ seed);
var count = log_log.count();
console.log(count + ', error ' + (count - words.length) / (words.length / 100.0) + '%');