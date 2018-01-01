"use strict"

test_game = [
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
      } else if (game[i][j] == 1) {
        clue++;
      }
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
      } else if (game[j][i] == 1) {
        clue++;
      }
    }
    clue_cols.push(num_clues);
  }
  
  return {'col_clues': clue_cols, 'row_clues': clue_rows};
}

var_dump(game_clues(test_game));
