function vstup(){
    //funkce se uzivatele zepta na jmeno a nasledne overi, ze neco zadal
    let jmeno 
    
    while (true){ //cyklus neskonci, dokud uzivatel neco nezada
        jmeno = prompt("Zadejte sve jmeno:");
        
        jmeno=jmeno.trim();  //odstraneni pripadnych mezer pred a za jmenem, pokud uzivatel zada mezeru (ci vice mezer), vystup bude: ""
        console.log(jmeno);

        if(jmeno != ""){
            break;
        }
    }

    return jmeno;
}

function upravJmeno(upravovaneJmeno){
    //funkce odstrani zbytecne mezery a prevede vsechan prvni pismena na velka
    
    let mezery = 0; //do promenne se bude zaznamenavat pocet zdvojenych mezer
    let upraveneJmeno = upravovaneJmeno[0].toUpperCase();
    //cyklus prepise jmeno do nove promenne a pritom bude provadet zmeny - provadet zmeny v existujicim stringu neni mozne (alespon ne tak snadno, jak jsem si puvodne myslel)
    //pro prepsani jmena do nove promenne je pouzita funkce padEnd() ktera jmeno zreplikuje z jednotlivych pismen
    
    for (let i = 1; i < upravovaneJmeno.length; i++){
        
        if (upravovaneJmeno[i] == " " && upravovaneJmeno[i+1] == " "){
            //pokud jsou dve mezery za sebou, prvni vynechame
            mezery++;
            }
        else if (upravovaneJmeno[i] == " "){
            //po mezere nasleduje velke pismeno
            upraveneJmeno = upraveneJmeno.padEnd(i+1-mezery,upravovaneJmeno[i]);
            i++;
            upraveneJmeno = upraveneJmeno.padEnd(i+1-mezery,upravovaneJmeno[i].toUpperCase());
            }
        else{
            upraveneJmeno = upraveneJmeno.padEnd(i+1-mezery,upravovaneJmeno[i]);  //padEnd(x,a) pridava a na konec retezce, dokud se nedosahne delky length, kera je zadana hodnotou x
                                                                                //zdvojene mezery by nastavovaly delku noveho retezce a proto by je funkce padEnd() opet vygenerovala - musi se tedy od delky odecist
        }             
    }
    
    return upraveneJmeno;
}

function pozdrav(finalniJmeno){
    alert("Ahoj " + finalniJmeno);
}



//START:

let jmenoUzivatele = vstup();
jmenoUzivatele=upravJmeno(jmenoUzivatele);
console.log(jmenoUzivatele);
pozdrav(jmenoUzivatele);