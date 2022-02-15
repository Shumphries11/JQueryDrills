$('#btnSubmit').click(function() {
    // alert('button clicked');
})



$("form").submit(function() {
    $('#btnSubmit').prop('disabled', true);

    let text = $('#input').val();
    
    if(text !== "") {
        $('#btnSubmit').prop('disabled', false);
        alert(text); 
    }     
})

$('<div class = "container"></div>').appendTo('body').insertAfter('form');



// $('form').submit(function(e) {
//     e.preventDefault();
//     let text = "<h2>" + $('#input').val() + "</h2>";
//     $('.container').append(text);

//     function getRandomColor() {
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//           color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
//     $('h2').mouseover(function(event) {
//         $(event.target).css({
//             'background-color': getRandomColor(),
//             'border-radius': '100px'
//         });
//     })
      
// })

$('<ul></ul>').appendTo('body').insertAfter('div');

$('form').submit(function(e) {
        e.preventDefault();
        let text = "<li>" + $('#input').val() + "</li>";
        $('ul').append(text);
    
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        $('ul').click(function(event) {
            $(event.target).css({
                'color': getRandomColor()
            });
        })

        $('li').dblclick(function() {
            this.remove();
        })

})
