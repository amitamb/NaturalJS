// would like to know about grouping tests within QUnit ...
test( "a basic test example", function() {
  var value = "hello";
  equal( value, "hello", "We expect value to be hello" );
});

test(  "testing WordTokenizer", function() { 
  tokenizer = new natural.WordTokenizer();
  var result = tokenizer.tokenize("your dog has fleas")
  deepEqual( result, [ 'your', 'dog', 'has', 'fleas'], "We expect value to be tokenized" );
});

test(  "testing TreebankWordTokenizer", function() { 
  tokenizer = new natural.TreebankWordTokenizer();
  var result = tokenizer.tokenize("my dog hasn't any fleas.")
  deepEqual( result, [ 'my', 'dog', 'has', 'n\'t', 'any', 'fleas', '.' ], "We expect value to be tokenized" );
});

test(  "testing RegExpWordTokenizer", function() { 
  tokenizer = new natural.RegExpWordTokenizer();
  var result = tokenizer.tokenize("my-fleas-don't-have-any-dog.");
  deepEqual( result, [ 'my', 'fleas', 'don\'t', 'have', 'any', 'dog.'], "We expect value to be tokenized");
});

test(  "testing WordPunctTokenizer", function() { 
  
});
test(  "testing JaroWinklerDistance", function() { 
  
});
test(  "testing LevenshteinDistance", function() { 
  
});
test(  "testing modified LevenshteinDistance", function() { 
  
});
test(  "testing Dice co-efficient", function() { 
  
});
test(  "testing Porter Stemmer", function() { 
  
});
test(  "testing Porter Stemmer in Russian", function() { 
  
});
test(  "testing tokenizeAndStem", function() { 
  
});
test(  "testing Lancaster stemmer", function() { 
  
});
test(  "testing Bayes Classifier", function() { 
  
});
test(  "testing Bayes Classifier on arrays", function() { 
  
});
test(  "testing Bayes Classifier save (to github gist?) and recall", function() { 
  
});
test(  "testing Metaphone Compare", function() { 
  
});
test(  "testing Metaphone raw phonetics", function() { 
  
});
test(  "testing Metaphone maximum code length", function() { 
  
});
test(  "testing double Metaphone (experimental)", function() { 
  
});
test(  "testing Metaphone attach SoundsLike", function() { 
  phonetic = natural.Metaphone;
  phonetic.attach();
  var result = 'phonetics'.soundsLike('fonetix'); 
  equal( result, true, "We expect value to be true" );
});
test(  "testing Metaphone attach raw phonetics", function() { 

});
test(  "testing Metaphone attach tokenizeAndPhoneticize", function() { 

});
test(  "testing SoundEx Compare", function() { 
  var result = natural.SoundEx.compare('phone', 'pone'); 
  equal( result, true, "We expect value to be true" );
});
test(  "testing SoundEx attach soundsLike", function() { 

});
test(  "testing NounInflector pluralize", function() { 

});
test(  "testing NounInflector singularize", function() { 

});
test(  "testing NounInflector attach pluralize", function() { 

});
test(  "testing NounInflector attach singularize", function() { 

});
test(  "testing CountInflector nth", function() { 

});
test(  "testing Present Tense Verbs singularize", function() { 

});
test(  "testing Present Tense Verbs pluralize", function() { 

});
test(  "testing Present Tense Verbs attach singularize", function() { 

});
test(  "testing Present Tense Verbs attach pluralize", function() { 

});
test(  "testing Bigrams", function() { 

});
test(  "testing Trigrams", function() { 

});
test(  "testing arbitrary n-grams", function() { 

});
test(  "testing tfidf", function() { 

});
test(  "testing wordnet", function() { 

});


