function contar()
{
    let init = document.querySelector('input#txti');
    let fim = document.querySelector('input#txtf');
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')


    if(init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO]! Faltam dados!');
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f)
        {
            //Contagem crescente
            for(let c = i; c<=f; c+= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //Contagem crescente
            for(let c = i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        
        res.innerHTML +=`\u{1F3C1}`
    }
}