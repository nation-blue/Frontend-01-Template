
function findPath(source, pattern){
    let table = [0, 0];
    let k = 0;
    for (let i = 1; i<pattern.length - 1; i++){
        if (pattern[i] === pattern[k]){
            k++
        } else {
            k = 0
        }
        table.push(k)
    }

    let j = 0;
    for (let i = 0; i < source.length; i++) {

        if (pattern[j] === source[i]) {
            j++
        } else {
            while(j > 0) {
                j = table[j]
                if (pattern[j] === source[i]) {
                    j++
                    break;
                }
            }
        }
        if(j>=pattern.length) {
            return true
        }
    }
    return false
}


