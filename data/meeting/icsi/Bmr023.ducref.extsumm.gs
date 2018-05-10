I was gonna ask Adam to , uh , say if he thought anymore about the demo stuff
because {vocalsound} it occurred to me that this is late May and the DARPA meeting is in {pause} mid July .
I know that we were gonna do something with the transcriber interface is one thing ,
Well , we were gonna do a mock - up , like , question answering or something , I thought ,
um , it looks like the vocal tract length normalization is working beautifully , actually ,
Now the {disfmarker} the {disfmarker} You saw the note that the PLP now is getting basically the same as the MFCC .
Is there stuff that 's happened about , um , uh , the {pause} SRI recognizer et cetera ,
Y y you guys were doing a bunch of experiments with different front - ends and then with {disfmarker}
Because in all our previous experiments , we had the {disfmarker} uh , you know , we were essentially cheating by having the , um , you know , the h the hand - segmentations as the basis of the recognition .
And so now with Thilo 's segmenter working so well , I think we should {pause} consider doing a {disfmarker}
And even {disfmarker} The good thing is that since you , um , have high recall , {comment} even if you have low precision cuz you 're over - generating , that 's good
but {vocalsound} I know that if we run recognition unconstrained on a whole waveform , we do very poorly because we 're {disfmarker} we 're getting insertions in places what {disfmarker} that you may well be cutting out .
So we do need some kind of pre - segmentation .
And , yeah , using Thilo 's , you know , posteriors or some kind of {disfmarker} or {disfmarker}
We should {disfmarker} we should consider doing some extra things , like , um , you know , retraining or adapting the {disfmarker} {vocalsound} the models for background noise to the {disfmarker} to this environment , for instance .
And so he talked it over with the transcriber
and the transcriber thought that the easiest thing for them would be if there was a beep and then the nu a number , a digit , and then a beep , uh , at the beginning of each one
And , um , {vocalsound} so Adam wrote a little script to generate those style , uh , beeps
So , um , we {disfmarker} We 're gonna send them one more sample meeting ,
uh , and Thilo has run his segmentation .
Adam 's gonna generate the chunked file .
And then , um , I 'll give it to Brian and they can try that out .
And when we get that back we 'll see if that sort of fixes the problem we had with , uh , too many beeps in the last transcription .
OK . Do w do {disfmarker} what {disfmarker} Do you have any idea of the turn - around on {disfmarker} on those steps you just said ?
The last one seemed like it took a couple of weeks .
Um , maybe even three .
Uh , that 's just the I B M side .
It should @ @ be finished today or something . Yeah .
e e u u {comment} The reason I 'm asking is because , uh , Jane and I have just been talking , and she 's just been doing . {vocalsound} Uh , e a , you know , further hiring of transcribers .
And so we don't sort of really know exactly what they 'll be doing , how long they 'll be doing it , and so forth ,
because right now she has no choice but to operate in the mode that we already have working .
I mean in particular I would {disfmarker} I would really hope that when we do this DARPA meeting in July that we sort of have {disfmarker} we 're {disfmarker} we 're into production mode , somehow {disfmarker}
You know , that we {disfmarker} we actually {vocalsound} have a stream going and we know how {disfmarker} how well it does and how {disfmarker} and how it operates .
OK . So , um , we {disfmarker} {vocalsound} Uh , the transcribers have continued to work past what I 'm calling " set one " ,
but , uh , they 've gotten five meetings done in that set .
I hired two transcribers today . I 'm thinking of hiring another one ,
which will {disfmarker} because we 've had a lot of attrition .
but if we hire f you know , f we have five on staff {disfmarker} five or six on staff at any given time , then {vocalsound} it 's a small enough number so we can be flexible either way .
The {disfmarker} the {disfmarker} the pre - segmentations are so much {disfmarker} are s so extremely helpful .
But {disfmarker} but actually i it 's so correct for so much of the time , that it 's an enormous time saver
and it just gets tweaked a little around the boundaries .
Wha - what you 'd really like is that they started with pre - segmented and were pre - segmented all the way through .
Yeah . As long as we have a record , I guess , of the original {pause} automatic one , we can always find out how well {pause} we would do fr from the recognition side by using those boundaries .
Yeah . So , um , uh , Jane and Adam and I had a meeting where we talked about the reorganization of the {pause} directory structure for all of the meeting {disfmarker}
For all the Meeting Recorder data .
And then , Jane also s prepared a {disfmarker} um , started getting all of the {disfmarker} the meetings organized , so she prepared a {disfmarker} {vocalsound} a spreadsheet , which I spent the last couple of days adding to .
been putting it into , uh , a spreadsheet {vocalsound} with start time , the date , the old meeting name , the new meeting name , the number of speakers , the duration of the meeting , comments , you know , what its transcription status is , all that kind of stuff .
And so , the idea is that we can take this and then export it as HTML and put it on the Meeting Recorder web page
so we can keep people updated about what 's going on .
but {vocalsound} so far , um , {vocalsound} as of Monday , the fourteenth , um , we 've had a total number of meeting sixty - two hours of meetings that we have collected .
Uh , some other interesting things , average number of speakers per meeting is six .
and I 'm gonna have on here the total amount that 's been transcribed so far ,
And {vocalsound} it 'll also list , uh , like under the status , if it 's at IBM or if it 's at ICSI , uh , or if it 's completed or which ones we 're excluding
Um , we are gonna have this DARPA {pause} meeting in the middle of July ,
Well , le let me put in another sort of a milestone kind of {disfmarker} as {disfmarker} as I did with the , uh , uh {disfmarker} the {disfmarker} the pipeline .
given that we 've been {disfmarker} we 've given a couple public talks about it already , spaced by months and months , I think it 'd be pretty bad if we continued to say none of this is available .
Right . So we can s we {disfmarker} we wanna be able to say " here is a subset that is available right now "
and that 's has been through the legal issues and so forth .
And they don't have to approve , you know , th an edited version , they can just give their approval to whatever version
Yeah . But th I mean , the editing will continue . Presumably if {disfmarker} if s errors are found , they will be fixed ,
Well , in principle , yes . But , I mean , i if {disfmarker} if {disfmarker} if somebody actually did get into some legal issue with it then we
I it {disfmarker} you know , there there is a point at which I agree it becomes ridiculous
so let {disfmarker} let me just suggest that {disfmarker} {vocalsound} uh , off - line that , uh , the people involved figure it out and take care of it before it 's July .
Unfortunately , uh , in {disfmarker} in the sign thing that they signed , it says " transcripts " .
" You 'll be {disfmarker} you 'll be provided the transcripts when they 're available . "
because we couldn't use the non - native {disfmarker} all non - native meetings
and {vocalsound} it 's , well , probably below threshold on enough data for us for the things we 're looking at
because the {vocalsound} prosodic features are {pause} very noisy and so you {disfmarker} you need a lot of data in order to model them .
Um , so we 're starting to see some patterns
But we did find that some of the features that , I gue Jane would know about , that are expressing sort of the {vocalsound} distance of , um , {vocalsound} boundaries from peaks in the utterance and {vocalsound} some {pause} local , um , range {disfmarker} pitch range effects , like how close people are to their floor , are showing up in these classifiers ,
which are also being given some word features that are cheating , cuz they 're true words .
Um , so these are based on forced alignment .
spurts is not cheating except that of course you know the real words ,
I guess you reported on some te punctuation type {disfmarker}
finding sentence boundaries , finding disfluency boundaries ,
Like , there 's a lot of different features you could just pull out .
I mean that wouldn't be cheating because you can detect pause {pause} pretty well within the time .
and then I had done some work on finding from the foreground speech whether or not someone was likely to interrupt ,
so where {disfmarker} you know , if I 'm talking now and someone {disfmarker} and {disfmarker} and Andreas is about to interrupt me , is he gonna choose a certain place in my speech , either prosodically or word - based .
And there the prosodic features actually showed up
So that means that overall , um , it wasn't just modeling Morgan , or it wasn't just modeling a single person ,
So , I gave everybody {vocalsound} a short version of their name .
even though the word features were available .
And a neat thing there too is I tried some {disfmarker} {vocalsound} putting the speaker {disfmarker}
The other thing that was interesting to me is that the pitch features are better than in Switchboard .
And I think that really is from the close - talking mikes ,
cuz the pitch processing that was done has much cleaner behavior than {disfmarker} than the Switchboard telephone bandwidth .
Um . Well , first of all , the pitch tracks are m have less , um , halvings and doublings than {disfmarker} than Switchboard
and there 's a lot less dropout ,
so if you ask how many regions where you would normally expect some vowels to be occurring {vocalsound} are completely devoid of pitch information ,
in other words the pitch tracker just didn't get a high enough probability of voicing for words {disfmarker}
Could it have to do with the {disfmarker} the lower frequency cut - off on the Switchboard ?
Ma - maybe . I mean , the tele we had telephone bandwidth for Switchboard
and we had the an annoying sort of telephone handset movement problem that I think may also affect it .
So we 're just getting better signals in {disfmarker} in this data .
you know , Chuck and I talked and the {pause} @ @ {comment} next thing to do is probably to tune the {disfmarker} um , the size of the Gaussian system , um , @ @ {comment} to {disfmarker} to this {disfmarker} to this feature vector , which we haven't done at all .
We just used the same {vocalsound} configuration as we used for the {disfmarker} {vocalsound} for the standard system .
And , {vocalsound} for instance , uh , Dan {disfmarker} @ @ {comment} Dan just sent me a message saying that CMU used , um , {vocalsound} something like ten Gaussians per cluster {disfmarker}
You know , each {disfmarker} each mixture has ten {pause} Gaussians
Hmm . We 're using sixty - four ,
so that 's {vocalsound} obviously a big difference
and give very poorly trained , uh , you know , Gaussians that way ,
The turn - around time on the training when we train only the {disfmarker} a male system with , uh , you know , our small training set , is {vocalsound} less than twenty - four hours ,
But the PLP features work {disfmarker} um , uh , you know , continue to improve the ,
As I said before , the {disfmarker} uh using Dan 's , uh , uh , vocal tract normalization option works very well .
So , um , @ @ {comment} I ran one experiment where we 're just {vocalsound} did the vocal tract le normalization only in the test data ,
so I didn't bother to retrain {pause} the models at all ,
which is about what we get with {disfmarker} {vocalsound} uh , with , you know , just @ @ {comment} actually doing both training and test normalization , um , with , um , {vocalsound} the , uh {disfmarker} {vocalsound} uh , with the standard system .
So , in a few hours we 'll have the numbers for the {disfmarker} for retraining everything with vocal tract length normalization
So , it looks like the P L - fea P features {comment} do very well now with {disfmarker} after having figured out all these little tricks to {disfmarker} to get it to work .
Right . And {disfmarker} and what that suggests also is of course that the current Switchboard {pause} MLP isn't trained on very good features .
Well , but if you add them all up you have , uh , almost five percent difference now .
And I think I agree with you that if we fixed lots of different things and they would all add up , we would probably have a {disfmarker} a {disfmarker} a competitive system .
But I think not that much of it is due to the front - end per se .
I think maybe a couple percent of it is , as far as I can see from this .
eh At this point I 'm as I mean , you know {disfmarker} e I 'm wondering is it {disfmarker} Can we expect , uh , a tandem system to do better than a properly trained {disfmarker} you know , a Gaussian system trained directly on the features with , you know , the right ch choice of {pause} parameters ?
But there the main point is that , um , you know , it took us a while but we have the procedure for coupling the two systems {vocalsound} debugged now
and {disfmarker} I mean , there 's still conceivably some bug somewhere in the way we 're feeding the tandem features {disfmarker}
uh , either generating them or feeding them to this {disfmarker} to the {vocalsound} SRI system ,
Yeah . There could be a bug in {disfmarker} in the {disfmarker} somewhere before that .
that {disfmarker} that {disfmarker} I think that 's {disfmarker} this {disfmarker} that 's essentially the same as we use with the ce with the P L P fe features .
Yeah . {vocalsound} I {disfmarker} I would actually double check with Stephane at this point ,
Yeah . It 's hard with features ,
cuz you don't know what they should look like .
I mean , you can't just , like , print the {disfmarker} the values out in ASCII and , you know , look at them , see if they 're {disfmarker}
Not unless you had a lot of time
The other thing , uh , just to mention that Stephane {disfmarker} this was an innovation of Stephane 's , which was a pretty neat one ,
uh , and might particularly apply {vocalsound} here , given all these things we 're mentioning .
Um , Stephane 's idea was that , um , discriminant , uh , approaches are great .
Even the local ones , given , you know , these potential outer loops which , you know , you can convince yourself turn into the global ones .
Um , however , there 's times when it {pause} is not good .
Uh , when {pause} something about the test set is different enough from the training set that {disfmarker} that , uh , the discrimination that you 're learning is {disfmarker} is {disfmarker} is not a good one .
So , uh , his idea was to take as the input feature vector to the , uh , Gaussian mixture system , {vocalsound} uh , a concatenation of the neural net outputs and the regular features .
to {disfmarker} to try to get a non - cheating version of how all this would work .
Has {disfmarker} has , uh {disfmarker} ? We just {disfmarker} I think , just talked about this the other day , but h has {disfmarker} has anybody had a chance to try changing , uh , insertion penalty sort of things with the {disfmarker} with the , uh {disfmarker} {vocalsound} uh , using the tandem system input for the {disfmarker} ?
I mean , are we trying to do them {nonvocalsound} in synchrony ?
That might be fun .
Well , it 's {disfmarker} {vocalsound} it 's {disfmarker} it 's not {disfmarker} You know , it 's not gonna work out
but we could {disfmarker} we could just , uh , uh , see if we find a rhythm ,
