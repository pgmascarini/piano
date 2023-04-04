

let teclas = document.querySelectorAll(".teclas");

for (let i = 0; i < teclas.length; i++){
    teclas[i].addEventListener("click", function(){
        sonar(teclas[i].id);
    });
}

document.addEventListener("keypress", function(event){
    //----------teclas blancas------------
    if (event.key === "a"){
        sonar("DO4");
    }
    else if (event.key === "s"){
        sonar("RE4");
    }
    else if (event.key === "d"){
        sonar("MI4");
    }
    else if (event.key === "f"){
        sonar("FA4");
    }
    else if (event.key === "g"){
        sonar("SOL4");
    }
    else if (event.key === "h"){
        sonar("LA4");
    }
    else if (event.key === "j"){
        sonar("SI4");
    }
    else if (event.key === "k"){
        sonar("DO5");
    }
    //----------teclas negras------------
    else if (event.key === "q"){
        sonar("REb4");
    }
    else if (event.key === "w"){
        sonar("MIb4");
    }
    else if (event.key === "e"){
        sonar("SOLb4");
    }
    else if (event.key === "r"){
        sonar("LAb4");
    }
    else if (event.key === "t"){
        sonar("SIb4");
    }
})


function sonar(sonido){
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "./sounds-piano/sounds/" + sonido + ".mp3");
    etiquetaAudio.play();
}

//con click

// let teclas = document.querySelectorAll(".teclaBlanca");

// for (let i = 0; i < teclas.length; i++){
//     teclas[i].addEventListener("click", sonar);
  
// }

// document.addEventListener("keypress", (event) => {
//     console.log(event.code);
// });

// function sonar(event){
//     let etiquetaAudio = document.createElement("audio");
//     etiquetaAudio.setAttribute("src", "./sounds-piano/sounds/" + event.target.id + ".mp3");
//     etiquetaAudio.play();
// }


// // com teclado

// // let teclas = document.querySelectorAll(".teclaBlanca");

// // for (let i = 0; i < teclas.length; i++) {
// //     teclas[i].addEventListener("keydown", sonar);
// //     console.log(teclas);
// // }

// // function sonar(event) {
// //     console.log(event);
// //         let etiquetaAudio = document.createElement("audio");
// //         etiquetaAudio.setAttribute("src", "./sounds-piano/sounds/" + event.target.id + ".mp3");
// //         etiquetaAudio.play();
    
   
// // }

// //alert(String.fromCharCode(65,83,68, 70, 71, 72, 74, 75));
