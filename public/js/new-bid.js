const createBid = async (event) => {
  event.preventDefault();

  const newBid = document.querySelector('#newBid').value.trim();
  const currBid = document.querySelector('#currBid').value.trim();
  const bidInc = document.querySelector('#bidInc').value.trim();

  const reqBid = currBid + bidInc;

  if (newBid >= reqBid) {
    const response = await fetch('/api/bids', {
      method: 'POST',
      body: JSON.stringify({ newBid }),
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

document.querySelector('.biddingForm').addEventListener('submit', createBid);
