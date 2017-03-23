$(document).ready(function(){
  $("#bunnyForm").submit(function(event){
    event.preventDefault();
    var bunnyChoice = $("#bunny").val();
    $(".info").hide();

    if (bunnyChoice === "Cute"){
      $("#cuteDiv").show();

    } else if (bunnyChoice === "Toothy"){
      $("#toothyDiv").show();

    } else{
      $("#fluffyDiv").show();

    }

  });
});
