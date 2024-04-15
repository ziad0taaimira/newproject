// Récupération des éléments HTML
const produitSelect = document.getElementById('produit');
const nouveauProduitInput = document.getElementById('nouveauProduit');
const prixInput = document.getElementById('prix');
const quantiteInput = document.getElementById('quantite');
const tableauTransactions = document.getElementById('tableauTransactions');
const totalPrixSpan = document.getElementById('totalPrix');
const nombreTransactionsSpan = document.getElementById('nombreTransactions');
const ajouterProduitBtn = document.getElementById('ajouterProduit');
const ajouterTransactionBtn = document.getElementById('ajouterTransaction');

// Initialisation des variables
let transactions = [];
let totalPrix = 0;

// Fonction pour ajouter un produit à la liste déroulante
ajouterProduitBtn.addEventListener('click', () => {
    const nouveauProduit = nouveauProduitInput.value;
    if (nouveauProduit !== '') {
        const option = document.createElement('option');
        option.textContent = nouveauProduit;
        produitSelect.appendChild(option);
        nouveauProduitInput.value = '';
    }
});

// Fonction pour ajouter une transaction au tableau
ajouterTransactionBtn.addEventListener('click', () => {
    const produit = produitSelect.value;
    const prix = parseFloat(prixInput.value);
    const quantite = parseInt(quantiteInput.value);
    
    if (produit !== '' && !isNaN(prix) && !isNaN(quantite) && prix > 0 && quantite > 0) {
        const total = prix * quantite;
        const transaction = { produit, prix, quantite, total };
        transactions.push(transaction);
        
        const row = tableauTransactions.insertRow(-1);
        const cells = Object.values(transaction);
        cells.forEach((cellData, index) => {
            const cell = row.insertCell(index);
            cell.textContent = cellData;
        });
        
        totalPrix += total;
        totalPrixSpan.textContent = totalPrix.toFixed(2);
        nombreTransactionsSpan.textContent = transactions.length;
        
        // Réinitialisation des champs du formulaire
        prixInput.value = '';
        quantiteInput.value = '';
    } else {
        alert('Veuillez remplir correctement tous les champs.');
    }
});
