//auto focus feature for HTML5
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//JS for adding testimonials

//Testimonials already on the page.
var testimonials = [
  {
    id: 1,
    name: "Elder of Stone's Ferry",
    commentTitle: 'Great Job slaying those hideous Ghouls',
    comment: "My village's graveyard was being plagued by foul ghouls. The team from Aquistions Incorporated came in and cleared them out in not time."
  },
  {
    id: 2,
    name: "Gustav Gunderson",
    commentTitle: 'Saved our City!',
    comment: "Saved our city from an army of undead lead by a lich of all things. They were highly professional in their destruction of the undead, though one guy was a little over zealous with the pyrotechnics."
  },
  {
    id: 3,
    name: "Captain of City Watch in Nimrod Dale",
    commentTitle: 'I guess we came out ahead',
    comment: "They certainly held up their end of the bargain. But did they need to cause such a big explosion in the sewers to get the job done? We were cleaning up refuse for a week."
  }
];
//Adding testimonial from modal form.

$("button.sendComment").submit(function() {
    var testimonial = {};
    var inputName = $('input[name="addName"]').val();
    var inputTitle = $('input[name="addTitle"]').val();
    var inputOpinion = $('input[name="addOpinion"]').val();
    if (inputName && inputTitle && inputOpinion) {
        $(this).serializeArray().map(function(data) {
            testimonial[data.name] = data.value;
        });
    var lastComment = testimonials[Object.keys(testimonials).sort().pop()];
    testimonials.id = lastComment.id + 1;

    myButton(testimonial);
    } else {
        alert("All fields must have a valid value.");
    }
});

function myButton(testimonial) {
  testimonials.push(testimonial);
  $('myTest').append(testimonial);
}





//Testimonials that are already stored and printed to the testimonial page

var opinion = '';
var testimonial;

function print(opinion) {
    var myTestDiv = document.getElementById('myTest');
    myTestDiv.innerHTML = opinion;
}

for (var i = 0; i < testimonials.length; i += 1) {
    testimonial = testimonials[i];
    opinion += '<div class="list-group-item"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1" >' + testimonial.commentTitle + '</h5></div>';
    opinion += '<p class="mb-1">' + testimonial.comment + '</p>';
    opinion += '<small class="text-muted">' + testimonial.name + '</small></div>';
}
print(opinion);


//Added for own Amusement
$('.sendComment').click(function(){
    alert('Thanks for submiting a Testimonial!');
});



$('.cancelComment').click(function(){
    alert('Thanks anyway. I guess...');
});








