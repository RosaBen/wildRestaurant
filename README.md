step 1 - ajouter props (sans accolade) dans paramètre MenuList
step 2 - console.log(propos) et vérifier console log sur serveur. on doit voir {}
step 3- aller dans apps au niveau de l'appel de MenuList et ajouter à coté sous ce format : nomprops{nomTableau}
step 4- retourner dans MenuList et remplacer props par {nomprops} 
step 5- faire console.log({listFood}) et vérifier : on doit voir maintenant le props apparaite avec {}
 step 6 - on va utiliser map pour boucler sur MenuList: format=>```jsx
 {nomprops.map((item,index)=>(
    <nomautrecomposant key={index} item={nompropsdansnomautrecomposant}>
 ) )}
 ```
 step 7 - aller dans le composant nomautrecomposant et ajouter le props dans le paramètre de la function { item } et importer usestate
step 8 - dans MenuItem, ajouter le state de isfavorite format: const [isFavorite,setIsFavorite]= usestate (item.isFavorite) => faire consolelog pour verifier: console.log(isFavorite)
step 9 - créer une fonction poure gérer le click format: const nomFonction =()=>{
    ajouter un click pour changer l'état de isFavorite format: 
    ajouter un click pour changer l'état de isFavorite format: setIsFavorite(!isFavorite); => ça veut dire si IsFavortite est vraie alors mettre son contraire=> en gros quand on clique , il doit chnager pour l'autre option et ainsi de suite
    OU
    setIsFavorite(!isFavorite); => ça veut dire si IsFavortite est vraie alors mettre son contraire=> en gros quand on clique , il doit changer pour l'autre option et ainsi de suite
}

step 11 - remplacer toutes les informations sur MenuItem par les props+titres dans le tableau format: props.title
step 12 - ajouter un bouton pour changer la couleur du coeur en fonction de sa disponibilité


