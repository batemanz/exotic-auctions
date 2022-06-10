const createBid = async (event) => {
  event.preventDefault();

  const car_id = document.querySelector('input[name="car-id"]').value;

  const bid = document.querySelector('#newBid').value.trim();

  const currBid = parseInt(
    document.querySelector('input[name="currBid"]').value
  );

  const bidInc = parseInt(document.querySelector('input[name="bidInc"]').value);

  const reqBid = currBid + bidInc;

  console.log(bid);
  console.log(car_id);
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
      // body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(bid);
    console.log(car_id);

    if (response.ok && secondResponse.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } else {
    alert('Invalid bid! Please re-enter your bid!');
  }
};

document.querySelector('.biddingForm').addEventListener('submit', createBid);
