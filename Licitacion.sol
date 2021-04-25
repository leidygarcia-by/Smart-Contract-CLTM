pragma solidity > 0.6.1 < 0.7.0;

contract licitacion {
    
    address private contrato;
    
    //uint presupuesto;
    uint residuo;
    
    //Nuevas variables
    uint factura = 2000000000000000000; //0.2 ether
    address private respuesta; // respuesta para el remitente
    bool private transaccion = false;
    
    //Posteriormente, Desplegaremos un mesaje de la factura una vez que hagamos una interfaz de usuario.
    event valor(string, uint resultado, string, uint factura, string, uint residuo);
    event Falla(string);
    
    //constructor
    constructor() public payable{
        require(msg.value >= 1000000000000000000, "el contrato se debe lanzar con al menos 0.1 Ether.");
        respuesta = msg.sender; 
    }
    
    function pagoFactura (uint presupuesto) public payable {
        require(msg.value >= 2000000000000000000, "El costo de la licitacion es de 0.2 ether.");
        
        uint resultado = factura - presupuesto;
        
        if(presupuesto >= factura){
            
            contrato = msg.sender;
        }
        else (factura > presupuesto);
        {
            emit Falla("La factura es mayor al presupueesto");
        }
        
    emit valor("El residuo de la factura es de:", resultado, "el costo de la factura fue", factura, "el residuo queda de:", residuo);
    
    }
}
