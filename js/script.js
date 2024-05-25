document.querySelector( 'h1' ).addEventListener( 'click', showMessage );

// Lab 10
$( 'button' ).click( filterItems );

function filterItems() {
  let button = this;
  let selector = $( this ).data( 'filter' );
  console.log( selector );
  $( '#products img' ).hide( 500 );
  $( selector ).show( 500 );
}

// Lab 9
function showMesssage() {
    alert( 'JavaScript!' );
}
// showMesssage();
document.querySelector('h1').addEventListener('click', showMesssage); 
// Function name without () behind, means won't be triggered immediately when loading body context
// Will be called after action performed
Fancybox.bind( "[data-fancybox]" );

// Implement function of filter buttons
$('button').click(filterItems);

function filterItems(){
    let button = this;
    let selector = $(button).data('filter');
    console.log(selector);
    // Hide everything, then show those selected
    $( '#products img' ).not( selector ).hide( 500 );
    $(selector).show(500);
}