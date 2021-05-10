Feature: Login Usuario Bienestar
    
    @Smoke @Login @validateIncorrectInfo
    Scenario Outline: Login usuario Bienestar
    Given Usuario entra al home Bienestar
    When Ingresar correo electronico '<Email>' del usuario
    And Ingresar password '<Password>' del usuario
    And Dar clic boton iniciar sesion
    Then Muestra mensaje de errorLogin '<error>'
        
        Examples:
            | Email                        | Password        | error|
            | pedro.gutierrez@yopmail.com | 1234556  |  Los datos ingresados no son correctos|

    @Smoke @Login @validateIncorrectPassword
    Scenario Outline: Validar password incorrecto
    Given Usuario entra al home Bienestar
    When Ingresar password '<Password>' del usuario
    And Dar clic boton iniciar sesion
    Then Muestra mensaje de errorLogin '<error>'
        
        Examples:
            |Password | error|
            |2021automation  | El campo correo y contraseña son obligatorios|
            

    @Smoke @Login @validateIncorrectEmail
    Scenario Outline: Validar formato email incorrecto
    Given Usuario entra al home Bienestar
    When Ingresar correo electronico '<Email>' del usuario
    And Ingresar password '<Password>' del usuario
    And Dar clic boton iniciar sesion
    Then Muestra mensaje de errorLogin '<error>'
        
        Examples:
            | Email       |Password     | error|
            | gler.andrade |2021pruebasatm | Formato de correo invalido|
            
    @Smoke @Login @validateSoloFormulario
    Scenario Outline: Validar solo formulario
    Given Usuario entra al home Bienestar
    When Dar clic boton iniciar sesion
    Then Muestra mensaje de errorLogin '<error>'
        
        Examples:
            | error|
            | El campo correo y contraseña son obligatorios|

    @Smoke @Login @validateLogin
    Scenario Outline: Login usuario Bienestar
    Given Usuario entra al home Bienestar
    When Ingresar correo electronico '<Email>' del usuario
    And Ingresar password '<Password>' del usuario
    And Dar clic boton iniciar sesion
    Then Inicio Dashboard Bienestar
        
        Examples:
            | Email                        | Password        | 
            | teresa.gutierrez@yopmail.com | 2021pruebasatm  |
 