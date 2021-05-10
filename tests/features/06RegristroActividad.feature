Feature: Registro Actividad Bienestar

    @Smoke @registroActividad @validateRegistroActividad
    Scenario Outline: Validate Registro Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar actividad

        Examples:
            | Email                        | Password        | 
            | mauro.ortiz@yopmail.com | 2021pruebasatm  |
 

    @Smoke @registroActividad @validateSeleccionarActividad
    Scenario Outline: Validate Seleccionar Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        And Seleccionar actividad '<Actividad>' a registrar
        
        
            Examples:
            | Email                        | Password        | Actividad|
            | mauro.ortiz@yopmail.com | 2021pruebasatm  |Caminar|
            | daniel.valencia@yopmail.com | 2021pruebasatm  | Caminar|

    @Smoke @registroActividad @validateBuscarActividad
    Scenario Outline: Validate Buscar Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        And Dar clic sobre la barra buscar
        And Buscar actividad '<Actividad>' a registrar
        
        Examples:
            | Email                        | Password        | Actividad|
            | alicia21@yopmail.com | 2021pruebasatm  | montar a caballo|
            | teresa.gutierrez@yopmail.com | 2021pruebasatm  |Caminar|
            | guillermo.mendez@yopmail.com | 2021pruebasatm  | baloncesto|
     
    @Smoke @registroActividad @validateGuardarActividad
    Scenario Outline: Validate Registro Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        And Seleccionar actividad '<Actividad>' a registrar
        And Dar clic para iniciar la actividad
        And Dar clic para pausar la actividad
        And Dar clic para guardar la actividad
        Then Dar clic en agregar actividad
               
        Examples:
            | Email                        | Password        | Actividad|
            | ana.castro@yopmail.com | 2021pruebasatm  | Atletismo|
            | mario.duarte@yopmail.com | 2021pruebasatm  | Caminar|
            | ivan.sarmiento@yopmail.com | 2021pruebasatm  | Salto a la cuerda|
            | mauro.ortiz@yopmail.com | 2021pruebasatm  | Salsa|

         
    @Smoke @registroActividad @validateCancelarActividad
    Scenario Outline: Validate Cancelar Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        And Seleccionar actividad '<Actividad>' a registrar
        And Dar clic para iniciar la actividad
        And Dar clic para pausar la actividad
        And Dar clic para cancelar la actividad
        Then Dar clic en eliminar actividad
               
        Examples:
            | Email                        | Password        | Actividad|
            | alicia21@yopmail.com | 2021pruebasatm  | Atletismo|
 
    @Smoke @registroActividad @validateRegresarListaActividad
    Scenario Outline: Validate Regresar Lista Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        Then Dar clic en regresar a la lista de actividades
               
        Examples:
            | Email                        | Password        | Actividad|
            | alicia21@yopmail.com | 2021pruebasatm  | Atletismo|
 
    @Smoke @registroActividad @validatePausarActividad
    Scenario Outline: Validate Pausar Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        And Seleccionar actividad '<Actividad>' a registrar
        And Dar clic para iniciar la actividad
        And Dar clic para pausar la actividad
               
        Examples:
            | Email                        | Password        | Actividad|
            | alicia21@yopmail.com | 2021pruebasatm  | Atletismo|
 
    @Smoke @registroActividad @validateReanudarActividad
    Scenario Outline: Validate Pausar Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        And Seleccionar actividad '<Actividad>' a registrar
        And Dar clic para iniciar la actividad
        And Dar clic para pausar la actividad
        And Dar clic para renudar la actividad
        
               
        Examples:
            | Email                        | Password        | Actividad|
            | alicia21@yopmail.com | 2021pruebasatm  | Atletismo|

    @Smoke @registroActividad @validateHistorialActividad
    Scenario Outline: Validate Historial Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Ver pantalla para registrar una actividad
        And Dar clic opcion Historial de actividades
        Then Ver pantalla historial de actividades
        
               
        Examples:
            | Email                        | Password        | Actividad|
            | alicia21@yopmail.com | 2021pruebasatm  | Atletismo|
 
    @Smoke @registroActividad @validateRegistroManualActividad
    Scenario Outline: Validate Registro Manual Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        And Ver opcion Registro manual actividad
        Then Dar clic en Registro manual actividad
 
        Examples:
            | Email                        | Password        | Actividad|
            | mauro.ortiz@yopmail.com | 2021pruebasatm  |Atletismo|
    
    
    @Smoke @registroActividad @validateNoOkRegistroManualActividad
    Scenario Outline: Validate Guardar NoOK Registro Manual Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        And Ver opcion Registro manual actividad
        Then Dar clic en Registro manual actividad
        And Ver formulario para registro de actividad
        And Registrar la actividad '<Actividad>' a registrar
        Then Clic en guardar actividad manual
        
        Examples:
            | Email                   | Password        | Actividad| 
            | mauro.ortiz@yopmail.com | 2021pruebasatm  |Atletismo| 
 

    @Smoke @registroActividad @validateGuardarRegistroManualActividad
    Scenario Outline: Validate Guardar Registro Manual Actividad Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        And Ver opcion Registro manual actividad
        Then Dar clic en Registro manual actividad
        And Ver formulario para registro de actividad
        And Ingresar la actividad '<Actividad>' a registrar
        And Clic en seleccionar la '<FechaHora>' fecha y hora
        And Dar clic en guardar la fecha
        And Clic en seleccionar el '<Tiempo>' de duracion
        And Dar clic en guardar la duracion
        And Ingresar la distancia '<Distancia>' recorrida
        And Ingresar la frecuencia '<Frecuencia>' cardiaca
        Then Clic en guardar actividad manual
        Then Clic en confirmar la accion
        
        Examples:
            | Email                   | Password        | Actividad| FechaHora| Tiempo| Distancia| Frecuencia|
            | daniel.valencia@yopmail.com | 2021pruebasatm  |Atletismo| 1984-06-25 10:30| 03:00|  15 | 180|
    
    @Smoke @registroActividad @validateRegistroDatosSueno
    Scenario Outline: Validate Registro Datos Suenio Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        And Ver opcion Registro datos sueno
        Then Clic en Registro datos sueno
 
        Examples:
            | Email                   | Password        | 
            | mauro.ortiz@yopmail.com | 2021pruebasatm  | 


    @Smoke @registroActividad @validateNoOkRegistroDatosSueno
    Scenario Outline: Validate Guardar NoOk Registro Datos Suenio Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        And Ver opcion Registro datos sueno
        Then Dar clic en Registro datos sueno
        And Ver formulario para registro de sueno
        And Clic en seleccionar la '<FechaHoraDormir>' de dormir
        And Dar clic en guardar la fecha de dormir
        Then Clic en guardar datos de sueno
        
        Examples:
            | Email                        | Password        | FechaHoraDormir| 
            | mauro.ortiz@yopmail.com | 2021pruebasatm  | 2021-04-29 21:00| 
 

    @Smoke @registroActividad @validateGuardarRegistroDatosSueno
    Scenario Outline: Validate Guardar Registro Datos Suenio Bienestar
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        And Ver opcion Registro datos sueno
        Then Dar clic en Registro datos sueno
        And Ver formulario para registro de sueno
        And Clic en seleccionar la '<FechaHoraDormir>' de dormir
        And Dar clic en guardar la fecha de dormir
        And Clic en seleccionar la '<FechaHoraLevantar>' de levantar
        And Dar clic en guardar la fecha de levantar       
        And Clic en seleccionar el '<Tiempo>' de sueno
        And Dar clic en guardar el tiempo sueno
        And Ingresar el '<NumeroDespierto>' de veces desperto
        Then Clic en guardar datos de sueno
        Then Clic en confirmar guardado datos sueno
       
        Examples:
            | Email                        | Password        | FechaHoraDormir| FechaHoraLevantar|Tiempo| NumeroDespierto|
            | mauro.ortiz@yopmail.com | 2021pruebasatm  | 2021-04-29 21:00| 2021-04-30 06:00| 08:00|  1 |
 
    @Smoke @registroActividad @validateBotonRegistroCorporal
    Scenario Outline: Validate Boton Registro Corporal        
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Registrar Acitividad
        And Dar clic en registrar actividad
        Then Dar clic en Registro datos cuerpo
        And Ver formulario para registrar informacion de cuerpo
        
        Examples:
            | Email                   | Password        |
            | daniel.valencia@yopmail.com | 2021pruebasatm  | 
