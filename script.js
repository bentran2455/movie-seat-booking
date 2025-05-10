const selectValue = document.getElementById("movies");
const seats = document.querySelectorAll(".seat-container .seat")
const totalPrice = document.getElementById("price");
const seatCount = document.getElementById("count");
const word = document.querySelector(".seat-word")

let price = 0;
let selectedSeatsCount = 0;

function toggleStyle(element) {
  element.classList.toggle("selected")
}

function updatePriceAndSeat(price, count) {
  totalPrice.innerText = price;
  seatCount.innerText = count;
  if (count > 1) {
    word.innerHTML = "seats"
  } else word.innerHTML = "seat"
}

selectValue.addEventListener("change", () => {
  price = 0;
  selectedSeatsCount = 0
  updatePriceAndSeat(price, selectedSeatsCount)
  seats.forEach((seat) => {
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected")
    }
  })
})

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    toggleStyle(seat);
    if (seat.classList.contains("selected")) {
      price += Number(selectValue.value);
      selectedSeatsCount++
    } else {
      price -= Number(selectValue.value);
      selectedSeatsCount--;
    }
    updatePriceAndSeat(price, selectedSeatsCount)
  })
})
