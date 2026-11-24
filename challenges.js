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


console.log(`premiere categorie : ${categories[0]} ||| nombre inital de categories : ${categories.length}`)
categories.push("Classement")
let index = categories.findIndex(index=> index === "Accessoires")
categories[index] = "Bureau"

categories.pop()
console.log(categories)

// exercice 02

console.log(`nom : ${boutique.nom} ||| la ville de la boutique : ${boutique.ville} `)
boutique.devise = "MAD"
boutique.ouverte = false

if(boutique.ouverte){
    console.log("ouverte")
}
else{
    console.log("fermee")
}

// exercice 04
console.log(`\n-------------------- exercice 04------------------ \n`)
let produitsuperieur0 = produits.filter(p=>p.stock > 0).filter(p=>p.categorie === "Papeterie")
console.log(produitsuperieur0)

//exercice05
console.log(`\n-------------------- exercice 05------------------ \n`)

let nommap = produits.map(p=> p.nom)

console.log(nommap)

let nomap2 = produits.map(p=>{return `Nom : ${p.nom} ||| prix : ${p.prix} DH`})
console.log(nomap2)


console.log(`\n -----------------------exercice 06 ----------------------------\n`)

let nombreunite = produits.reduce((total, produit)=>{
    return total + produit.stock
},0)

let stocktotal = produits.reduce((total, produit)=>{
    return total +(produit.prix * produit.stock)
},0)

console.log(` unites : ${nombreunite}`)
console.log(` valeur total du stock : ${stocktotal}`)



