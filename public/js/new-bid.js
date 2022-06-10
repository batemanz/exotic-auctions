const createBid = async (event) => {
  event.preventDefault();

  //get values from the form fields from bidPage.handlebars
  const data = new FormData(event.target)
  const car_id = Number(data.get('car-id'))
  const bid = (Number(data.get('newBid')) || 0) * 1.0
  const currBid = Number(data.get('currBid')) || 0
  const bidInc = Number(data.get('bidInc')) || 0
  const reqBid = currBid + bidInc

  console.log(data);
  console.log(car_id);
  console.log(bid);
  console.log(currBid);
  console.log(bidInc);
  console.log(reqBid);

  if (bid >= reqBid) {
    const response = await fetch('/api/bids', {
      method: 'POST',
      body: JSON.stringify({ bid, car_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    const secondResponse = await fetch(`/api/cars/${car_id}`, {
      method: 'PUT',
      body: JSON.stringify({ }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(secondResponse);
    console.log(bid);
    console.log(car_id);

    if (response.ok && secondResponse.ok) {
      document.location.replace('/');
      alert('success!');
    } else if (response.ok) {
      alert('Only the bid worked!');
    } else if (secondResponse.ok) {
      alert('Only the car update worked!');
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