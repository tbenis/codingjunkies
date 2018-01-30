// $(document).ready(function(){
//     $( "#clickme" ).click(function() {
//       $( "#demo" ).fadeOut( "slow", function() {
//         // alert("Animation 1 Complete");
//       });
//       $( "#clickme" ).click(function() {
//         $( "#demo" ).fadeIn( "slow", function() {
//           // alert("Animation 2 Complete");
//         });
//       });
//       })
//     });
    // With the element initially hidden, we can show it slowly:

$(document).ready(function(){
    $( "#clickme" ).click(function() {
      $( "#demo" ).fadeToggle( "slow", "linear" );
    });
    // $( "#clickme" ).click(function() {
    //   $( "demo" ).fadeToggle( "fast", function() {
        // $( "p" ).append( "<div>finished</div>" );
      // });
    // });
});
