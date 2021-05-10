Feature: Interaccion Coach Bienestar

    @Smoke @miCoach @validateInteraccionCoach
    Scenario Outline: Validate Interaccion Coach
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Mi Coach
        And Dar clic en Mi Coach
        Then Ver pantalla interactuar coach

        Examples:
            | Email                        | Password        | 
            | daniel.valencia@yopmail.com | 2021pruebasatm  |
 

    @Smoke @miCoach @validateRegistrarCuestionarioSuenaBien
    Scenario Outline: Validate Registro Coach Suena Bien
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Mi Coach
        And Dar clic en Mi Coach
        Then Ver pantalla interactuar coach
        And Inicio cuestionario Suena Bien
        Then Guardar cuestionario Suena Bien

        Examples:
            | Email                        | Password        |  
            | daniel.valencia.sarmiento@yopmail.com         | 2021pruebasatm  |
 
    @Smoke @miCoach @validateRegistroCuestionario
    Scenario Outline: Validate Registro Cuestionario Coach
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Mi Coach
        And Dar clic en Mi Coach
        Then Ver pantalla interactuar coach
        And Inicio cuestionario coach
        And Seleccionar '<Opcion>' respuesta
        Then Guardar cuestionario coach

        Examples:
            | Email                        | Password        |  Opcion | 
            ##| alicia21@yopmail.com         | 2021pruebasatm  | Siempre |
            | daniel.valencia@yopmail.com | 2021pruebasatm  |A veces |
    

    @Smoke @miCoach @validateOmitirCuestionario
    Scenario Outline: Validate Omitir Cuestionario Coach
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Mi Coach
        And Dar clic en Mi Coach
        Then Ver pantalla interactuar coach
        And Inicio cuestionario coach
        Then Omitir cuestionario coach

        Examples:
            | Email                        | Password        |  Opcion | 
            | daniel.valencia@yopmail.com | 2021pruebasatm  |A veces |
