let products = [];

const addProduct = (title, description, price, thumbnail, code, stock) => {

   const newProduct = {
    id: products.length +1,
    title,
    description,
    price,
    thumbnail,
    code,
    stock

   }

   console.log(Object.values(newProduct));
   if (Object.values(newProduct).includes(undefined)) {
    console.log("Todos los campos son obligatorios");
    return;
   }

   const productExists = products.find( product => product.code === code);
   if(productExists) {
    console.log(`El producto ${title} con el código ${code} ya existe]`);
    return;
   }

   products.push(newProduct);
}

const getProducts = () => {
    console.log(products);
    return products;
}

const getProductById = (id) => {
    const product = products.find( product => product.id === id);
    if(!product) {
        /*console.log(`No se encontró el producto con el id ${id}`);*/
        console.log("Not found") /*lo hice según la consigna, pero me parecio mejor la forma que mostro el profe el la clase, por eso la agregue*/
        return;
    }
    console.log(product);
    return product;
};


// Test
addProduct("AZUCAR BELLA VISTA X 1 KG.", "Azucar marca Bella Vista x 1 Kg", 899, "https://statics.dinoonline.com.ar/imagenes/large_460x460/2000027_l.jpg", "2000027", 800);
addProduct("YERBA VERDEFLOR COMPUESTA X 1 KG.", "Yerba marca Verdeflor tipo Compuesta x 1 KG.", 2098, "https://statics.dinoonline.com.ar/imagenes/large_460x460/2010294_l.jpg", "2010294", 1200);
addProduct("AGUA SABORIZADA LIVRA NARANJA BOTELLA X 1.500 CC.", "Agua saborizada marca Livra sabor naranja en botella de 1.5 cc", 990, "https://statics.dinoonline.com.ar/imagenes/large_460x460/3040735_l.jpg", "3040735", 600);

/*  getProducts ()  según entendí en la consigna, tiene que estar este metodo, pero en el  ejemplo de la clase quedo comentado. Lo agrego y dejo comentado por las dudas*/

getProductById(1); 