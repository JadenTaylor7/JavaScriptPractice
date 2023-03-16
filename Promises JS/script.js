/*
const delay = (msg, wait) => {
    setTimeout(() => {
      console.log(msg, wait);
    }, 1000 * wait);
  };
  
  new Promise((resolve, reject) => {
    // Code executing in the promise
    for (let i = 0; i < 3; i++) {
      delay('In promise', i);
    }
  });
  
  // Code executing after the promise
  for (let i = 0; i < 3; i++) {
    delay('After promise', i);
  }
  
  // OUTPUT:
  //   In promise 0
  //   After promise 0
  //   In promise 1
  //   After promise 1
  //   In promise 2
  //   After promise 2


  const coinToss = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
        console.log(coinToss);
      } else {
        reject('fell off table');
        console.log(coinToss);
      }
    }, 5000);
  });

  console.log(coinToss);

  coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
*/

function joinQueue() {
    const order = addQueuer();

      // Promise
  placeOrder(order)
  .then((order) => serveOrder(order))
  .catch((order) => {
    orderFailure(order);
  });
}



function addQueuer() {
    // Make the order and associate it with a new HTML element
    const id = Math.floor(Math.random() * 10);
    const orderElement = document.createElement("li");
    const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span> <i>Waiting... You are #</i>${order.id} in line.</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);
  return order;
}



function placeOrder(order) {
    return new Promise((resolve, reject) => {
      doWork(order, 1000, 3000, resolve, reject, `You have been kicked out of the queue for foul language.`);
    });
  }



  

//probability of the person actually getting helped
  function doWork(order, min, max, resolve, reject, errMsg) {
    let workTime = Math.random() * (max - min) + min;
    setTimeout(() => {
      workTime = Math.round(workTime);
      if (workTime < max * 0.85) {
        resolve(order);
      } else {
        order.error = errMsg;
        reject(order);
      }
    }, workTime);
  }



  function serveOrder(order) {
    let userAdjective = prompt("A new chat session has opened!");
    alert (userAdjective);
    order.element.innerHTML = `<span>[${order.id}] <b>Helped</b></span>`;
    //window.location.href = "https://discord.com/channels/748656649287368704/750092383487787008";
    window.open('https://discord.com/channels/748656649287368704/750092383487787008','_blank');
  }


  function orderFailure(order) {
    order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
  }
