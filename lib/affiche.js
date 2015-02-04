/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

projet = new Array();
/*créer un tableau "projet" avec 3 clefs décrivant les informations suivantes:*/

projet["nom"] = "BDPhilia";
projet["auteur"] = "votre nom";
projet["copy"] = "&copy; 2009 votre entreprise";

/*
 * créer une fonction affichePageBandeauHaut() qui affiche le bandeau du haut 
 *(div id="bandeau")
 */

function affichePageBandeauHaut() {
    document.write("<div id=\"bandeau\">&nbsp;</div>")

}

/*- créer un tableau "pagesDisponibles" avec les informations suivantes (titre court, page, titre long):
 ["Accueil","index.htm","Bienvenue sur "+projet["nom"]],
 ["Recherche","recherche.htm","Votre recherche de BD"],
 ["Commande","commande.htm","Votre panier"]
 le tableau contient d'abord trois colonnes d'informations : "titre court", "page" et "titre long"
 */

pagesDisponibles = new Array();
pagesDisponibles[0] = ["Accueil", "index.htm", "Bienvenue sur " + projet["nom"]];
pagesDisponibles[1] = ["Recherche", "recherche.htm", "Votre recherche de BD"];
pagesDisponibles[2] = ["Commande", "commande.htm", "Votre panier"];

/*- créer une fonction affichePageMenu() qui affiche le menu (div id="menu") comme précédement.
 * Cette fonction accepte 1 argument, qui est le nom de la page selectionnée (ex: index.htm)
 * utiliser les boucles pour créer les balises li
 * utiliser une instruction de controle pour tester la page selectionnée et lui attribuer l'atttribut class="select"
 */

function affichePageMenu(pageselectionnee) {

    document.write("<div id=\"menu\"><ul>");

    for (i = 0; i < pagesDisponibles.length; i++) {
        var page = pagesDisponibles[i];
        console.log(page);
        if (pageselectionnee === pagesDisponibles[i]) {

            document.write("<li class=\"select\"><a href=\"" + page[1] + "\" title=\"" + page[2] + "\">" + page[0] + "</a></li>");
        }


        else {
            document.write("<li><a href=\"" + page[1] + "\" title=\"" + page[2] + "\">" + page[0] + "</a></li>");
        }

    }
    document.write("</ul></div>");

}

function lit_cookie(quoi){
var lecookie=document.cookie;
tab_cookie=lecookie.split(";");
for (i=0;i<tab_cookie.length;i++){
tmp=tab_cookie[i].split("=");
if (tmp[0]==quoi){return(tmp[1])};
}
return false;
} ;
    
