    class Trie{
        constructor(){
            this.tree = Object.create(null)
        }
        insert(input){
            let node = this.tree;
            for (let i of input) {
                if (!node[i]) {
                    node[i] = Object.create(null)
                    node[i]["$"] = 0;
                }
                node[i]["$"]++
                node = node[i]
            }
        }
        most(){
            let mostShow = 0;
            let mostWord = "";
            let visit = (node, pattern)=>{
                if (pattern.length < 3) {
                    for (let c in node) {
                        if (c !== "$")
                            visit(node[c], pattern+ c)
                    } 
                } else {
                    for (let c in node) {

                        if (c !== "$" && node[c]["$"] > mostShow) {
                            mostShow = node[c]["$"]
                            mostWord = pattern + c 
                        }
                    }
                }
            }
            visit(this.tree, "")
            console.log(mostShow)
            return mostWord
        }
    }


    const trie = new Trie()
    for (let i = 0; i < 10000; i++){
        let randomWord = ""
        for (let j = 0; j< 4;j++){
            randomWord += String.fromCodePoint(Math.floor((26*Math.random() + "a".codePointAt(0))))
        }
        trie.insert(randomWord)
    }


