This is client side library extracted from natural language processing library for node

https://github.com/NaturalNode/natural


Installation
------------

You just need to include natural.js in your project and can use following libraries from natural library.

Now you can access following object from natural.

SoundEx
Metaphone
DoubleMetaphone
PorterStemmer
PorterStemmerRu
LancasterStemmer
AggressiveTokenizerRu
AggressiveTokenizer
RegexpTokenizer
WordTokenizer
WordPunctTokenizer
TreebankWordTokenizer
NounInflector
PresentVerbInflector
CountInflector
TfIdf
SentenceAnalyzer
NGrams
JaroWinklerDistance
LevenshteinDistance
DiceCoefficient

All these objects are inside namespace natural

Example
-------

You can use SoundEx using

if(natural.SoundEx.compare('phonetics', 'fonetix'))
  console.log('they sound alike!');

More Usage Examples
-------------------

For more examples visit [natural readme](https://github.com/NaturalNode/natural/blob/master/README.md)


Limitations
-----------

It doesn't yet support [Classifiers](https://github.com/NaturalNode/natural#classifiers) and [Wordnet](https://github.com/NaturalNode/natural#wordnet).
