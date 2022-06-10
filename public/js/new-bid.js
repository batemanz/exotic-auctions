const createBid = async (event) => {
  event.preventDefault();

  //get values from the form fields from bidPage.handlebars
  const data = new FormData(event.target)
  const car_id = Number(data.get('car-id'))
  const bid = (Number(data.get('newBid')) || 0) * 1.0
  const currBid = Number(data.get('currBid')) || 0
  const bidInc = Number(data.get('bidInc')) || 0
  const reqBid = currBid + bidInc

  if (bid >= reqBid) {
    const response = await fetch('/api/bids', {
      method: 'POST',
      body: JSON.stringify({ bid, car_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } else {
    alert('Invalid bid! Please re-enter your bid!');
  }
};

document
  .querySelector('.biddingForm form')
  .addEventListener('submit', createBid)

//show bid history modal
function showHistory() {
  document
    .querySelector('.bid-history-modal')
    .classList
    .add('is-active')
}

//hide bid history modal
function closeHistory() {
  document
    .querySelector('.bid-history-modal')
    .classList
    .remove('is-active')
}