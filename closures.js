document.getElementById('size-12').onclick = function () { 
    document.body.style.fontSize = `12px`

}
document.getElementById('size-14').onclick = function () { 
    document.body.style.fontSize = `14px`

}
document.getElementById('size-16').onclick = function () { 
    document.body.style.fontSize = `16px`

}

//Use closures to eliminate repetition 

function clickHandler(size) { 
   return function() { 
       document.body.style.fontSize = `${size}px`
    } 
}

document.getElementById('size-12').onclick = clickHandler(12)

