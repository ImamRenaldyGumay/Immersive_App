// KomponenTable.tsx

import React, { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
};

const TableMentee: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <table className="w-full border-collapse border">
            <thead>
                <tr className="bg-gray-300 border">
                    <th className="p-2 border text-left">ID</th>
                    <th className="p-2 border">Nama Produk</th>
                    <th className="p-2 border">Harga</th>
                    <th className="p-2 border">Kategori</th>
                    <th className="p-2 border">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => (
                    <tr key={product.id}>
                        <td className="p-2 border">{product.id}</td>
                        <td className="p-2 border">{product.title}</td>
                        <td className="p-2 border">${product.price.toFixed(2)}</td>
                        <td className="p-2 border">{product.category}</td>
                        <td className="p-2 border flex justify-center">
                            <button className="px-3 py-1 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none mx-1">
                                Edit
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none mx-1">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableMentee;
