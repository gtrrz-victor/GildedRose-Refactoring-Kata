const test = require('tapes')(require('tape'));
const {Item, Shop} = require('../src/gilded_rose');
const PRODUCT_NAMES = {
  normal:'normal product',
  aged_brie:'Aged Brie',
  backstage:'Backstage passes to a TAFKAL80ETC concert',
  sulfuras:'Sulfuras, Hand of Ragnaros'
};

test("Gilded Rose", function(t) {
    test("'Sulfuras' product",(t)=>{
      t.test('example sulfuras tests',(t)=>{
        t.plan(1)
        //const gildedRose = new Shop([new Item(PRODUCT_NAMES.sulfuras, initialSellIn, initialQuality)]);
        //const items = gildedRose.updateQuality();
        t.equal(true, true)
      })
      t.end()
    })

    t.end()
  });
  