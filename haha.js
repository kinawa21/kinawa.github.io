audio = document.querySelector(".audio"); 
var musik = "musik.mp3";
var background = "cinn.jpg";      
var ucapanSurat = "HABEDEE 20th CINDY, selamat memulai perjalanan baru yang lebih dewasa dan semoga kedepannya apa yang kamu harapkan bisa tercapai. Mohon maaf kalau emang akhir-akhir ini rada gajelas,  suka usilin kamu, kadang juga diem-diem karena ya emang lagi pusing aja ngembangin diri buat kedepanya hehehe. Mungkin hal-hal ucapan ultah kek gini bisa dibilang biasa saja sih lagian juga banyak orang yang mungkin lebih baik buat hal yang kek ginian. Ekspektasiku sih ya semoga saja apa yang sudah kubuat dengan skill-skill yang masih dasar ini bisa membuatmu senang dan lebih seneng lebih lagi bisa kamu simpan link ini seneng banget malah :). dan terakhir pesan dariku buat pegangan kedepannya walaupun ga guna hehehe dengerin 'jangan pernah putus asa atau menyesal dari semua hal yang sudah kamu pilih cin, semua pilihan pasti ada konsekuensinya. berat atau mudahnya pilihanmu itu tergantung bagaimana sikapmu dalam mempertahankan tujuan yang sudah kamu pilih cinn.'  sekali lagi, selamat hari bahagiamu cinndyyyyyyy..... silahkan habiskan waktumu ini dengan hal-hal bahagiaaaa                    from: Anonim";
var pesanWhatsapp = "(tanggapanmu tentang ini :)";
var bg = document.querySelector(".bg"); 
var isiSurat = document.querySelector(".pesan"); 
audio.src = musik; 
bg.style = "background-image: url('" + background + "')";

function tampil() { 
    document.querySelector(".card").
    style = "transition: 0.5s all ease;transform: scale(0);opacity: 0;"; 
    audio.play(); setTimeout(typeWriter, 1000); setTimeout(function () { document.querySelector(".content2").style.display = "block"; }, 400); 
} 

function klik() { 
    document.querySelector(".foto").
    style = "transition: 0.5s all ease;transform: scale(0);opacity: 0;"; 
    audio.play(); setTimeout(typeWriter, 1000); setTimeout(function () { document.querySelector(".content2").style.display = "block"; }, 400); 
} 

var i = 0; 
var speed = 100; 
isiSurat.value = ""; 
function typeWriter() { 
    if (i < ucapanSurat.length) { 
        isiSurat.value += ucapanSurat.charAt(i); 
        i++; setTimeout(typeWriter, speed); 
    } 
    else { 
        document.querySelector(".wa").style.display = "block"; } 
    
} 
var content = document.querySelector(".content"); 
var cpr = document.querySelector(".cpr").innerHTML; 
function balasWA(){
    window.open("https://wa.me/?text=" + pesanWhatsapp, "_blank");
}
