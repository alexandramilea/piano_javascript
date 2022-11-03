// Selected key for each button
const whiteKey = ['z','x','c','v','b','n','m'];
const blackKey = ['s','d','g','h','j'];

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
        for(i; i<notes.length;i++){
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
                }
    }
    
}