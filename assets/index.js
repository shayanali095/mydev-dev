$(document).ready(function(){ 
  $('#ProductSelect-product-template').click(function(){ 
    alert($('#ProductSelect-product-template :selected').text());
  });
});