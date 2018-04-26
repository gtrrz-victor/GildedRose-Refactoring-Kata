# Kata inspirada en [Gilded Rose](https://github.com/juancsch/GildedRose-Kata)

## Introducción

Es esta segunda parte de la kata, en la cual ya tenemos implementados unos robustos tests unitarios, nos podemos arremangar y empezar a refactorizar [este](./src/gilded_rose.js) *maravilloso* código.

La suit de tests que tenemos implementada se encuentra en el fichero [gildedRose.spec.js](./spec/gildedRose.spec.js).

 Nuestro código debe modificar la calidad de los productos de la siguiente manera:
 * Producto: `Sulfuras, Hand of Ragnaros`
    * sellin = cualquiera => after quailty = before quality 
* Producto: `Backstage passes to a TAFKAL80ETC concert`
    * sellIn >= 10 => quality = quality + 1
    * 10 < sellIn >= 5 => quality = quality + 2
    * 5 < sellIn >= 0  => quality = quality + 3
    * sellIn < 0 => quality = 0
* Producto: `Aged Brie`
    * sellIn >= 0 => quality = quality + 1
    * sellIn < 0 => quality = quality + 2
* Producto: `Conjured` (falta por implementar)
    * sellIn >= 0 => quality = quality - 2
    * sellIn < 0 => quality = quality - 4
* Producto: `*` (resto de productos)
    * sellIn >= 0 => quality = quality - 1
    * sellIn < 0 => quality = quality - 2

## Importante: El parámetro quality nunca puede ser mayor que 50

