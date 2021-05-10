Feature: Boton Verde Bienestar

    @Smoke @botonVerde @validateInformacionPopUp
    Scenario Outline: Validate Informacion PopUp
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Clic en boton verde

        Examples:
            | Email                        | Password        | 
            | ivan.sarmiento@yopmail.com | 2021pruebasatm  |
            
    @Smoke @botonVerde @validateCampoTelefono
    Scenario Outline: Validate Campo Telefono
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Clic en boton verde
        Then Clic en boton guardar sin datos

        Examples:
            | Email                        | Password        | 
            | ivan.sarmiento@yopmail.com | 2021pruebasatm  |

    @Smoke @botonVerde @validateCaracteresCampoTelefono
    Scenario Outline: Validate Longitud Campo Telefono
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Clic en boton verde
        And Ingresar numero '<Telefono>' del Telefono
        Then Clic en boton guardar
        And Muestra mensaje de errorLongitud '<Error>'
    
        Examples:
            | Email                        | Password       | Telefono| Error|
            | ivan.sarmiento@yopmail.com | 2021pruebasatm  |abcdefg|Número no valido|


    @Smoke @botonVerde @salirSinRegistrarCampoTelefono
    Scenario Outline: Validate Longitud Campo Telefono
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Clic en boton verde
        Then Clic en boton salir
    
        Examples:
            | Email                        | Password       |
            | ivan.sarmiento@yopmail.com | 2021pruebasatm  |

    @Smoke @botonVerde @validateIngresoCampoTelefono
    Scenario Outline: Validate Longitud Campo Telefono
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Clic en boton verde
        And Ingresar numero '<Telefono>' del Telefono
        Then Clic en boton guardar
    
        Examples:
            | Email                        | Password       | Telefono|
            | ivan.sarmiento@yopmail.com | 2021pruebasatm  |3166371013|
