String.prototype.fuzzy = function (s) {
    var hay = this.toLowerCase(), i = 0, n = -1, l;
    s = s.toLowerCase();
    for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
};

('a haystack with a needle').fuzzy('hay sucks');    // false
('a haystack with a needle').fuzzy('sack hand');    // true