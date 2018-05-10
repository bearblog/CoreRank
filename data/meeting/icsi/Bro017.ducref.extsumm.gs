And {disfmarker} and uh so , I {disfmarker} I think that Carmen and Stephane reported on uh Amsterdam meeting ,
which was kind of interesting
because it was for the first time we realized we are not friends really , but we are competitors .
It seemed like there were still some issues ,
that they were trying to decide ?
There is a plenty of {disfmarker} there 're plenty of issues .
Like the voice activity detector ,
Well and what happened was that they realized that if two leading proposals , which was French Telecom Alcatel , and us both had uh voice activity detector .
And I said " well big surprise , I mean we could have told you that {pause} n n n four months ago , except we didn't because nobody else was bringing it up " .
Obviously French Telecom didn't volunteer this information either ,
cuz we were working on {disfmarker} mainly on voice activity detector for past uh several months
And everybody said " Well but this is not fair . We didn't know that . "
And of course uh the {disfmarker} it 's not working on features really .
And so then ev ev everybody else says " well we should {disfmarker} we need to do a new eval evaluation without voice activity detector ,
or we have to do something about it " .
And in principle I {disfmarker} uh I {disfmarker} we agreed .
but in that case , uh we would like to change the uh {disfmarker} the algorithm
because uh if we are working on different data , we probably will use a different set of tricks .
But unfortunately nobody ever officially can somehow acknowledge that this can be done ,
because French Telecom was saying " no , no , no , now everybody has access to our code ,
so everybody is going to copy what we did . "
well our argument was everybody ha has access to our code , and everybody always had access to our code .
We never uh {disfmarker} uh denied that .
We thought that people are honest , that if you copy something and if it is protected {disfmarker} protected by patent then you negotiate , or something ,
But {disfmarker} And French Telecom was saying " no , no , no ,
there is a lot of little tricks which uh sort of uh cannot be protected and you guys will take them , " which probably is also true .
So the uh {disfmarker} the people can go to code and say " well listen this is what you stole from me "
And I think they have to be honest in the long run , because winning proposal again {disfmarker} uh what will be available th is {disfmarker} will be a code .
The biggest problem of course is that f that Alcatel French Telecom cl claims " well we fulfilled the conditions .
We are the best .
And e and other people don't feel that ,
because they {disfmarker} so they now decided that {disfmarker} that {disfmarker} is {disfmarker} the whole thing will be done on well - endpointed data ,
still not clear if we are going to run the {disfmarker} if we are allowed to run uh uh new algorithms ,
Because uh we would fight for that , really .
at least our experience is that only endpointing a {disfmarker} a mel cepstrum gets uh {disfmarker} gets you twenty - one percent improvement overall and twenty - seven improvement on SpeechDat - Car
then obvious the database {disfmarker} uh I mean the {disfmarker} the {disfmarker} the {disfmarker} uh the baseline will go up .
And nobody can then achieve fifty percent improvement .
So they agreed that uh there will be a twenty - five percent improvement required on {disfmarker} on uh h u m bad mis badly mismatched {disfmarker}
And so , so now they want to say " we {disfmarker} we will require fifty percent improvement only for well matched condition , and only twenty - five percent for the serial cases . "
And uh {disfmarker} and they almost agreed on that except that it wasn't a hundred percent agreed .
And so last time uh during the meeting , I just uh brought up the issue ,
For two years we are fighting for fifty percent improvement
and suddenly you are saying " oh no we {disfmarker} we will do something less " ,
And everybody said " oh we discussed that and you were not a mee there "
and I said " well a lot of other people were not there because not everybody participates at these teleconferencing c things . "
Then they said " oh no no no because uh everybody is invited . "
However , there is only ten or fifteen lines , so people can't even con you know participate .
So eh they agreed , and so they said " OK , we will discuss that . "
So now officially , Nokia is uh uh complaining and said they {disfmarker} they are looking for support ,
uh I think QualComm is uh saying , too " we shouldn't abandon the fifty percent yet .
We should at least try once again , one more round . "
So what we are doing at OGI now is uh uh uh working basically on our parts which we I think a little bit neglected ,
like noise separation .
Uh so we are looking in ways is {disfmarker} in uh which {disfmarker} uh with which we can provide better initial estimate of the mel spectrum basically ,
which would be a l uh , f more robust to noise ,
and so far not much uh success .
And then most of the effort is uh now also aimed at this e e TRAP recognition .
This uh {disfmarker} this is this recognition from temporal patterns .
but , what it is , is that normally what you do is that you recognize uh speech based on a shortened spectrum .
Essentially L P - LPC , mel cepstrum , uh , everything starts with a spectral slice .
Uh so if you s So , given the spectrogram you essentially are sliding {disfmarker} sliding the spectrogram along the uh f frequency axis
and you keep shifting this thing , and you have a spectrogram .
So you can say " well you can also take the time trajectory of the energy at a given frequency " ,
and what you get is then , that you get a p {pause} vector .
Namely you can say i it {disfmarker} I will {disfmarker} I will say that this vector will eh {disfmarker} will {disfmarker} will describe the phoneme which is in the center of the vector .
so it 's a very different vector , very different properties ,
How 's your documentation or whatever
it w what was it you guys were working on last week ?
finally we {disfmarker} we 've not finished with this .
More or less it 's finished .
Ma - nec to need a little more time to improve the English , and maybe s to fill in something {disfmarker} some small detail , something like that ,
Well , we have a document that explain a big part of the experiments ,
So have you been running some new experiments ?
and we noticed that C - one is almost not useful at all .
We 've fff {comment} done some strange things like removing C - zero or C - one from the {disfmarker} {vocalsound} {vocalsound} the vector of parameters ,
You can remove it from the vector , it doesn't hurt .
So we were just discussing , since you mentioned that , in {disfmarker} it w
driving in the car with Morgan this morning , we were discussing a good experiment for b for beginning graduate student who wants to run a lot of {disfmarker} who wants to get a lot of numbers on something
which is , like , " imagine that you will {disfmarker} you will start putting every co any coefficient , which you are using in your vector , in some general power .
Like sort of you take a s power of two , or take a square root , or something .
Because uh your uh Gaussian mixture model ,
So you 're compressing the range of this coefficient , so it 's becoming less efficient .
Morgan was @ @ and he was {disfmarker} he was saying well this might be the alternative way how to play with a {disfmarker} with a fudge factor ,
you know ,
And I said " well in that case why don't we just start compressing individual elements , like when {disfmarker} when {disfmarker}
because we observed that uh higher parameters were more important than lower for recognition .
And basically the {disfmarker} the C - ze C - one contributes mainly slope ,
When we talked about Aurora still I wanted to m make a plea {disfmarker} uh encourage for uh more communication between {disfmarker} between uh {pause} uh different uh parts of the distributed uh {pause} uh center .
Uh even when there is absolutely nothing to {disfmarker} to s to say but the weather is good in Ore - in {disfmarker} in Berkeley .
I 'm sure that it 's being appreciated in Oregon and maybe it will generate similar responses down here ,
if we mail to " Aurora - inhouse " , does that go up to you guys also ?
No .
Do we have a mailing list that includes uh the OGI people ?
Uh no .
We don't have .
Maybe we should set that up .
That would make it much easier .
And then we also can send the {disfmarker} the dis to the same address
and it goes to everybody
