console.log(`

        Sejam bem vindos ao nosso restaurante

Digite um dos pratos abaixo:

=> pipoca
=> macarrao
=> carne
=> feijao
=> brigadeiro

`)
function microondas (comida, tempo) {
    if (comida ==="pipoca") {
        if (tempo >= 3*10) {
            console.log("Kabumm")
        } else if (tempo>2*10) {
            console.log("A comida queimou, refaça-a toda")
        } else if (tempo < 10){
            console.log("tempo insuficiente")
        } else {
            console.log("Prato pronto, bom apetite!!")
        }
    } else if (comida ==="carne") {
        if (tempo >= 3*15) {
            console.log("Kabumm")
        } else if (tempo > 2*15) {
            console.log("A comida queimou, refaça-a toda")
        } else if (tempo < 15) {
            console.log("Tempo insuficiente")
        } else {
            console.log("Prato pronto, bom apetite!!")
        }
    } else if (comida === "macarrao") {  
            if (tempo >= 3*8) {
                console.log ("Kabum")
            } else if (tempo > 2*8) {
                console.log ("A comida queimou. Refaça-a toda")
            } else if (tempo < 8) {
                console.log ("Tempo insuficiente")
            } else {
                console.log ("Prato pronto! Bom apetite!")
            }
    } else if (comida ==="feijao") {
            if (tempo >= 3*12) {
                console.log("Kabumm")
            } else if (tempo>2*12) {
                console.log("A comida queimou, refaça-a toda")
            } else if (tempo < 12){
                console.log("tempo insuficiente")
            } else {
                console.log("Prato pronto, bom apetite!!")
            }
    } else if (comida === "brigadeiro") {
            if (tempo >= 8*3){
                console.log("Kabumm")
            } else if (tempo >2*8) {
                console.log("A comida queimou, refaça-a toda")
            } else if (tempo < 8) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto, bom apetite!!")
            }
    } else if (comida !== "pipoca", "macarrao", "carne", "feijao", "brigadeiro") {
            console.log("Prato inexistente.")
    }
}
microondas('arroz', 37)
microondas('pipoca', 31)
microondas('pipoca', 11)
microondas('pipoca', 21)
microondas('pipoca', 24)




    

