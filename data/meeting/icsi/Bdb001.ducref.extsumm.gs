and {vocalsound} the main thing that I was gonna ask people to help with today is {pause} to give input on what kinds of database format we should {pause} use in starting to link up things like word transcripts and annotations of word transcripts ,
I mean , we {disfmarker} I sort of already have developed an XML format for this sort of stuff .
so anything that transcribers or discourse coders or whatever put in the signal , {vocalsound} with time - marks for , like , words and phone boundaries and all the stuff we get out of the forced alignments and the recognizer .
So tha it has a single time - line ,
And then you have a bunch of times .
And then , {nonvocalsound} I also wanted to {disfmarker} to be i to be able to not specify specifically what the time was and just have a stamp .
And then somewhere la further down you might have something like an utterance tag
which has " start equals T - seventeen ,
So what that 's saying is , we know it starts at this particular time .
So you 're essentially defining a lattice .
So you could {disfmarker} you could have some sort of other {disfmarker} other tag later in the file that would be something like , um , oh , I don't know , {comment} uh , {nonvocalsound} " noise - type equals {nonvocalsound} door - slam " .
And then , uh , {nonvocalsound} you could either say " time equals a particular time - mark " or you could do other sorts of references .
and what do you do if you {disfmarker} just conceptually , if you get , um , transcriptions where the words are staying but the time boundaries are changing , cuz you 've got a new recognition output ,
or s sort of {disfmarker} what 's the , um , sequence of going from the waveforms that stay the same , the transcripts that may or may not change , and then the utterance which {disfmarker} where the time boundaries that may or may not change {disfmarker} ?
because you could {disfmarker} you could {disfmarker} all you 'd have to change is the , {vocalsound} um , time - stamps in the time - line without {disfmarker} without , uh , changing the I Ds .
That 's actually very nicely handled here
Except the time - line is gonna be huge .
suppose you have a phone - level alignment .
It 's parsing limitations .
I don't want to have this text file that you have to read in the whole thing to do something very simple for .
I think for word - level , this would be OK .
For lower than word - level , you 're talking about so much data that I just {disfmarker} I don't know .
or {disfmarker} or any frame - level stuff I would use P - file .
It 's ICS uh , ICSI has a format for frame - level representation of features .
That you could call {disfmarker} that you would tie into this representation with like an ID .
Or {disfmarker} or there 's a {disfmarker} there 's a particular way in XML to refer to external resources .
But what {disfmarker} what 's the advantage of doing that versus just putting it into this format ?
More compact ,
I mean these are long meetings
Because you have a two - gigabyte limit on most O Ss .
So I think it {disfmarker} it 's debatable whether you want to do phone - level in the same thing .
But I think , a anything at frame - level , even P - file , is too verbose .
P - file for each frame is storing a vector of cepstral or PLP values ,
It 's whatever you want , actually .
Built into it is the concept of {pause} frames , utterances , sentences , that sort of thing , that structure .
And then also attached to it is an arbitrary vector of values .
And we have a lot of tools already to deal with it .
Man - pages and , uh , source code , and me .
but something sort of standard enough that , you know , if we start using this we can give it out ,
other people can work on it ,
I mean , it 's something that we developed at ICSI .
and {disfmarker} and , you know , we have a {pause} well - configured system that you can distribute for free ,
But I thought it would be good to get something that we can {disfmarker} that other people can use or adopt for their own kinds of encoding .
And especially for the prosody work , what {disfmarker} what it ends up being is you get features from the signal ,
you want to recompute your features , um , and then keep the database up to date .
Or you change a word , or you change a {vocalsound} utterance boundary segment , which is gonna happen a lot .
And so I wanted something where {pause} all of this can be done in a elegant way
and that if somebody wants to try something or compute something else , that it can be done flexibly .
it just has to be , you know , easy to use , and {disfmarker}
We should look at ATLAS ,
the NIST thing ,
Th - there are sort of two choices .
Your {disfmarker} your file format can know about {disfmarker} know that you 're talking about language {pause} and speech , which is what I chose , and time ,
or your file format can just be a graph representation .
And then the application has to impose the structure on top .
So what it looked like ATLAS chose is , they chose the other way ,
which was their file format is just nodes and links ,
and you have to interpret what they mean yourself .
and I thought it was better if you 're looking at a raw file to be {disfmarker} t for the tags to say " it 's an utterance " , as opposed to the tag to say " it 's a link " .
I mean , I {disfmarker} I chose this for a couple reasons .
One of them is that it 's easy to parse .
Can you {disfmarker} But you can add to those structures if you {disfmarker}
Sure .
So what {disfmarker} What NIST would say is that instead of doing this , you would say something like " link {nonvocalsound} start equals , um , you know , some node ID ,
and then " type " would be " utterance " .
end equals some other node ID " ,
they 're developing a big infrastructure .
Do they already have something that 's {disfmarker} that would be useful for us in place ?
probably a year ago ,
The last time I looked at it was a while ago ,
And so , specifically they didn't have any external format representation at that time .
They just had the sort of conceptual {pause} node {disfmarker} uh , annotated transcription graph ,
Since then , they 've developed their own external file format ,
Um , and apparently they 've also developed a lot of tools ,
but I haven't looked at them .
Maybe I should .
Um , th what would {disfmarker} would {disfmarker} would {disfmarker} what would worry me is that maybe we might miss a little detail
I {disfmarker} I think if it 's conceptually close , and they already have or will have tools that everybody else will be using , I mean , {vocalsound} it would be crazy to do something s you know , separate that {disfmarker}
The other thing {disfmarker} the other way that I sort of established this was as easy translation to and from the Transcriber format .
So I 'll {disfmarker} I 'll take a closer look at it .
The {disfmarker} the {disfmarker} the {disfmarker} the point is {disfmarker} with this , though , is that you can't really add any supplementary information .
You have to make a different type .
Now {disfmarker} now how would you {disfmarker} how would you represent , um , multiple speakers in this framework ?
the way I had it is each turn or each utterance , {comment} I don't even remember now , had a speaker ID tag attached to it .
there 's a spea speaker tag up at the top which identifies them
But {disfmarker} but {disfmarker} so how in the NIST format do we express {vocalsound} a hierarchical relationship between , um , say , an utterance and the words within it ?
Um , you would have another structure lower down than this that would be saying they 're all belonging to this ID .
Well , I think I 'm {disfmarker} I think w I had better look at it again
f Say , one segmentation is in terms of , um , you know , uh , sentences .
And another segmentation is in terms of , um , {vocalsound} I don't know , {comment} prosodic phrases .
And let 's say that they don't {pause} nest .
So we would basically be sort of , um , taking the format and enriching it with things that we wanna query in relation to the words that are already in the file ,
There 's a {pause} standard again in XML , specifically for searching XML documents {disfmarker} structured X - XML documents , where you can specify both the content and the structural position .
It 's {disfmarker} it 's {disfmarker} you would use that to build your tool to do that sort of search .
No matter what format you choose , you 're gonna have the trou you 're gonna have the difficulty of relating the {disfmarker} the frame - level features {disfmarker}
what about , um , the idea of using a relational database to , uh , store the information from the XML ?
which allows you to do all kinds of {pause} good search things in there .
One of the things that ATLAS is doing is they 're trying to define an API which is independent of the back store ,
so that , uh , you could define a single API and the {disfmarker} the storage could be flat XML files or a database .
My opinion on that is for the s sort of stuff that we 're doing , {comment} I suspect it 's overkill to do a full relational database , that , um , just a flat file and , uh , search tools I bet will be enough .
I guess I 'm just a little hesitant to try to go whole hog on sort of the {disfmarker} the whole framework that {disfmarker} that NIST is talking about , with ATLAS and a database and all that sort of stuff ,
cuz it 's a big learning curve , just to get going .
If you wanted to use the structured XML query language , that 's a different thing .
What you would do is , someone would build a tool that used that as a library .
Um , one that Chuck mentioned is starting out with something that we don't have to start over , that we don't have to throw away if other people want to extend it for other kinds of questions ,
and being able to at least get enough , uh , information out on {disfmarker} where we condition the location of features on information that 's in the kind of file that you {pause} put up there .
Well , I guess , the two goals .
I mean , I have to look at it again to see whether it can really do what we want ,
but if we use the ATLAS external file representation , um , it seems like it 's rich enough that you could do quick tools just as I said in Perl ,
and then later on if we choose to go up the learning curve , we can use the whole ATLAS inter infrastructure ,
I mean , th the reason I like P - file is I 'm already familiar with it ,
But , I mean , it is just something we developed at ICSI .
There 's an API for it .
a bunch of libraries , P - file utilities .
if we {disfmarker} if we tie the overlap code to the first word in the overlap , then you 'll have a time - marking .
It won't {disfmarker} it 'll be independent of the time bins ,
however these e evolve , shrink , or whatever ,
but , when it comes to annotations , um , you often find yourself in the situation where you have {pause} different annotations {pause} of the same , say , word sequence .
And sometimes the word sequences even differ slightly because they were edited s at one place but not the other .
But , see , if you 'd annotate dialogue acts , you don't necessarily want to {disfmarker} or topics {disfmarker} you don't really want to be dealing with time - marks .
And {pause} you want some tool , uh , that is able to sort of merge these different annotations back into a single , uh , version .
I {disfmarker} I don't see any way that file formats are gonna help us with that .
But once you have a file format , I can imagine writing {disfmarker} not personally , but someone writing a tool that is essentially an alignment tool , um , that mediates between various versions ,
The hard part isn't the file format .
The hard part is specifying what you mean by " merge " .
These are big files .
It seems to me you want to keep the frame - level stuff separate .
I I 'm pretty sure that you can do that ,
but I 'm forgetting the exact level of nesting .
