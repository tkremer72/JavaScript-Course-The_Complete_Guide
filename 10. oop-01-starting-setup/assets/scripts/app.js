//Use class to define what a product looks like
class Product {
  //don't need to add the fields below when initializing in the constructor right way.
  //   title = "DEFAULT";
  //   imageUrl;
  //   description;
  //   price;
  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

//Define an elements attribute properties.
class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

//Create a parent class called component that shares with other classes
class Component {
  constructor(renderHookId, shouldRender = true) {
    //console.log('Called');
    this.hookId = renderHookId;
    if(shouldRender) {
          this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if(cssClasses) {
      rootElement.className = cssClasses;
    }
    if(attributes && attributes.length > 0) {
      for(const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

//Render a cart that uses the extended component class
class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {//use setters to set the value
    this.items = value;
    this.totalOuput.innerHTML = `
       <h2>Total: \$${this.totalAmount.toFixed(2)}</h2>
       `; 
  }//toFixed(2) ensures that there's no roaming decimal place, 
  //it's always two decimal places.

  get totalAmount() {//use getters to get the value
    const sum = this.items.reduce(
      (previousValue, currentItem) => previousValue + currentItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {//pass in the renderHookId from the component class
    super(renderHookId, false)//call super on the class and forward the renderHookId
    this.orderProducts = () => { //Move this method into the super, add the this keyword and render manually after
      console.log('Placing order....');
      console.log(this.items);
    }
    this.render();
  }

  addProduct(product) {//add a product to the cart 
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  // orderProducts = () => {
  //   console.log('Placing order....');
  //   console.log(this.items);
  // }

  render() {//render this component class to the screen
    // const cartElement = document.createElement("section");
    const cartElement = this.createRootElement('section', 'cart');
    cartElement.innerHTML = `
          <h2>Total: \$${0}</h2>
          <button>Place Order!</button>
          `;
    //cartElement.className = "cart";
    const orderButton = cartElement.querySelector('button');
    //orderButton.addEventListener('click', () => this.orderProducts());
    orderButton.addEventListener('click', this.orderProducts);//one method is above where the function isn't in the super

    this.totalOuput = cartElement.querySelector("h2");
    //return cartElement;
  }
}

//Create a product item class that extends the component class
class ProductItem extends Component {
  constructor(product, renderHookId) {//Pass in the product and the renderHookId
    super(renderHookId, false);//Call super first on this component and forward the renderHookId
    this.product = product; //assign product to this.product
    this.render();
  }

  addToCart() { //Add the item to the cart
    //     console.log("Adding product to cart...");
    //     console.log(this.product);
    App.addProductToCart(this.product); //call the addProductToCart method and pass in this.product
  }

  render() { //Render the added item on the screen in the cart.
    //const productElement = document.createElement("li");
    const productElement = this.createRootElement('li', 'product-item');
    //productElement.className = "product-item";
    productElement.innerHTML = `
                        <div>
                             <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                             <div class="product-item__conent">
                                  <h2>${this.product.title}</h2>
                                  <h3>\$${this.product.price}</h3>
                                  <p>${this.product.description}</p>
                                  <button> Add to cart</button>
                             </div>
                        </div>
                   `;

    const addCartButton = productElement.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    //return productElement;
  }
}

//Create a product list component that extends the component class
class ProductList extends Component {
  #products = [];//the hash sets products as a private property

  constructor(renderHookId) {//pass in the renderHookId to the constructor
    super(renderHookId, false);//Call super first and forward the renderHookId
    this.render();
    this.#fetchProducts();//hash tag represents private methods or functions also
  }

  //Simulate fetching the data
  #fetchProducts() {//use the hash to represent a private method or function
    this.#products = [//have to use this hash wheerever we acccess the private products property
      new Product(
        "Pleated Pillow",
        "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202045/0002/pleated-velvet-pillow-cover-2-c.jpg",
        "A soft pleated pillow that comes in many colors..",
        19.99
      ),
      new Product(
        "Area Rug",
        "https://www.upperdublin.net/wp-content/uploads/2019/04/AreaRug.jpg",
        "A beautiful area rug, with an elegant design for any room.  Comes in a variety of different patterns and colors.",
        89.99
      ),
      new Product(
        "Cutting Board Table",
        "https://images-na.ssl-images-amazon.com/images/I/71ilnguOf3L._AC_SY450_.jpg",
        "A cool table that can be used as a cutting board, regular table or work bench.",
        49.99
      ),
      new Product(
        "Recliner",
        "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fsignature_design_by_ashley%2Fcolor%2Fdrakestone_3540225-b1.jpg?width=878&height=600&scale=both&trim.threshold=80",
        "Comfortable plush recliner for any room.",
        129.99
      ),
      new Product(
        "Rugged Dishes",
        "https://images-na.ssl-images-amazon.com/images/I/81uA%2BIVnJcL._AC_SX466_.jpg",
        "A rugged set of dishes.",
        79.99
      ),
      new Product(
        "Futon",
        "https://futonland.com/common/images/products/medium/Basic_Black_Metal_Futon_39_Inch.jpg",
        "A comfortable couch that doubles as a hideaway bed.",
        149.99
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.#products) {//here we again use the hash on products to reflect it as private
      //const productItem = 
      new ProductItem(product, 'product-list');
      // const productElement = 
      //productItem.render();
      //productList.append(productElement);
    }
    //return productList;
  }
  
  render() {//Display the product list on the screen
    // const productList = 
    this.createRootElement("ul", 'product-list', 
    [new ElementAttribute('id', 'product-list')
  ]);
    //productList.id = 'product-list';
    //productList.className = "product-list";
    if(this.#products && this.#products.length > 0) {//hash the private property
      this.renderProducts();
    }
  }
}

//Create the shop component, will render everything
class Shop /* extends Component */ {

  constructor() {
    // super();
    this.render();
  }

  render() {
    //const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart("app");
    // const cartElement = 
    //this.cart.render();
    //const productList = 
    new ProductList('app');
    /* const productListElement =  */
    //productList.render();

    //renderHook.append(cartElement);
    //renderHook.append(productListElement);
  }
}

//Create the app class, this component does not extend the component class
class App {
  static cart;

  static init() {
    const shop = new Shop();
    //shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();//Initialize the app
