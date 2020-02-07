let input = document.querySelectorAll("input");
let message = document.querySelector("h4");

var answers = ["Parijs", 8, "Ijsselmeer"];


function getCorrectAnswers()
{
    var points = 0;
    for(var i = 0; i < answers.length; i++)
    {
        if(input[i].value == answers[i])
        {
            points++;
        }
    }
    return points;
}

function showMessage()
{
    message.innerText = "Je hebt er " + getCorrectAnswers() + " goed";
}