Oh , OK . So {disfmarker} Yeah , let 's summarize .
anyway we {disfmarker} {vocalsound} after coming back from QualComm we had , you know , very strong feedback
and , uh , I think it was {vocalsound} Hynek and Guenter 's and my opinion also that , um , you know , we sort of spread out to look at a number of different ways of doing noise suppression .
But given the limited time , uh , it was sort of time to {pause} choose one .
Uh , and so , uh , th the vector Taylor series hadn't really worked out that much .
Uh , the subspace stuff , uh , had not been worked with so much .
Um , so it sort of came down to spectral subtraction versus Wiener filtering .
Uh , we had a long discussion about how they were the same and how they were d uh , completely different .
that , um , {vocalsound} @ @ again we sort of felt the gang should just sort of figure out which it is they wanna do
and then let 's pick it ,
so instead they went to Yosemite and bonded , and {disfmarker} and they came out with a single {disfmarker} single piece of software .
So it 's {vocalsound} another {disfmarker} another victory for international collaboration .
So {disfmarker} so you guys have combined {disfmarker} or you 're going to be combining the software ?
Well , the piece of software has , like , plenty of options ,
So depending on that , it {disfmarker} it becomes either spectral subtraction or Wiener filtering .
but the thing is {disfmarker} the important thing is that there is a piece of software that you {disfmarker} that we all will be using now .
But , still {disfmarker} so , there will be a piece of software with , {vocalsound} {vocalsound} uh , will give this system , the fifty - three point sixty - six , by default
How {disfmarker} how is {disfmarker} how good is that ?
It 's just one percent off of the {pause} best proposal .
It 's between {disfmarker} i we are second actually if we take this system .
Compared to the last evaluation numbers ? Yeah .
Yeah .
So it {disfmarker} so , um , it 's {disfmarker} it it 's not using our full bal bag of tricks , if you will .
And , uh , and it {disfmarker} it is , uh , very close in performance to the best thing that was there before .
Uh , but , you know , looking at it another way , maybe more importantly , uh , {vocalsound} we didn't have any explicit noise , uh , handling {disfmarker}
we didn't explicitly have anything to deal with stationary noise .
I mean , I gather you have {disfmarker} it sounds like you have a few more days of {disfmarker} of nailing things down with the software and so on .
But {disfmarker} and then {disfmarker} but , um , {vocalsound} arguably what we should do is , even though the software can do many things , we should for now pick a set of things ,
and not change that .
And then focus on {pause} everything that 's left .
And I think , you know , that our goal should be by next week , when Hynek comes back , {vocalsound} uh , to {disfmarker} uh , really just to have a firm path , uh , for the {disfmarker} you know , for the time he 's gone ,
of {disfmarker} of , uh , what things will be attacked .
We do still , however , have to consider its latency .
We can't have unlimited amounts of latency .
Uh , y you know , that 's still being debated by the {disfmarker} by people in Europe
but , {vocalsound} uh , no matter how they end up there , it 's not going to be unlimited amounts ,
So there 's the neural net issue .
There 's the VAD issue .
And , uh , there 's the second stream {pause} thing .
What was the issue with the VAD ?
I guess they still allow two hundred milliseconds on either side or some ?
which is {disfmarker} Sometimes on the SpeechDat - Car you have pauses that are more than one or two seconds .
And all the speech pauses ,
We cou we can do better , I think ,
So , our current VAD is {disfmarker} is more than twenty percent ,
while their is fourteen .
So we {disfmarker} I mean , if {disfmarker} so if we {disfmarker} if {disfmarker} so which is like if we reduce the delay of VA
Yeah . The {disfmarker} you smooth it and then delay the decision by {disfmarker}
So we may in fact {disfmarker} we 'll see what they decide . We may in fact have , {vocalsound} um , the {disfmarker} the , uh , latency time available for {disfmarker} to have a neural net .
So that 's {disfmarker} that 's really not {disfmarker} not bad .
What amount of latency are you thinking about when you say that ?
You know , they 're saying , uh {disfmarker} one group is saying a hundred and thirty milliseconds and another group is saying two hundred and fifty milliseconds .
Did you happen to notice how much , {vocalsound} uh , the change was due to just this frame - dropping problem ?
So the frame - dropping is the last thing that we do .
Just the frame - dropping problem .
And then we have to be careful with that also {disfmarker} with the neural net
because in {comment} the proposal the neural net was also , uh , working on {disfmarker} after frame - dropping .
Oh , that 's a real good point .
Just one more thing .
That 's {disfmarker} that 's a good set of work that {disfmarker} that , uh {disfmarker}
Like , should we do something f more for the noise estimation ,
Yeah . I was wondering about that .
Good . {vocalsound} {vocalsound} Uh , Barry , you just got through your {vocalsound} quals , so I don't know if you {vocalsound} have much to say .
No , just , uh , looking into some {disfmarker} some of the things that , um , {vocalsound} uh , John Ohala and Hynek , um , gave as feedback ,
In {disfmarker} in my proposal , I {disfmarker} I was thinking about starting from a set of , uh , phonological features , {vocalsound} or a subset of them .
Um , but that might not be necessarily a good idea according to , um , John .
