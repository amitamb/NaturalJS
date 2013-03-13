// would like to know about grouping tests within QUnit ...
test( "a basic test example", function() {
  var value = "hello";
  equal( value, "hello", "We expect value to be hello" );
});
test( "testing stopwords", function() {
  var word = "the";
  ok( stopwords.indexOf(word) != -1, "expecting 'the' to be in the stopword list" );
});

test( "testing removeStopWords", function() {
  var sentence = "the quick brown fox jumped over the lazy dog";
  equal( sentence.removeStopWords(), 'quick brown fox jumped lazy dog');
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

test(  "testing RegexpTokenizer", function() { 
  tokenizer = new natural.RegexpTokenizer({pattern: /\-/});
  var result = tokenizer.tokenize("my-fleas-dont-have-any-dog.");
  deepEqual( result, [ 'my', 'fleas', 'dont', 'have', 'any', 'dog.'], "We expect value to be tokenized");
});

test(  "testing WordPunctTokenizer", function() { 
  tokenizer = new natural.WordPunctTokenizer();
  var result = tokenizer.tokenize("my dog hasn't any flees.");
  deepEqual( result, [ 'my', 'dog', 'hasn', '\'', 't', 'any', 'flees',  '.' ], "We expect value to be tokenised" );
});
test(  "testing JaroWinklerDistance", function() { 
  equal(natural.JaroWinklerDistance("dixon","dicksonx"),0.8133333333333332);
  equal(natural.JaroWinklerDistance('not', 'same'),0);
});
test(  "testing LevenshteinDistance", function() { 
  equal(natural.LevenshteinDistance("ones","onez"),1);
  equal(natural.LevenshteinDistance("ones","oness"),1);
  equal(natural.LevenshteinDistance('one', 'one'),0);
});
test(  "testing modified LevenshteinDistance", function() { 
  
});
test(  "testing Dice co-efficient", function() { 
  
});
test(  "testing Porter Stemmer", function() { 
  
  stemmer = natural.PorterStemmer;
 

  equal(stemmer.stem('stems'),'stem')
 
  equal(stemmer.stem('stemming'),'stem')

  equal(stemmer.stem('stemmed'),'stem')

  equal(stemmer.stem('stem'),'stem')
});

test(  "testing Porter Stemmer in Russian", function() { 
  
});
test(  "testing tokenizeAndStem", function() { 
  
});
test(  "testing Lancaster stemmer", function() { 
  
});
test(  "testing Bayes Classifier", function() { 
  
  var classifier = new natural.BayesClassifier();
  classifier.addDocument('i am long qqqq', 'buy');
  classifier.addDocument('buy the q\'s', 'buy');
  classifier.addDocument('short gold', 'sell');
  classifier.addDocument('sell gold', 'sell');

  classifier.train();
  var result = classifier.classify('i am short silver');
  equal( result, 'sell', "We expect value to be 'sell'" );

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
  var NGrams = natural.NGrams;
  var result = NGrams.bigrams("this is a test");
  deepEqual(result, [["this", "is"], ["is", "a"], ["a", "test"]], "We expect to be equal");
});
test(  "testing Trigrams", function() { 
  var NGrams = natural.NGrams;
  var result = NGrams.trigrams("this is a test");
  deepEqual(result, [["this", "is", "a"], ["is", "a", "test"]], "We expect to be equal");
});
test(  "testing arbitrary n-grams", function() { 
   var Ngrams = natural.NGrams;
   deepEqual(Ngrams.ngrams('this is a test for n-grams',4),([["this","is","a","test"],["is","a","test","for"],["a","test","for","n"],["test","for","n","grams"]]),"Expecting to be equal");
});
test(  "testing tfidf", function() { 

});
test(  "testing wordnet", function() { 

});
test(  "testing Parts of Speech Encoding", function() { 
 // this ia apparently not implemented yet
});
test(  "testing sentence analysis", function() { 
 // this ia apparently not implemented yet
 // although some portion of a sentence analysis system appears
 // to have been pulled across from some other library:
 // ttp://www.writingcentre.uottawa.ca/hypergrammar/sntpurps.html
});



