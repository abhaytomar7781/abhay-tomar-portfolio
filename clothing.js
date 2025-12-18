let cartCount = 0;

    function addToCart(product) {
      cartCount++;
      document.getElementById('count').innerText = cartCount;
      alert(product + ' added to cart!');
    }

    function scrollToProducts() {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }