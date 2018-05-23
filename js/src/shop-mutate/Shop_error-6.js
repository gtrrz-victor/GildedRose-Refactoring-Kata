module.exports.Shop =  class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality () {
    const maxQuality = 50;
    const minQuality = 0;
    const normalProductName = 'normalProduct';
    const rulesQuality = {
      'Aged Brie':(item)=>{
        const normalIncreaseValue = 1;
        const fastIncreaseValue = 2;
        const limitSellIn = 0;
        const qualityDiff = (item.sellIn<=limitSellIn)?fastIncreaseValue:normalIncreaseValue
        item.quality = Math.min(item.quality+qualityDiff,maxQuality)
        item.sellIn -= 1
      },
      'Backstage passes to a TAFKAL80ETC concert':(item)=>{
        const firstIncrease = 1;
        const secondIncrease = 2;
        const thirdIncrease = 3;
        const firstLimit = 10;
        const secondLimit = 5;
        const thirdLimit = 0;
        const qualityDiff = (item.sellIn>firstLimit)?firstIncrease:
                            (item.sellIn>secondLimit)?secondIncrease:
                            (item.sellIn>thirdLimit)?thirdIncrease: (-1)*item.quality
        item.quality = Math.min(item.quality+qualityDiff,maxQuality)
        item.sellIn -= 1
      },
      'Sulfuras, Hand of Ragnaros':(item)=>item,
      [normalProductName]:(item)=>{
        if (item.sellIn === 20){
          item.quality = 0
          item.sellIn -= 1
          return
        }
        const normalDecreaseValue = 1
        const fastDecreaseValue = 2
        const limitNormalDecrease = 0
        const qualityDiff = (item.sellIn<=limitNormalDecrease)?fastDecreaseValue:normalDecreaseValue
        item.quality = Math.max(item.quality-qualityDiff,minQuality)
        item.sellIn -= 1
      }
    };
    this.items.map((item)=>(rulesQuality[item.name]||rulesQuality[normalProductName])(item));
    return this.items;
  }
}
