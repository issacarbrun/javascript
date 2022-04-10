let num = document.querySelector('input#txtn')
let tab = document.querySelector('select#selist')
let res = document.querySelector('div#res')
let num_array = []

function get_list(){
    if(num_array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = num_array.length
        let maior = num_array[0]
        let menor = num_array[0]
        let soma = 0
        let media = 0
        for(let pos in num_array){
            soma += num_array[pos]
            if(num_array[pos] > maior){
                maior = num_array[pos]
            }
            if(num_array[pos] < menor){
                menor = num_array[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informador foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informador foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
   if( isNum(num.value) && !inList(num.value, num_array))
   {
    let n = Number(num.value)    
    num_array.push(n)    
    console.log(num_array)

    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    tab.appendChild(item)
    res.innerHTML = ''
   } else {
        window.alert('Valor inválido ou já encontrado na lista!')
   }
   num.value = ''
   num.focus() 
    

}