const createBid = async (event) => {
  event.preventDefault();

  const car_id = document.querySelector('input[name="car-id"]').value;

  const bid = document.querySelector('#newBid').value.trim();
  const currBid = document.querySelector('#currBid').value;
  const bidInc = document.querySelector('#bidInc').value;

  const reqBid = currBid + bidInc;

  console.log(bid);
  console.log(car_id);
  console.log(typeof currBid);
  console.log(typeof bidInc);
  console.log(reqBid);

  if (bid >= reqBid) {
    const response = await fetch('/api/bids', {
      method: 'POST',
      body: JSON.stringify({ bid, car_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(bid);
    console.log(car_id);

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } else {
    alert('Invalid bid! Please re-enter your bid!');
  }
};

document.querySelector('.biddingForm').addEventListener('submit', createBid);
