function stringSearch(str, sub){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < sub.length; j++){
           if(sub[j] !== str[i+j]) {
               break;
           }
           else {
               count++;
           }
        }
    }
    return (count/sub.length);
}

let res = stringSearch("lorie loled", "lol");
console.log(res);