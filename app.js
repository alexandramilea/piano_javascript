// Selected key for each button
const whiteKey = ['y','x','c','v','b','n','m'];
const blackKey = ['s','d','g','h','j'];
const wrongAnswers = ["G, Dd, G", "Dd, B, Bb", "Ab, Ee, Cc"]

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');



var randomNotePressed = []

// Added an event listener of each key you press 
keys.forEach(key => {
    console.log(key)
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
   if(e.repeat) return;
   const key = e.key;
   const whiteKeyIndex = whiteKey.indexOf(key);
   const blackKeyIndex = blackKey.indexOf(key);

   if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
   if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

// Main play sound for notes function.
function playNote(key) {
    console.log(key.dataset.note)
    const noteAudio = document.getElementById(key.dataset.note);
    console.log("noteAudio", noteAudio)
    noteAudio.currentTime = 0;
    noteAudio.play();
    // Css class for animation 
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}

function play(){
    var i = 0
    const notes = localStorage.getItem("NOTE_PRESSED").split(",")
    const allNotes = ["A", "Ab", "B", "Bb"]
    if(notes.length === 0){
        console.log("first")
        setTimeout(function(){
            const randomIndex = Math.floor(Math.random()* allNotes.length)
            const n = allNotes[randomIndex]
            randomNotePressed.push(n)
            localStorage.setItem("NOTE_PRESSED" , randomNotePressed)
            const rightAnswerValue = localStorage.getItem("NOTE_PRESSED")
            document.getElementById('rightanswer').innerHTML= rightAnswerValue
            //document.getElementById("wronganswer1").innerHTML = rightAnswerValue
            //document.getElementById("wronganswer2").innerHTML = rightAnswerValue
            const noteAudio = document.getElementById(n);
            noteAudio.currentTime = 0;
            noteAudio.play();
                }, 1000*i)
    }else {
        let rightAnswerValue
        for(let i = 0; i<3;i++){
            setTimeout(function(){
                const randomIndex = Math.floor(Math.random()* allNotes.length)
                const n = allNotes[randomIndex]
                randomNotePressed.push(n)
                localStorage.setItem("NOTE_PRESSED" , randomNotePressed)
                rightAnswerValue = localStorage.getItem("NOTE_PRESSED")
                //document.getElementById("wronganswer1").innerHTML = rightAnswerValue
                //document.getElementById("wronganswer2").innerHTML = rightAnswerValue
                const noteAudio = document.getElementById(n);
                noteAudio.currentTime = 0;
                noteAudio.play();

                if (i === 2) {
                    const buttons = document.querySelector('.answers > *')
                    const random = Math.floor(Math.random() * 3)
                    document.querySelectorAll('.answers > *')[random].innerText = rightAnswerValue
                    document.querySelectorAll('.answers > *')[random].addEventListener("click", win)
                    document.querySelectorAll('.answers > *').forEach((button, i) => {
                        if (i !== random) {
                            button.innerText = wrongAnswers[i]
                            button.addEventListener("click", lost)
                        }
                    })
                }

                    }, 1000*i)
                }
    }
    
}

function win () {
    document.getElementById("bds1").play()
    alert("You win!")

}


function lost () {
    console.log(document.getElementById("bds"))
    document.getElementById("bds").play()
    alert("You lost!")




}



function restart () {
    location.reload();
}







