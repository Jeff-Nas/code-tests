import { useState } from "react";

export function TestCounter() {
    const [product, setProduct] = useState("");
    const [productList, setProductsList] = useState({});

    function handleAddProduct() {
        if (product.trim() === "") {
            return
        }
        setProductsList({
            ...productList,
            [product]: (productList[product] || 0) + 1
        })
    }

    return (
        <div className="p-3">
            <div className="flex gap-3  mb-3.5">
                <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="border border-gray-400 rounded p-0.5 pl-1"
                />
                <button
                    className="p-1.5 bg-purple-700 rounded"
                    onClick={() => handleAddProduct()}
                >
                    Adicionar Produto
                </button>
            </div>
            <h2 className="text-2xl">Lista de produtos</h2>
            <ul>
                {Object.entries(productList).map(([productName, quantity]) => (
                    <div
                        className="flex gap-3"
                        key={`${productName}-${quantity}`}
                    >
                        <li><span className="font-bold text-purple-500">Nome:</span> {productName}</li>
                        <li><span className="font-bold text-purple-500">Quantidade:</span> {quantity}</li>
                    </div>
                ))}
            </ul>
        </div>

    )
}