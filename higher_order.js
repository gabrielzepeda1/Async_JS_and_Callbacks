//Higher order function takes a function as a parameter or returns another function. 

//EX 
function double(n) { 
    return n*2 
}
//this function NEEDS the parameter to do anything. 

//setTimeout
setTimeout(fn) 

const fn = () => {
    //
}

//array.filter
const names = [ 
    'Sina','Sam', 'Qoli', 'Ben', 'Zoe', 'Quentin', 'Ala'
]

// const filteredNames = 
// names.filter(n => n[0] !== 'Q')

//REPETITION
const filtered = [] 
for (let i = 0; i < names.length; i++) {
    if (names[i][0] !== 'Q') { 
        filtered.push(names[i])
    }     
}    
const longNames = [] 
for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] >= 5) { 
        longNames.push(filtered[i])
    }     
}    
const elements = [] 
for (let i = 0; i < longNames.length; i++) {
    const el = document.createElement('p') 
    el.innerText = longNames[i] 
    elements.push(el)
}    


//USING HIGHER ORDER FUNCTIONS 

names 
    .filter(isNotQ(n))
    .filter(isMinimum5(n))
    .map(convertToEl(n))

function isNotQ(n) { 
    return n[0] !== 'Q'
}

function isMinimum5(n) { 
    return n.length >= 5
}

function convertToEl(n) { 
    const el = document.createElement('p') 
    el.innerText = longNames[i] 
    return el 
}


// HTML 
//<button onclick="onClick12">12px</button>
//<button onclick="onClick14">14px</button>
//<button onclick="onClick16">16px</button>

const onClick12 = makeClickHandler(12)
const onClick14 = makeClickHandler(14)
const onClick16 = makeClickHandler(16)

function makeClickHandler(size) { 
    return function() { 
        document.body.style.fontSize = `${size}px`
    }
}


