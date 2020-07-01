
const input = `
function foo(x,y){
    return 3 + y;
}
`

const dictionary = ["keywords", "number", "identifier", "punctuator","whitespace", "+", "-", "*","/", "(", ")"]

const regex = /(function|return)|(\d+)|(\w+)|([{};,])|(\s)|(\+)|(-)|(\*)|(\/)|(\()|(\))/g


function getToken(statement){
    const token = []
    let match = regex.exec(statement);
    while(match) {
        for (let i = 1; i<match.length ; i++){
            if (match[i]){
                token.push({
                    type: dictionary[i - 1],
                    value: match[i]
                })
            }
        }
        match = regex.exec(statement);
    }
    token.push({type:"EOF"})
    return token
}


function* tokenize(statement){
    let match = regex.exec(statement);
    while(match) {
        for (let i = 1; i < match.length; i++) {
            if (match[i]) {
                yield {
                    type: dictionary[i - 1],
                    value: match[i]
                }
                break;
            }
        }
        match = regex.exec(statement);
    }
    yield {type:"EOF"}
}

let source = [];
const tokens = tokenize("3 + (1+2) * 4 - 5/2")


for (let token of tokens) {
    if (token.type !== "identifier" 
        && token.type !== "whitespace" 
        && token.type !== "punctuator"){
        source.push(token)
    }
}

function expression(source){
    if (source[0].type === "additiveExpression" && source[1] && (source[1].type === "EOF" || source[1].type === "EOP")){
        const node = {
            type: "expression",
            children:[source.shift(), source.shift()]
        }
        source.unshift(node)

        if (node.children[1].type === "EOF")
        console.log(JSON.stringify(source, null, 1));
        
        return source
    }
    additiveExpression(source)
    return expression(source)
}


function additiveExpression(source){
    if (source[0].type === "multiplicativeExpression") {
        const node = {
            type: "additiveExpression",
            children:[source.shift()]
        }
        source.unshift(node)
        return additiveExpression(source)
    } else if (source[0].type === "additiveExpression" && source[1] && (source[1].type === "+" || source[1].type === "-")){
        const node = {
            type: "additiveExpression",
            operator: source[1].type,
            children:[source.shift(), source.shift()]
        }
        multiplicativeExpression(source)
        node.children.push(source.shift())
        source.unshift(node)
        return additiveExpression(source)
    }
    if (source[0].type === "additiveExpression") return;
    multiplicativeExpression(source)
    return additiveExpression(source)
}

function multiplicativeExpression(source){
    if (source[0].type === "number" || source[0].type === "parenthesesExpression"){
        const node = {
            type:"multiplicativeExpression",
            children: [source.shift()]
        }
        source.unshift(node)
        return multiplicativeExpression(source)
    } else if (source[0].type === "multiplicativeExpression" 
                && source[1] 
                && (source[1].type === "*" || source[1].type === "/")){
        const node = {
            type: "multiplicativeExpression",
            operator: source[1].type,
            children: [source.shift(), source.shift()]
        }
        parenthesesExpression(source)
        node.children.push(source.shift())
        source.unshift(node)
        return multiplicativeExpression(source)
    }
    if (source[0].type === "multiplicativeExpression") return;
    parenthesesExpression(source)
    return multiplicativeExpression(source)
}

function parenthesesExpression(source){
    if (source[0].type === "("){
        const node = {
            type:"parenthesesExpression",
            children:[]
        }
        const parentheseStack = [];

        do {
            const token = source.shift();
            if (token.type === "("){
                parentheseStack.push(token)
            } else if (token.type === ")"){
                parentheseStack.pop()
            }

            if (! ((parentheseStack.length === 0 && token.type === ")")
                    || parentheseStack.length === 1 && token.type === "(")) {
                        node.children.push(token)
                    }
        } while (parentheseStack.length !== 0)
        node.children.push({type:"EOP"}) 
        expression(node.children)
        source.unshift(node)
    }
    return;
}
expression(source)

