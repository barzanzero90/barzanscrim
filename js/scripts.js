const firebaseConfig = {
    apiKey: "AIzaSyCIdJxseUE4i_PmLPvkWDnRWRzkz-H3CUs",
    authDomain: "pubg-mobile-tdm.firebaseapp.com",
    projectId: "pubg-mobile-tdm",
    storageBucket: "pubg-mobile-tdm.appspot.com",
    messagingSenderId: "763540405794",
    appId: "1:763540405794:web:5f142c7edb6d07b01d547b",
    measurementId: "G-DD75J88X23"
};

firebase.initializeApp(firebaseConfig);

var phonenumberoremail = document.getElementById('phonenumberoremail').value;
phonenumberoremail.addEventListener('input', function() {
    this.style.textAlign = this.value ? 'left' : 'right';
});

var database = firebase.database();

function submitData() {
    var fullname = document.getElementById('fullname').value;
    var phonenumberoremail = document.getElementById('phonenumberoremail').value;
    var pubgid = document.getElementById("pubgid").value;
    var dropdown = document.getElementById("dropdown").value;
    var device = document.getElementById("device").value;

    if (fullname === '') {
        alert("ناوی سیانی");
        return;
    }
    if (phonenumberoremail === '') {
        alert("ژمارەی مۆبایل یان ئیمەیڵ");
        return;
    }
    if (pubgid === '') {
        alert("ئایدی پۆبجی");
        return;
    }
    if (dropdown != device) {
        alert("جۆری ئامێر");
        return;
    }

    var sanitizedPhoneNumber = phonenumberoremail.replace(/\D/g, ''); // Remove non-digit characters

    if (sanitizedPhoneNumber.length !== 11) {
        alert("e");
        return;
    }

    var userData = {
        fullname: fullname,
        phonenumberoremail: phonenumberoremail,
        pubgid: pubgid,
        dropdown: dropdown,
    };

    if (fullname && phonenumberoremail && pubgid && dropdown === device) {
        alert("خۆتۆمارکردن سەرکەوتووبوو")
    }

    var database = firebase.database().ref('users');
    database.push(userData);
}