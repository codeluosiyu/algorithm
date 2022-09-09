const wordPattern = function (pattern, s) {
    const a = s.split(' ')
    if (pattern.length !== a.length) return false
    const h = Array(26)
    for (let i = 0; i < a.length; i++) {
        let p = pattern.charCodeAt(i) - 97,
            s = a[i]
        if (h[p] === void 0) {
            if (h.includes(s)) return false
            h[p] = s
        } else {
            if (h[p] !== s) return false
        }
    }
    return true
};