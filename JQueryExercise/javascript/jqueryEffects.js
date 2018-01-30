// $(document).ready(function(){
//   $( "#buttonA" ).hover(
//     $(this).append("<p>Click this button (buttonA) to hide image</p>"));
//   $( "#buttonA" ).click(function() {
//     $("#image").hide();
//   });
// });

// foi
// $( "#buttonA" ).hide();
$( "#buttonA" ).click(function() {
  $("#image").hide("slow",function(){
  $(".rightside").append("<h3>Image Hidden</h3>");
});
});

$( "#buttonB" ).click(function() {
  $("#image").show("slow", function(){
    $( this ).slideup();
  });
  $(".rightside").append("<h2>Image Shown</h>");
});
