# numberGuesser
vezba pogadjanja brojeva 


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>game function</title>
    <style>
        input[type=number] {
            border-radius: 4px;
            width: 150px;
            height: 50px;
        }

        button,
        input[type=button] {
            width: 100px;
            height: 50px;
            border-radius: 4px;
            background-color: lightgoldenrodyellow;
        }

        p {
            font-size: 20px;
        }
    </style>

</head>

<body>
    <form>
        <p>Guess a number between min and max and click on the button (3 attempts):</p><br>
        <!-- <input type="text" id="broj"><br><br> -->
        <input type="number" id="broj"><br><br>
        <input type="button" id="dugme" value="click" onclick="pogodiBroj()">
        <p id="newElement"></p>
        <p id="newElement2"></p>
    </form>
    <script>
        let brojac = 1;
        function pogodiBroj() {
            const min = 1;
            const max = 10;

            let unos = document.getElementById('broj').value;
            console.log(unos);
            
            if (unos) {
                if (unos >= min && unos <= max) {
                    //alert('Bravo, correct number!');
                    document.getElementById('newElement').innerHTML = 'Bravo, correct number!';
                } else if (brojac < 3 && (unos < min || unos > max)) {
                    // alert('wrong number, you have ' + (3 - brojac) + ' more attempts');
                    document.getElementById('newElement').innerHTML = 'wrong number, you have ' + (3 - brojac) + ' more attempts';
                    brojac++;

                } else if (brojac >= 3) {
                    document.getElementById('broj').disabled = true;
                    document.getElementById('dugme').disabled = true;
                    //alert('GAME OVER');
                    document.getElementById('newElement').innerHTML = 'GAME OVER';
                    if (document.getElementById('dugme').disabled = true) {
                        document.getElementById('newElement2').innerHTML = '<button id="try">try it again</button>';
                    }
                }
            }
        }
    </script>
</body>

</html>
