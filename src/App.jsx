import React, { useEffect, useState } from 'react';
import Transaction from './components/transaction/Transaction';
import Solde from './components/solde/Solde';


function App() {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/solde')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const montantValue = event.target.elements.montant.value;
        const currentSolde = data[0]?.solde || 0;

        const newSolde = currentSolde + parseInt(montantValue, 10);
        

        // Enregistre le nouveau solde en base de données
        try {
            // const response = await fetch('http://localhost:3000/updatesolde', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ solde: newSolde }),
            // });

            // const result = await response.json();
            // console.log(result); // Affiche la réponse du serveur, qui peut être utile pour le débogage
            const response = await fetch('http://localhost:3000/updatesolde', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ solde: newSolde }),
            });

            const result = await response.json().catch(err => {
                console.error('Erreur lors de la conversion de la réponse en JSON :', err);
                return null; // Retourne null en cas d'échec de la conversion JSON
            });

            console.log(result);

        } catch (error) {
            console.error('Erreur lors de la mise à jour du solde :', error);
        }
    };

    return (
        <div>
            <div className="top">
                <h1>GoodBank</h1>
                <Solde></Solde>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="montant">
                        Montant:
                        <input type="text" id="montant" name="montant" />
                    </label>

                    <input type="submit" value="Sign in" />
                </form>
            </div>
            <div className="filtres">
                <button>Filtre</button>
            </div>
            <div className="transaction">
                <Transaction></Transaction>
            </div>
            <div className="history">
                
            </div>
        </div>
    )
}

export default App