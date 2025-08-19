{


    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }
        let maxPrice = products[0].price;
        let mostExpensiveProduct = products[0];
        for (let i = 1; i < products.length; i++) {
            if (products[i].price > maxPrice) {
                maxPrice = products[i].price;
                mostExpensiveProduct = products[i];
            }
        }
        console.log(mostExpensiveProduct)
        return mostExpensiveProduct;
    }






    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    getMostExpensiveProduct(products);
    // Output: { name: "Bag", price: 50 }

}

