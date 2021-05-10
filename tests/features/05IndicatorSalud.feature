Feature: Indicador Salud Bienestar

    @Smoke @indicadorSalud @validateIndicadorSaludHome
    Scenario Outline: Validate Indicador Salud Home Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Examples:
            | Email                        | Password        | 
            | daniel.valencia@yopmail.com | 2021pruebasatm  |  
 
    @Smoke @indicadorSalud @validateMostrarIndiceSaludHome
    Scenario Outline: Validate Ver Indicador de puntod
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        And Ver puntos indicador salud
        
        Examples:
            | Email                        | Password        | 
            | teresa.gutierrez@yopmail.com | 2021pruebasatm  | 

@Smoke @indicadorSalud @validateVerInformacionCuerpo
    Scenario Outline: Validate Indicador Salud Indicador de Cuerpo
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Dar clic en link Cuerpo
        And Ver informacion de cuerpo
        Then Devolver inicio '<Regresar>' Bienestar
        
        
        Examples:
            | Email                        | Password        | Regresar|
            | teresa.gutierrez@yopmail.com | 2021pruebasatm  |Cuerpo|
 
    @Smoke @indicadorSalud @validateVerIndicadorAnimo
    Scenario Outline: Validate Indicador Salud Indicador de Animo
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Dar clic en link Mente
        And Ver estado de animo
        Then Devolver inicio '<Regresar>' Bienestar
        
        
        Examples:
            | Email                        | Password        | Regresar|
            | nidia.gomez@yopmail.com | 2021pruebasatm  | Mente|



    @Smoke @indicadorSalud @validateVerInformacionEstiloVida
    Scenario Outline: Validate Indicador Salud Indicador Habitos
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Dar clic en link Habitos
        And Ver informacion de estilo de vida
        Then Devolver inicio '<Regresar>' Bienestar
        
        
        Examples:
            | Email                        | Password        | Regresar|
            | guillermo.mendez@yopmail.com | 2021pruebasatm  | Estilo| 
 