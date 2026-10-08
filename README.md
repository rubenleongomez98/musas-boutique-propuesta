# MUSAS — P&A BOUTIQUE

Propuesta de ecommerce editorial para compartir y revisar.

## Abrir

En esta carpeta, con Node.js 20.9 o posterior:

    npm install
    npm run dev

Abrir http://localhost:3000. Para comprobar producción: `npm run build`, luego `npm start`.

## Funcionalidades de la demo

Inicio editorial, catálogo de 8 productos, filtros por categoría/talla/color/precio, búsqueda, ordenación, favoritos, ficha de producto, zoom, selección rápida, guía orientativa de tallas, bolsa lateral y página de bolsa, cantidades, subtotal y checkout simulado. Bolsa y favoritos se conservan en este navegador. Los datos personales del formulario no se guardan. Navegación directa a colección, productos, favoritos, bolsa y checkout. Sin indexación.

La selección combina ocho imágenes conceptuales generadas con IA y dos fotografías Pexels con permiso de uso, guardadas localmente. Ver PHOTO-SOURCES.md. Los nombres se han ajustado a las prendas fotografiadas; no representan inventario confirmado. La selección actual presenta una campaña coherente de vestidos ceñidos, conjuntos con cintura descubierta y trajes de baño, con un hero de pantalla completa inspirado en la composición de Solimar.

## Recursos pendientes

Logo oficial para sustituir el wordmark provisional; fotografías y catálogo propios; nombres, variantes, tallas, disponibilidad y precios oficiales; moneda definitiva; contacto e Instagram; información de envíos y cambios; composición y cuidados; guía de tallas oficial.

## Integraciones futuras

`app/catalog.ts` centraliza catálogo y ajustes (`currency`, `instagram`, `checkoutMode`). `app/globals.css` contiene los tokens de marca. Se deberá incorporar un adaptador de pedidos para pago online o WhatsApp una vez elegida la opción. Hoy no existe pasarela, número de WhatsApp, backend ni envío de pedidos. El botón final solo simula un pedido.

## Accesibilidad y comportamiento

Diálogos nativos con foco modal, cierre con Escape y retorno de foco; navegación por teclado; controles con etiquetas; movimiento reducido; fotografías con dimensiones reservadas. Si el navegador bloquea el almacenamiento local, se mantiene la experiencia durante la sesión.




Última revisión visual: tres fotos reemplazadas, recortes corregidos y categoría Conjuntos ajustada. Las galerías ofrecen principal y detalle ampliado; falta incorporar fotografías posteriores propias. Fuentes y prompt del nuevo vestido rojo en PHOTO-SOURCES.md y public/images/replacement-v3-manifest.json.

