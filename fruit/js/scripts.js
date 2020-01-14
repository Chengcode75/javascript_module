
/**
 * @file
 * Contains the JS function
 */

(function ($, Drupal) {
  Drupal.behaviors.fruit = {
    attach: function (context, settings) {
      $('.btn').once('fruit').append( '<button class="button">Click for prices</button>' );
      $('.button', context).click(function () {
        var fruit = prompt('Enter your desired fruit');
        if (fruit == 'apple') {
        alert('An apple costs rs 10');
        var qty = parseInt(prompt('Enter your desired quantity'));
        var cost = qty * 10
        alert( 'The total cost is rs' + cost );
      } else if (fruit == 'orange') {
          alert('An orange costs rs 15');
          var qty = parseInt(prompt('Enter your desired quantity'));
          var cost = qty * 15
          alert( 'The total cost is rs, ' + cost );
        } else if (fruit == 'banana') {
            alert('A banana costs rs 5');
            var qty = parseInt(prompt('Enter your desired quantity'));
            var cost = qty * 5
            alert( 'The total cost is rs, ' + cost );
        } else {
          alert('Not available ; we sell only apples ,oranges and bananas');
        }
        alert('Thank you for your interest in our Fruit Shop');
      });
    }
  };
})(jQuery, Drupal);
