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
    
    @Smoke @purpose @validateAnadirPropositoSeleccionado
    Scenario Outline: Anadir proposito seleccionado 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Propositos
        And Dar clic en Propositos
        And Dar clic en anadir propositos
        And Ver el proposito a seleccionar
        And Clic en el proposito seleccionado
        And Clic en confirmar ingreso proposito
        
        Examples:
            | Email                        | Password        | 
            | alicia21@yopmail.com | 2021pruebasatm  |
 
    @Smoke @purpose @validateEliminarPropositoHomePrincipal
    Scenario Outline: Eliminar proposito desde Home Principal 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Propositos
        And Dar clic en Propositos
        And Dar clic en editar proposito
        And Dar clic en eliminar proposito
        Then Confirmar eliminacion de registro
        
       
        Examples:
            | Email                        | Password        | 
            | alicia21@yopmail.com | 2021pruebasatm  |


    @Smoke @purpose @validatePropositoHomeBienestar
    Scenario Outline: Validar opcion proposito Home Bienestar 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar
        
        Examples:
            | Email                        | Password        | 
            | daniela.beltran@yopmail.com | 2021pruebasatm  |

    @Smoke @purpose @validateAnadirPropositoHomeBienestar
    Scenario Outline: Anadir proposito desde Home Bienestar 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar
        And Dar clic en anadir propositos
        And Ver el proposito a seleccionar
        And Clic en el proposito seleccionado
        And Clic en confirmar ingreso proposito
        
        Examples:
            | Email                        | Password        | 
            | teresa.gutierrez@yopmail.com | 2021pruebasatm  |
    
    @Smoke @purpose @validateEliminarPropositoHomeBienestar
    Scenario Outline: Eliminar proposito desde Home Bienestar 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar
        And Dar clic en editar proposito
        And Dar clic en eliminar proposito
        Then Confirmar eliminacion de registro
        
       
        Examples:
            | Email                        | Password        | 
            | guillermo.mendez@yopmail.com | 2021pruebasatm  |

    @Smoke @purpose @validateVolverAtras
    Scenario Outline: Volver a la pantalla Home Bienestar 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar
        Then Dar clic en volver atras
        
       
        Examples:
            | Email                        | Password        | 
            | guillermo.mendez@yopmail.com | 2021pruebasatm  |

    @Smoke @purpose @validateVerPropositosActivosOFinalizados
    Scenario Outline: Ver propositos activos y/o finalizados
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar
        And Clic en Detalle de proposito activo
        And Ver detalle proposito activo
        Then Dar clic en regresar pantalla anterior
        And Dar clic en Propositos Finalizados
        And Clic en Detalle de proposito finalizado
        And Ver detalle proposito finalizado
        Then Dar clic en devolver a pantalla anterior   
       
        Examples:
            | Email                        | Password        | 
            | mario.duarte@yopmail.com | 2021pruebasatm  |
    
    @Smoke @purpose @validateVerPropositosCategorias
    Scenario Outline: Ver las diferentes categorias de propositos 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar 
        And Dar clic en anadir propositos 
        And Clic en actividad fisica  
        And Clic en nutricion  
        And Clic en mente  
        And Clic en habitos  
        And Clic en sueno  
        
        Examples:
            | Email                        | Password        | 
            | guillermo.mendez@yopmail.com | 2021pruebasatm  |

    @Smoke @purpose @validateNavegarPropositosCategorias
    Scenario Outline: Navegar por las diferentes categorias de propositos 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar 
        And Dar clic en anadir propositos 
        And Clic en actividad fisica  
        Then Ver propositos actividad fisica  
        And Clic en nutricion  
        Then Ver propositos nutricion 
        And Clic en mente  
        Then Ver propositos mente 
        And Clic en habitos  
        Then Ver propositos habitos
        And Clic en sueno  
        Then Ver propositos sueno  
       
        Examples:
            | Email                        | Password        | 
            | guillermo.mendez@yopmail.com | 2021pruebasatm  |

    @Smoke @purpose @validateCategoriaActividadFisica
    Scenario Outline: Anadir proposito categoria Actividad Fisica 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar 
        And Dar clic en anadir propositos 
        And Clic en actividad fisica  
        Then Ver propositos actividad fisica  
        And Clic en el proposito seleccionado
        And Clic en confirmar ingreso proposito  
       
        Examples:
        | Email                | Password        | 
        | alicia21@yopmail.com | 2021pruebasatm  |

    @Smoke @purpose @validateCategoriaNutricion
    Scenario Outline: Anadir proposito categoria Nutricion 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar 
        And Dar clic en anadir propositos 
        And Clic en nutricion  
        Then Ver propositos nutricion 
        And Clic en el proposito seleccionado
        And Clic en confirmar ingreso proposito  
       
        Examples:
        | Email                | Password        | 
        | alicia21@yopmail.com | 2021pruebasatm  |

    @Smoke @purpose @validateCategoriaMente
    Scenario Outline: Anadir proposito categoria Mente 
        Given Usuario entra al home Bienestar
        When Ingresar correo electronico '<Email>' del usuario
        And Ingresar password '<Password>' del usuario
        And Dar clic boton iniciar sesion
        And Inicio Dashboard Bienestar
        Then Ver opcion Bienestar
        And Dar clic en Bienestar
        Then Ver opcion Propositos Bienestar
        And Dar clic en Propositos Bienestar 
        And Dar clic en anadir propositos 
        And Clic en mente  
        Then Ver propositos mente
        And Clic en el proposito seleccionado
        And Clic en confirmar ingreso proposito
        And Dar clic en anadir propositos 
        And Clic en habitos  
        Then Ver propositos habitos
        And Clic en sueno  
        Then Ver propositos sueno  
       
        Examples:
        | Email                        | Password        | 
        | alicia21@yopmail.com | 2021pruebasatm  |