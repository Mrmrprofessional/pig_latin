describe('pigLatin', function() {
    it("adds an 'ay' to the end of words that start with a vowel", function(){
    expect(pigLatin("apple")).to.equal("appleay");
    });
});
