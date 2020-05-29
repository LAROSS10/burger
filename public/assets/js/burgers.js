
$(document).ready(function() { 


$(".create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = $(this).children(".burger_id").val()
   console.log(newBurger)


    $.ajax({
        method: 'PUT',
        url: 'api/burgers' + newBurger
      }).then(function(data){
}).then(
    function(){
        console.log(data);
        location.reload();
    }
)

});
})



