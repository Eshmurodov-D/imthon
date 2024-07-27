let newHeader = document.createElement("header");
let newMain = document.createElement("main");
let elmain = document.createElement("main");
newHeader.innerHTML = `
    <div>
            <img src="./assets/img/Logo.png" alt="logo">
            <div>
                <img src="./assets/img/Search.png" alt="logo">
                <input type="search" placeholder="Search">
                <button type="button">Search</button>
            </div>
            <div>
                <img src="./assets/img/Heart.png" alt="logo">
                <div>
                    <img src="./assets/img/Cart.png" alt="logo">
                    <p>Shopping cart:</p>
                    <span>$57.00</span>
                </div>
            </div>
        </div>
        <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <div>
            <img src="./assets/img/PhoneCall 1.png" alt="logo">
            <span>(219) 555-0114</span>
        </div>
    </nav>
`
newMain.innerHTML = `
    <section>
        <div>
            <div>
                <h2>Fresh & Healthy Organic Food</h2>
                <div>
                    <h4>Sale up to <span>30% OFF</span></h4>
                    <p>Free shipping on all your order.</p>
                </div>
                <button type="button">Shop now</button>
            </div>
        </div>
        <div>
            <div>
                <h5>Summer Sale</h3>
                    <h4>75% OFF</h4>
                    <p>Only Fruit & Vegetable</p>
                    <a href="#">Shop Now</a>
            </div>
        </div>
        <div>
            <div>
                <p>Best Deal</p>
                <h2>Special Products Deal of the Month</h2>
                <a href="#">Shop Now</a>
            </div>
        </div>
    </section>
    <section >
    <section class="list">
    </section>

`
fetch("./api.json")
    .then((response) => {
    return response.json()
}).then((data) => {
    data.api.map((item) => {
        const {name, img} = item;
    return (
        elmain.innerHTML += `
        <div class="api-menu">
            <div>
            <img src=${img} alt=${name}/>
            <h1>id:${name}</h1>
        </div> 
        </div>
    `
    )
})
});

document.body.appendChild(newHeader);
document.body.appendChild(newMain);
document.body.appendChild(elmain);


