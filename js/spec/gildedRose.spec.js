const test = require('tapes')(require('tape'));
const {Item, Shop} = require('../src/gilded_rose');

test("Gilded Rose", function(t) {
    test("'Sulfuras' product",(t)=>{
      const productName = 'Sulfuras, Hand of Ragnaros';
      const expectQualityValue = 80;
      const initialSellin = -1; 
      const initialQuality = 80;
      t.test('quality should be 80 always',(t)=>{
        t.plan(1)
        const gildedRose = new Shop([ 
          new Item(productName, initialSellin, initialQuality)
        ]);
        const items = gildedRose.updateQuality();
        t.equal(expectQualityValue,items[0].quality)
      })
      t.test('sellin should be always the same',(t)=>{
        t.plan(1)
        const gildedRose = new Shop([ 
          new Item(productName, initialSellin, initialQuality)
        ]);
        const items = gildedRose.updateQuality();
        t.equal(initialSellin,items[0].sellIn)
      })
      t.end()
    })

    t.end()
  });
  