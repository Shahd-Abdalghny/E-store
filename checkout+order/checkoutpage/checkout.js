{/* <script>
function saveData() {
  sessionStorage.setItem('firstName', document.getElementById('firstName').value);
  sessionStorage.setItem('phoneNumber', document.getElementById('phoneNumber').value);
  sessionStorage.setItem('emailAddress', document.getElementById('emailAddress').value);
  sessionStorage.setItem('totalPrice', document.getElementById('total').innerText); 

  window.location.href = 'order.html'; 
}
</script> */}

// document.addEventListener("DOMContentLoaded", () => {
//   const productList = document.getElementById("productList");
//   const subtotalElement = document.getElementById("subtotal");
//   const totalElement = document.getElementById("total");
//   let subtotal = 0;

//   const savedData = localStorage.getItem("orderData");

//   if (savedData) {
//     const formData = JSON.parse(savedData);

//     // Fill fields for data
//     document.getElementById("firstName").value = formData.firstName || "";
//     document.getElementById("companyName").value = formData.companyName || "";
//     document.getElementById("streetAddress").value =
//       formData.streetAddress || "";
//     document.getElementById("apartment").value = formData.apartment || "";
//     document.getElementById("city").value = formData.city || "";
//     document.getElementById("phoneNumber").value = formData.phoneNumber || "";
//     document.getElementById("emailAddress").value = formData.emailAddress || "";

//     // Methode of Payment
    // document.querySelector(
    //   `input[name="paymentMethod"][value="${formData.paymentMethod}"]`
    // ).checked = true;
  


   // Start Old API ------>

  // //show products from API
  // fetch("https://dummyjson.com/products?limit=2")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const products = data.products;
  //     products.forEach((product) => {
  //       const productItem = document.createElement("div");
  //       productItem.classList.add("product-item");
  //       productItem.innerHTML = `
  //           <img src="${product.thumbnail}" alt="${product.title}">
  //           <p>${product.title}</p>
  //           <p>$${product.price}</p>
  //         `;
  //       productList.appendChild(productItem);
  //       subtotal += product.price;
  //     });
  

  //      //  update total price

  //     subtotalElement.innerText = subtotal.toFixed(2);
  //     totalElement.innerText = subtotal.toFixed(2);
  //   });

  // document.getElementById("applyCoupon").addEventListener("click", () => {
  //   const couponCode = document.getElementById("couponCode").value;
  //   if (couponCode === "DISCOUNT10") {
  //     const discount = subtotal * 0.1;
  //     subtotal -= discount;
  //     totalElement.innerText = subtotal.toFixed(2);
  //     alert("Coupon Applied: 10% Discount");
  //   } else {
  //     alert("Invalid Coupon Code");
  //   }
  // });
        
  //END OLD API--->

  
  // let subtotal = 0;

  // // Get references to the HTML elements
  // const productList = document.getElementById("productList");
  // const subtotalElement = document.getElementById("subtotalElement");
  // const totalElement = document.getElementById("totalElement");

  //   /* Fetch products from the API */
  // fetch("https://dummyjson.com/products?limit=2")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const products = data.products;
  //     products.forEach((product) => {
  //       const productItem = document.createElement("div");
  //       productItem.classList.add("product-item");

  //       // Create product display
  //       productItem.innerHTML = `
  //           <img src="${product.thumbnail}" alt="${product.title}">
  //           <p>${product.title}</p>
  //           <p>$${product.price.toFixed(2)}</p>
  //         `;
  //       productList.appendChild(productItem);

  //       // Update subtotal
  //       subtotal += product.price;
  //     });

  //     // Update subtotal and total display after fetching products
  //     subtotalElement.innerText = subtotal.toFixed(2);
  //     totalElement.innerText = subtotal.toFixed(2);
  //   
    // .catch((error) => console.error('Error fetching products:', error));

  // Handle coupon application
  document.getElementById("applyCoupon").addEventListener("click", () => {
    const couponCode = document.getElementById("couponCode").value;

    if (couponCode === "DISCOUNT10") {
      const discount = subtotal * 0.1;
      const newTotal = subtotal - discount;

      // Update total price after applying coupon
      totalElement.innerText = newTotal.toFixed(2);
      alert("Coupon Applied: 10% Discount");
    } else {
      alert("Invalid Coupon Code");
    }
  });


     




function renderCheckout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const checkoutContainer = document.getElementById('checkout-container');

  if (cart.length === 0) {
      checkoutContainer.innerHTML = '<p style="color:#db4444;">Your cart is empty</p>';
  } else {
      let total = 0;
      checkoutContainer.innerHTML = cart.map(item => {
          const itemTotal = item.price * item.quantity;
          total += itemTotal; 

          return `
              <div class="checkout-item">
                  <img src="${item.image}" alt="${item.name}">
                  <p>${item.name}</p>
                  <p>Quantity: ${item.quantity}</p>
                  <p>Price: $${itemTotal.toFixed(2)}</p>
              </div>
          `;
      }).join('');

      checkoutContainer.innerHTML += `<h4>Total: $${total.toFixed(2)}</h4>`;
  }
}


document.addEventListener('DOMContentLoaded', renderCheckout);


