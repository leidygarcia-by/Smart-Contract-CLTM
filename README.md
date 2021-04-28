# Smart-Contract-CLTM

Se mostrará el código a más profundidad explicando lo más relevante de este y su funcionamiento en la primera flecha naranja muestra la versión, en la segunda la flecha de azul muestra como se ve que corresponderá al costo de la licitación. Ahora se debe definir el contrato en este caso Licitación. En la siguiente parte de la flecha morada se va definir una variable tipo address en donde se va almacenar la dirección de la factura para la licitación. 
 
La flecha verde estará señalando las variables que se van a trabajar como factura, respuesta y transacción. Posteriormente mostrará un mensaje de la factura con la interfaz de usuario con la función “event” que recibe argumentos que ingresará el usuario, esta función almacena los argumentos pasados en los registros, los registros se almacenarán en la blockchain se accede a ellos usando la dirección del contrato cuando este presente para verificar su estado posteriormente con “emit” El constructor se muestra con la flecha amarilla qué será de tipo “public” el cual tendrá como función un despliegue rápido por etherium donde pedirá que sea como mínimo 1 ether. 

![Imagen1](https://user-images.githubusercontent.com/57902001/116337840-62da1f00-a7a0-11eb-8506-d1e9319c6350.png)


Imagen 6. Código solidity

En esta sección del código se crea una función la cual va a procesar el pago de la licitación, en la primera parte se crea el requerimiento el cual condiciona que se debe pagar el valor completo de la factura y no menos, cuando ingresa al If o la condición en caso de que se apruebe el pago, luego al final de la función está el “emit” el cual lanzará un mensaje en la parte final de la licitación en donde indica el residuo, costo de la factura.


![Imagen2](https://user-images.githubusercontent.com/57902001/116337881-74bbc200-a7a0-11eb-80ca-fd0061548ef8.png)

Imagen 7. Código If 

Para simular una billetera virtual se usará una llamada Metamask, en ella vamos a guardar un ether que se pueden obtener de la siguiente página: https://faucet.ropsten.be/

![Imagen3](https://user-images.githubusercontent.com/57902001/116337917-8604ce80-a7a0-11eb-9d7c-26ddcccef3fe.png)

Imagen 8. Billetera Virtual

Para iniciar con el contrato debemos tener al menos un 1 ether para poder realizar la transacción, primero pedirá 0.1 ether para iniciar el contrato, es decir, inicializarlo, cuando se envíe el pago MetaMask procesa la solicitud desde el origen 

![Imagen4](https://user-images.githubusercontent.com/57902001/116337989-a6cd2400-a7a0-11eb-9bc0-c46747ecdb68.png)

Imagen 9. Transacción 




Y destino de la transacción:
Luego de confirmar la transacción nos aparecerá lo siguiente:

![Imagen5](https://user-images.githubusercontent.com/57902001/116338015-b5b3d680-a7a0-11eb-90d6-e7505ebbdbcf.png)

ahora el pago ya se realizó y la consola de remix mostrará el costo pagado:

![Imagen6](https://user-images.githubusercontent.com/57902001/116338044-bfd5d500-a7a0-11eb-983e-4b0f7a140d85.png)

Finalmente se realiza la transacción es decir el pago de la licitación:
 
![Imagen7](https://user-images.githubusercontent.com/57902001/116338099-d3813b80-a7a0-11eb-9707-ef2ccbc153fa.png)

![Imagen8](https://user-images.githubusercontent.com/57902001/116338132-e136c100-a7a0-11eb-871b-23ae0165b7d9.png)

