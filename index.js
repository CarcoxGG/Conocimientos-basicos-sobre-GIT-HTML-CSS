var persona = {
    nombre: ['Carlos','Daniel','Ramirez','Polania'],
    edad: 22,
    genero: 'Masculino',
    intereses: ['Videojuegos','Musica'],
    bio: function(){
        alert(this.nombre[0] + ' ' + this.nombre[2] + ' tiene '+ this.edad + ' años. Le gustan los ' + this.intereses[0] + '.');
    },
    saludo: function(){
        alert('Hola, soy ' + this.nombre[0] + '.');
    }
};

persona.bio();