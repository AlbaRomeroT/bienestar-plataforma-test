Feature: Propositos Bienestar

    @Smoke @purpose @validatePropositosHomePrincipal
    Scenario Outline: Validate Propositos Home Principal 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Propositos
        And Dar clic en Propositos
        
        Examples:
            | Email                        | Password        | 
            | daniel.valencia@yopmail.com | 2021pruebasatm  |
