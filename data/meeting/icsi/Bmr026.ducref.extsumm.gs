So , I think this is gonna be a pretty short meeting because I have four agenda items ,
three of them were requested by Jane who is not gonna be at the meeting today .
Um {disfmarker} Well first of all with IBM I got a note from Brian yesterday saying that they finally made the tape for the thing that we sent them a {pause} week or week and a half ago
and hopefully next week we 'll have the transcription back from that .
Yeah , so um , I guess she 's hired some new transcribers
So we 're doing some in parallel .
So . They ' r they 're doing the full transcription process .
Because I {disfmarker} I need to ask Jane whether it 's {disfmarker} it would be OK for her {disfmarker} um , s some of her people to transcribe uh some of the initial data we got from the SmartKom data collection , which is these short like five or seven minute sessions .
And so um I wanted to ask Jane if {disfmarker} if uh , you know , maybe one of their transcribers could {disfmarker} could do {disfmarker}
I mean since these are very short , that should really be uh ,
so I 've been trying to keep a web page uh up to date f showing what the current status is of the trans of all the things we 've collected
That 's the thing that I sent out just to foo people saying can you update these pages
So Jane also wanted to talk about participant approval , but I don't really think there 's much to talk about .
I 'll send it out to the list telling people to look at it .
I 'm gonna send out to the participants , uh , with links to web pages which contain the transcripts and allow them to {pause} suggest edits .
So but it 's just transcripts , not the {disfmarker} not the audio ?
Nope , they 'll have access to the audio also .
Because the transcripts might not be right .
So , um the audio that they 're gonna have access to , will that be the uncompressed version ?
Or will you have scripts that like uncompress the various pieces and {disfmarker}
Yeah , it 's {disfmarker} it 's probably going to have to be the uncompressed versions because , uh , uh , it takes too long to do random access decompression .
Yeah , I was just wondering because we 're uh running out of the un - backed - up disk space on
Um , DARPA demo status , not much to say .
The back - end stuff is working out fine .
I 've added some stuff that uh indes indexes by the meeting type MR , EDU , et cetera
and also by the user ID .
So that the front - end can then do filtering based on that as well .
Uh {disfmarker} The back - end is uh , going more slowly as I s I think I said before just cuz I 'm not much of a Tcl - TK programmer .
And , also um , I was just showing Andreas , I got um an X Waves kind of display ,
and I don't know how much more we can do with it {disfmarker}
with like the prosodic stuff where we have like stylized pitches and signals and the transcripts on the bottom
I 've been putting together uh Transcriber things for Windows
Well Transcriber is Tcl - TK , very generic with Snack ,
but {disfmarker} But the problem is the version Transcriber works with , the Snack version , is one point six whatever
But {disfmarker} But it would be cool if the Transcriber interface had like another window for the {disfmarker} you know , maybe above the waveform where it would show some arbitrary valued function that is {disfmarker} that is you know time synchron ti ti time synchronous with the wavform .
and see the pitch contours also .
Just record the audio clip and show an image and I think that 's {disfmarker}
and , {vocalsound} the more live , the better , but uh , given the crunch of time , we may have to retreat from it to some extent .
So I think {disfmarker} {pause} For a lot of reasons , I think it would be very nice to have this Transcriber interface be able to show some other interesting signal along with it
So , uh , we have a little bit of time before that becomes critical ,
We 're {disfmarker} We 're only about thirty percent on the second disk .
but we are like ninety five percent , ninety eight percent on the scratch disks for the expanded meetings .
And , my original intention was like we would just delete them as we needed more space ,
but unfortunately we 're in the position where we have to deal with all the meeting data {pause} all at once , in a lot of different ways .
Well , maybe it should get another rack .
Uh , you know Dave Johnson is gone for , like , ten days ,
You {disfmarker} we need about a gig per meeting .
I have um {disfmarker} I have an eighteen gig drive hanging off of my computer .
I mean it 's just a question of figuring out where they should be and hanging them ,
Well I sent that message out to , I guess , you and Dave asking for {disfmarker} if we could get some disk .
The sysadmins would prefer to have one external drive per machine .
So they don't want to stack up external drives .
So this is a question that 's pretty hard to solve without talking to Dave ,
I think part of the reason why Dave can't get the {disfmarker} the new machines up is because he doesn't have room in the machine room right now .
And so I think what he 's been concentrating on is uh the back {disfmarker} the {pause} back up system , rather than on new disk .
I mean just sort of bulletize I mean o e do do I can {disfmarker} I can dream up text but {pause} this is basically gonna lead to the annual report .
so something that we wanna do next meeting is {disfmarker} is uh to put together um , a kind of reasonable list for ourselves of what is it , um , that we 've done .
So just a week from tomorrow ?
But at any rate I think that there 's a {disfmarker} there 's a longer term thing and there 's immediate need
Well , OK , so how many {disfmarker} how many people here would not be interested in uh {disfmarker} in a meeting about recognition ?
Well , it 's that {disfmarker} It 's just gonna be ver very boring for people who are not you know , sort of really interested in the details of the recognition system .
Um {disfmarker} Uh {disfmarker} One thing {disfmarker} I mean {disfmarker} we {disfmarker} {vocalsound} {vocalsound} in past meetings we had um also a you know various {disfmarker} variously talked about the um work that w uh was happening sort of on the {disfmarker} on the recognition side
Liz and Jane probably .
Why don't we alternate this meeting every other week ?
But I do I don't {disfmarker} I mean a lot of times lately it seems like we don't really have enough for a full meeting on Meeting Recorder .
And then if we find , you know we 're just not getting enough done , there 's all these topics not coming up , then we can expand into another meeting .
Uh . So uh . Um . Let 's chat about it with Liz and Jane {pause} when we get a chance , see what they think and {disfmarker}
um yot I tested the uh {disfmarker} the sort of final version of the PLP configuration um on development test data for {disfmarker} for this year 's Hub - five test set .
And the recognition performance was exactly , and I mean exactly up to the {disfmarker} you know , the first decimal , same as with the uh Mel Cepstra front - end .
They {disfmarker} They were {disfmarker} The males I think were slightly better and the females were slightly worse but nothing really .
And then the really nice thing was that if {disfmarker} if we combine the two systems we get a one and a half percent improvement .
Which u actually uses the whole N - best list from both systems {pause} to {pause} mmm , uh {pause} c combine that .
There 's one thing uh {disfmarker} I mean you don't want to overdo it because y every front - end {disfmarker}
You know , if you {disfmarker} you know you basically multiply your effort by N , where N is a number of different systems
And then we had some results on {pause} digits , uh , with um {disfmarker}
And the reason is basically there 's a whole bunch of read speech data in the Hub - five training set .
The rest is {disfmarker} is read {disfmarker} is read TIMIT data and uh ATIS data and Wall Street Journal and stuff like that .
A fifth would be maybe uh two hours something .
Yeah , so I mean that 's actually not that different from the {pause} amount of training that there was .
But it definitely helps to have the other read data in there
You know the error rate is half of what you do if you train only on ti uh TIMIT {disfmarker} {comment} uh not TIMIT uh TI - digits ,
And you can leave out all the conversational data with no performance penalty .
So . Uh , more read speech data definitely helps .
Because {disfmarker} because uh , it was apparent if you put in a bunch more data it would be better ,
Well , I mean that 's plenty of read speech data .
I mean , Wall Street Journal , {pause} uh , take one example .
So , you know that might be useful for the people who train the {disfmarker} the digit recognizers to {disfmarker} to use uh something other than TI - digits .
And then I th guess Chuck and I had some discussions about how to proceed with the tandem uh system
Yeah , so Andreas uh brought over the uh alignments that the SRI system uses .
And so I 'm in the process of um converting those alignments into uh label files that we can use to train uh a new net with .
And uh so then I 'll train the net .
So the MLP would be trained on I think only forty - six or forty - eight {disfmarker}
Uh which is smaller than the um than the phone set that {disfmarker} that we 've been using so far .
You know we want to try things like deltas on the tandem features .
And so you h have to multiply everything by two or three .
And so , you know , fewer dimensions in the {pause} phone set would be actually helpful just from a logistics point of view .
Although we {disfmarker} I mean , it 's not that many fewer and {disfmarker} and {disfmarker} and we take a KLT anyway so we could {disfmarker}
And then we wanted to s just limit it to maybe uh something on the same order of dimensions as we use in a standard um front - end .
So that would mean just doing the top I don't know ten or twelve or something of the KLT dimensions .
Once we have the new M L P trained up , uh one thing I wanted to try just for the fun of it was to actually run uh like a standard hybrid system that is based on you know , those features
uh and uh retrain MLP and also the you know , the dictionary that we use for the Hub - five system .
And the b And the base u starting off with the base of the alignments that you got from i from a pretty decent system .
So it 's sort of a sanity check of the M L P outputs {pause} before we go ahead and train up the {disfmarker} uh you know , use them as a basis for the tandem system .
I mean , it 's {disfmarker} it 'd be context independent and so on .
So you {disfmarker} you started training with outputs from a {disfmarker} with alignments that were generated by the Cambridge uh system ?
That was probably because your initial system {disfmarker} I mean your system was ba worse than Cambridge 's .
they were {disfmarker} they were comparable .
I was wondering uh you know what size net I should {disfmarker}
Anybody have any intuitions or suggestions ?
Uh , how much training data ?
But to get going we would like some of the data transcribed right away so we can get started .
And the last i item on the agenda is disk issues yet again .
