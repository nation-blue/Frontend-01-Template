function parse(input){
    const pair = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    const stack = {
        data : [],
        top : null,
    }
    for (let c of input) {
        if (c === "(" || c === "{" || c === "["){
            stack.data.push(c)
            stack.top = c
        } else if (c === ")" || c === "}" || c === "]"){
            // debugger
            if (pair[stack.top] !== c) return false
            stack.data.pop()
            stack.top = stack.data[stack.data.length - 1]
        }
    }

    return stack.data.length === 0
}

console.log(parse("abcdefghijklmn"))
console.log(parse("abcd[efgh]ijklmn"))
console.log(parse("abc{d[e}fgh]ijklmn"))
console.log(parse("abc{d[{e}fgh]ijkl}mn"))
console.log(parse("a(bc{d[{e}fgh]ijkl}m)n"))
console.log(parse("a(bc{d[{e}fg[h]ijkl}m)n"))

