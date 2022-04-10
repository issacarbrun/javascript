let num = [5,8,2,9,3]

num.push(1)
num.sort()
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do valor é ${num[0]}`)

for(let c = 0; c<=num.length; c++){
    console.log(`${num[c]}`)
}


for(let pos in num){
    console.log(`${num[pos]}`)

}

let posc = num.indexOf(8)
if(posc == -1){
    console.log('Valor não encontrado!')
} else{
    console.log(`O valor está na posiçção ${posc}`)
}