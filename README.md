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
Imagen 10. Confirmación de transacción 

ahora el pago ya se realizó y la consola de remix mostrará el costo pagado:

![Imagen6](https://user-images.githubusercontent.com/57902001/116338044-bfd5d500-a7a0-11eb-983e-4b0f7a140d85.png)
Imagen 11. Respuesta de petición 

Finalmente se realiza la transacción es decir el pago de la licitación:
 
![Imagen7](https://user-images.githubusercontent.com/57902001/116338099-d3813b80-a7a0-11eb-9707-ef2ccbc153fa.png)
Imagen 12. Interfaz ddel contrato

![Imagen8](https://user-images.githubusercontent.com/57902001/116338132-e136c100-a7a0-11eb-871b-23ae0165b7d9.png)
Imagen 13. Verificación de la transacción 

Se pone enfuncionamiento el plan para el desarrollo del formulario de licitacion para estos contratos, se trabajo en un entorno de Docker y Remix en el cual se va ver todo el codigo fuente para que se puedan reguistrar los datoa para quienes se postulen a estas licitaciones. Se va manejar una base de datos en XAPP la cual va estar ligada con Docker. 

Al iniciar con la inscripcion en el formulario aparecera en la pagina precio, tipo de licitacion, nombre y apellido de la persona, despues que se registre esta información madara una opcion de un listado de los postulados que ya estan. 

![1](https://user-images.githubusercontent.com/80433518/119715028-2a724300-be29-11eb-8032-900960e15570.jpg)

Listas de asuntos de las licitaciones con su presupuesto en ether donde se vera reflejado Metamask, como se observo en la anterior imagen con el proceso. 

![2](https://user-images.githubusercontent.com/80433518/119715559-bf753c00-be29-11eb-989e-20839b998007.jpg)

Se mostrara como fue creada y como estaria registrando los datos en el sistema. ya sea en capacitación personal, compra de buses electricos y mantenimiento de flota de transmilenio. En la pagina creada para el aplicativo de las licitacion va mostrar que personas llenaron el formulario y que tipo de licitacion escogieron. Cuando no reconoco o no hay datos registrados aparecera como no hay licitación. 

![3](https://user-images.githubusercontent.com/80433518/119716515-d0727d00-be2a-11eb-9f28-e8dbecd4cf3a.jpg)


En esta imagen mostrara como se va a llevar a cabo el desarrollo del codigo y la respuesta de la peticion quie se va optener despues de haber llenado el formulario y hacer pago del mismo por medio de los ether. 
