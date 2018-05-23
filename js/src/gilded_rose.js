const SHOP_FILE_LOAD = process.argv[3];
const{Item}=require('./Item')
const{Shop}=require(!SHOP_FILE_LOAD ? './Shop' : `./shop-mutate/Shop_error-${SHOP_FILE_LOAD}`)

module.exports = {
  Item,
  Shop
}