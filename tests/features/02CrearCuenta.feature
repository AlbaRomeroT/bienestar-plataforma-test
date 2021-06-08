Feature: Crear cuenta Usuario 
    

    @Smoke @crearCuenta @CreaCuenta
    Scenario Outline: Validar opcion Crear un usuario en Plataforma Bienestar
    Given Usuario entra al home Bienestar
    When Dar clic opcion crear cuenta
        
        Examples:
            | CreaCuenta   | 
            | Crear cuenta |  
    
    @Smoke @crearCuenta @validarUsuarioExistente
    Scenario Outline: Validar usuario existente en Plataforma Bienestar
    Given Usuario entra al home Bienestar
    When Dar clic opcion crear cuenta
    And Ingresa nombre '<NombreUsuario>' del usuario
    And Ingresa apellido '<ApellidoUsuario>' del usuario
    And Ingresa correo '<Email>' del usuario
    And Ingresa password '<Password>' del usuario
    And Confirma password '<ConfirmaPSW>' del usuario
    And Acepta terminos '<Terminos>' y condiciones
    Then Da clic en el boton siguiente
    And validar mensaje usuario existente
        
    Examples:
        | NombreUsuario| ApellidoUsuario| Email                        | Password        | ConfirmaPSW   | Terminos|
        | Beatriz|Pinzon|correo.kld2k@algo.com|2021pruebasatm|2021pruebasatm|True|

    @Smoke @crearCuenta @validateDatosIncorrectos
    Scenario Outline: Crear un usuario con datos incorrectos en Plataforma Bienestar
    Given Usuario entra al home Bienestar
    When Dar clic opcion crear cuenta
    And Ingresa nombre '<NombreUsuario>' del usuario
    And Ingresa apellido '<ApellidoUsuario>' del usuario
    And Ingresa correo '<Email>' del usuario
    And Ingresa password '<Password>' del usuario
    And Confirma password '<ConfirmaPSW>' del usuario
    Then Da clic en el boton siguiente
    
        
    Examples:
            | NombreUsuario| ApellidoUsuario| Email                        | Password        | ConfirmaPSW   | Terminos|
            | Claudia|Castro|claudia.castro|2021|2021|True|
     
    
    @Smoke @crearCuenta @validateRegistroCuenta
    Scenario Outline: Crear un usuario en Plataforma Bienestar
    Given Usuario entra al home Bienestar
    When Dar clic opcion crear cuenta
    And Ingresa nombre '<NombreUsuario>' del usuario
    And Ingresa apellido '<ApellidoUsuario>' del usuario
    And Ingresa correo '<Email>' del usuario
    And Ingresa password '<Password>' del usuario
    And Confirma password '<ConfirmaPSW>' del usuario
    And Acepta terminos '<Terminos>' y condiciones
    Then Da clic en el boton siguiente
    And Ver informacion adicional
    And Seleccionar tipo documento '<TipoDocumento>' del usuario
    And Ingresar numero documento '<NumeroDocumento>' del usuario
    And Aceptar envio informacion '<InfComercial>' comercial 
    Then Dar clic en Crear Cuenta
    
        
        Examples:
        | NombreUsuario| ApellidoUsuario| Email                        | Password        | ConfirmaPSW   | Terminos|TipoDocumento    |NumeroDocumento|InfComercial|
        | Maria|Perez|maria.perez@yopmail.com|2021pruebasatm|2021pruebasatm|True|Cedula|40785777       |False       |
 