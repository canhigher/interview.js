function reverse(str) {
    let res = [];
    for(let i = str.length - 1; i >= 0; i--) {
        const item = str[i];
        res.push(item);
    }
    return res.join('');
}

let res = reverse('hey my name is Can');
console.log(res);