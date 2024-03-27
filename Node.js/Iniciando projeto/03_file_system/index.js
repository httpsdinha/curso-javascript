let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, texto) =>{
    if(error){
        throw error;
    
    }else {
        console.log(texto);
    }

});

writeFile("arquivo.txt", "Inserir este texto", (error) =>{
    if(error){
        throw error;
    }else{
        console.log("Escreveu com suceso");
    }
})