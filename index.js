
var warn = document.getElementById('notify');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');

function process()
{
        warn.style.color = "gold";
        warn.style.textShadow = "1px 1px 1px red";
        warn.style.transition = "all ease-in 500ms";
        warn.innerHTML = "COMING SOON! <i class = 'fas fa-smile'> </i>";
        warn.style.fontWeight = "bolder";
        var interval = setInterval (function()
        {
        	clearInterval(interval);
            warn.innerHTML = "";
            
        }, 5000);
 };

b2.addEventListener('click', process);
b3.addEventListener('click', process);

