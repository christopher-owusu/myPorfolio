
let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}


let themeDot = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDot.lenght > i; i++){
    themeDot[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('obtion clicked:', mode)
        setTheme(mode)
        
    })
}

function setTheme(mode) {
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode == 'aqua'){
        document.getElementById('theme-style').href = 'aqua.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}

console.log('man - tire');