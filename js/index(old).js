var TerminalEmulator = {
  init: function(screen) {
    var inst = Object.create(this);
    inst.screen = screen;
    inst.createInput();
    
    return inst;
  },

  createInput: function() {
    var inputField = document.createElement('div');
    var inputWrap = document.createElement('div');
    
    inputField.className = 'terminal_emulator__field';
    inputField.innerHTML = '';
    inputWrap.appendChild(inputField);
    this.screen.appendChild(inputWrap);
    this.field = inputField;
    this.fieldwrap = inputWrap;
  },


  enterInput: function(input) {
    return new Promise( (resolve, reject) => {
    var randomSpeed = (max, min) => { 
      return Math.random() * (max - min) + min; 
    }
      
    var speed = randomSpeed(70, 90);
    var i = 0;
    var str = '';
    var type = () => {
      
      str = str + input[i];
      this.field.innerHTML = str.replace(/ /g, '&nbsp;');
      i++;
      
      setTimeout( () => {
        if( i < input.length){
          if( i % 5 === 0) speed = randomSpeed(80, 120);
          type();
        }else {
          console.log('tick');
          setTimeout( () => {
            console.log('tock');
            resolve();
          }, 400);
          
        } 
      }, speed);
      
      
    };
    
    
    type();
      
    });
  },
  
  enterCommand: function() {
    return new Promise( (resolve, reject ) => {
      var resp = document.createElement('div');
      resp.className = 'terminal_emulator__command';
      resp.innerHTML = this.field.innerHTML;
      this.screen.insertBefore( resp, this.fieldwrap);
      
      this.field.innerHTML = '';
      resolve();
    })
  },

  enterResponse: function(response) {
    
    return new Promise( (resolve, reject ) => {
      var resp = document.createElement('div');
      resp.className = 'terminal_emulator__response';
      resp.innerHTML = response;
      this.screen.insertBefore( resp, this.fieldwrap);
      
      resolve();
    })
  
    
  },
  
  wait : function( time, busy ) {
    busy = (busy === undefined ) ? true : busy;
    return new Promise( (resolve, reject) => {
       if (busy){
         this.field.classList.add('waiting');
       } else {
         this.field.classList.remove('waiting');
       }
       setTimeout( () => {
          resolve();
      }, time);
    });
  },
  
  reset : function() {
    return new Promise( (resolve, reject) => {
      this.field.classList.remove('waiting');
      resolve();
    });
  }

};


/*
 * 
 * This is where the magic happens
 *
 */ 


var TE = TerminalEmulator.init(document.getElementById('screen'));


TE.wait(1000, false)
  .then( TE.enterInput.bind(TE, 'bash aboutme.sh') )
  .then( TE.enterCommand.bind( TE ) )
  .then( TE.enterResponse.bind(TE, 'Hi, I am Navan') )
  .then( TE.wait.bind(TE, 2000) )
  .then( TE.enterResponse.bind(TE, '- I specialise in bash') )
  .then( TE.wait.bind(TE, 600) )
  .then( TE.enterResponse.bind(TE, '- I created my first website when I was 7 ') )
  .then( TE.wait.bind(TE, 600) )
  .then( TE.enterResponse.bind(TE, '- But, DOSed it a month afterwards ') )
  .then( TE.wait.bind(TE, 300) )
  .then( TE.enterResponse.bind(TE, '- Proud Creater of GYGB and John-Doe ') )
  .then( TE.wait.bind(TE, 700) )
  .then( TE.enterResponse.bind(TE, 'Want to read more ? (y/n)') )
  .then( TE.wait.bind(TE, 2000, false) )
  .then( TE.enterInput.bind(TE, 'y') )
  .then( TE.enterCommand.bind(TE) )
  .then( TE.wait.bind(TE, 400) )
  .then( TE.enterResponse.bind(TE, 'Load short description ? (y/n)') ) 
  .then( TE.wait.bind(TE, 1800, false) )
  .then( TE.enterInput.bind(TE, 'y') )
  .then( TE.enterCommand.bind(TE) )
  .then( TE.wait.bind(TE, 400) )
  .then( TE.enterResponse.bind(TE, 'finalizing...') )
  .then( TE.wait.bind(TE, 2000) )
  .then( TE.enterResponse.bind(TE, 'I am a self-proclaimed geek. My powers? Am good at parsing jq, awesome in bash and the best, I make terrible decisions and can not keep my mouth shut. I know Bash, Python, C++, C#, HTML, CSS and am on the verge of learning Kotlin.') )
.then( TE.wait.bind(TE, 2000) )
.then( TE.enterInput.bind(TE, 'cat bash_programs.txt') )
  .then( TE.enterCommand.bind( TE ) )
  .then( TE.enterResponse.bind(TE, 'The Bash Programs I am Proud of :') )
  .then( TE.wait.bind(TE, 2000) )
  .then( TE.enterResponse.bind(TE, '- Get Your Grub Back (Grub Repair)') )
  .then( TE.wait.bind(TE, 600) )
  .then( TE.enterResponse.bind(TE, '- John Doe (Identity Generator) ') )
  .then( TE.wait.bind(TE, 600) )
  .then( TE.enterResponse.bind(TE, '- Cruncher (A slow way to kill a pc) ') )
.then( TE.wait.bind(TE, 600) )
  .then( TE.enterResponse.bind(TE, '- Meme-Me (A CLI for generating memes) ') )
  
.then( TE.reset.bind(TE) );
