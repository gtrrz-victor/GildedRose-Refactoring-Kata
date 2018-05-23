# Kata inspirada en (Gilded Rose)[https://github.com/juancsch/GildedRose-Kata]

## Introducción

Esta parte de la kata, tiene como objetivo la creación de una suit de tests unitarios lo más robusta posible.

Para acometer este objetivo vamos a organizarnos por parejas para afrontar el objetivo (*implementar suit de tests*) de forma conjunta. 
Tendremos un tiempo máximo de 30 minutos para realizar esta implementación.

Una vez terminada esta fase, pasaremos una serie de mutaciones en el comportamiento del método **Shop.updateQuality()** para comprobar la robustez de la suit.

## Definición del comportamiento del código

Disponemos de una tienda que tiene una serie de productos. Estos productos están definidos por:
* nombre del producto -> Item.name
* número de días pendiente para ser vendido el producto -> Item.sellIn
* calidad del producto -> Item.quality

```js
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
```

El método **updateQuality** del objeto **Shop** se incovaría cada día. El cual se encarga de restar una unidad al atributo **sellIn** y de actualizar la calidad de cada Item de la tienda.
La actualización de esta calidad quedaría definida por la tabla:

* Producto: `Sulfuras, Hand of Ragnaros`
    * El parámetro sellIn nunca es modificado, ya que es un producto que nunca envejece. Su calidad inicial nunca es modificada.
* Producto: `Backstage passes to a TAFKAL80ETC concert`
    * La calidad del producto se incrementará en 1 unidad cuando el parámetro sellIn es superior a 10
    * La calidad del producto se incrementará en 2 unidades cuando el parámetro sellIn sea inferior a 11 y superior a 5
    * La calidad del producto se incrementará en 3 unidades cuando el parámetro sellIn sea inferior a 6 y superior a 0
    * La calidad del producto será 0 una vez llegado a un sellIn inferior a 1
* Producto: `Aged Brie`
    * La calidad del producto se incrementará en 1 unidad cuando el parámetro sellIn es superior a 0
    * La calidad del producto se incrementará en 2 unidades cuando el parámetro sellIn es inferior a 1
* Producto: `*` (resto de productos)
    * La calidad del producto se decrementará en 1 unidad cuando el parámetro sellIn es superior a 1
    * La calidad del producto se decrementará en 2 unidades cuando el parámetro sellIn es inferior a 1

## Importante: El parámetro quality nunca puede ser mayor que 50 tras invocar al método updateQuality ( siempre que los Items no se hayan creado con un valor ya superior )
 ---

## Tiempo para realizar la kata 30 minutos!

Para poder empezar con la kata necesitamos partir del punto en el cual tenemos todas las dependencias instaladas y los tests de prueba funcionando.

Instalar las dependencias:
```js
npm i
```
Ejecutar los tests:
```js
npm t
``` 

La salida de este comando `npm t` debe ser la siguiente:
```
➜  js git:(kata-phase_create_suit_test) npm t

> gilded-rose-kata@6.6.6 test /Users/victor-gutierrez/PoC/GildedRose-Refactoring-Kata/js
> tapes spec/**/*.spec.js

TAP version 13
# Gilded Rose
# 'Sulfuras' product
# 'Sulfuras' product example sulfuras tests
ok 1 should be equal

1..1
# tests 1
# pass  1

# ok
```

## Ejecucción de las mutaciones

Una vez terminada nuestra suit de test, vamos a comprobar como de buena es esta. 
Hay una serie de mutaciones en la clase Shop añadidas a proposito, veamos si nuestros tests tienen la sensibilidad suficiente como para capturar estos errores.

Hay 8 mutaciones:
* `npm t 1` -> Error ?
* `npm t 2` -> Error ?
* `npm t 3` -> Error ?
* `npm t 4` -> Error ?
* `npm t 5` -> Error ?
* `npm t 6` -> Error ?
* `npm t 7` -> Error ?
* `npm t 8` -> Error ?
