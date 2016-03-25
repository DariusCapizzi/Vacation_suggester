console.log("scripts test");


$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    $(".location_images div").hide();

    //variable declaration
    var live = $("input:radio[name=theQuestion]:checked").val();
    console.log(live);

    var land1 =$("input:radio[name=hamburger]:checked").val();
    console.log(land1);

    var land2 =$("input:radio[name=superman]:checked").val();
    console.log(land2);

    var sea1 =$("input:radio[name=seafood]:checked").val();
    console.log(sea1);

    var sea2 =$("input:radio[name=aquaman]:checked").val();
    console.log(sea2);


    var land_lover_number = parseInt(land1) + parseInt(land2);
    var sea_lover_number = parseInt(sea1) + parseInt(sea2);
    var love = land_lover_number + sea_lover_number


    // logic

    // intial checks for hopeless cases.
    if ( (live === "1") && (land1 === "1") && (land2 === "1") && (sea1 ==="1") && (sea2 === "1") ){
      // anywhere is fine for someone who likes everything
      $(".location_images h1").text("Go anywhere, everywhere")
      $(".anywhere_image").show();
    }
    else if (live === "0"){
      // should they choose not to live
      $(".location_images h1").text("your grave");
      $(".grave_image").show();
    }


    // test integer values to resolve the conflict between land and sea. The order of these tests don't matter. 
    else if ( (land_lover_number === sea_lover_number) && (love > 0) ) {
      // if they like one of each,
      $(".location_images h1").text("beach");
      $(".beach_image").show();
    }
    else if (sea_lover_number > land_lover_number) {
      //if they like sea more than land, because hamburgers are tested before aquaman.
      $(".location_images h1").text("how about... under the sea?")
      $(".sea_image").show();
    }



    // "or" tests, to detect single entries :
    else if ( (land1 === "1") || (land2 === "1") ){
      // hamburgers and superman are on land
      $(".location_images h1").text("how about... land?")
      $(".land_image").show();
    }
    else if ( (sea1 ==="1") || (sea2 === "1")) {
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
