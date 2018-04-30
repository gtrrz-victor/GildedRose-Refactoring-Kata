class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor (items) {

    this._TRIPLE_INCREMENT_THRESHOLD = 6
    this._DOUBLE_INCREMENT_THRESHOLD = 11
    this._BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
    this._SULFURAS = 'Sulfuras, Hand of Ragnaros'
    this._AGE_BRIE = 'Aged Brie'

    this._UNIT_SELLIN = 1
    this._MINIMUM_SELLIN = 0

    this._UNIT_QUALITY = 1
    this._MINIMUM_QUALITY = 0
    this._MAXIMUN_QUALITY = 50

    this.items = items
  }

  updateQuality () {

    for (const currentItem of this.items) {

      if (currentItem.name !== this._AGE_BRIE && currentItem.name !== this._BACKSTAGE_PASSES) {

        if (currentItem.quality > this._MINIMUM_QUALITY) {

          if (currentItem.name !== this._SULFURAS) {
            currentItem.quality = currentItem.quality - this._UNIT_QUALITY
          }
        }
      } else {
        if (currentItem.quality < this._MAXIMUN_QUALITY) {

          currentItem.quality = currentItem.quality + this._UNIT_QUALITY

          if (currentItem.name === this._BACKSTAGE_PASSES) {

            if (currentItem.sellIn < this._DOUBLE_INCREMENT_THRESHOLD) {
              if (currentItem.quality < this._MAXIMUN_QUALITY) {
                currentItem.quality = currentItem.quality + this._UNIT_QUALITY
              }
            }

            if (currentItem.sellIn < this._TRIPLE_INCREMENT_THRESHOLD) {
              if (currentItem.quality < this._MAXIMUN_QUALITY) {
                currentItem.quality = currentItem.quality + this._UNIT_QUALITY
              }
            }
          }
        }
      }

      if (currentItem.name !== this._SULFURAS) {
        currentItem.sellIn = currentItem.sellIn - this._UNIT_SELLIN
      }

      if (currentItem.sellIn < this._MINIMUM_SELLIN) {

        if (currentItem.name !== this._AGE_BRIE) {

          if (currentItem.name !== this._BACKSTAGE_PASSES) {

            if (currentItem.quality > this._MINIMUM_QUALITY) {

              if (currentItem.name !== this._SULFURAS) {
                currentItem.quality = currentItem.quality - this._UNIT_QUALITY
              }
            }
          } else {
            currentItem.quality = currentItem.quality - currentItem.quality
          }
        } else {

          if (currentItem.quality < this._MAXIMUN_QUALITY) {
            currentItem.quality = currentItem.quality + this._UNIT_QUALITY
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}