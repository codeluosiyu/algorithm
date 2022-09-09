const findTheDifference = function(s, t) {
    for (const ch of t) {
        if(t.split(ch).length > s.split(ch).length) {
            return ch
        }
    }
}