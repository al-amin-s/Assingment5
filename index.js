function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function start() {
    hideElementById('header')
    hideElementById('footer')

}

function success() {
    hideElementById('header')
    hideElementById('ticket')
    hideElementById('footer')
    showElementById('success')
}


// mamun
const seat1=document.getElementById('seatName1')
const seat2=document.getElementById('seatName2')
const seat3=document.getElementById('seatName3')
const seat4=document.getElementById('seatName4')
const seats = document.querySelectorAll('.seat');
const seatLeft = document.getElementById('seat-left');
const seatNumber = document.getElementById('seatNumber');
const totalPrice = document.getElementById('total-price');

let number = 0;
let seatLeftNumber = 40;
let priceTotal = 0;
const price = document.querySelector('.price');
seats.forEach(function(seat){
    seat.addEventListener('click', function(){

        if (seat.classList.contains('selected')) {
            console.log('this item is selected ');
        }else{
            if (number == 4 ) {
                alert('NO more for you')
            }else{

                seat.classList.add('selected');
                number++;
                seatLeftNumber--;
                priceTotal = priceTotal + 550;
        
                seatLeft.innerHTML = seatLeftNumber;
                seatNumber.innerHTML = number;
                totalPrice.innerHTML = priceTotal;
                seat.classList.remove('seat');
                if (number == 1) {
                    showElementById('added1');
                    seat1.innerHTML = seat.innerText;
                }else if(number == 2){
                    showElementById('added2');
                    seat2.innerHTML = seat.innerText;
                }else if(number == 3){
                    showElementById('added3');
                    seat3.innerHTML = seat.innerText;
                }else if(number == 4){
                    showElementById('added4');
                    seat4.innerHTML = seat.innerText;
                }
            }

        }
        // console.log(seat.innerText);

    });
});
console.log(seats);

function addItem() {
    let priceDiv = document.createElement('div');
    // console.log(priceDiv);
    // return priceDiv;
    price.innerHTML = priceDiv;
}