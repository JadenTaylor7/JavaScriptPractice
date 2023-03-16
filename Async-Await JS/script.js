
//piza project ---------------------------------------------------------------------------------
/*
async function pickupPizza() {
    const order = createOrder();
  
    // async/await
    try {
      await placeOrder(order);
      await makePizza(order);
      serveOrder(order);
    } catch (order) {
      orderFailure(order);
    }
  }
  
  function createOrder() {
    // Make the order and associate it with a new HTML element
    const id = Math.floor(Math.random() * 10000);
    const orderElement = document.createElement("li");
    const order = { element: orderElement, id: id };
  
    // Insert the order into the HTML list
    orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
    const orders = document.getElementById("orders");
    orders.appendChild(orderElement);
  
    return order;
  }
  
  function placeOrder(order) {
    return new Promise((resolve, reject) => {
      doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
    });
  }
  
  function makePizza(order) {
    return new Promise((resolve, reject) => {
      doWork(order, 2000, 5000, resolve, reject, `cook burnt pizza`);
    });
  }
  
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
    order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
  }
  
  function orderFailure(order) {
    order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
  }
  */

  
async function joinQueue() {
    const order = addQueuer();

    try {
        await placeOrder(order);
        serveOrder(order);
    }
    catch (order) {
        orderFailure(order);
    }

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
    //let userAdjective = prompt("A new chat session has opened!");
    //alert (userAdjective);
    alert ("A new chat session has opened!");
    order.element.innerHTML = `<span>[${order.id}] <b>Helped</b></span>`;
   //window.location.href = "https://discord.com/channels/748656649287368704/750092383487787008"; 
    window.open('https://discord.com/channels/748656649287368704/750092383487787008','_blank');
  }


  function orderFailure(order) {
    order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
  }


