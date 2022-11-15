$(document).ready(() => {
  $('#PHONE').inputmask('(999)-999-9999');

  // $('#contact-form').find('input').first().focus();

  // $('#submit').on('click', (e) => {
  //   e.preventDefault();
  //   $('.contact-form')
  //     .find('input')
  //     .focus(function () {
  //       if (!$(this).val()) {
  //         $(this).addClass('warning');
  //         alert('All fields required!');
  //       }
  //     });
  // });
});

const maxRow = 10;

setTimeout(() => {
  const rowCount = $('.client').length;
  $('.lead-count').html(` Number of Leads : ${rowCount}`);
  if (rowCount > maxRow) {
  }
}, 1000);
