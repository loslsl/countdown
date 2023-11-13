var countDownDate = new Date("Nov 23, 2023 20:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

window.onload = function() {
    Swal.fire({
        title: '¡Bienvenido a la cuenta regresiva para la UCR!',
        text: 'Queda poco...',
        icon: 'info',
        confirmButtonText: 'Entendido'
    });
};
var countDownDate = new Date("Nov 23, 2023 20:00:00").getTime();
var x = setInterval(function() {
}, 1000);