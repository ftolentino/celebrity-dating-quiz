$(document).ready(function() {
  $("form#foodForm").submit(function(event) {
    event.preventDefault();
    const foodInput = $("input:radio[name=Food]:checked").val();
    const animalInput = $("input:radio[name=Animal]:checked").val();

    if (foodInput === 'Candy' && animalInput === 'Cat') {
      $('.output').text('Johnny Depp');
    } else if (foodInput === 'Candy' && animalInput === 'Dog'){
      $('.output').text('Robin Williams');
    } else if (foodInput === 'Steak' && animalInput === 'Cat') {
      $('.output').text('Anne Hathaway'); 
    } else {
      $('.output').text('Amber Herd');
    }
  });
});

















// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     const age = parseInt($("input#age").val());
//     const gender = $("select#gender").val();

//     if (age) {
//       let quote = (100 - age) * 3;
//       if (gender === 'male' && age < 26) {
//         quote += 50;
//       }

//       $("#rate").text(quote);
//       $("#quote").show();
//     } else {
//       alert('Please enter your age.');
//     }

//     event.preventDefault();
//   });
// });