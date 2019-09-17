'use-strict';

function getDogImages() {
  const userInput = $('#number-choice').val();
  $('#number-choice').val('');
  if (userInput > 3 && userInput <= 50) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  } else if (userInput <= 0 || userInput > 50) {
    alert('Please choose a number between 3 - 50');
  } else if (userInput > 0 || userInput <= 3) {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').html("<h2>Love Dogs?!</h2>");
  responseJson.message.forEach(function(pic) {
    $('.results').append(`<img src="${pic}" class="results">`);
  });
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})