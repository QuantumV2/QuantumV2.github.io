let dumbTexts = document.getElementsByClassName("dumbText")

function gamzeeify(){
    for (let txt of dumbTexts) {
        let out = ""
        
        txt.innerText.split('').forEach(c => {
            rand_c = c
            if(Math.random() >= 0.5){
                rand_c = rand_c.toUpperCase()
            } else {
                rand_c = rand_c.toLowerCase()
            }
            out += rand_c
        })
        txt.innerText = out
    };
    setTimeout(gamzeeify, 500, dumbTexts)
    dumbTexts = document.getElementsByClassName("dumbText")
}

gamzeeify()