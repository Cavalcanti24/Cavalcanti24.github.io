const biggerSmallerNumber = (arrayNumeros) =>{
    let bigger = arrayNumeros[0];
    let smaller = arrayNumeros[0];

    for (let i = 0; i < arrayNumeros.length; i += 1) {
        if (arrayNumeros[i] > bigger) {
            bigger = arrayNumeros[i];
        } else if (arrayNumeros[i] < smaller) {
            smaller = arrayNumeros[i];
        }
    }

         console.log(`Maior: ${bigger} | Menor: ${smaller}`);
                   
   
};
biggerSmallerNumber([0, 34, 100, 2]) ;
