// Unique Firebase Object
const firebaseConfig = {
  apiKey: 'AIzaSyBoV2dJ7YICfEAOVDs6KC1TCNV3Wm4-0z8',
  authDomain: 'genuinellc.firebaseapp.com',
  projectId: 'genuinellc',
  storageBucket: 'genuinellc.appspot.com',
  messagingSenderId: '385761443438',
  appId: '1:385761443438:web:220a835310aec44a56707f',
};

//   Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize CLoud Firestore and get a reference to the service
const firestore = firebase.firestore();

// Variable to access database collection
// Use name of collection exactly in quotations of method
const db = firestore.collection('sign-up-form-data');

// Get Submit Form
let submitButton = document.querySelector('#submit');

// Create Event Listener To Allow Form Submission
window.onload = () => {
  let formInput = document.querySelector('.contact-form input');
  let formTextArea = document.querySelector('.contact-form textarea');
  const form = document.getElementById('contact-form');

  // form.querySelectorAll('input').forEach((input, i) => {
  //   console.log(i + ':' + input);
  //   input.addEventListener('keydown', function (e) {
  //     if (e.keyCode === 9 && !input.value) {
  //       $(this).addClass('warning');
  //       alert('This field is required.');
  //     }
  //   });
  // });

  document.getElementsByName('conatct-form-input').forEach((input) => {
    console.log(input);
    input.addEventListener('keypress', function (e) {
      console.log(e.keyCode);
    });
  });

  submitButton.addEventListener('click', (e) => {
    // Prevent Default Form Submission Behavior
    e.preventDefault();

    let fullName = document.querySelector('#FULLNAME').value;
    let email = document.querySelector('#EMAIL').value;
    let phone = document.querySelector('#PHONE').value;
    let budget = document.querySelector('#BUDGET').value;
    let details = document.querySelector('#DETAILS').value;

    // let formInput = document.querySelector('.contact-form input');
    // let formTextArea = document.querySelector('.contact-form textarea');

    form.querySelectorAll('input').forEach(function (input, i) {
      console.log(input);

      if (!input.value) {
        input.classList.add('warning');
        // input.focus();
        debugger;
      } else if (
        !fullName === '' ||
        !email === '' ||
        !phone === '' ||
        !phone === '(___)-___-____' ||
        !budget === '' ||
        !details === ''
      ) {
        input.classList.remove('warning');
        //    Save Form Data To Firebase
        debugger;
        db.doc()
          .set({
            FULLNAME: fullName,
            EMAIL: email,
            PHONE: phone,
            BUDGET: budget,
            DETAILS: details,
          })
          .then(() => {
            document.querySelector('#genuine-contact-form').reset();
            console.log('Data saved!');
          })
          .then(() => {
            window.location.href = 'http://genuinellc.com/thank-you.html';
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });

  db.get().then((querySnapShot) => {
    querySnapShot.forEach((doc) => {
      const data = doc.data();
      const tableHTML = `<tr class='client'><td><input type="checkbox" aria-label="Checkbox for following text input"> &nbsp; &nbsp; ${data.FULLNAME}</td> <td>${data.EMAIL}</td> <td>${data.PHONE}</td> <td>${data.BUDGET}</td> <td>${data.DETAILS}</td> </tr>`;

      $(`#clientsTable`).append(tableHTML);
    });
  });
};
