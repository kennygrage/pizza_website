describe('Pizza', function() {
  it('myPizza.size returns "Small"', function() {
    var myPizza = new Pizza("Small", 5.99);
    expect(myPizza.size).to.equal("Small");
  });

  it('myPizza.price returns 5.99', function() {
    var myPizza = new Pizza("Small", 5.99);
    expect(myPizza.price).to.equal(5.99);
  });



}); //end main describe()
