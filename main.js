const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const detalleProducto = document.querySelector('.product-detail-aside');
const iconoCerrar = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHam.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleCarritoMenu);
iconoCerrar.addEventListener('click', ocultarDetalle);

function toggleDesktopMenu(){
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    const isDetalleProductoClosed = detalleProducto.classList.contains('inactive');
    if(!isMenuCarritoClosed){
        menuCarrito.classList.toggle('inactive');
    }
    if(!isDetalleProductoClosed){
        detalleProducto.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    if(!isMenuCarritoClosed){
        menuCarrito.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isDetalleProductoClosed = detalleProducto.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }
    if(!isDetalleProductoClosed){
        detalleProducto.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}

function mostrarDetalle(){
    menuCarrito.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    detalleProducto.classList.remove('inactive');
}

function ocultarDetalle(){
    detalleProducto.classList.add('inactive');
}


const productList=[];
productList.push({
    name:'Bicicleta',
    price:350,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push ({
    name:'Bicycle helmet',
    price: 120,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 160,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 150,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 30,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 220,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 80,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 60,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 87,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

for(producto of productList){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const imagenProducto = document.createElement('img');
    imagenProducto.setAttribute('src', producto.image); 
    imagenProducto.addEventListener('click', mostrarDetalle);
 

    
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const divInfo=document.createElement('div');
    const precio=document.createElement('p');
    precio.innerText = '$' + producto.price;
    const nombre=document.createElement('p');
    nombre.innerText = producto.name;

    const figureCarrito=document.createElement('figure');
    const imagenCarrito = document.createElement('img');
    imagenCarrito.setAttribute('src','./icons/bt_add_to_cart.svg');

    figureCarrito.appendChild(imagenCarrito);

    divInfo.append(precio,nombre);

    productInfo.append(divInfo,figureCarrito);

    productCard.append(imagenProducto,productInfo);

    cardsContainer.appendChild(productCard);
}