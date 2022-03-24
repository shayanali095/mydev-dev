
  // Put your application javascript here
/////////////////////////
////////////////////////////Load more functionality/////////////
//////////////////////////
$('.js-load-more').on('click', function(){
  var $this =$(this),
  totalPages = parseInt($('[data-all-pages]').val()),
  currentPage = parseInt($('[data-this-page]').val()),
  datacollurl = $('[data-coll-url]').val();;
  $this.attr('disabled', true);
  $this.find('[load-more-text]').addClass('loadMoreHide');
  $this.find('[loader]').removeClass('loadMoreHide');
  var nextUrl = $('[data-next-link]').val();
  var current_page_new = currentPage + 1;
  var next_coll = currentPage + 2;
  //alert(current_page_new)
  //return false;
  $.ajax({
  url: nextUrl,
  type: 'GET',
  dataType: 'html',
  success: function(responseHTML){
  $('[data-next-link]').val(datacollurl + "?page="+next_coll);
  $('[data-this-page]').val(current_page_new);
  $('.catalog').append($(responseHTML).find('.catalog').html());
  },
  complete: function() {
  if(current_page_new < totalPages) {
  $this.attr('disabled', false); $this.find('[load-more-text]').removeClass('loadMoreHide'); $this.find('[loader]').addClass('loadMoreHide');
  } 
  if(current_page_new >= totalPages) {
  $this.find('[load-more-text]').text('Products Finished').removeClass('loadMoreHide'); $this.find('[loader]').addClass('loadMoreHide');
  } 
  }
  })
 });