 Feature: Indicador Salud Cero Bienestar

    @Smoke @indicadorSaludCero @validateIndicadorSaludCero
    Scenario Outline: Validate Indicador Salud Cero
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        And Ver opcion indicador salud cero
        Then Ver opcion completar informacion
        And Dar clic en completar informacion
 
        Examples:
            | Email                        | Password        | 
            | correo.kld2k@algo.com | 2021pruebasatm  | 

@Smoke @indicadorSaludCero @validateCancelarCompletarInformacion
    Scenario Outline: Validate Cancelar Informacion
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        And Ver opcion indicador salud cero
        Then Ver opcion completar informacion
        And Dar clic en completar informacion
        Then Ver formulario para completar informacion
        And Dar clic en genero
        And Selecciona el '<Genero>' del usuario
        And Clic en la fecha de nacimiento del usuario
        Then Clic en cancelar fecha
        And Clic en la estatura del usuario
        Then Clic en cancelar estatura
        And Clic en el peso del usuario
        Then Clic en cancelar peso
        Then Clic Ver indice de salud
 
        Examples:
            | Email                        | Password        | Genero  |
            | correo.kld2k@algo.com | 2021pruebasatm  | Femenino|


    @Smoke @indicadorSaludCero @validateCompletarInformacion
    Scenario Outline: Validate Completar Informacion
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        And Ver opcion indicador salud cero
        Then Ver opcion completar informacion
        And Dar clic en completar informacion
        Then Ver formulario para completar informacion
        And Dar clic en genero
        And Selecciona el '<Genero>' del usuario
        And Selecciona la fecha de nacimiento del usuario
        Then Clic en aceptar fecha
        And Ingresa la estatura '<Estatura>' del usuario
        Then Clic en aceptar estatura
        And Ingresa el peso '<Peso>' del usuario
        Then Clic en aceptar peso
        Then Dar clic Ver indice de salud
 
        Examples:
            | Email                        | Password        | Genero  |Estatura|Peso|
            | daniel.valencia@yopmail.com | 2021pruebasatm  | Masculino|175|65|
    