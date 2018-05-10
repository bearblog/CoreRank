Uh , right , so {disfmarker} so I {disfmarker} I was just gonna talk briefly about the NSF ITR .
I have a short thing about digits
and then uh I wanna talk a little bit about naming conventions ,
So the only thing I wanna say about digits is , we are pretty much done with the first test set .
The first is what should we do about digits that were misread ?
What the transcribers did with that is if they did a correction , and they eventually did read the right string , {comment} you extract the right string .
Oh , you 're talking about where they completely read the wrong string and didn't correct it ?
Seems like we should just change the transcripts
So you {disfmarker} um , how many digits have been transcribed now ?
Four thousand lines .
And each line is between one and about ten digits .
So that 's a couple hours of {disfmarker} of , uh , speech , probably .
And then the other thing is that , uh , the forms in front of us here that we 're gonna read later , were suggested by Liz
because she wanted to elicit some different prosodics from digits .
And the decision here , uh , was to continue with uh the words rather than the {disfmarker} the numerics .
The problem was O and zero .
Or neither .
But it 's just two thing {disfmarker} ways that you can say it .
She 's trying to get at natural groupings ,
but it {disfmarker} there 's {disfmarker} there 's nothing natural about reading numbers this way .
But , um , the other problem we were thinking about is if you just put the numerals , {comment} they might say forty - three instead of four three .
OK . Well , we 're probably gonna be collecting meetings for a while
OK , so uh e l I guess , let me , uh , get my {disfmarker} my short thing out about the NSF .
before on {disfmarker} on more {disfmarker} more higher level , uh , issues in meetings ,
so this was , uh , a , uh , proposal that we put in
so is i for {disfmarker} it was a {vocalsound} proposal for the ITR program ,
It 's the {pause} second year of their doing , uh , these grants .
So , they 're very competitive ,
and they have a first phase where you put in pre - proposals ,
and we {disfmarker} we , uh , got through that .
And so th the {disfmarker} the next phase will be {disfmarker} we 'll actually be doing a larger proposal .
They have three size grants .
And {disfmarker} and we 're in the middle {disfmarker}
middle category .
It 's extending the research ,
Yeah it 's go higher level stuff than we 've been talking about for Meeting Recorder .
this is dealing with , uh , mapping on the level of {disfmarker} of , um , the conversation {disfmarker}
of mapping the conversations
to different kind of planes .
Yeah , there {disfmarker} there would be {disfmarker} there would be new hires ,
and {disfmarker} and there {disfmarker} there would be expansion ,
and , {vocalsound} it 'll mean some more work , uh , you know , in {disfmarker} in March in getting the proposal out ,
Uh , the last one was {disfmarker} that you had there , {comment} was about naming ?
So , uh , one thing she would like to have is for all the names to be the same length
same number of characters
And I don't think we have so many meetings that that 's a big deal just to change the names .
So for {disfmarker} for m the meetings we were thinking about three letters and three numbers
Uh , for speakers , M or F and then three numbers ,
that also brings up the point that we have to start assembling a speaker database so that we get those links back and forth
and keep it consistent .
and then , uh , the microphone issues .
We want some way of specifying , more than looking in the " key " file , what channel and what mike . What channel , what mike , and what broadcaster .
And so we just need some naming conventions on that .
So I was just gonna do a fixed list of , uh , microphones and types .
Um , {pause} {vocalsound} since we have such a short agenda list I guess I wi I will ask how {disfmarker} how are the transcriptions going ?
I {disfmarker} I switched to doing the channel - by - channel transcriptions to provide , uh , the {disfmarker} uh , tighter time bins for {disfmarker} partly for use in Thilo 's work
and also it 's of relevance to other people in the project .
one of them is that , um , it seems that there are time lags involved in doing this ,
using an interface that has so much more complexity to it .
Maybe {disfmarker} I was thinking maybe the best way to do this in the long run may be to give them single channel parts
and then piece them together later .
And it may be that it 's faster to transcribe a channel at a time with only one , uh , sound file and one , uh , set of {disfmarker} of , uh , utterances to check through .
But , um , with the mixed , when you have an overlap , you only have a {disfmarker} a choice of one start and end time for that entire overlap ,
And for purposes of {disfmarker} of , uh , things like {disfmarker}
well , so things like training the speech - nonspeech segmentation thing .
Th - it 's necessary to have it more tightly tuned than that .
having the interface that doesn't require them to do the ti uh , the time bins for every single channel at a t uh , through the entire interaction .
I really do think that it 's wise that we 've had them start the way we have
with , uh , m y working off the mixed signal ,
once in a while a backchannel will be overlooked by the transcriber .
And if we 're gonna study types of overlaps ,
then that really does require listening {comment} to every single channel all the way through the entire {comment} length for all the different speakers .
And I think again it 's like this {disfmarker} it 's really valuable that Thilo 's working on the speech - nonspeech segmentation
because maybe , um , we can close in on that wi without having to actually go to the time that it would take to listen to every single channel from start to finish through every single meeting .
Yeah , but those backchannels will always be a problem I think .
Uh especially if they 're really short
and they 're not very loud
and so it {disfmarker} it can {disfmarker} it {disfmarker} it will always happen that also the automatic s detection system will miss some of them ,
Well so then {disfmarker} then , maybe the answer is to , uh , listen especially densely in places of overlap ,
I {disfmarker} I 'm continue working with the mixed signal now , {comment} after the {disfmarker} the last experience .
And {disfmarker} and I 'm tried to {disfmarker} to , uh , adjust the {disfmarker} to {disfmarker} to improve , eh , an harmonicity , eh , detector that , eh , I {disfmarker} I implement .
eh , and now I 'm {disfmarker} I 'm {disfmarker} I 'm trying to {disfmarker} to find , eh , some kind of a , um {disfmarker} {vocalsound} of h of help , eh , using the energy to {disfmarker} to distinguish between possible harmonics , and {disfmarker} and other fre frequency peaks , that , eh , corres not harmonics .
eh , I have to {disfmarker} to talk with y with you , with the group , eh , about the instantaneous frequency ,
No . I {disfmarker} I {disfmarker} I {disfmarker} I don't proth process the {disfmarker} the fundamental .
I {disfmarker} {vocalsound} I , ehm {disfmarker} I calculate the {disfmarker} the phase derivate using the FFT .
I mean you could make some guesses from , uh {disfmarker} from the auto - correlation or something
but {disfmarker} but then , given those guesses , try ,
only looking at the energy at multiples of the {disfmarker} of that frequency ,
take the one that 's maximum .
You 're trying distinguish between the case where there is , uh {disfmarker} where {disfmarker} where there are more than {disfmarker} uh , where there 's more than one speaker
and the case where there 's only one speaker .
other than that I guess as far as the one person versus two persons , it would be {pause} primarily a low frequency phenomenon .
And if you looked at the low frequencies , yes the higher frequencies are gonna {disfmarker} there 's gonna be a spectral slope .
The higher frequencies will be lower energy .
I will prepare for the next week eh , all my results about the harmonicity
I guess {disfmarker} so {disfmarker} so y I think maybe you do need a voiced - unvoiced determination too .
But if it 's voiced ,
e the fraction of the energy that 's in the harmonic sequence that you 're looking at is relatively low , then it should be {disfmarker} then it 's more likely to be an overlap .
I I did i it did occur to me that this is {disfmarker} uh , the return to the transcription ,
that there 's one third thing I wanted to {disfmarker} to ex raise as a to as an issue
which is , um , how to handle breaths .
um , aside from the fact that they 're obviously very time - consuming to encode ,
but the question of whether it 'd be possible to eliminate them from the audio signal ,
I don't know {disfmarker} think it 'd be ideal .
We - See , we 're {disfmarker} we 're dealing with real speech
and we 're trying to have it be as real as possible
and breaths are part of real speech .
If {disfmarker} if it gets in the way of what somebody is doing with it then you might wanna have some method which will allow you to block it ,
but you {disfmarker} it 's real data .
because i it basically has a i it shows very clearly the contrast between , uh , speech recognition research and discourse research
OK , so now , I had a discussion with Chuck about the data structure
there 'll be a master transcript
which has in it everything that 's needed for both of these uses .
And the one that 's used for speech recognition will be processed via scripts .
So what I would {disfmarker} r r what I would wonder is would it be possible to encode those automatically ?
Could we get a breath detector ?
Yeah I mean I 'm think if it 's too {disfmarker} if it 's too hard for us to annotate the breaths per se , {vocalsound} we are gonna be building up models for these things
and these things are somewhat self - aligning ,
so if {disfmarker} so , {vocalsound} we {disfmarker} i i if we say there is some kind of a thing which we call a " breath " or a " breath - in " or " breath - out " , {vocalsound} the models will learn that sort of thing .
Uh , so {disfmarker} but you {disfmarker} but you do want them to point them at some region where {disfmarker} where the breaths really are .
what if you put it in but didn't put the boundaries ?
So I would say don't tell them to transcribe anything that 's outside of a grouping of words .
Yeah , and that 's {disfmarker} that {disfmarker} that quite co corresponds to the way I {disfmarker} I try to train the speech - nonspeech detector ,
In fact , the {disfmarker} I think I would say the core thing that we 're trying to do is to recognize the actual , meaningful components in the midst of other things that are not meaningful .
it 's critical for us to get these other components that are not meaningful .
Because that 's what we 're trying to pull the other out of .
which is that as we 've improved our microphone technique , we have a lot less breath in the {disfmarker} in the more recent , uh , recordings ,
so it 's {disfmarker} in a way it 's an artifact that there 's so much on the {disfmarker} on the earlier ones .
