ViewModel.mixin({
  formatting: {
    dollar: function(value) {
      if (!value) return '$0.00';
      return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
  }
});
