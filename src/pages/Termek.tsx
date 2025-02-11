import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import apiClient from '../apiClient/apiClient';
import { useParams } from 'react-router-dom';
import { error } from 'console';

const Termek = () => {
    const [data, setData] = useState<Product>();
    const { id } = useParams();
    const [keszlet, setKeszlet] = useState(data?.keszlet);

    const stock_package = {
        keszlet: keszlet,
    };

    useEffect(() => {
        apiClient
            .get(`termekek/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const delete_product = () => {
        apiClient
            .delete(`termekek/${id}`)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        window.location.reload();
                        console.log('Sikeres törlés');
                        break;
                    case 400:
                        console.log('Bad request');
                        break;
                    case 404:
                        console.log('Not Found');
                        break;
                    default:
                        console.log('An error occured');
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const submit_stock = () => {
        apiClient
            .put(`termekek/${id}`, stock_package)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        window.location.reload();
                        console.log('User updated successfully');
                        break;
                    case 400:
                        console.error('Bad request');
                        break;
                    default:
                        console.error('An error occurred');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1>TermékID: {id}</h1>

            <ul>
                <li> Név: {data?.nev}</li>
                <li> Ár: {data?.ar}</li>
                <li> Készlet: {data?.keszlet}</li>
                <li> Leírás: {data?.leiras}</li>
            </ul>

            <input
                type="text"
                placeholder="Készlet"
                onChange={(e) => setKeszlet(Number(e.target.value))}
            />

            <button onClick={delete_product}>Termék törlése</button>
            <button onClick={submit_stock}>Készlet Modosítása</button>
        </div>
    );
};

export default Termek;
