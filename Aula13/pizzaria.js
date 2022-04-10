var pizza = 8; //Quantidade de pedaços

function temPizza(pizza) {
    var fatias = pizza;
    if(fatias > 0)
    {        
        return true;
    } else {        
        return false;
    }
}

function comerFatia()
{
    pizza--;
}
console.log(`Comendo pizza com ${pizza} fatias`)
while(pizza >=0)
{   
    
    comerFatia(temPizza(pizza));
    console.log(`Agora tem ${pizza} fatias`);
    
    if(pizza == 0)
    {   
        console.log(`Não tem mais pizza`);     
        break;
    }
    
}