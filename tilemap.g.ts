// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101020202020202020202020202020202020202020202020202020202010202020202020202020202020202020102020202020202020202020202020201020202020101010101010101010102010202020201010101010101010101020102020202020202020202020202020201020202020202020202020202020202010202020202020202020202020202020102020202010101010101010101010201020202020202020202020202020202010202020202020202020202020202020102020202020202020202020202020201010101010202020202020202020202010101010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 2 2 2 2 2 2 2 2 2 . 2 . . . . 
2 2 2 2 2 2 2 2 2 2 . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 2 2 2 2 2 2 2 2 2 . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
