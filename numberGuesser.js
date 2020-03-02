
//Declaring global variables

const min = 1;
const max = 9;
let posebanBroj;
let unos;
let rezultat = 0;
let att = 3;

//Adding some margin to an input field
(document.querySelector("#kojiB").style.display = "none") ?
    (document.querySelector("#noviB").style.marginTop = "4rem") :
    (document.querySelector("#noviB").style.marginTop = "0");

////////////////////////////////////////////////////////////////////////
//Adding an "mouseUp" event on a button. Function poredjenje() checks out
// if a number that has been entered by user was being equal to 
// randomly chosen number from 1 to 9

document.getElementById("dugmence")
    .addEventListener("mouseup", function poredjenje() {
        posebanBroj = Math.floor(Math.random() * (max + 1));
        posebanBroj == 0 ? posebanBroj = 1 : posebanBroj;
        unos = document.getElementById("noviB").value;

        console.log(unos, posebanBroj);

        (unos < 1 || unos > 9) ?
            document.querySelector("#kojiB").style.display = "block" : unos;

        (unos < 1 || unos > 9 || unos == "") ?
            document.querySelector("#praviBroj").style.display = "none" :
            document.querySelector("#praviBroj").style.display = "block";

        score();
        attempt();
        novoDugme();
        document.getElementById("noviB").value = "";
    })
/////////////////////////////////////////////////////////////////////
// Adding an event "focus-in" on the input field

document.getElementById("noviB")
    .addEventListener("focusin", function () {
        document.querySelector("#kojiB").style.display = "none";
    })

///////////////////////////////////////////////////////////////
//function score() is counting the result

function score() {
    if (unos == posebanBroj) {
        rezultat = rezultat + 10;
        console.log(rezultat + " is your score");
        document.querySelector("#yesNo").innerHTML = "YES";
        document.querySelector("#pogodjenB").innerHTML = posebanBroj;
    } else {
        document.querySelector("#yesNo").innerHTML = "NO";
        document.querySelector("#pogodjenB").innerHTML = posebanBroj;
    }

    document.querySelector("#rez").value = rezultat;

}

//////////////////////////////////////////////////////////////////
//function attempt() is checking out how many guesses you still have

function attempt() {

    if (unos != posebanBroj && unos != '' && unos >= min && unos <= max) {

        att = att - 1;

        att == 0 || att < 0 ? console.log("nema vise pokusaja") :
            console.log(att + " pokusaja");

        document.querySelector("#attempt").innerHTML = att;
    }
}

///////////////////////////////////////////////////////////////////////
//function novoDugme() is disabling first button, and showing
// button "Try Again" that reloads the page and starts new game

function novoDugme() {

    if (att == 0 || att < 0) {
        document.querySelector("#noviB").disabled = "true";
        document.querySelector("#again").style.display = "block";
        document.querySelector("#dugmence").style.display = "none";
    }
    if (document.querySelector("#again")) {
        document.querySelector("#again")
            .addEventListener("mouseup", function again() {
                window.location.reload();
            })
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////
// And just when you think that everything is perfect with your project in Google Chrome,
// you try opening it on different browser - in this case Firefox Mozilla,
//and you realize that window.location.reload() doesn't work quite well on it,
// actually the score doesn't reset to zero as it should. So, the only way to 
//make it browser compatible is to put an event "onLoad" on body tag
//and to add function to it that resets the value of a result -> that works in every browser.

function init() {
    document.querySelector("#rez").value = rezultat;
}

//////// THE END //////////////// Made By Natalija Stanimirovic///////////////////////////