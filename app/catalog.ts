export const settings={currency:'RD$',instagram:null,checkoutMode:'demo'};
export type Product={id:number;name:string;category:string;price:number;image:string;colors:string[];description:string};
export const products:Product[]=[
{id:1,name:'Vestido marfil, esencia',category:'Vestidos',price:3450,image:'campaign-product-1.jpg',colors:['Marfil'],description:'Vestido midi marfil ceñido con escote de un hombro. Una silueta asimétrica para llevar la noche a tu manera.'},
{id:2,name:'Vestido rojo, deseo',category:'Vestidos',price:4250,image:'replacement-v3-2.jpg',colors:['Rojo'],description:'Vestido rojo ceñido de tirantes finos y escote en V. Una presencia intensa para tus momentos especiales.'},
{id:3,name:'Conjunto negro, eclipse',category:'Conjuntos',price:3950,image:'campaign-product-3.jpg',colors:['Negro'],description:'Top corto y falda larga ajustada en negro. Un conjunto que descubre la cintura y acompaña tus planes de noche.'},
{id:4,name:'Vestido champagne, luz',category:'Vestidos',price:3850,image:'campaign-product-4.jpg',colors:['Champagne'],description:'Vestido satinado champagne de tirantes finos. Líneas fluidas, escote delicado y una presencia luminosa.'},
{id:5,name:'Conjunto arena, atardecer',category:'Conjuntos',price:3250,image:'campaign-product-5.jpg',colors:['Arena'],description:'Top corto halter y pantalón de pierna ancha en arena. Una combinación de cintura descubierta y movimiento ligero.'},
{id:6,name:'Vestido negro, nocturna',category:'Vestidos',price:3650,image:'campaign-product-6.jpg',colors:['Negro'],description:'Vestido midi negro ceñido y sin tirantes. Una silueta limpia para una noche con personalidad.'},
{id:7,name:'Beachwear blanco, marea',category:'Beachwear',price:2450,image:'replacement-v3-7.jpg',colors:['Blanco'],description:'Bikini marfil de dos piezas con ribetes oscuros. La fotografía muestra el conjunto completo en una escena de playa.'},
{id:8,name:'Bikini negro, horizonte',category:'Beachwear',price:2950,image:'replacement-v3-8.jpg',colors:['Negro'],description:'Bikini negro de dos piezas con top bandeau y aberturas centrales. En la fotografía se combina con una salida de playa tejida en marfil.'}];
export const sizes=['XS','S','M','L'];
export function stock(id:number,size:string,color:string){return size==='XS'&&id%2===0?0:5;}
export const money=(n:number)=>settings.currency+' '+n.toLocaleString('es-DO');



