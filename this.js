function talk(lang, isPolite) { 
    if (isPolite) { 
        if (lang === 'en') { 
          return  `I am ${this.name}`
        } else if (lang === 'it') {
          return `Ciao bella, sono ${this.name}`
      }
    }
    
      if (!isPolite) { 
        if (lang === 'en') { 
          return  `${this.name}, what you want?`
        } else if (lang === 'it') {
          return `Sono ${this.name}, 🫴`
      }
    }
    
  }
  
  const me = { 
      name: 'Sina', 
      talk 
  }
  
  const you = { 
      name: 'Qoli',
      talk
  }
  
  talk.bind(me)
  
  const meTalk = talk.bind(me) 
  
  //these output the same results 
  meTalk()
  
  talk.bind(me)()
  
  talk.call(me, 'en', true)
  talk.call(me, 'it', true)
  
  talk.call(me, 'en', false)
  talk.call(me, 'it', false)
  
  talk.apply(me, ['en', true])



//   function Person(n) { 
//     this.name = n 
//     this.talk = function() { 
//       console.log(this)
//     }
    
//     setTimeout(() => { 
//       console.log(this)
//     }, 100)
//   }
  
//   const me = new Person('Sina')
  
  