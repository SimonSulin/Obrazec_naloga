

const imgDiv = document.querySelector('.slika');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const filelabel = document.querySelector('#file-label');


imgDiv.addEventListener('mouseenter', function(){
    filelabel.style.display = "block";
});


imgDiv.addEventListener('mouseleave', function(){
    filelabel.style.display = "none";
});



file.addEventListener('change', function(){

    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);


    }
});