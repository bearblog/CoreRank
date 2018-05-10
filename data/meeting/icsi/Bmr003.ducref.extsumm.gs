topic of this meeting is I wanna talk a little bit about transcription .
Um , I 've looked a little bit into commercial transcription services
and Jane has been working on doing transcription .
and then get an update on the electronics ,
Um , you know , eventually we 're probably gonna wanna distribute this thing
I mean , it seems like it 's not a corpus which is {disfmarker} uh , has been done before .
And {disfmarker} and so how we do we distribute the transcripts ,
how do we distribute the audio files ,
but {disfmarker} but so should we do it in the same format as LDC
It 's not so much the actu The logistics of distribution are secondary to {pause} preparing the data in a suitable form for distribution .
And the other thing is that , um , University of Washington may want to start recording meetings as well ,
in which case w w we 'll have to decide what we 've actually got so that we can give them a copy .
So I have a bunch of scripts with X Waves , and some Perl scripts , and other things that make it really easy to extract out {vocalsound} and align where the digits are .
And if U d UW 's going to do the same thing I think it 's worth while for them to do these digits tasks as well .
And what I 've done is pretty ad - hoc ,
um , so we might wanna change it over to something a little more standard .
You know , STM files , or XML , or something .
So we were planning to do like thirty or forty hours worth of meetings .
um , in addition to this issue about the UW stuff there was announced today , uh , via the LDC , um , a corpus from I believe Santa Barbara .
because it would nice to be able to take that stuff and adapt it to a meeting setting .
Well , what I was thinking is it may be useful in transcribing , if it 's far field stuff ,
In doing , um , some of our first automatic speech recognition models , it may be useful to have that kind of data
They had people come in to a certain degree and they {disfmarker} and they have DAT recorders .
Uh , in fact we get it for free
cuz they 're distributing it through the LDC .
So that would be {disfmarker} yeah , that would be something to look into .
Maybe we should {disfmarker} maybe we should get a copy of it just to see what they did
so {disfmarker} so that we can {disfmarker} we can compare .
OK , why don't you go ahead and do that then Eric ?
CSAE .
Corpus of Spoken American English .
But , it uh it would also maybe help be helpful for Liz , if she wanted to start working on some discourse issues , you know , looking at some of this data and then ,
Actually , that 's another thing I was thinking about is that maybe Jane should talk to Liz , to see if there are any transcription issues related to discourse that she needs to get marked .
So , well w shall we move on and talk a little bit about transcription then ?
What we 're using right now is a tool , um , from this French group , called " Transcriber "
so it has a , uh , nice useful Tcl - TK user interface
So we 're {disfmarker} we 're at this point only looking for word level .
And so the things we {disfmarker} that we know {disfmarker} that I know I want are {vocalsound} the text , the start and end , and the speaker .
But other people are interested in for example stress marking .
Um , and then things like repairs , and false starts , and , {vocalsound} filled pauses , and all that other sort of stuff , {vocalsound} we have to decide how much of that we wanna do .
So what we wanted to do was have Jane do basically one meeting 's worth ,
As a pilot study .
you know , forty minutes to an hour ,
is {disfmarker} and so one of the things was to get an estimate of how long it would take ,
and then also what tools we would use .
And so the next decision which has to be made actually pretty soon is how are we gonna do it ?
And apparently that 's happened in the past .
And I think that 's probably the right way to do it .
but I just can't imagine that we 're gonna get anything that much better from a commercial one .
There 's some interesting human factors problems like , {vocalsound} yeah , what span of {disfmarker} of time is it useful to segment the thing into in order to uh , transcribe it the most quickly .
But {disfmarker} but is there anyway to {disfmarker} to wire a speech recognizer up to it
so I mean , I 've been sort of playing with , uh , different ways of mar cuz I 'm thinking , you know , I mean , if you could get optimal instructions you could cut back on the number of hours it would take .
First of all the time marking you 'd get {disfmarker} you could get by a tool .
We don't {disfmarker} we don't know , actually .
We haven't decided which {disfmarker} which time we care about ,
and that 's kind of one of the things that you 're saying , is like {disfmarker} {vocalsound} you have the option to put in more or less timing data {disfmarker}
and , uh , be in the absence of more specific instructions , {vocalsound} we 're trying to figure out what the most convenient thing to do is .
so {disfmarker} so what {disfmarker} what she 's done so far , is sort of {disfmarker} more or less breath g not breath groups , {comment} sort of phrases , continuous phrases .
And so , um , that 's nice because you {disfmarker} you separate when you do an extract , you get a little silence on either end .
But , you know , obviously there 's a lag between when you hear it and when you can press the return key
But then , you know , it 's like , {vocalsound} uh , you press the tab key to stop the flow and {disfmarker} {vocalsound} and , uh , the return key to p to put in a marking of the boundary .
Are {disfmarker} are those d delays adjustable ?
We could program that pretty easily ,
Could you get it so that with {disfmarker} so it would {disfmarker} it would detect volume on a channel and insert a marker ?
Sure .
maybe {disfmarker} maybe we could try the following experiment .
Take the data that you 've already transcribed
and {disfmarker} and throw out the words ,
but keep the time markings .
And then go through {disfmarker} I mean , and go through and {disfmarker} and try and re - transcribe it , given that we had perfect boundary detection .
And see if it {disfmarker} see if it {disfmarker} see if it feels easier to you .
So I think though it 's a good proposal to be used on a new {disfmarker} a new batch of text that I haven't yet done yet in the same meeting . Could use it on the next segment of the text .
Well , uh but there 's an extra problem which is that I didn't really keep accurate {disfmarker}
uh , it wasn't a pure task the first time ,
I mean , the {disfmarker} the question is , is it worth giving you the segmentation ?
I could generate the segmentation and {disfmarker} and you could do the words , and time yourself on it .
That would at least tell us whether it 's worth spending a week or two trying to get a tool , that will compute the segmentations .
And the thing to keep in mind too about this tool , guys is that {vocalsound} sure , you can do the computation for what we 're gonna do in the future
but if {disfmarker} if UW 's talking about doing two , or three , or five times as much stuff and they can use the same tool , then obviously there 's a real multiplier there .
And the other thing too is with {disfmarker} with speaker identification ,
but it seems like {vocalsound} we {disfmarker} it doesn't {disfmarker} it seems like it 's not really not that hard to have an automatic tool to generate {vocalsound} the phrase marks , and the speaker , and speaker identity without putting in the words .
So , and then he has a script that will convert it into the {disfmarker} the thing that , uh , would indicate speaker ID .
I mean , I looked at Cyber Transcriber
which is a service that you send an audio file ,
they do a first - pass speech recognition .
And then they {disfmarker} they do a clean up .
But it 's gonna be horrible .
They 're never gonna be able to do a meeting like this .
And so {disfmarker} so what I 'm saying is that if we hire an external service I think we can expect three hundred dollars an hour .
who knows if they 're gonna be able to m manage multal multiple channel data ?
They won't .
But at any rate , so we {disfmarker} we have a ballpark on how much it would cost if we send it out .
But we can pay a graduate student seven dollars an hour .
these are linguistics grad students .
so that means that even if it takes them thirty times real time it 's cheaper to {disfmarker} to do graduate students .
I mean , that 's why I said originally , that I couldn't imagine sending it out 's gonna be cheaper .
The other thing too is that , uh , if they were linguistics they 'd be {disfmarker} you know , in terms of like the post editing , i uh {disfmarker} tu uh content wise they might be easier to handle
cuz they might get it more right the first time .
And also we would have control of {disfmarker} I mean , we could give them feedback .
Whereas if we do a service it 's gonna be limited amount .
And {disfmarker} and they 're not gonna provide {disfmarker} they 're not gonna provide stress ,
they 're not gonna re provide repairs ,
they {disfmarker} they may or may not provide speaker ID .
Just hypoth hypothetically assuming that {disfmarker} that we go ahead and ended up using graduate students .
I hope it 's Jane .
Yeah , no , that {disfmarker} I {disfmarker} I would be interested in that {disfmarker} in becoming involved in the project in some aspect like that {disfmarker}
So as far as I 'm concerned those transcription conventions are fixed right now .
So , um , {vocalsound} one of them is the idea of how to indicate speaker change ,
Um , the user interface only allows two .
And so if {disfmarker} if you 're using their interface to specify overlapping speakers you can only do two .
But my script can handle any .
Uh , did you ask them to change the interface for more speakers ?
Yes ,
and they said that 's on {disfmarker} in {disfmarker} in the works for the next version .
And they have {disfmarker} they 've actually asked if we are willing to do any development
and I said , well , maybe .
So if we want {disfmarker} if we did {disfmarker} if we did something like programmed in a delay , which actually I think is a great idea , um , I 'm sure they would want that incorporated back in .
and {disfmarker} But so in terms of the con the conventions , then , {vocalsound} uh , basically , {vocalsound} uh , it 's strictly orthographic
which means with some w provisions for , uh , w uh , {vocalsound} colloquial forms .
How are you handling backchannels ?
Well , if it {disfmarker} if there was a word like " right " , you know , then I wou I would indicate {vocalsound} that it happened within the same tem time frame
but wouldn't say exactly when it happened .
I transcribed a minute of this stuff
and there was a lot of overlapping .
or does it {disfmarker} does the fact that there 's a backchannel split the {disfmarker} the {disfmarker} the {disfmarker} it in two .
OK , my {disfmarker} my focus was to try and maintain conten con content continuity and , uh , to keep it within what he was saying .
Like {vocalsound} I wouldn't say breath groups but prosodic or intonational groups as much as possible .
So {vocalsound} if someone said " mm - hmm " in the middle of a {disfmarker} of someone 's , {vocalsound} uh , uh , intonational contour , {vocalsound} I {disfmarker} I indicated it as , like what you just did .
then I indicated it as a segment which contained {vocalsound} @ @ {comment} this utterance plus an overlap .
But that 's {disfmarker} but there 's only one {disfmarker} there 's only one time boundary for both speakers ,
Yeah ,
and so then , uh , in terms of like words like " uh " and " um " I just wrote them
Huh - uh .
We should probably mark areas that have no speakers as no speaker .
If we use the {disfmarker} the little {disfmarker} the conventions that Jane has established , I have a script that will convert from that convention to their saved convention .
Which allows five .
And it can be m edited after the fact ,
But you 're saying that by the time you call it back in to {disfmarker} from their saved format it opens up a window with window with five speakers ?
Right .
the {disfmarker} the {disfmarker} the whole saved form the saved format and the internal format , all that stuff , handles multiple speakers .
It 's just there 's no user interface for specifying multiple {disfmarker} any more than two .
So your {disfmarker} your script solves {disfmarker} Doesn't it solve all our problems ,
And that works nicely cuz this so quick to enter .
So I wouldn't wanna do it through the interface anyway adding which {disfmarker} worry who the speaker was .
in terms of like the continuity of thought {vocalsound} for transcriptions , it 's {disfmarker} i it isn't just words coming out ,
So I have {disfmarker} I have a convention of putting like a dash {vocalsound} arrow just to indicate that this person 's utterance continues .
sometimes {vocalsound} we had the situation which is {disfmarker} you know , which you {disfmarker} which you get in conversations , {comment} of someone continuing someone else 's utterance ,
and in that case I did a tilde arrow versus a arrow tilde , {vocalsound} to indicate that it was continuation
But just , you know , the arrows showing continuation of a thought .
and you 'd be able to {vocalsound} look for the continuation .
Well , so anyway , are we interested then in writing tools to try to generate any of this stuff automatically ?
Maybe we should s consider also , um , starting to build up a web site around all of these things .
I I 'd like to be able to {disfmarker} to pore through , you know , the {disfmarker} the types of tr conventions that you 've come up with and stuff like that .
Alright .
Let 's look at it anyway .
So definitely we should {disfmarker} we should have some kind of access to the data .
And we have {disfmarker} we have quite a disparate number of web and other sorts of documents on this project sort of spread around .
I have several
and Dan has a few ,
so we can add in links and stuff like that to other things .
I think mostly internal .
We could do an HT access which would accommodate those things .
um , let 's move on to electronics .
There 's a lip in these tables .
And th " that " being a diagram .
That {disfmarker} that 's the six tables that we 're looking at .
These six tables here , {vocalsound} with {disfmarker} with little boxes sort of , uh , in the middle here .
The box is an inch thick
so it hangs down a half an inch .
And so the {disfmarker} the two {vocalsound} head set jacks would be in the front
and then the little LED to indicate that that box is live .
The {disfmarker} the important issue about the LED is the fact that we 're talking about eight of these total , which would be sixteen channels .
Uh , so this {disfmarker} this notion of putting down the P Z Ms {vocalsound} and taking them away would somehow have to be turned into leaving them on the table
Well , we wanna do that definitely .
So that if t if you have two people sitting next to each other they can actually go into the same box .
And to {disfmarker} See , thi this is really the way people sit on this table .
Which means two at each station .
Thi - thi thi this box is a one off deal .
And , uh , it 's function is to s to , uh , essentially a wire converter to go from these little blue wires to these black wires ,
plus supply power to the microphones
cuz the {disfmarker} the {disfmarker} he the , uh , cheap head mounteds all require low voltage .
So I 'm ready to build it .
Which is to say , uh , the neighborhood of a week to get the circuit board done .
So I think the other thing I 'd like to do is , do something about the set up
so that it 's a little more presentable and organized .
Well I can build a cabinet .
No , but w certainly one of the issues is {disfmarker} is the , uh {disfmarker} is security .
then the other question is do we wanna try to do a user interface that 's available out here ?
I mean , do we wanna try to get a monitor ?
Which is to say just laptop with a wireless .
So , I mean , either {disfmarker} either we figure out how to use a machine somebody already {disfmarker} in the group already owns , {vocalsound} a a and the idea is that if it 's it perk , you know , it 's an advantage not {disfmarker} not a disadvan {comment} {vocalsound} or else we {disfmarker} we literally buy a machine e exactly for that purpose .
Certainly it solves a lot of the problems with leaving a monitor out here all the time .
What is the , um , projector supposed to be hooked up to ?
There 's gonna be actually a {disfmarker} a plug at the front that 'll connect to people 's laptops so you can walk in and plug it in .
But {disfmarker} but {disfmarker} but I think the idea of having a control panel it 's {disfmarker} that 's there in front of you is really cool .
And it 's gonna be con connected to the machine at the back .
So we certainly could use that as {disfmarker} as a constant reminder of what the VU meters are doing .
So again , Washington wants to equip a system .
Our system , we spent ten thousand dollars on equipment not including the PC .
However , seven and a half thousand of that was the wireless mikes .
But once we {disfmarker} once we 've done the intellectual part of these , uh , we can just knock them out , right ?
Washington could have a system that didn't have any wireless but would had {disfmarker} what 's based on these
and it would cost {disfmarker}
PC and two thousand dollars for the A - to - D stuff .
P Z Ms cost a lot .
But anyway you 'd save , on the seven {disfmarker} seven or eight thousand for the {disfmarker} for the wireless system .
