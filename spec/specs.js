describe('markSquareInArray', function() {
  describe('New game: square can\'t be marked twice', function() {
    it("Player 1 marks the middle square", function() {
      expect(markSquareInArray(1, 1, 1)).to.eql([[9, 9, 9], [9, 1, 9], [9, 9, 9]]);
    });

    it("Player 2 tries to mark the middle square but it is taken", function() {
      expect(markSquareInArray(1, 1, 2)).to.equal("Space already taken");
    });
  }); //end inner describe()

}); //end main describe()
