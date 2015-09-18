describe('Pizza', function() {
  it('myPizza.size returns "Small"', function() {
    var myPizza = new Pizza("Small", 5.99);
    expect(myPizza.size).to.equal("Small");
  });

  it('myPizza.price returns 5.99', function() {
    var myPizza = new Pizza("Small", 5.99);
    expect(myPizza.price).to.equal(5.99);
  });

  it('myPizza.size returns "Medium"', function() {
    var myPizza = new Pizza("Medium", 8.99);
    var myPrice = myPizza.addDollarSign;
    expect(myPizza.size).to.equal("Medium");
  });



}); //end main describe()
