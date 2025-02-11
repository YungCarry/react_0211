import { useState } from 'react';
import { Product } from '../types/Product';
import apiClient from '../apiClient/apiClient';
import { profileEnd } from 'console';

const Termekek = () => {
    const [data, setData] = useState(Array<Product>);

    apiClient
        .get('termekek')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    return (
        <div>
            <h1>Termékek</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Név:</th>
                        <th>Ár:</th>
                        <th>Leírás:</th>
                        <th>Készlet:</th>
                        <th>Kép:</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.nev}</td>
                            <td>{product.ar}</td>
                            <td>{product.leiras}</td>
                            <td>{product.keszlet}</td>
                            <td>{product.kepUrl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Termekek;
