console.log("scripts test");


$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    $(".location_images div").hide();

    //variable declaration
    var Answer1 = $("input:radio[name=theQuestion]:checked").val();
    console.log(Answer1);

    var Answer2 =$("input:radio[name=hamburger]:checked").val();
    console.log(Answer2);

    var Answer3 =$("input:radio[name=superman]:checked").val();
    console.log(Answer3);

    var Answer4 =$("input:radio[name=seafood]:checked").val();
    console.log(Answer4);

    var Answer5 =$("input:radio[name=aquaman]:checked").val();
    console.log(Answer5);

    //logic
    if (Answer1 === "not to"){
      //should they choose not to live
      $(".location_images h1").text("death");
      $(".grave_image").show();
    }
    else if ( (Answer2 === "love") || (Answer3 === "kinda") ){
      // hamburgers and superman are on land
      $(".location_images h1").text("how about... land?")
      $(".land_image").show();
    }
    else if ( (Answer4 ==="why not?") || (Answer5 === "hellyes")) {
      // seafood and aquaman are under the sea
      $(".location_images h1").text("how about... under the sea?")
      $(".sea_image").show();
    }
    else {
      $(".location_images h1").text("Why live if you don't like anything?");
      $("#die").attr('checked', true);
      $(".grave_image").show();
    }



  });
})
