const buyBtns = document.querySelectorAll('.js-buy-tickets');

function showbuytickets() {
    alert('show')
}
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showbuytickets)
}