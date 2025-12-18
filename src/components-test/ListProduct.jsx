
export function ListProduct() {
    const products = [
        { id: 1, name: "Teclado", price: 120 },
        { id: 2, name: "Mouse", price: 70 },
        { id: 3, name: "Monitor", price: 900 }
    ];
    return (
        <div>
            <h1>Produtos</h1>
            <div>
                {products.map(product => (
                    <p key={product.id}>
                        {`Produto: ${product.name}, preço: ${product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}.`}
                    </p>
                )
                )}
            </div>
        </div>
    )
}