test( "a basic test example", function() {
  var value = "hello";
  equal( value, "hello", "We expect value to be hello" );
});
test(  "testing Natural SoundEx Compare", function() { 
  var result = natural.SoundEx.compare('phone', 'pone'); 
  equal( result, true, "We expect value to be true" );
 });
test(  "testing Natural SoundsLike", function() { 
  phonetic = natural.Metaphone;
  phonetic.attach();
  var result = 'phonetics'.soundsLike('fonetix'); 
  equal( result, true, "We expect value to be true" );
 });
test(  "testing Natural TreebankWordTokenizer", function() { 
  tokenizer = new natural.TreebankWordTokenizer();
  var result = tokenizer.tokenize("my dog hasn't any flees.")
  deepEqual( result, [ 'my', 'dog', 'has', 'n\'t', 'any', 'flees', '.' ], "We expect value to be tokenized" );
 });