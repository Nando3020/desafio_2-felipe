
//"O Heroi tem saldo de  "+ress+"esta no nivel Ferro"


(function(){     

let resul = rank(70,10)


function rank(num1, num2){

   return (num1 - num2 );
}

    if(resul <= 11 ){
          console.log("O Heroi tem saldo de  "+resul+" esta no nivel Ferro")

    } else if(resul <= 20){
          console.log("O Heroi tem saldo de  "+resul+" esta no nivel Bronze")

 
    }else if(resul <= 50 ){
         console.log("O Heroi tem saldo de  "+resul+" esta no nivel Prata")

    }else if(resul <= 80){
         console.log("O Heroi tem saldo de  "+resul+" esta no nivel Ouro")
      

    }else if(resul <= 90 ){
         console.log("O Heroi tem saldo de  "+resul+" esta no nivel Diamante")

    } else if(resul <= 100){
         console.log("O Heroi tem saldo de  "+resul+" esta no nivel Lendario")

    }else if(resul > 101 ){
         console.log("O Heroi tem saldo de  "+resul+" esta no nivel Imortal")
    }







 }())