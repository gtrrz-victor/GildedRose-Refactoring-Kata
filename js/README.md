# Kata inspirada en [Gilded Rose](https://github.com/juancsch/GildedRose-Kata)


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

## Introducción

Es esta segunda parte de la kata, en la cual ya tenemos implementados unos robustos tests unitarios, nos podemos arremangar y empezar a refactorizar [este](./src/gilded_rose.js) *maravilloso* código.

La suit de tests que tenemos implementada se encuentra en el fichero [gildedRose.spec.js](./spec/gildedRose.spec.js).

# Fases del refactor
Para partir del punto en el que el código está aún sin refactorizar pero con los tests unitarios implementados, podemos hacer un checkout del tag `phase_1`.

Aplicaremos diferentes técnicas de refactor a nuestro código, para que durante el proceso, nunca tengamos una versión inestable del código. 

* Extraer constantes y magic numbers. Tag: `phase-1`
* Extraer variables temporales ,*query* , los condicionales. Tag: `phase-2`
* Crear métodos por cada query *variable temporal*. Tag: `phase-3`
* Crear métodos por cada comando. Tag: `phase-4`
* Eliminar la identación y las clausuras **else**. Tag: `phase-5`
* Añadir *guard clauses* a los comandos. Tag: `phase-6`
* Eliminar la identación de los productos. Tag: `phase-7`
