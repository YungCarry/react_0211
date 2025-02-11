import { useState } from 'react';
import apiClient from '../apiClient/apiClient';

const TermekPost = () => {
    const [ar, setAr] = useState<number>();
    const [kategoriaId, setKategoriaId] = useState<number>();
    const [kepURL, setKepURL] = useState<string>();
    const [keszlet, setKeszlet] = useState<number>();
    const [leiras, setLeiras] = useState<string>();
    const [nev, setNev] = useState<string>();

    const create_package = {
        ar: ar,
        kategoriaId: kategoriaId,
        kepUrl: kepURL,
        keszlet: keszlet,
        leiras: leiras,
        nev: nev,
    };

    const submit_product = () => {
        apiClient
            .post('termekek', create_package)
            .then((response) => {
                switch (response.status) {
                    case 201:
                        window.location.reload();
                        console.log('Sikeres hozzáadás');
                        break;
                    case 400:
                        console.error('Bad request');
                        break;
                    default:
                        console.error('An error occured');
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1>Termék Hozzáadása</h1>
            <input
                type="text"
                placeholder="Termék neve: "
                onChange={(e) => {
                    setNev(String(e.target.value));
                }}
            />
            <input
                type="text"
                placeholder="Termék Ára: "
                onChange={(e) => {
                    setAr(Number(e.target.value));
                }}
            />

            <input
                type="text"
                placeholder="Termék KatId: "
                onChange={(e) => {
                    setKategoriaId(Number(e.target.value));
                }}
            />

            <input
                type="text"
                placeholder="Kép URL: "
                onChange={(e) => {
                    setKepURL(String(e.target.value));
                }}
            />

            <input
                type="text"
                placeholder="Készlet: "
                onChange={(e) => {
                    setKeszlet(Number(e.target.value));
                }}
            />

            <input
                type="text"
                placeholder="Leírás: "
                onChange={(e) => {
                    setLeiras(String(e.target.value));
                }}
            />

            <button onClick={submit_product}>Add hozzá!</button>
        </div>
    );
};

export default TermekPost;
