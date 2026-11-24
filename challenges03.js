const categories = ["Papeterie", "Accessoires", "Sacs"];
const boutique = {
nom: "Stock & Fournitures",
ville: "Youssoufia",
ouverte: true
};
const produits = [
{ id: 101, nom: "Cahier", categorie: "Papeterie",
prix: 20, stock: 5 },
{ id: 102, nom: "Stylo", categorie: "Papeterie",
prix: 10, stock: 0 },
{ id: 103, nom: "Trousse", categorie: "Accessoires",
prix: 35, stock: 3 },
{ id: 104, nom: "Sac", categorie: "Sacs",
prix: 120, stock: 2 },
{ id: 105, nom: "Classeur", categorie: "Papeterie",
prix: 30, stock: 4 }
];

let produit2 = []

produit2 = [...produits]

produit2.forEach(p=>{
    console.log(`nom : ${p.nom} || stoque : ${p.stock}`)
})
produit2[1].stock = 6

produit2.push({
    id: 106,
    nom: "Gomme",
    categorie: "Papeterie",
    prix: 5,
    stock: 8
})
console.log(produit2)
