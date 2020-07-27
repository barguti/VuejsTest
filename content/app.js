new Vue ({    //creacion instancia
    el: '#vue-app',  //declaracion id del elemento
    data: {     //objetos para nuestro elemento
        titulo: 'Hola!!!',
        nombre: 'Estaban'
    },
    methods: {  //creacion de metodos aka funciones
        miFuncion: function() {
            //si queremos usar algunos de los objetos, usar la palabra reservada 'this' para su uso
            return 'qué tal?? ' + this.nombre
        },
        operacion: function(valor1, valor2) {
            return valor1 * valor2
        }
    }
});