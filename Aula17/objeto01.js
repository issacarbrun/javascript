let amigo = {nome: 'José', 
sexo: 'M', 
penso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.penso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.penso}`)
