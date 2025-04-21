points = 0;
function correct(){
    const messageBox = document.getElementById('message-box');
    points += 1; 
    messageBox.innerHTML = ' Good! you have ' + points + ' point(s)!';
    messageBox.style.display = 'block';
    setTimeout(() => { messageBox.style.display = '';}, 3000);
}

function wrong(){
    const messageBox = document.getElementById('message-box'); 
    points -= 1;
    messageBox.innerHTML = ' Wrong :( you have ' + points + ' point(s).'; 
    messageBox.style.display = 'block'; 
    setTimeout(() => { messageBox.style.display = '';}, 3000);
}

function reset(){
    points = 0;
    messageBox.style.display = 'none';
}

function goBack(){
    window.history.back();
}