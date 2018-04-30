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
