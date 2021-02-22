let animateHTML = function() {
    let elems,
        windowHeight
    
    let init = () => {
      elems = document.getElementsByClassName("hidden");
      windowHeight = window.innerHeight;
      _addEventHandlers();
    }
    
    const _addEventHandlers = () => {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init)
    }
    let _checkPosition = () => {
      for ( let i = 0; i < elems.length; i++ ) {
        let posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= 0) { 
          elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
        }
      }    
    }
    
    return {
      init
    }
  }
  
  animateHTML().init();