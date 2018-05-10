I have something just fairly brief to report on .
so what I was started playing with was the {disfmarker} th again , this is the HTK back - end .
I was curious because the way that they train up the models , {vocalsound} they go through about four sort of rounds of {disfmarker} of training .
you know , that 's part of what takes so long to train the {disfmarker} the {disfmarker} the back - end for this .
The first one is three , then seven , seven , and seven .
And what these numbers refer to is the number of times that the , uh , HMM re - estimation is run .
uh , I wanted to first test to see if we actually need to do {pause} this many iterations early on .
um , I {disfmarker} I ran a couple of experiments where I {vocalsound} reduced that to l to be three , two , two , {vocalsound} uh , five , I think ,
and I got almost the exact same results .
And {disfmarker} but it runs much much faster .
I {disfmarker} I think m {pause} it only took something like , uh , three or four hours to do the full training ,
as opposed to wh what , sixteen hours or something like that ?
even we don't do anything else , doing something like this could allow us to turn experiments around a lot faster .
And when you have your final thing , we go back to this .
And then when you have your final thing , do a full one , so it 's {disfmarker}
I mean , it 's like one little text file you edit and change those numbers ,
So we could do a lot more experiments and throw a lot more stuff in there .
Oh , the other thing that I did was , um , {vocalsound} I compiled {pause} the HTK stuff for the Linux boxes .
So we have this big thing that we got from IBM ,
which is a five - processor machine .
Really fast ,
but it 's running Linux .
So , you can now run your experiments on that machine
I 've forgotten now what the name of that machine is
but I can {disfmarker} I can send email around about it .
Um , you have to make {disfmarker} you have to make sure that in your dot CSHRC , {vocalsound} um , it detects whether you 're running on the Linux or a {disfmarker} a Sparc and points to the right executables .
and you may not have had that in your dot CSHRC before , if you were always just running the Sparc .
uh , I can {disfmarker} I can tell you exactly what you need to do to get all of that to work .
So after I did that , then what I wanted to do {comment} was try {pause} increasing the number of mixtures ,
just to see , um {disfmarker} see how {disfmarker} how that affects performance .
Yeah . In fact , you could do something like {pause} keep exactly the same procedure and then add a fifth thing onto it
There was a conference call this Tuesday .
I don't know yet the {disfmarker} {vocalsound} what happened {vocalsound} Tuesday ,
but {vocalsound} the points that they were supposed to discuss is still , {vocalsound} uh , things like {vocalsound} the weights ,
Do you know who was {disfmarker} who was {disfmarker} since we weren't in on it , uh , do you know who was in from OGI ?
I have no idea .
So the points were the {disfmarker} the weights {disfmarker} how to weight the different error rates {vocalsound} that are obtained from different language and {disfmarker} and conditions .
it 's not clear that they will keep the same kind of weighting .
Some people are arguing that it would be better to have weights on
well , to {disfmarker} to combine error rates {pause} before computing improvement .
And so , perhaps they will change the weights to {disfmarker}
Well , I mean , the fact that it 's inconsistent is an obvious mistake .
But the question is , do you average the relative improvements {pause} or do you average the error rates and take the relative improvement maybe of that ?
And the thing is it 's not just a pure average because there are these weightings .
It 's just when you {disfmarker} when you get all done , I think that they pro
but I think they started off this process with the notion that {vocalsound} you should be {pause} significantly better than the previous standard .
so they said " how much is significantly better ?
And {disfmarker} and so they said " well , {vocalsound} you know , you should have half the errors , " or something , " that you had before " .
But it does seem like
i i it does seem like it 's more logical to combine them first
But there is this {disfmarker} this {disfmarker} is this still this problem of weights .
When {disfmarker} when you combine error rate it tends to {pause} give more importance to the difficult cases ,
Some people think that {vocalsound} it 's more important to look at {disfmarker} {vocalsound} to have ten percent imp relative improvement on {pause} well - matched case than to have fifty percent on the m mismatched ,
and other people think that it 's more important to improve a lot on the mismatch
It sounds like they don't really have a good idea about what the final application is gonna be .
I mean , they don they {disfmarker} they don't {disfmarker} they don't really {pause} know , I think .
So the argument for that being the {disfmarker} the {disfmarker} the more important thing , {vocalsound} is that you 're gonna try and do that , {vocalsound} but you wanna see how badly it deviates from that when {disfmarker} when {disfmarker} when the , uh {disfmarker} it 's a little different .
The opposite argument is you 're never really gonna have a good sample of all these different things .
I gather that in these meetings it 's {disfmarker} it 's really tricky to make anything {vocalsound} ac {vocalsound} make any {comment} policy change
because {vocalsound} {vocalsound} everybody has {disfmarker} has , uh , their own opinion
but there is probably a {disfmarker} a big change that will {vocalsound} be made
is that the {disfmarker} the baseline {disfmarker} th they want to have a new baseline , perhaps ,
And apparently , {vocalsound} uh , some people are pushing to still keep this fifty percent number .
So they want {vocalsound} to have at least fifty percent improvement on the baseline ,
So whose VAD
Uh , they didn't decide yet .
well , from OGI , these experiments on {pause} putting VAD on the baseline .
And these experiments also are using , uh , some kind of noise compensation ,
So what happened since , um , {vocalsound} last week is {disfmarker}
so spectral subtraction ,
and putting on - line normalization , um , just after this .
So I think spectral subtraction , LDA filtering , and on - line normalization ,
so which is similar to {vocalsound} the pro proposal - one , but with {pause} spectral subtraction in addition ,
and it seems that on - line normalization doesn't help further when you have spectral subtraction .
And what 's happened here is that we {disfmarker}
so we have this kind of new , um , reference system which {vocalsound} use a nice {disfmarker} a {disfmarker} a clean downsampling - upsampling ,
which use a new filter {vocalsound} that 's much shorter
and which also cuts the frequency below sixty - four hertz ,
When you say " we have that " , does Sunil have it now , too ,
No .
Because we 're still testing .
Um , it seems to improve on the well - matched case ,
um , {vocalsound} but it 's a little bit worse on the mismatch and highly - mismatched {disfmarker}
But it has the , uh {disfmarker}
the latencies are much shorter .
Latency is short {disfmarker}
So basically we try to , {vocalsound} {vocalsound} uh , find {vocalsound} good features that could be used for voicing detection ,
There was a {vocalsound} start of some effort on something related to voicing or something .
we {disfmarker} w basically we are still playing with Matlab to {disfmarker} {vocalsound} to look at {disfmarker} at what happened ,
what sorts of features are you looking at ?
So we would be looking at , um , the {pause} variance of the spectrum of the excitation ,
which is {disfmarker} should be high for voiced sounds .
what yo what you 're calling the excitation , as I recall , is you 're subtracting the {disfmarker} the , um {disfmarker} the mel {disfmarker} mel {disfmarker} {vocalsound} mel filter , uh , spectrum from the FFT spectrum .
So it 's {disfmarker} it 's not really an excitation ,
but it 's something that hopefully tells you something about the excitation .
Yeah , that 's right .
Right now we just are trying to find some features .
Yeah . Hopefully , I think what we want to have is to put these features in s some kind of ,
well , to {disfmarker} to obtain a statistical model on these features
and to {disfmarker} or just to use a neural network
really that 's sort of a cartoon picture about what 's voiced and unvoiced .
another way of looking at it is what characterization {vocalsound} of the difference between {pause} the raw data {pause} and this smooth version {pause} is something that you 're missing that could help ?
So , I mean , looking at different statistical measures of that difference ,
and seeing if you add them onto the feature vector does that make things better or worse in noise ,
but it 's more that , {vocalsound} you know , uh , uh , try some different statistical characterizations of that difference back to the raw data
the way I 'm looking at it is not so much you 're trying to f find the best {disfmarker} the world 's best voiced - unvoiced , uh , uh , classifier ,
that {disfmarker} that in fact , well , the data itself is {disfmarker} {vocalsound} that you 're working with is not perfect .
So , what I 'm saying is maybe that 's not a killer
because you 're just getting some characterization ,
one that 's driven by your intuition about voiced - unvoiced certainly ,
and , you know {disfmarker} and you 're not getting the excitation anyway , you know .
And so this is saying , well , if you really do have that {vocalsound} sort of vocal tract envelope , and you subtract that off , what you get is the excitation .
And I call that lies because you don't really have that ,
you just have some kind of {vocalsound} signal - processing trickery to get something that 's kind of smooth .
so you 're not really getting the vocal excitation .
That 's why I was going to the {disfmarker} why I was referring to it in a more {disfmarker} {vocalsound} a more , uh , {vocalsound} uh , {vocalsound} conservative way ,
when I was saying " well , it 's {disfmarker}
it 's the excitation " .
But it 's not really the excitation .
well , you don't really get the excitation ,
but you get something related to it .
And so you said this is pretty {disfmarker}
doing this kind of thing is pretty robust to noise ?
It seems ,
yeah .
So if {disfmarker} if you take this frame , {vocalsound} uh , from the noisy utterance and the same frame from the clean utterance {disfmarker}
You end up with a similar difference
So we 'll perhaps {vocalsound} {vocalsound} {vocalsound} try to convince OGI people to use the new {disfmarker} {vocalsound} the new filters
Uh , has {disfmarker} has anything happened yet on this business of having some sort of standard , uh , source ,
not yet
but I wi I will {vocalsound} call them
now they are {disfmarker} I think they have more time
well , Eurospeech deadline is {vocalsound} over
and {pause} he 's been doing all the talking
This is {disfmarker} this by the way a bad thing .
We 're trying to get , um , m more female voices in this record as well .
Make sur make sure Carmen {vocalsound} talks as well .
I don't know .
I think that for the recognizer for the meeting recorder that it 's better that I don't speak .
N um , not not not much is new .
So when I talked about what I 'm planning to do last time , {vocalsound} I said I was , um , going to use Avendano 's method of , um , {vocalsound} using a transformation , um , {vocalsound} to map from long analysis frames which are used for removing reverberation to short analysis frames for feature calculation .
but , uh , um , I decided {vocalsound} not to do that after all
because I {disfmarker} I realized to use it I 'd need to have these short analysis frames get plugged directly into the feature computation somehow
and right now I think our feature computation is set to up to , um , {vocalsound} take , um , audio as input , in general .
So I decided that I {disfmarker} I 'll do the reverberation removal on the long analysis windows
and then just re - synthesize audio
Um , anything to {pause} add ?
Well , I 've been continuing reading .
I went off on a little tangent this past week ,
looking at , uh , {vocalsound} uh , modulation s spectrum stuff ,
and {disfmarker} and learning a bit about what {disfmarker} what , um {disfmarker} what it is ,
And I found some {disfmarker} {vocalsound} some , uh , neat papers , {vocalsound} um , historical papers from , {vocalsound} um , {vocalsound} Kanedera , Hermansky , and Arai .
And they {disfmarker} they did a lot of experiments where th where , {vocalsound} um , they take speech {vocalsound} and , um , e they modify {vocalsound} the , uh {disfmarker}
they {disfmarker} they {disfmarker} they measure the relative importance of having different , um , portions of the modulation spectrum intact .
And they find that the {disfmarker} the spectrum between one and sixteen hertz in the modulation {vocalsound} is , uh {disfmarker} is im important for speech recognition .
Um , I was thinking more like using them as {disfmarker} as the inputs to {disfmarker} to the detectors .
