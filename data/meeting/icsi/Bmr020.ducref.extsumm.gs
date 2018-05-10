so the only agenda items were Jane {disfmarker} was Jane wanted to talk about some of the IBM transcription process .
Uh , and you just sent off a Eurospeech paper ,
We actually exceeded the delayed deadline by o another day ,
uh , Dave Gelbart sent me email , I think he sent it to you too , {comment} that um , there 's a special topic , section in si in Eurospeech on new , corp corpors corpora .
And it 's not due until like May fifteenth .
there {disfmarker} there were some interesting results in this paper , though .
For instance that Morgan {disfmarker} uh , accounted for fifty - six percent of the Robustness meetings in terms of number of words .
No . Well , according to the transcripts .
we as identify him as the person dominating the conversation .
well it was about {disfmarker} it had three sections
Uh , the one was that the {disfmarker} just the {disfmarker} the amount of overlap
s in terms of {disfmarker} in terms of number of words
and also we computed something called a " spurt " ,
which is essentially a stretch of speech with uh , no pauses exceeding five hundred milliseconds .
Um , and we computed how many overlapped i uh spurts there were and how many overlapped words there were . {vocalsound} Um , for four different {pause} corpora ,
the Meeting Recorder meetings ,
the Robustness meetings
Switchboard
and CallHome ,
you know , as you might expect the Meeting Recorder {pause} meetings had the most overlap
uh , but next were Switchboard and CallHome ,
which both had roughly the same ,
and the Robustness meetings were {disfmarker} had the least ,
Also , I {disfmarker} in the Levinson , the pragmatics book , {comment} in you know , uh , textbook , {vocalsound} there 's {disfmarker} I found this great quote where he says {vocalsound} you know {disfmarker} you know , how people {disfmarker} it talks about how uh {disfmarker} how {disfmarker} how people are so good at turn taking ,
and {vocalsound} so {disfmarker} they 're so good that {vocalsound} generally , u the overlapped speech does not {disfmarker} is less than five percent .
Well , of course , no , it doesn't necessarily go against what he said ,
So , {vocalsound} in terms of number of words , it 's like seventeen or eigh eighteen percent for the Meeting Recorder meetings and {vocalsound} about half that for , {vocalsound} uh , the Robustness .
Yeah , I just wonder if you have to normalize by the numbers of speakers or something .
I bet there 's a weak dependence .
You have a lot of {disfmarker} a lot of two - party , subsets within the meeting .
But , even if you take out all the backchannels {disfmarker}
you still have significant overlap .
and then the second one was just basically the {disfmarker} {vocalsound} the stuff we had in the {disfmarker} in the HLT paper on how overlaps effect the {pause} recognition performance .
And we rescored things um , a little bit more carefully .
So {disfmarker} so the {disfmarker} the conjecture from the HLT results was that {vocalsound} most of the added recognition error is from insertions {vocalsound} due to background speech .
and I must say the NIST scoring tools are pretty nice for this ,
where you just basically ignore everything outside of the , {vocalsound} uh , region that was deemed to be foreground speech .
So we scored everything ,
But basically what we found is after we take out these regions {disfmarker} so we only score the regions that were certified as foreground speech , {comment} {vocalsound} the recognition error went down to almost {vocalsound} uh , the {pause} level of the non - overlapped {pause} speech .
What {disfmarker} what sort of normalization do you do ?
Well , we do uh , VTL {disfmarker} {vocalsound} vocal tract length normalization ,
w and we uh {disfmarker} you know , we {disfmarker} we uh , {vocalsound} make all the features have zero mean and unit variance .
Over {disfmarker} over the entire c over the entire channel .
Um , now we didn't re - align the recognizer for this .
So the recognizer didn't have the benefit of knowing where the foreground speech {disfmarker} a start
And then , {vocalsound} the third thing was , we looked at , {vocalsound} {vocalsound} uh , what we call " interrupts " ,
Uh , so we {disfmarker} we used the punctuation from the original transcripts
and we inferred the beginnings and ends of sentences .
if you have overlapping speech and someone else starts a sentence , you know , where do these {disfmarker} where do other people start their {vocalsound} turns {disfmarker} not turns really , but you know , sentences ,
So , the {disfmarker} the question was how can we {disfmarker} what can we say about the places where the second or {disfmarker} or actually , several second speakers , {vocalsound} um {pause} start their {pause} " interrupts " , as we call them .
to {disfmarker} for {disfmarker} for the purposes of this analysis , we tagged the word sequences , and {disfmarker} and we time - aligned them .
So that , {vocalsound} if any part of the word was overlapped , it was considered an interrupted {pause} word .
because we had tagged these word strings , {comment} {vocalsound} um , that {disfmarker} that occurred right before these {disfmarker} these uh , interrupt locations .
So {disfmarker} {vocalsound} whether there was a pause essentially here ,
uh , disfluencies .
uh , backchannels ,
uh , filled pauses {disfmarker}
and then we had things like discourse markers ,
And the tags we looked at are {vocalsound} the spurt tag ,
or actually {disfmarker}
End of spurt .
I mean {vocalsound} we didn't really hand - tag all of these things .
But so , we sort of {disfmarker} just based on the lexical {disfmarker} {vocalsound} um , identity of the words , we {disfmarker} we tagged them as one of these things .
so at the end after a discourse marker or after backchannel or after filled pause , you 're much more likely to be interrupted {vocalsound} than before .
And also of course after spurt ends ,
which means basically in p inside pauses .
I wonder about the cause and effect there .
In other words uh {pause} if you weren't going to pause you {disfmarker} you will because you 're g being interrupted .
There 's no statement about cause and effect .
I {disfmarker} I thought maybe Liz presented this at some conference a while ago about {vocalsound} uh , backchannels
and that they tend to happen when uh {pause} the pitch drops .
y We didn't talk about , uh , prosodic , uh , properties at all ,
although that 's {disfmarker} I {disfmarker} I take it that 's something that uh Don will {disfmarker} will look at
now that we have the data and we have the alignment ,
There 's actually {disfmarker} uh there 's this a former student of here from Berkeley ,
Nigel {disfmarker} Nigel Ward .
and he did this backchanneling , automatic backchanneling system .
but for Japanese .
And it 's apparently {disfmarker} for Japa - in Japanese it 's really important that you backchannel .
So the paper 's on - line
Anyway .
So I {disfmarker} I 'm actually {disfmarker} {vocalsound} about to send Brian Kingbury an email saying where he can find the {disfmarker} the s the m the material he wanted for the s for the speech recognition experiment ,
he prefe he said he would prefer FTP
and also , um , the other person that wants it {disfmarker} There is one person at SRI who wants to look at the {vocalsound} um , you know , the uh {disfmarker} the data we have so far ,
and so I figured that FTP is the best {pause} approach .
So what I did is I um {disfmarker} {vocalsound} {vocalsound} @ @ {comment} I made a n new directory
It 's only uh , accessible .
so that someone can get that file and then know the file names and therefore download them .
Um actually {disfmarker} Oh and this directory , {vocalsound} is not readable .
So all I {disfmarker} all I was gonna do there was stick the {disfmarker} the transcripts after we {disfmarker} the way that we munged them for scoring ,
and also {disfmarker} and then the {disfmarker} the {pause} waveforms that Don segmented .
We need to give Brian the beeps file ,
so I was gonna probably put it {disfmarker}
so {disfmarker} but for the other meetings it 's the downsampled version that you have .
we should probably {disfmarker} uh {pause} give them the non - downsampled versions .
But , um {pause} they probably w want the originals .
So , we should probably talk about the IBM transcription process stuff that {disfmarker}
So , um you know that Adam created um , a b a script to generate the beep file ?
But {disfmarker} but you were gonna to use the {pause} originally transcribed file
because I tightened the time bins
and , {vocalsound} the other thing Chuck pointed out is that , um , {vocalsound} since this one is hand - marked , {vocalsound} there are discourse boundaries .
So what {disfmarker} what we 're probably gonna do is just write a script , that if two , chunks are very close to each other on the same channel we 'll just merge them .
Yeah , in fact after our meeting uh , this morning Thilo came in and said that {vocalsound} um , there could be {pause} other differences between {vocalsound} the uh {pause} already transcribed meeting with the beeps in it and one that has {pause} just r been run through his process .
So tomorrow , {vocalsound} when we go to make the um {pause} uh , chunked file {vocalsound} for IBM , we 're going to actually compare the two .
and then we 're gonna do the beep - ify on both , and listen to them and see if we notice any real differences .
When I was listening to the original file that Adam had , it 's like you {disfmarker} you hear a word then you hear a beep {vocalsound} and then you hear the continuation of what is the same sentence .
That 's because of channel overlap .
I mean w I mean what I would {disfmarker} I was interested in is having {disfmarker} {vocalsound} a se having time marks for the beginnings and ends of speech
by each speaker .
Uh , because we could use that to fine tune our alignment process
They were , um , reasonably tight , but not excruciatingly tight .
In fact it 's good .
You always want to have a little bit of pause or nonspeech around the speech , say for recognition purposes .
I wanted it to be able to {disfmarker} l he be heard normally ,
so that if you {disfmarker} if you play {pause} back that bin and have it in the mode where it stops at the boundary , {vocalsound} it sounds like a normal word .
It 's as if the person could 've stopped there .
So , that means that {vocalsound} the amount of time after something is variable depending partly on context ,
but my general goal {vocalsound} when there was {pause} sufficient space , room , pause {pause} after it {pause} to have it be {pause} kind of a natural feeling {pause} gap .
You know , Wally Chafe says that {vocalsound} um , {vocalsound} in producing narratives , the spurts that people use {vocalsound} tend to be , {vocalsound} uh , that the {disfmarker} the {disfmarker} what would be a pause might be something like two {disfmarker} two seconds .
Well we chose um , you know , half a second
because {vocalsound} if {disfmarker} if you go much larger , you have a {disfmarker} y you know , your {disfmarker} your statement about how much overlap there is becomes less , {vocalsound} um , precise ,
Yeah . {comment} {vocalsound} {vocalsound} Yeah , I also used I think something around zero point five seconds for the speech - nonspeech detector {disfmarker}
I mean Liz suggested that value based on {vocalsound} the distribution of pause times that you see in Switchboard and {disfmarker} and other corpora .
I {disfmarker} I hand - adjusted two of them
So {disfmarker} so at some point we will try to fine - tune our forced alignment
maybe using those as references
But I like this idea of {disfmarker} uh , for our purposes for the {disfmarker} for the IBM preparation , {vocalsound} uh , n having these {pause} joined together ,
Whi - which could have one drawback . If there is uh a backchannel in between those three things ,
the {disfmarker} the n the backchannel will {disfmarker} will occur at the end of {disfmarker} of those three .
but you know , thi this brings me to the other f stage of this which I discussed with you earlier today ,
so the e EDU meetings , that {vocalsound} Thilo ha has now presegmented all of them for us , on a channel by channel basis .
so , I 've assigned {disfmarker} I 've {disfmarker} I 've assigned them to our transcribers
And um , {vocalsound} in {disfmarker} in a way , by {disfmarker} by having this {disfmarker} this chunk and then the backchannel {vocalsound} after it , it 's like a stagal staggered mixed channel .
the {disfmarker} {pause} the {disfmarker} the maximal gain , it 's {disfmarker} from the IBM {pause} people , may be in long stretches of connected speech .
So , what I 'm thinking , and it may be that not all meetings will be good for this , {comment} but {disfmarker} but what I 'm thinking is that {vocalsound} in the EDU meetings , they tend to be {vocalsound} driven by a couple of dominant speakers .
And , if the chunked files focused on the dominant speakers , {vocalsound} then , when {disfmarker} when it got s patched together when it comes back from IBM , we can add the backchannels .
I think {disfmarker} {vocalsound} I {disfmarker} I think um , you know , the original plan was that the transcriber would adjust the t the boundaries , and all that for all the channels
but , {vocalsound} you know , that is so time - consuming ,
and you just use the s the segments of the dominant speaker then ? For {disfmarker} for sending to {disfmarker} to IBM
Yeah .
But you know , I wanted to say , his segmentation is so good , that {vocalsound} um , the part that I listened to with her yesterday {vocalsound} didn't need any adjustments of the bins .
But then we could just use the {disfmarker} the output of the detector , and do the beeping on it , and send it to I B
Without having her check anything .
I 'm {disfmarker} I 'm open to that ,
So the {disfmarker} the one suggestion is you know we {disfmarker} {vocalsound} we run Thilo 's thing
and then we have somebody go and adjust all the time boundaries
and we send it to IBM .
The other one is {vocalsound} we just run his thing and send it to IBM .
There 's a {disfmarker} a another possibility if we find that there are some problems ,
and that is {vocalsound} if we go ahead and we {vocalsound} just run his , and we generate the beeps file , then we have somebody listen beeps file .
And they listen to each section and say " yes , no " whether that section is
Well maybe that 's the best way to go ,
but {disfmarker} but I {disfmarker} I {disfmarker} I have {pause} another suggestion on that , which is , {vocalsound} since , really what this is , is {disfmarker} is {disfmarker} is trying to in the large , send the right thing to them and there is gonna be this {disfmarker} this post - processing step ,
why don't we check through a bunch of things by sampling it ?
if it sounds like it 's almost always right and there 's not any big problem you send it to them .
And , you know , then they 'll send us back what we {disfmarker} w what {disfmarker} what they send back to us ,
and we 'll {disfmarker} we 'll fix things up
And we should just double - check with Brian on a few simple conventions on how they should mark things .
notion of {disfmarker} of how {disfmarker} on a good meeting , how often uh , do you get segments that come in the middle of words and so forth ,
and uh {disfmarker} in a bad meeting how {vocalsound} often ?
So the {pause} speech {disfmarker} the amount of speech that is missed by the {pause} detector , for a good meeting , I th is around {pause} or under one percent , I would say .
I can't {comment} really {disfmarker} hhh , {comment} {pause} Tsk . {comment} I {pause} don't have really representative numbers , I think .
The other problem is , that when it {disfmarker} when it uh d i on the breathy ones , where you get {vocalsound} {vocalsound} breathing , uh , inti indicated as speech .
Eh , um . Yeah . I 've got a {disfmarker} a {pause} P - a {pause} method with loops into the cross - correlation with the PZM mike ,
and then to reject everything which {disfmarker} which seems to be breath .
So , I could run this on those breathy channels ,
And we can just , you know , get the meeting ,
process it ,
put the beeps file ,
send it off to IBM .
And there 's {disfmarker} there 's one point which I {comment} uh {disfmarker} {vocalsound} yeah , which {disfmarker} which I r {vocalsound} we covered when I {disfmarker} when I r listened to one of the EDU meetings ,
and that 's {vocalsound} that somebody is playing sound from his laptop .
And i {vocalsound} the speech - nonspeech detector just assigns randomly the speech to {disfmarker} to one of the channels ,
What can you do ?
a hand - transcriber would have trouble with that .
So we don't do anything for it {disfmarker} with it .
And they 'll just mark it however they mark it ,
and we 'll correct it when it comes back .
I hope they accept it .
Well , we didn't get to look at that ,
and what that 'll do is just cut the time a little further .
