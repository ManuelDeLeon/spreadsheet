Template.cart.viewmodel({
  mixin: 'formatting',
  items: [
    { _id: '1', name: "Milk", price: 1.30 },
    { _id: '2', name: "Eggs", price: 2.65 },
    { _id: '3', name: "Bacon", price: 3.10 }
  ],
  cartRows: [],
  addRow: function () {
    // insert an empty row into cartRows
    this.cartRows().push({});
  },
  total: function() {
    return _.reduce(this.children(), function(sum, cartRow){
      return sum + cartRow.total();
    }, 0);
  },
  max: function() {
    if (!this.children().length) return 0;
    return _.max(this.children(), function(cartRow) {
      return cartRow.total();
    }).total();

  }
});
