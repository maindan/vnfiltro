
const controls = document.querySelectorAll('.directional-button');
const products = document.querySelectorAll('.product-details');
const maxProducts = products.length;
let actualProduct = 0



controls.forEach((control) => {
    if(actualProduct == 0) {
        products[actualProduct].classList.add('actual-product');
    }
    control.addEventListener('click', (e) => {
        isLeft = e.target.classList.contains('left');
        isRight = e.target.classList.contains('right');

        if(isLeft && actualProduct != 0){
            actualProduct -= 1;
            console.log('esquerda', actualProduct);
        };
        if(isRight && actualProduct != maxProducts - 1){
            actualProduct += 1;
            console.log('direita', actualProduct);
        }

        products.forEach((product) => product.classList.remove('actual-product'));
        products[actualProduct].classList.add('actual-product');

        products[actualProduct].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });
    })
});