// const LON: string = readline();
// const LAT: string = readline();
// const N: number = parseInt(readline());

const LON = parseFloat('3,879483'.replace(',', '.')) * Math.PI / 180.0
const LAT = parseFloat('43,608177'.replace(',', '.')) * Math.PI / 180.0
const N = 3

// for (let i = 0; i < N; i++) {
  //     const DEFIB: string = readline();
  // }

let defibs: string[] = [
  '1;Maison de la Prevention Sante;6 rue Maguelone 340000 Montpellier;;3,87952263361082;43,6071285339217',
  '2;Hotel de Ville;1 place Georges Freche 34267 Montpellier;;3,89652239197876;43,5987299452849',
  '3;Zoo de Lunaret;50 avenue Agropolis 34090 Mtp;;3,87388031141133;43,6395872778854'
]

// # Initialiser une réponse vide et une distance très grande
let answer:string = ''
let min_dist: number = 10**100
// # Pour chaque défibrilateur
defibs.forEach((defi) => {
  //   # Récupérer les valeurs intéressantes et convertir longitude et latitude en radian
  let d_details: string[] = defi.split(';');
  let d_name: string = d_details[1]
  let d_lon: number = parseFloat(d_details[4].replace(',', '.')) * Math.PI / 180.0
  let d_lat: number = parseFloat(d_details[5].replace(',', '.')) * Math.PI / 180.0
  //   # Calculer la distance
  let x: number = (LON - d_lon) * Math.cos((d_lat + LAT) / 2)
  let y:number = LAT - d_lat
  let d:number = Math.sqrt((x**2) + (y**2)) * 6731
  //   # Si la distance est inférieure à la dernière, ré-assigner distance et réponse
    if (d < min_dist) {
      min_dist = d
      answer = d_name
    }
})
// # Retourner réponse
 console.log(answer)
