﻿function PieceHelper() { };
PieceHelper.FLOOR_TILE = 0,
PieceHelper.MIN_WALL_TILE = 1;
PieceHelper.MAX_WALL_TILE = 47;
PieceHelper.CHEST_TILE = 48,
PieceHelper.WEAPON_TILE = 54,
PieceHelper.POTION_TILE = 55,
PieceHelper.STAIRS_TILE = 49,
PieceHelper.MIN_MOB_TILE = 50,
PieceHelper.MAX_MOB_TILE = 53,
PieceHelper.FloorPieces = [  

                           [  [0, 0, 0],
                              [0, 0, 0],
                              [0, 0, 0]],

                           [  [0, 0, -1],
                              [0, 0, -1],
                              [0, 0, -1]],

                           [  [-1, 0, -1],
                              [-1, 0, -1],
                              [-1, 0, -1]],

                              [[-1, 0, 0],
                              [-1, 0, -1],
                              [-1, 0, -1]],

                              [[0, 0, -1],
                              [-1, 0, -1],
                              [-1, 0, -1]]
];
PieceHelper.WallPieces = [

                           [  [ 1, 1, -1],
                              [-1, 1, -1],
                              [-1, 1, -1]],

                           [  [-1, 1, 1],
                              [-1, 1,-1],
                              [-1, 1, -1]],

                            [ [-1, 1, -1],
                              [ 1, 1,  1],
                              [-1, 1, -1]],

                              [[1, -1, 1],
                              [1, -1, 1],
                              [1, -1, 1]],

                              [[-1, 1, -1],
                              [-1, 1, -1],
                              [-1, 1, -1]],
];
PieceHelper.SpecialPieces = [[[1, -1, 1],
                              [-1, 0, -1],
                              [1, -1, 1]]];
PieceHelper.rotateRight = function (tiles) {
    var transformedArray = new Array();
	
    var row = -1;
    for (var i = tiles[0].length - 1; i > -1; i--)
    {
        row++;
        transformedArray[row] = new Array();
		
        for (var j = 0; j < tiles.length; j++)
        {
            transformedArray[row][j] = tiles[j][i];
        }
    }
	
    return transformedArray;
};
PieceHelper.rotateLeft = function (tiles) {
    var transformedArray = new Array();
		
    for ( var i = 0; i < tiles[0].length; i++ )
    {
        transformedArray[i] = new Array();
		
        // fill the row with everything in the appropriate column of the source array
        var transformedArrayColumn = -1;
        for (var j = tiles.length - 1; j > -1; j--)
        {
            transformedArrayColumn++;
            transformedArray[i][transformedArrayColumn] = tiles[j][i]
        }

    }
	
    return transformedArray;
};
PieceHelper.randomBool = function() {
    return Math.random() >= 0.5;
}
PieceHelper.WallAttributes = [

                             [[-1, 0, -1],
                              [0, 1, 0],
                              [-1, 0, -1]],

                              [[-1, 0, -1],
                              [0, 1, 1],
                              [-1, 0, -1]],

                              [[-1, 0, -1],
                              [0, 1, 0],
                              [-1, 1, -1]],

                              [[-1, 0, -1],
                              [1, 1, 0],
                              [-1, 0, -1]],

                              [[-1, 1, -1],
                              [0, 1, 0],
                              [-1, 0, -1]],

                              [[0, 1, 0],
                              [1, 1, 1],
                              [0, 1, 0]],

                              [[-1, 1, -1],
                              [0, 1, 0],
                              [-1, 1, -1]],

                              [[-1, 0, -1],
                              [1, 1, 1],
                              [-1, 0, -1]],

                              [[-1, 0, -1],
                              [0, 1, 1],
                              [-1, 1, 0]],

                              [[-1, 0, -1],
                              [1, 1, 0],
                              [0, 1, -1]],

                              [[0, 1, -1],
                              [1, 1, 0],
                              [-1, 0, -1]],

                              [[-1, 1, 0],
                              [0, 1, 1],
                              [-1, 0, -1]],

                              [[-1, 1, 0],
                              [0, 1, 1],
                              [-1, 1, 0]],

                              [[-1, 0, -1],
                              [1, 1, 1],
                              [0, 1, 0]],

                              [[0, 1, -1],
                              [1, 1, 0],
                              [0, 1, -1]],

                              [[0, 1, 0],
                              [1, 1, 1],
                              [-1, 0, -1]],

                              [[-1, 1, 1],
                              [0, 1, 1],
                              [-1, 1, 1]],

                              [[-1, 0, -1],
                              [1, 1, 1],
                              [1, 1, 1]],

                              [[1, 1, -1],
                              [1, 1, 0],
                              [1, 1, -1]],

                              [[1, 1, 1],
                              [1, 1, 1],
                              [-1, 0, -1]],

                              [[-1, 0, -1],
                              [0, 1, 1],
                              [-1, 1, 1]],

                              [[-1, 0, -1],
                              [1, 1, 0],
                              [1, 1, -1]],

                              [[1, 1, -1],
                              [1, 1, 0],
                              [-1, 0, -1]],

                              [[-1, 1, 1],
                              [0, 1, 1],
                              [-1, 0, -1]],

                              //--

                              [[0, 1, 1],
                              [1, 1, 1],
                              [1, 1, 1]],

                              [[1, 1, 0],
                              [1, 1, 1],
                              [1, 1, 1]],

                              [[1, 1, 1],
                              [1, 1, 1],
                              [1, 1, 0]],

                              [[1, 1, 1],
                              [1, 1, 1],
                              [0, 1, 1]],

                              [[0, 1, 0],
                              [1, 1, 1],
                              [1, 1, 1]],

                              [[1, 1, 0],
                              [1, 1, 1],
                              [1, 1, 0]],

                              [[1, 1, 1],
                              [1, 1, 1],
                              [0, 1, 0]],

                              [[0, 1, 1],
                              [1, 1, 1],
                              [0, 1, 1]],

                              [[0, 1, 1],
                              [1, 1, 1],
                              [1, 1, 0]],

                              [[1, 1, 0],
                              [1, 1, 1],
                              [0, 1, 1]],

                              //--

                              [[1, 1, 1],
                              [1, 1, 1],
                              [1, 1, 1]],

                               [[-1, 1, 0],
                              [0, 1, 1],
                              [-1, 1, 1]],

                              [[-1, 0, -1],
                              [1, 1, 1],
                              [1, 1, 0]],

                              [[1, 1, -1],
                              [1, 1, 0],
                              [0, 1, -1]],

                              [[0, 1, 1],
                              [1, 1, 1],
                              [-1, 0, -1]],

                               [[-1, 1, 1],
                              [0, 1, 1],
                              [-1, 1, 0]],

                              [[-1, 0, -1],
                              [1, 1, 1],
                              [0, 1, 1]],

                              [[0, 1, -1],
                              [1, 1, 0],
                              [1, 1, -1]],

                              [[1, 1, 0],
                              [1, 1, 1],
                              [-1, 0, -1]],

                              //--

                               [[1, 1, 0],
                              [1, 1, 1],
                              [0, 1, 0]],

                               [[0, 1, 1],
                              [1, 1, 1],
                              [0, 1, 0]],

                               [[0, 1, 0],
                              [1, 1, 1],
                              [0, 1, 1]],

                               [[0, 1, 0],
                              [1, 1, 1],
                              [1, 1, 0]],
                          
];


    
