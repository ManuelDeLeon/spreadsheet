Template.cartRow.viewmodel({
  mixin: 'formatting',
  itemId: null,
  item: function() {
    var viewmodel = this;
    return _.find(this.parent().items(), function (item) {
      return item._id === viewmodel.itemId();
    }) || {}; // Empty for the default itemId
  },
  discount: '',
  quantity: 1,
  total: function() {
    var discount = this.discount() || 0;
    var quantity = this.quantity() || 0;
    var price = this.item().price || 0;
    return (price * quantity) - discount;
  }
});