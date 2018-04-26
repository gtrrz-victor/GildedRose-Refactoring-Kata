const test = require('tapes')(require('tape'));
const {Item, Shop} = require('../src/gilded_rose');

test("Gilded Rose", function(t) {

  test("normal product",(t)=>{
    const productName = "normal product";
    t.test('quality should be >= 0',(t)=>{
      const expectQualityValue = 0;
      const expectSellinItem_1=-1
      const expectSellinItem_2=-2
      const gildedRose = new Shop([ 
        new Item(productName, 0, expectQualityValue),
        new Item(productName, -1, expectQualityValue)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(4)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((expectSellinItem_1),items[0].sellIn)
      t.equal(expectQualityValue,items[1].quality)
      t.equal((expectSellinItem_2),items[1].sellIn)
    })
    t.test('quality should decrease 1 point when sellin > 0',(t)=>{
      const expectQualityValue = 9;
      const initialSellin = 10; 
      const initialQuality = 10;
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should decrease 1 point when sellin === 0',(t)=>{
      const expectQualityValue = 9;
      const initialSellin = 1; 
      const initialQuality = 10;
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should decrease 2 point when sellin < 0',(t)=>{
      const expectQualityValue = 8;
      const initialSellin = -1; 
      const initialQuality = 10;
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.end()
  })

  test("Conjured product",(t)=>{
    const productName = "Conjured";
    t.test('quality should be >= 0',(t)=>{
      const expectQualityValue = 0;
      const expectSellinItem_1=-1
      const expectSellinItem_2=-2
      const gildedRose = new Shop([ 
        new Item(productName, 0, expectQualityValue),
        new Item(productName, -1, expectQualityValue)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(4)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((expectSellinItem_1),items[0].sellIn)
      t.equal(expectQualityValue,items[1].quality)
      t.equal((expectSellinItem_2),items[1].sellIn)
    })
    t.test('quality should decrease 2 point when sellin > 0',(t)=>{
      const expectQualityValue = 8;
      const initialSellin = 10; 
      const initialQuality = 10;
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should decrease 2 point when sellin === 0',(t)=>{
      const expectQualityValue = 8;
      const initialSellin = 1; 
      const initialQuality = 10;
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should decrease 4 point when sellin < 0',(t)=>{
      const expectQualityValue = 6;
      const initialSellin = -1; 
      const initialQuality = 10;
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();

      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.end()
  })


  test("'Aged Brie' product",(t)=>{
    const productName = 'Aged Brie';
    t.test('quality should be <= 50',(t)=>{
      const expectQualityValue = 50;
      const expectSellinItem_1=-1
      const expectSellinItem_2=-2
      const gildedRose = new Shop([ new Item(productName, 0, 50) , new Item(productName, -1, 49) ]);
      const items = gildedRose.updateQuality();
      t.plan(4)
      t.equal(expectQualityValue,items[0].quality)
      t.equal(expectSellinItem_1,items[0].sellIn)
      t.equal(expectQualityValue,items[1].quality)
      t.equal(expectSellinItem_2,items[1].sellIn)
    })
    t.test('quality should increase 1 point when sellin > 0',(t)=>{
      const initialQuality = 10;
      const expectQualityValue = initialQuality+1;
      const initialSellin = 1; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should increase 1 point when sellin === 0',(t)=>{
      const initialQuality = 10;
      const expectQualityValue = initialQuality+1;
      const initialSellin = 1; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should increase 2 point when sellin < 0',(t)=>{
      const initialQuality = 10;
      const expectQualityValue = initialQuality+2;
      const initialSellin = -1; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.end()
  })

  test("'Backstage passes to a TAFKAL80ETC concert' product",(t)=>{
    const productName = "Backstage passes to a TAFKAL80ETC concert";
    t.test('quality should be <= 50',(t)=>{
      const expectQualityValue = 50;
      const expectSellinItem_1=11
      const expectSellinItem_2=7
      const expectSellinItem_3=3
      const gildedRose = new Shop([ 
        new Item(productName, 11, 50), 
        new Item(productName, 7, 49), 
        new Item(productName, 3, 49)  ]);
      const items = gildedRose.updateQuality();
      t.plan(6)
      t.equal(expectQualityValue,items[0].quality)
      t.equal(items[0].sellIn,(expectSellinItem_1-1))
      t.equal(expectQualityValue,items[1].quality)
      t.equal(items[1].sellIn,(expectSellinItem_2-1))
      t.equal(expectQualityValue,items[2].quality)
      t.equal(items[2].sellIn,(expectSellinItem_3-1))
    })
    t.test('quality should increase 1 point when sellin > 10',(t)=>{
      const initialQuality = 10;
      const expectQualityValue = initialQuality+1;
      const initialSellin = 12; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should increase 1 point when sellin === 10',(t)=>{
      const initialQuality = 10;
      const expectQualityValue = initialQuality+1;
      const initialSellin = 11; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should increase 2 point when sellin < 10',(t)=>{
      const initialQuality = 9;
      const expectQualityValue = initialQuality+2;
      const initialSellin = 10; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should increase 2 point when sellin === 5',(t)=>{
      const initialQuality = 9;
      const expectQualityValue = initialQuality+2;
      const initialSellin = 6; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should increase 3 point when sellin < 5',(t)=>{
      const initialQuality = 9;
      const expectQualityValue = initialQuality+3;
      const initialSellin = 4; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should increase 3 point when sellin === 0',(t)=>{
      const initialQuality = 9;
      const expectQualityValue = initialQuality+3;
      const initialSellin = 1; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.test('quality should be zero when sellin < 0',(t)=>{
      const initialQuality = 9;
      const expectQualityValue = 0;
      const initialSellin = 0; 
      const gildedRose = new Shop([ 
        new Item(productName, initialSellin, initialQuality)
      ]);
      const items = gildedRose.updateQuality();
      t.plan(2)
      t.equal(expectQualityValue,items[0].quality)
      t.equal((initialSellin-1),items[0].sellIn)
    })
    t.end()
  })

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
  