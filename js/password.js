$( document ).ready(function() {
  
  const changeText = function (el, text, color) {
    el.text(text).css('color', color);
  };
  
  
  $('.pww').keyup(function(){
    let len = this.value.length;
    const pbText = $('.pw .progress-bar_text');

    if (len === 0) {
      $(this).css('border-color', '#2F96EF');
      changeText(pbText, 'Password is blank', '#aaa');
    } else if (len > 0 && len <= 4) {
      $(this).css('border-color', '#FF4B47');
      changeText(pbText, 'Too weak', '#FF4B47');
    } else if (len > 4 && len <= 8) {
      $(this).css('border-color', '#F9AE35');
      changeText(pbText, 'Could be stronger', ' chocolate');
    } else {
      $(this).css('border-color', '#2DAF7D');
      changeText(pbText, 'Strong password', '#2DAF7D');
    } 
  });
  
});