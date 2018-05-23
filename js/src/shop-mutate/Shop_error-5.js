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
      'Sulfuras, Hand of Ragnaros':(item)=>item,
      [normalProductName]:(item)=>{
        const normalDecreaseValue = 1;
        const fastDecreaseValue = 2;
        const limitNormalDecrease = 0;
        const qualityDiff = (item.sellIn<=limitNormalDecrease)?fastDecreaseValue:normalDecreaseValue
        item.quality = Math.max(item.quality-qualityDiff,minQuality)
        item.sellIn -= 1
      }
    };
    this.items.map((item)=>(rulesQuality[item.name]||rulesQuality[normalProductName])(item));
    return this.items;
  }
}
