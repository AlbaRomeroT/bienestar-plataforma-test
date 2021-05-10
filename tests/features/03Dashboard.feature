Feature: Dashboard Bienestar

    @Smoke @Dashboard @validateDashboardBienestar
    Scenario Outline: Validate Dashboard Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver Dashboarding Bienestar

        Examples:
            | Email                        | Password        | 
            | alicia21@yopmail.com | 2021pruebasatm  | 
 