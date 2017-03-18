var SIZE = Math.min( window.innerWidth / 10, 56 );
var LENGTH = SIZE * 0.75;
var THICKNESS = 6;

var canvas = document.querySelector( 'canvas' );
var context = canvas.getContext( '2d' );

var width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    margin = Math.min( window.innerWidth, window.innerHeight ) * 0.05;
var step = 0;
boom();

function boom() {
  step += 1;
  context.clearRect( 0, 0, width, height );
  context.fillStyle = '#3aab8c';

  var cols = Math.floor( (width-margin*2) / SIZE ),
      rows = Math.floor( (height-margin*2) / SIZE );

  var ox = ( width - ( cols * SIZE ) ) / 2,
      oy = ( height - ( rows * SIZE ) ) / 2;

  for( var x = 0; x < cols; x++ ) {
    for( var y = 0; y < rows; y++ ) {
      var px = ox + x * SIZE,
          py = oy + y * SIZE;

      var a = ( ( x + y ) / 10 ) + ( step / 40 );
      context.save();
      context.translate( px+SIZE/2, py+SIZE/2 );
      context.rotate( a + Math.sin( a ) - Math.PI/2 );
      context.translate( 0, 10 );
      context.fillRect( 0, -THICKNESS/2, LENGTH, THICKNESS/2 );
      context.restore();
    }
  }
  requestAnimationFrame( boom );
}
