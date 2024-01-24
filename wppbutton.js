
const wppBt = document.getElementById('wpp-button');
const title = document.getElementById('section-title');
const message = 'https://wa.me/5592993328100?text='

function buttonLink(msg) {
    document.getElementById('directLink').setAttribute('href', `${msg}`)
}

wppBt.addEventListener('click', () => {
    const category = title.textContent.toLowerCase().split(' ')
    const complementMsg = 'Tenho%20interesse%20em%20mais%20informações%20sobre%20' + category[category.length - 1];
    if(title.textContent.toLowerCase().includes('compressores')){
        buttonLink(message + complementMsg);
    };
});