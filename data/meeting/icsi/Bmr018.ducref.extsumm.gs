I {disfmarker} I have the program to insert the beeps .
What I don't have is something to parse the output of the channelized transcripts to find out where to put the beeps ,
but that should be really easy to do .
He generated , um , a channel - wise presegmented version of a meeting ,
Right , so we need to run Thilo 's thing on it ,
and then we go in and adjust the boundaries .
how quickly can the transcribers scan over and fix the boundaries ,
Wow , excuse me , two or more times real time ,
So the first thing is the automatic thing ,
and then it 's {disfmarker} then it 's {disfmarker} then it 's the transcribers tightening stuff up ,
and then it 's IBM .
We 're just doing the individual channels ,
right ?
Yeah .
so , I mean , the question is " should {disfmarker} should a transcriber listen to the entire thing or can it g can it be based on the mixed signal ? "
I guess there is this issue of , you know , if {disfmarker} if the segmenter thought there was no speech on {disfmarker} on a particular stretch , on a particular channel ,
and there really was , then , if it didn't show up in a mixed signal to verify , then it might be overlooked ,
So you 're talking about tightening up time boundaries ?
So , they have the normal channeltrans interface where they have each individual speaker has their own line ,
but you 're listening to the mixed signal and you 're tightening the boundaries ,
correcting the boundaries .
You shouldn't have to tighten them too much because Thilo 's program does that .
Except for {vocalsound} it doesn't do well on short things , remember .
Uh - huh .
Like that .
Well , so {disfmarker} so that 's something that the transcribers will have to {disfmarker} have to do .
Yeah , but presumably , most of those they should be able to hear from the mixed signal unless they 're embedded in the heavil heavy overlap section
but I guess if I didn't know anything about Transcriber and I was gonna make something to let them adjust boundaries , I would just show them one channel at a time , with the marks , and let them adju
but then they {disfmarker} for this meeting they would have to do seven times real time , and it would probably be more than that .
They could choose any signal to look at .
I 've tried lookin but usually they look at the mixed .
But I 've {disfmarker} I 've tried looking at the single signal and {disfmarker} and in order to judge when it {disfmarker} when it was speech and when it wasn't ,
But the procedure that you 're imagining , I mean , people vary from this , is that they have the mixed signal wave form in front of them ,
uh , well , let 's see , there isn't {disfmarker} we don't have transcription yet .
So {disfmarker} but there 's markers of some sort that have been happening automatically ,
and those show up on the mixed signal ?
they show up on the separate ribbons .
then you don't have the correspondence of the times across the bins {disfmarker} uh across the ribbons
and {disfmarker} and i i it 'll be {disfmarker} because it 's being segmented as channel at a time with his {disfmarker} with Thilo 's new procedure ,
OK , so The way you 're imaging is they kind of play it ,
and if it {disfmarker} if it {disfmarker} there 's a question on something , they stop and maybe look at the individual wave form .
The problem is that {disfmarker} that {disfmarker} the Tcl - TK interface with the visuals , it 's very slow to load waveforms .
You can {disfmarker} you can switch quickly between the audio ,
but you just can't get the visual display to show quickly .
I think that if we decide that we need {disfmarker} that they need to see the visuals , we need to change the interface so that they can do that .
Well , I {disfmarker} I do think that this {disfmarker} this will be a doable procedure ,
and have them starting with mixed
and , um , then when they get into overlaps , just have them systematically check all the channels to be sure that there isn't something hidden from {disfmarker} from audio view .
The mixed signal , the overlaps are pretty audible because it is volume equalized .
So I think they should be able to hear .
The only problem is {disfmarker} is , you know , counting how many and if they 're really correct or not .
I don't know that you can locate them very well from the mixed signal ,
does anybody , uh , working on any {disfmarker} any Eurospeech submission related to this ?
I would like to try to do something on digits
but I just don't know if we have time .
we had that one conversation about , uh , what {disfmarker} what {disfmarker} what did it mean for , uh , one of those speakers to be pathological ,
Whereas I think it it 's probably something pathologic
and actually Stephane 's results , I think confirm that .
He s he did the Aurora system
also got very lousy average error , like fifteen or {disfmarker} or , uh , fifteen to twenty percent average ?
But then he ran it just on the lapel , and got about five or six percent word error ?
So that {disfmarker} that means to me that somewhere in the other recordings there are some pathological cases .
It may be just some of the segments they 're just doing a lousy job on .
So I 'll {disfmarker} I 'll listen to it and find out since you 'd actually split it up by segment .
Did you run the {disfmarker} Andreas {disfmarker} the r SRI recognizer on the digits ?
Since I considered those preliminary , I didn't .
Yeah , it 's actually , um , it {disfmarker} uh {disfmarker} it was trimodal , actually {disfmarker}
there were {disfmarker} {vocalsound} t there was {disfmarker} there was one h one bump at ze around zero , which were the native speakers ,
Zero percent error ?
Y yeah .
Then there was another bump at , um , {vocalsound} {vocalsound} oh , like fifteen or something .
Those were the non - natives .
And then there was another distinct bump at , like , a hundred , {vocalsound} which must have been some problem .
What is patho what do you mean by pathological ?
Just {disfmarker} just something really wrong with {disfmarker}
In the recording
A bug is what I mean ,
And there was this one meeting , I forget which one it was , where like , uh , six out of the eight channels were all , like {disfmarker} had a hundred percent error .
Which probably means like there was a {disfmarker} th the recording interface crashed ,
or , uh , I extracted it incorrectly ,
or there was a short {disfmarker} you know , someone was jiggling with a cord
it was transcribed incorrectly ,
So , if I excluded the pathological ones , {vocalsound} by definition , those that had like over ninety - five percent error rate , {vocalsound} and the non - natives , then the average error rate was like one point four or something ,
which {disfmarker} which seemed reasonable given that , you know , the models weren't tuned for {disfmarker} {vocalsound} for it .
And the grammar wasn't tuned either .
But there 's no overlap during the digit readings , so it shouldn't really matter .
But if you p if you actually histogrammed it , and {disfmarker} it was a nice {disfmarker} uh , you know , it {disfmarker} it was {disfmarker} zero was the most of them ,
Oh , well , yeah , so I 've been struggling with the forced alignments .
um , {vocalsound} {vocalsound} most of the time it doesn't work very well .
So , {vocalsound} um , {vocalsound} I 'm still tinkering with it ,
but it might well be that we can't get clean alignments out of this {disfmarker} out of those , uh , {vocalsound} channels ,
Unless maybe we do this , uh , um , cancellation business .
but it 's clear from Dan that this is not something you can do in a short amount of time .
so he thought well if we can do something quick and dirty because Dan said the cross - cancellation , it 's not straight - forward .
so , it 's sort of good to hear that it was not straight - forward , thinking if we can get decent forced alignments , then at least we can do sort of a overall report of what happens with actual overlap in time ,
I thought he 's just saying you have to look over a longer time window when you do it .
So you just have to look over longer time when you 're trying to align the things ,
The issue was that you have {disfmarker} to {disfmarker} you have have {disfmarker} you first have to have a pretty good speech detection on the individual channels .
and it should work pretty well if you took care of this recording time difference .
um , but then if you add the dynamic aspect of adapting distances , then it wasn't {disfmarker}
So {disfmarker} um , so I don't know what we can do if anything , that 's sort of worth , you know , a Eurospeech paper at this point .
Well , Andreas , how well did it work on the non - lapel stuff ?
I haven't checked those yet .
It 's very tedious to check these .
Um , we would really need , ideally , a transcriber {vocalsound} to time mark the {disfmarker} you know , the be at least the beginning and s ends {comment} of contiguous speech .
Um , {vocalsound} {vocalsound} and , you know , then with the time marks , you can do an automatic comparison of your {disfmarker} of your forced alignments .
Because {disfmarker} really the {disfmarker} the {disfmarker} at least in terms of how we were gonna use this in our system was to get an ideal {disfmarker} an idea , uh , for each channel about the start and end boundaries .
We don't really care about like intermediate word boundaries ,
but {vocalsound} you don't wanna , uh , infer from the alignment that someone spoke who didn't .
so I would need a k I would need a channel that has {vocalsound} a speaker whose {disfmarker} who has a lot of overlap but s you know , is a non - lapel mike .
And , um , {vocalsound} {vocalsound} where preferably , also there 's someone sitting next to them who talks a lot .
and , um , if you align the two hypothesis files across the channels , you know , just word alignment , you 'd be able to find that .
Actually y we can tell from the data that we have ,
if Thilo can tell us that there 're boundaries here , we should be able to figure that out
because the only thing transcribed in this channel is this word .
But , um , you know , if there are things {disfmarker}
Two words .
Yeah , if you have two and they 're at the edges , it 's like here and here ,
and there 's speech here , then it doesn't really help you ,
And then it 's coupled with the problem that sometimes , you know , with {disfmarker} with a fricative you might get the beginning of the word cut off
cuz sometimes people will say , " And then I " and there 's a long pause
and finish the sentence
and {disfmarker} and sometimes it looks coherent and {disfmarker} and the {disfmarker}
but it 's possible that a script could be written to merge those two types of things .
I was just thinking about the fact that if Thilo 's missed these short segments , that might be quite time - consuming for them to insert them .
so it 's just a matter of {disfmarker} of , you know , from now on we 'll be able to have things channelized to begin with .
And we 'll just have to see how hard that is .
Well the problem is I {disfmarker} you know {disfmarker} I {disfmarker} I {disfmarker} it 's a {disfmarker} it 's a really good question ,
and I really find it a pain in the neck to delete things
does it make sense to try to take what we have now , which are the ones that , you know , we have recognition on which are synchronous and not time - tightened , and try to get something out of those for sort of purposes of illustrating the structure and the nature of the meetings , or is it better to just , you know , forget that and tr
Well , I think we 'll have to , eventually .
And my hope was that we would be able to use the forced alignment to get it .
because for feature extraction like for prosody or something , I mean , the meetings we have now ,
it 's a good chunk of data {disfmarker}
So we need some way to push these first chunk of meetings into a state where we get good alignments .
and it 's possible that you get considerably better results if you , uh , manage to adapt the , {vocalsound} uh , phone models to the speaker and the reject model to the {disfmarker} to {disfmarker} to all the other speech .
But what you do wanna do is take the , even if it 's klugey , take the segments {disfmarker} the synchronous segments , the ones from the HLT paper , where only that speaker was talking .
Use those for adaptation ,
cuz if you {disfmarker} if you use everything , then you get all the cross - talk in the adaptation , and it 's just sort of blurred .
Like a third of it is bad for adaptation or so .
the HLT paper is really more of a introduction - to - the - project paper , and , um {disfmarker}
Yeah , for Eurospeech we want some results
I had , uh , one of the transcribers go through and tighten up the bins on one of the , uh , NSA meetings ,
and then I went through afterwards and double - checked it
so that one is really very {disfmarker} very accurate .
So that might actually be useful but they 're all non - native speakers .
I mean , this is tough for a language model probably {disfmarker}
Well wh what it 's supposed to do is the backstrap is supposed to be under your crown ,
so it doesn't slide up .
if you feel the back of your head , you feel a little lump ,
um , and so it 's supposed to be right under that .
Cuz , I 'm just thinking , you know , we were {disfmarker} we 're {disfmarker} we 've been talking about changing the mikes , uh , for a while ,
acoustically they seem really good ,
but if they 're not comfortable , we have the same problems we have with these stupid things .
