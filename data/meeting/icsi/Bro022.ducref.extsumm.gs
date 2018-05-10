So , should we just do the same kind of deal where we {pause} go around and do , uh , status report {pause} kind of things ?
Why don't you go ahead , Barry ?
Well , this past week I 've just been , uh , getting down and dirty into writing my {disfmarker} my proposal .
I just finished a section on , uh {disfmarker} on talking about these intermediate categories that I want to classify , um , as a {disfmarker} as a middle step .
I hope to {disfmarker} hope to get this , um {disfmarker} a full rough draft done by , uh , Monday so I can give it to Morgan .
So , uh , you want to go next , Dave ?
last week I finally got results from the SRI system about this mean subtraction approach .
And , um , we {disfmarker} we got an improvement , uh , in word error rate , training on the TI - digits data set and testing on Meeting Recorder digits of , um , {vocalsound} six percent to four point five percent ,
um , on the n on the far - mike data
using PZM F ,
but , um , the near - mike performance worsened , um , from one point two percent to two point four percent .
wh why would that be , um , {vocalsound} considering that we actually got an improvement in near - mike performance using HTK ?
uh , with some input from , uh , Andreas , I have a theory in two parts .
first of all HTK {disfmarker} sorry , SR - the SRI system is doing channel adaptation ,
and so HTK wasn't .
And also , um , the {disfmarker} Andreas pointed out the SRI system is using more parameters .
So those finer - grained acoustic models could be more sensitive to the artifacts {pause} in the re - synthesized audio .
O o one thing , um , I noticed is that , um , the mean subtraction seems to make the PZM signals louder after they 've been re - synthesized .
So I was wondering , is it possible that one reason it helped with the Aurora baseline system is {pause} just as a kind of gain control ?
Cuz some of the PZM signals sound pretty quiet if you don't amplify them .
I don't see why {disfmarker} why your signal is louder after processing ,
I don't think just multiplying the signal by two would have any effect .
I mean , I think if you really have louder signals , what you mean is that you have {pause} better signal - to - noise ratio .
I think , maybe {disfmarker} I didn't look , but one thing that makes a difference is this DC offset compensation .
Uh , eh {disfmarker} Do y did you have a look at {disfmarker} at the meet uh , meeting digits , if they have a DC component ,
No . The DC component could be negligible .
I mean , any {disfmarker} all of the mikes have the DC removal {disfmarker} some capacitor sitting right in {pause} that bias it .
Yeah . The microphone isn't gonna pass any DC .
Actually , there are {pause} instrumentation mikes that {disfmarker} that do pass {disfmarker} go down to DC .
no , it 's the electronics .
then there 's amplification afterwards .
You can have DC offset in the data .
And I also , um , did some experiments {pause} about normalizing the phase .
the interesting thing that I tried was , um , Adam and Morgan had this idea ,
um , since my original attempts to , um , take the mean of the phase spectra over time and normalize using that , by subtracting that off , didn't work . Um , so , well , that we thought that might be due to , um , problems with , um , the arithmetic of phases .
So , {vocalsound} what I did instead is I {vocalsound} took the mean of the FFT spectrum without taking the log or anything , and then I took the phase of that ,
But that , um , didn't work either .
and I subtracted that phase {pause} off
Do you want to go , Stephane ?
I 'm more interested in trying to figure out what 's still the difference between the SRI system and the Aurora system .
Yeah . So , I think I will maybe train , like , gender - dependent models ,
because {pause} this is also one big difference between {pause} the two systems .
the other differences were {pause} the fact that maybe the acoustic models of the SRI are more {disfmarker} SRI system are more complex .
But , uh , Chuck , you did some experiments with this
It didn't seem to help in the HTK system .
You know , they have channel adaptation .
They have speaker adaptation .
Well , there 's also the normalization .
but , like , in the Switchboard data , there 's , um {disfmarker} conversation - side normalization for the {pause} non - C - zero
I 'm not sure how they would do it when they 're working with the digits ,
Their normalization works like on {disfmarker} on the utterance levels .
Yeah . This is another difference .
And the acoustic models are like - k triphone models or {disfmarker} or is it the whole word ?
I mean , so they {disfmarker} they have {disfmarker} I {disfmarker} I thin think they use these , uh , uh , genone things .
So there 's {disfmarker} there 's these kind of , uh , uh , pooled models
and {disfmarker} and they can go out to all sorts of dependencies .
They have tied states
Uh , the next thing is this {disfmarker} this VAD problem that ,
So , I 'm just talking about the {disfmarker} the curves that I {disfmarker} I sent {disfmarker} {vocalsound} I sent you {disfmarker}
so , whi that shows that {vocalsound} when the SNR decrease , {vocalsound} uh , the current {pause} VAD approach doesn't drop much frames {pause} for some particular noises ,
uh , which might be then noises that are closer to speech , uh , acoustically .
I i Just to clarify something for me .
They were supp Supposedly , in the next evaluation , they 're going to be supplying us with boundaries .
So does any of this matter ?
First of all , the boundaries might be , uh {disfmarker} like we would have t two hundred milliseconds or {disfmarker} before and after speech .
So removing more than that might still make {pause} a difference {pause} in the results .
Do we {disfmarker} ? I mean , is there some reason that we think that 's the case ?
No .
But maybe we 'll get some insight on that when {disfmarker} when , uh , the gang gets back from Crete .
Well , actually if I don't {disfmarker} maybe don't want to work too much of {disfmarker} on it right now .
I just wanted to {disfmarker} to see if it 's {disfmarker} {vocalsound} what I observed was the re was caused by this {disfmarker} this VAD problem .
Uh , the second thing is the {disfmarker} this spectral subtraction .
which I 've just started yesterday to launch a bunch of , uh , {nonvocalsound} twenty - five experiments ,
uh , with different , uh , values for the parameters that are used .
So the next thing , maybe I {disfmarker} what I will {pause} try to {disfmarker} to do is just {pause} to try to smooth mmm , {vocalsound} the , um {disfmarker} to smooth the d the result of the subtraction ,
Can smooth the SNR estimate , also .
Your filter is a function of SNR . Hmm ?
Right .
th I 've been playing with this Wiener filter , like .
And there are {disfmarker} there were some bugs in the program ,
so I was p initially trying to clear them up .
And , uh , so once it was cleared , uh , I ran a few experiments with {pause} different ways of smoothing the estimated clean speech and how t estimated the noise and , eh , smoothing the SNR also .
And so the {disfmarker} the trend seems to be like , {vocalsound} uh , smoothing the {pause} current estimate of the clean speech for deriving the SNR ,
which is like {pause} deriving the Wiener filter ,
seems to be helping . Then updating it quite fast
But still it 's like {disfmarker} it 's still comparable to the baseline .
But that 's , like , not using any Wiener filter .
So far I 've been testing only with the {pause} baseline , which is {disfmarker} which doesn't have any LDA filtering and on - line normalization .
I just want to separate the {disfmarker} the contributions out .
So it 's just VAD , plus the Wiener filter , plus the baseline system ,
which is , uh , just the spectral {disfmarker} I mean , the mel sp mel , uh , frequency coefficients .
And the other thing is , like , putting a floor on the , uh , SNR ,
some {disfmarker} In some cases the clean speech is , like {disfmarker} when it 's estimated , it goes to very low values ,
so the SNR is , like , very low .
so that actually creates a lot of variance in the low - energy region of the speech .
How about you , Carmen ?
Well , I am still working with , eh , VTS .
And , one of the things that last week ,
eh , say here is that maybe the problem was with the diff
because the signal have different level of energy .
And , maybe , talking with Stephane and with Sunil , we decide that maybe it was interesting to {disfmarker} to apply on - line normalization before applying VTS .
But then {vocalsound} we decided that that 's {disfmarker} it doesn't work absolutely , because we modified also the noise .
Well , thinking about that , we {disfmarker} we then {disfmarker} we decide that maybe is a good idea .
I didn't {pause} do the experiment yet {disfmarker} to apply VTS in cepstral domain .
We don't know .
but {vocalsound} I 'm not sure if that will be usefu useful .
Well , we s decide to m to {disfmarker} to obtain the new expression if we work in the cepstral domain .
It 's quite a lot {disfmarker} It 's a lot of work .
And I want to know if {disfmarker} if we have some {pause} feeling that {pause} the result {disfmarker}
I don't have any feeling if this will work better than apply VTS aft in cepstral domain will work better than apply in m mel {disfmarker} in filter bank domain .
I don't {disfmarker} I don't know absolutely nothing .
Yeah . Well , you 're {disfmarker} I think you 're the first one here to work with VTS ,
uh , maybe we could call someone else up who has ,
I don't {disfmarker} I don't have a good feeling for it .
