
var lightMode = localStorage.getItem('lightmode');
if(lightMode){
    if(lightMode == 1){
        document.body.className = 'light-mode';
    }
}
else {
    var darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(darkMode){
        
    }else{
        document.body.className = 'light-mode';
    }
}



