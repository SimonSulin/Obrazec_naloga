let submit_button = document.querySelector('#btn-submit');

submit_button.addEventListener("click", function(e) {
    let required = document.querySelectorAll("input[required]");
    required.forEach(function(element) {
    });
});

fullForm.addEventListener("button", (e) => {
    e.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Account created',
        showConfirmButton: false,
        timer: 3000,
        position: 'top',
        timerProgressBar: true,
    }).then((result) => {
        document.querySelector('fullForm').button();
    });
});