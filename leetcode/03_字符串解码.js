const decodeString = function(s) {
    let str = '',
        k = '',
        stack = [];
    for (let char of s) {
        if (char >= 0) {
            k += char
        } else if (char === '[') {
            stack.push({
                str: str,
                k: k
            })
            str = ''
            k = ''
        } else if (char === ']') {
            let data = stack.pop()
            str = data.str + str.repeat(data.k)
        } else {
            str += char
        }
    }
    return str
}