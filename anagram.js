function isAnagram(word1, word2) {
    
    if (word1.length != word2.length){
        return false
    }
    let freq_word1 = {};
    let freq_word2 = {};
    for (let char of word1) {
        freq_word1[char] = (freq_word1[char] || 0) + 1
    }
    for (let char of word2) {
        freq_word2[char] = (freq_word2[char] || 0) + 1
        if (!(freq_word1[char])){
            return false
        } 
        freq_word1[char] -= 1
    }

    // for (let key in freq_word1) {
    //     if(!(freq_word1[key] == freq_word2[key])){
    //         return false
    //     }
    // }
    return true
}

let res = isAnagram('experience','enceexperi')
console.log(res);