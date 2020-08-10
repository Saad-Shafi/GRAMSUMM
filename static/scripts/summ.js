var count;
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('input[type=range]').on('input change', function(){
        $('#per_label').text("Size:" + this.value + "%");
    });
    $('#text_input').on('change paste keyup', function(){
        var words = $("#text_input").val().split(" ");
        count = words.length - 1;
        $('.plabel2').html('<i>Word Count : ' + count + '</i>');
    });
    $('#text_input').on('keyup', function() {
    var key = event.keyCode || event.charCode;
        if( key == 8 || key == 46 ){
            if($('#text_input').val() != "")
            {
                var words = $("#text_input").val().split(" ");
                count = words.length;
                $('.plabel2').html('<i>Word Count : ' + count + '</i>');
            }
            else
            {
                $('.plabel2').html('<i>Word Count : 0000</i>');
            }
        }
    });
});
function validateForm()
{
    if($('#text_input').val() == "")
    {
        alert("Please enter some text");
    }
    else if($('#text_input').val() != "")
    {
         var words = $("#text_input").val().split(" ");
         count = words.length;
         if(count <= 30)
         {
            alert("Too Short to Summarize");
         }
    }
    else{
        return false;
    }
  return false;
}
