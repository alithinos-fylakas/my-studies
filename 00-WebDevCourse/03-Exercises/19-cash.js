
const cash = (value) => {
    console.log(`R$${value}`)
    const bank_notes = [100, 50, 10, 5, 1]
    const amt_utt_notes = [0, 0, 0, 0, 0]
    while (value > 0){
        for (let i = 0; i < bank_notes.length; i++){
            if (value - bank_notes[i] >= 0){
                amt_utt_notes[i] += 1
                value -= bank_notes[i]
                break
            }
        }
    }
    for (let i = 0; i < bank_notes.length; i++){
        if (amt_utt_notes[i] > 0){
            console.log(`${amt_utt_notes[i]} nota(s) de ${bank_notes[i]}.`)
        }
    }
}

cash(100)
cash(18)
cash(20)
cash(39)