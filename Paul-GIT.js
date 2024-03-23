function vstup(){
    //funkce se uzivatele zepta na jmeno a nasledne overi, ze neco zadal
    let jmeno 
    
    while (true){ //cyklus neskonci, dokud uzivatel neco nezada
        jmeno = prompt("Zadejte sve jmeno:");
        
        jmeno=jmeno.trim();
        console.log(jmeno);

        if(jmeno != ""){
            break;
        }
    }

    return jmeno;
}

function upravJmeno(upraveneJmeno){
    //funkce odstrani zbytecne mezery a prevede vsechan prvni pismena na velka

    for (let i = upraveneJmeno.length-1; i >=0 ; i--){
        console.log(upraveneJmeno[i]);
        

        if (upraveneJmeno[i] == " "){
            //upraveneJmeno[i+1] = upraveneJmeno[i+1].toUpperCase();
            //upraveneJmeno[i+1] = uppercase(upravJmeno[i+1]);
            
            
        }
        
    }
    

    return upraveneJmeno;
}

function uppercase(pismeno){
    return pismeno.toUpperCase();
}

//START:

let jmenoUzivatele = vstup();
jmenoUzivatele=upravJmeno(jmenoUzivatele);
console.log(jmenoUzivatele);