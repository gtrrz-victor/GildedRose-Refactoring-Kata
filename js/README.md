# Kata inspirada en (Gilded Rose)[https://github.com/juancsch/GildedRose-Kata]

## Tiempo para realizar la kata 30 minutos!

## Introducción

Esta parte de la kata, tiene como objetivo la creación de una suit de tests unitarios lo más robusta posible.

Para acometer este objetivo vamos a organizarnos por parejas, cada miembro de la pareja tendrá un rol *(Rol: muñones, Rol: testing)*.
Vamos a deinifir el objetivo de cada rol:
* Muñones: Debe modificar el código de la función **Shop.updateQuality()** para que tenga comportamientos erróneos. Siendo lo más retorcido posible, pues debe conseguir que esos errores en el código no sean detectados por los test unitarios implementados por el otro miembro del equipo.
* Tester: Debe implementar una suit de tests unitarios lo más robusta posible, para conseguir identificar todos y cada uno de los errores introducidos por el rol *Muñones*

El tiempo de esta parte de la kata son 30 minutos, los cuales se separan en 2 rondas de 15 minutos. De esta forma, los roles *Muñones* y *Tester* se intercambiarán pasados 15 minutos.
Una vez finalizadas las dos rondas, comprobaremos los errores que hemos sido capaces de detectar.

## Tips

* Para ejecutar los tests:
``` npm t ```
* Fichero que contiene un test ya implementado:
```./spec/gildedRose.spec.js```
