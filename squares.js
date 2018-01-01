"use strict"

var test_game = [
  [1,1,1,1,1],
  [0,1,1,1,0],
  [0,0,1,0,0],
  [0,1,1,1,0],
  [1,1,1,1,1]
];

function game_clues(game) {
  var clue_rows = [];
  for (var i=0; i<game.length; i++) {
    var num_clues=[];
    var clue = 0;
    for (var j=0; j<game[i].length; j++) {
      if (clue > 0 && game[i][j] == 0) {
        num_clues.push(clue);
        clue = 0;
      } else if (game[i][j] == 1) {
        clue++;
      }
    }
    if (clue > 0) {
      num_clues.push(clue);
    }
    clue_rows.push(num_clues);
  }


  var clue_cols = [];
  for (var i=0; i<game[0].length; i++) {
    var num_clues=[];
    var clue = 0;
    for (var j=0; j<game.length; j++) {
      if (clue > 0 && game[j][i] == 0) {
        num_clues.push(clue);
        clue = 0;
      } else if (game[j][i] == 1) {
        clue++;
      }
    }
    if (clue > 0) {
      num_clues.push(clue);
    }
    clue_cols.push(num_clues);
  }
  
  return {
    'col_clues': clue_cols,
    'row_clues': clue_rows,
    'rows': game.length,
    'cols': game[0].length
    };
}
var the_clues;
console.log(the_clues = game_clues(test_game));

//-------------------------------
function get_col() {

}

function get_row() {

}

function build_frame(rows, cols) {
  var frame = [];
  for (var row=0; row<rows; row++) {
    var a_row = [];
    for (var col=0; col<cols; col++) {
      a_row.push(new FrameSquare());
    }
    frame.push(a_row);
  }
  return frame;
}

class FrameSquare {
  constructor() {
    this.number = null;
  }
}


function is_completed(frame) {
  for (var i=0; i<frame.rows; i++) {
    for (var j=0; j<frame.cols; j++) {
      if (frame[i][j] == null) {
        return false;
      }
    }
  }
  return true;
}


//----------------

var algo_stack = [];

function main(the_clues) {
  var frame = build_frame(the_clues.rows, the_clues.cols);
  for (var i=0; i<the_clues.rows; i++) {
    algo_stack.push({direction: 'R', index: i, algo: 'certain'});
  }
  for (var j=0; j<the_clues.cols; j++) {
    algo_stack.push({direction: 'C', index: i, algo: 'certain'});
  }
  
  var max_interations = 0;
  while (!is_completed(frame) && max_iterations < 1000) {
    if (algo_stack.length == 0) {
      console.log("Could not complete");
      return;
    }
    var algo_pack = algo_stack.pop();
    window['algo_'+algo_pack.algo](frame, algo_pack);
    max_iterations++;
  }
}


function algo_certain(frame, algo_pack) {
  console.log("IN ALGO", algo_pack);
}

