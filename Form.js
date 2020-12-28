class Form{
    constructor(){

    }
    display(){
       var title = createElement('h2')
       title.html('carracinggame')
       title.position(400,100)
       var input = createInput('name')
       var button = createButton('play')
       input.position(400,160)
       button.position(450,200)
       button.mousePressed(function(){
           input.hide()
          button.hide() 
          var name = input.value()
          playercount+=1
          player.update(name)
          player.updatecount(playercount)
          var greeting = createElement('h3')
          greeting.html('hello'+name)
          greeting.position(400,200)
       })
    }
}