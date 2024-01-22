
const produtos = [
    {
        id: 1,
        photo: 'public/products/compressor/12-100.png',
        name: 'Compressor Schulz MSV 12 100L Isento',
        price: 'R$ 9.000,00',
    },
    {
        id: 2,
        photo: 'public/products/compressor/20max.png',
        name: 'Compressor Schulz 20 Max',
        price: 'R$ 8.900,00',
    },
    {
        id: 3,
        photo: 'public/products/compressor/20sc.jpg',
        name: 'Compressor Schulz 20 Audaz',
        price: 'R$ 8.750,00',
    },
    {
        id: 4,
        photo: 'public/products/compressor/3015.png',
        name: 'Compressor Schulz SRP 3015',
        price: 'R$ 35.000,00',
    },    
];

const productPhoto = document.getElementById('product-photo');
const productName = document.getElementById('product-name');
const price = document.getElementById('price');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');

let actualProduct = 0;


function disabledLeftButton()  {
    if(actualProduct == 0) {
        buttonLeft.setAttribute('disabled', 'true');
    };
}

function disabledRightButton() {
    if(actualProduct == produtos.length - 1) {
        buttonRight.setAttribute('disabled', 'true');
    };
}

disabledLeftButton()
disabledRightButton()

function defineProduct(index) {
    productPhoto.setAttribute('src', produtos[index].photo);
    productName.innerHTML = produtos[index].name;
    price.innerHTML = produtos[index].price;
}

defineProduct(actualProduct);

function nextProduct() {
    if(actualProduct < produtos.length - 1) {
        actualProduct = (actualProduct + 1) % produtos.length;
        defineProduct(actualProduct);
        disabledLeftButton()
        disabledRightButton()
        console.log(actualProduct);
    };

    if(actualProduct != 0) {
        buttonLeft.removeAttribute('disabled');
    };
}

function previousProduct() {
    if(actualProduct != 0) {
        actualProduct = (actualProduct - 1);
        defineProduct(actualProduct);
        disabledLeftButton();
        console.log(actualProduct);
    }; 
    if(actualProduct != produtos.length - 1) {
        buttonRight.removeAttribute('disabled');
    };
};