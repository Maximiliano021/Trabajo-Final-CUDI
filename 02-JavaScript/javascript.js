const iniciar = document.getElementById('iniciar');

let menu = "MENU\n";
    menu+="1.  Ingresar nombre de usuario\n";
    menu+="2.  Ingresar email\n";
    menu+="3.  Ingresar edad\n";
    menu+="4.  Mostrar el nombre de usuario y edad\n";
    menu+="5.  Salir\n\n";
    menu+="Ingrese una opcion:\n\n";

let usuario, edad, email;



iniciar.addEventListener('click', program);



function program(){
    let opcion;

    do{
        opcion = Number( prompt(menu) ) ;
        switch (opcion){
            case 1: usuario = validarUsuario(); 
                break;
            case 2: email = validarEmail(); 
                break;
            case 3: edad = valEdad(); 
                break;
            case 4: mostrarUsuarioEdad(usuario, edad);
                break;
            default: if(opcion!=5) alert('Opcion no valida !');
                break;
        }
    }while (opcion !==  5);
    
        return;
}


function validarUsuario(){
    let verificado=false; //me sirve para verificar si ya paso por esta verificacion , si  = 1, entonces quiere decir que ya estoy volviendo a pedir
    
    usuario = prompt('Ingrese nombre de usuario: ');

    do{
        if(verificado){  // si intento devuelta, entonces me muestra una leyenda
            alert('Error, la contraseña debe contener entre 5 y 10 caracteres ');   
            usuario = prompt('Ingrese nombre de usuario: ');
        }

        verificado = true;  // aca le digo que ya estoy intentando denuevo
    }while(!(usuario.length<=10 && usuario.length>=5));
    
    alert('Usuario cargado:  ' + usuario);
        return usuario
}

function validarEmail(){
    let verificado=false;
    
    email = prompt('Ingrese nombre email: ');

    do{
        if (verificado){
            alert('Error, el email debe tener al menos @');   
            email = prompt('Ingrese nombre email: ');
            }        
        verificado = true
    }while( !(email.includes('@')) );

    alert('Email cargado:  ' + email);
        return email
}

function valEdad(){
    let verificado=false;
    
    edad = parseInt( prompt('Ingrese edad ') );
    
    do{
        if (verificado){
            alert('Error, la edad debe ser entre 1 y 100');   
            edad = prompt('Ingrese edad: ');
            }        
        verificado = true
    }while( !(edad>1 && edad<100) );
    
    alert('Edad cargada:  ' + edad);
        return edad;
}

function mostrarUsuarioEdad(){
    if (usuario != null && edad != null)
        alert('Nombre de usuario:  ' + usuario + '      |       ' +  'Edad:  ' + edad );
    else
        alert('No ha seleccionado todos los datos requeridos para esta informacion');
}