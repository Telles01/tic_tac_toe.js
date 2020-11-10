const tic_tac_toe = {
  board: ['','','','','','','','',''],
  simbols: ['x','0'],
    options: ['x', '0'],
    turn_index: 0,
    charge: function(){ 
      this.turn_index = this.turn_index === 0 ? 1 : 0);
  }

  init: function(container){
    this.container_element = container;
  },

  make_play: function(position){
    if(this.gameover)return false;
    if(this.board[position] === ''){
        this.board[position] = this.simbols 

    }
  },


  draw: function(){
    let content = '';

    for (i in this.board){
      content +='<div onclick="tic_toc_toe.make_play(' + i + ')>' + i + '</div>';
    }

    this.container_element.innerHTML = content;

  }
};