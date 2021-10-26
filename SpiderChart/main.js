$( "#asnSubmitButton" ).click(function() {
    

    let query = $("#inputVal").val();
    // $("#fldAsn").val(bebek);
    fetch('https://stat.ripe.net/data/asn-neighbours/data.json?resource=' + query)
  .then(response => response.json())
  .then(data =>{
    $("#fldAsn").val(JSON.stringify(data));
    console.log(data);
  } );


  });

