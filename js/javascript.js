

var prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa de frango crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 10.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    console.log('saasd')
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var usuario    = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var total_prod = 0; 
    var total = 0; 
    
    output.innerHTML = "";

    

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    if(usuario && email && phone){
        output.innerHTML += `<div class="mt-3"> <span> Caro </span> <span class="fw-bold"> ${usuario} </span> </div>`;
        output.innerHTML += `<div class="mt-5> Seguem os dados do seu pedido.</div>`;
        output.innerHTML += `<div class="my-4"> O seu pedido é: </div>`;

   
        for (var input of quantities) {
            var id = input.id;
    
            
            total_prod = prods[id-1].price * parseFloat(input.value);
            total += prods[id-1].price * parseFloat(input.value);
            if(total_prod > 0.0 ){
                output.innerHTML += `<li> Prato: ${prods[id-1].name}  - Preço unitário: ${formatter.format(prods[id-1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(total_prod)} </li>`;
            }
            
            
        
        
        }

        if(total == 0 ){
            output.innerHTML += `<h2> Nenhum pedido foi feito ainda.</h2>`;
            
        }
            
    
        
        console.log(usuario.value)
    
       
    
        
        
    
        output.innerHTML += `<div class="fw-bold fs-5"> Preço final: ${formatter.format(total)}</div>`;
        console.log(output.innerHTML)
    }
    else{
        output.innerHTML += `<h2>Por favor, insire seus dados.</h2>`;
    }

    


}

