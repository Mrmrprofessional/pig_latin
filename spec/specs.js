describe('pigLatin', function() {
    it("adds an 'ay' to the end of words that start with a vowel", function(){
    expect(words("apple")).to.equal("appleay");
    });


    it("handles mixed case entries", function(){
        expect(words("ApPlE")).to.equal("appleay");
    });

    it("when words start with one or more consonants it moves those consonants to the end of the word", function(){
        expect(words("truck")).to.equal("ucktray");
    });

    it("when words start with qu it places qu to the end of the word and adds ay", function(){
        expect(words("quail")).to.equal("ailquay");
    });

    it("handles words that starts with Y", function(){
        expect(words("young")).to.equal("oungyay");
    });

    it("handles strings with multiple words", function(){
        expect(words("The three little pigs")).to.equal("ethay eethray ittlelay igspay");
    });
});
