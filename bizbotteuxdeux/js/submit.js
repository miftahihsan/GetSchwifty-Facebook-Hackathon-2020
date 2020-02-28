

window.onload = init;

function init() {

}

const button = document.getElementById('post-btn');

button.addEventListener('click', async _ => {
  try {
    const response = await fetch('https://getschwifty.herokuapp.com/userList', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        "title" : document.getElementById('title').value,
        "items": {
          "item1" : document.getElementById('item1').value
        }
      })
      }
    );
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});