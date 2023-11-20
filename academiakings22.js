var dataRef = new Firebase('https://academia-aa577-default-rtdb.firebaseio.com');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'instrutores') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $("#instrutores3 tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.especialidade}</td> +
    
                        <td>${value2.horario}</td> +
    
                        <td>${value2.nome}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});