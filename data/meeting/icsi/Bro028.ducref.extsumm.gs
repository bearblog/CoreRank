Yeah . So there was this conference call this morning ,
and the only topic on the agenda was just to discuss
a and to come at {disfmarker} uh , to get a decision about this latency problem .
Uh , yeah . There were like two hours of {pause} discussions ,
and then suddenly , {vocalsound} uh , people were tired , I guess ,
and they decided on {nonvocalsound} a number ,
two hundred and twenty ,
included e including everything .
So , currently d uh , we have system that has two hundred and thirty .
we have to reduce it by ten milliseconds somehow .
That 's not a problem , I {disfmarker} I guess .
W It 's {disfmarker} it 's p d primary {disfmarker} primarily determined by the VAD at this point ,
S so we can make the VAD a little shorter .
Yeah . We probably should do that pretty soon so that we don't get used to it being a certain way .
Uh , yeah . So , the second thing is the system that we have currently .
Oh , yes . We have , like , a system that gives sixty - two percent improvement ,
but {vocalsound} if you want to stick to the {disfmarker} {vocalsound} this latency {disfmarker}
Well , it has a latency of two thirty ,
but {vocalsound} if you want also to stick to the number {vocalsound} of features that {disfmarker} limit it to sixty , {vocalsound} then we go a little bit down
but it 's still sixty - one percent .
Uh , and if we drop the tandem network , then we have fifty - seven percent .
Uh , but th the two th two thirty includes the tandem network ?
And i is the tandem network , uh , small enough that it will fit on the terminal size
Uh , no , I don't think so .
It 's still {disfmarker} in terms of computation , if we use , like , their way of computing the {disfmarker} the maps {disfmarker} the {disfmarker} the MIPs , {vocalsound} I think it fits ,
but it 's , uh , m mainly a problem of memory .
and I don't know how much {pause} this can be discussed or not ,
because it 's {disfmarker} it could be in ROM ,
so it 's maybe not that expensive .
Ho - how much memory d ? H how many {disfmarker} ?
I d I d uh , I {disfmarker} I don't kn remember exactly ,
Yeah . I 'd like to {pause} see that ,
cuz maybe I could think a little bit about it ,
cuz we {vocalsound} maybe we could make it a little smaller
Uh , I 'd like to see how far off we are .
But I guess it 's still within their rules to have {disfmarker} have it on the , uh , t uh , server side .
Yeah , there were small tricks to make this tandem network work .
and one of the trick was to , {vocalsound} um , use {vocalsound} some kind of hierarchical structure
where {pause} the silence probability is not computed by {pause} the final tandem network but by the VAD network .
so apparently it looks better when , {vocalsound} uh , we use the silence probability from the VAD network
Yeah . Uh , there was a p {comment} problem that we observed , um , {vocalsound} {vocalsound} that there was {disfmarker} there were , like , many insertions in the {disfmarker} in the system .
Actually plugging in the tandem network was increasing , I {disfmarker} I {disfmarker} I think , the number of insertions .
and then just using the {disfmarker} the other silence probability helps .
Yeah . The last thing is that I think we are getting close to human performance .
Well , that 's something I would like to investigate further ,
I did , like , um {disfmarker} I did , uh , listen to the m most noisy utterances of the SpeechDat - Car Italian
and tried to transcribe them .
So this is a particular human .
This is {disfmarker} this i this is Stephane .
that 's the {disfmarker} the flaw of the experiment .
but still , uh , {vocalsound} what happens is {disfmarker} is that , {vocalsound} uh , the digit error rate on this is around one percent ,
while our system is currently at seven percent .
Um , but what happens also is that if I listen to the , um {disfmarker} {nonvocalsound} a re - synthesized version of the speech
and {pause} I re - synthesized this using a white noise that 's filtered by a LPC , uh , filter {disfmarker}
well , you can argue , that , uh {disfmarker} that this is not speech ,
so the ear is not trained to recognize this .
But s actually it sound like {pause} whispering ,
There 's two problems there .
I mean {disfmarker} I mean , so {disfmarker} so the first is {vocalsound} that by doing LPC - twelve with synthesized speech w like you 're saying , uh , it 's {disfmarker} {vocalsound} i i you 're {disfmarker} you 're adding other degradation .
So it 's not just the noise
but you 're adding in fact some degradation
because it 's only an approximation .
and the second thing is {disfmarker} which is m maybe more interesting {disfmarker} is that , um , {comment} {vocalsound} if you do it with whispered speech , you get this number .
What if you had {pause} done analysis {comment} re - synthesis and taken the pitch as well ?
So now you put the pitch in .
What would the percentage be then ?
See , that 's the question .
That would say at least for people , having the pitch is really , really important ,
I mean , th the thing is LPC is not a {disfmarker} a really great representation of speech .
uh , but i I don't know .
I do don't wanna take you away from other things .
Yeah . I mean , it 's probably not worth your time .
It 's {disfmarker} it 's a side thing
and {disfmarker} and {disfmarker} and there 's a lot to do .
Um , while we 're still on Aurora stuff {pause} maybe you can talk a little about the status with the , uh , {vocalsound} Wall Street Journal {vocalsound} things for it .
So I 've , um , downloaded , uh , a couple of things from Mississippi State .
They wrote some scripts that sort of make it easy to run {vocalsound} the system on the Wall Street Journal , uh , data .
Um , so I haven't run the scripts yet .
Uh , I 'm waiting {disfmarker} there was one problem with part of it
and I wrote a note to Joe asking him about it .
So I 'm waiting to hear from him .
they 're {disfmarker} I I 'm still waiting for them to {pause} release the , um , {vocalsound} multi - CPU version of their scripts ,
cuz right now their script only handles processing on a single CPU ,
which will take a really long time to run .
So , as soon as they get that , then I 'll {disfmarker} I 'll grab those too
Yeah . Cuz we have to get started ,
Yeah . I 'll go ahead and try to run it though with just the single CPU one ,
and {disfmarker} I {disfmarker} they {disfmarker} they , {vocalsound} um , released like a smaller data set that you can use that only takes like sixteen hours to train and stuff .
So I can {disfmarker} I can run it on that just to make sure that the {disfmarker} {vocalsound} the thing works and everything .
So it could be {disfmarker} I mean , Chuck and I had actually talked about this a couple times , and {disfmarker} and {disfmarker} over some lunches , I think , {vocalsound} that , um , {vocalsound} one thing that we might wanna do {disfmarker}
The - there 's this question about , you know , what do you wanna scale ?
Suppose y you can't adjust {vocalsound} these word insertion penalties and so forth ,
so you have to do everything at the level of the features .
And , uh , one thing I had suggested at an earlier time was maybe some sort of scaling ,
some sort of root or {disfmarker} or something of the , um , {vocalsound} uh , features .
it occurred to me later ,
because what you really want to do is scale the , uh , @ @ {comment} the range of the likelihoods rather than {disfmarker}
But , {pause} I mean , I guess we still haven't had a {disfmarker} {vocalsound} a ruling back on this .
And we may end up being in a situation where we just you know really can't change the {vocalsound} word insertion penalty .
But the other thing we could do {vocalsound} is {disfmarker} also we could {disfmarker}
I mean , this {disfmarker} this may not help us , {vocalsound} uh , in the evaluation
but it might help us in our understanding at least .
We might , {vocalsound} just run it with different insper insertion penalties ,
and show that , uh , " well , OK , not changing it , {vocalsound} playing the rules the way you wanted , we did this . But in fact if we did that , it made a {disfmarker} {pause} a big difference . "
So Michael Kleinschmidt , who 's a PHD student from Germany , {vocalsound} showed up this week .
He 'll be here for about six months .
And he 's done some work using {vocalsound} an auditory model {pause} of , um , {vocalsound} human hearing ,
and {pause} using that f uh , to generate speech recognition features .
And {pause} he did {vocalsound} work back in Germany {vocalsound} with , um , a toy recognition system {vocalsound} using , um , isolated {vocalsound} digit recognition {vocalsound} as the task .
he w he 's coming here to u u use it on a {vocalsound} uh , a real speech recognition system .
So I th I think it 's {disfmarker} it 's {disfmarker} I think it 's kinda neat stuff .
the thing that I wanted to {disfmarker} to add to it also was to have us use this in a multi - stream way .
so {disfmarker} so that , um , {vocalsound} when you come up with these different things , {vocalsound} and these different functions , {vocalsound} you don't necessarily just put them all into one huge vector ,
but perhaps {vocalsound} you {vocalsound} have some of them in one stream and some of them in another stream , and so forth .
Th - this is {disfmarker} because it 's , um {disfmarker} there are these different parameters for the shape of these {vocalsound} basis functions , {vocalsound} um {disfmarker} {vocalsound} there are a lot of different possible basis functions .
And so he {disfmarker} {vocalsound} he actually does {vocalsound} an optimization procedure to choose an {disfmarker} {vocalsound} an optimal set of basis functions out of all the possible ones .
is , {comment} {vocalsound} um , {vocalsound} he starts with {disfmarker} he has a set of M of them .
I mean , he t he tries , um , {vocalsound} using {pause} just M minus one of them .
So there are M possible subsets of this {vocalsound} length - M vector .
He tries classifying , using each of the M {vocalsound} possible sub - vectors .
Whichever sub - vector , {vocalsound} um , works the {disfmarker} the best , I guess , he says {disfmarker} {vocalsound} the {disfmarker} the fe feature that didn't use was the most useless feature ,
so we 'll throw it out
and we 're gonna randomly select another feature {pause} from the set of possible basis functions .
Well , that sort of segues into {pause} what {disfmarker} what I 'm doing .
Um , {vocalsound} so , uh , the big picture is k um , {vocalsound} come up with a set of , {vocalsound} uh , intermediate categories ,
then build intermediate category classifiers , then do recognition ,
Um , so right now I 'm in {disfmarker} in the phase where {vocalsound} I 'm looking at {disfmarker} at , um , deciding on a initial set of intermediate categories .
And {vocalsound} I 'm looking {vocalsound} for data data - driven {pause} methods that can help me find , {vocalsound} um , a set of intermediate categories {vocalsound} of speech that , uh , will help me to discriminate {pause} later down the line .
And one of the ideas , {vocalsound} um , that was to take a {disfmarker} take a neural net {disfmarker}
train {disfmarker} train an ordinary neural net {vocalsound} to {disfmarker} {vocalsound} uh , to learn the posterior probabilities of phones .
Um , {vocalsound} the other one {pause} was , {vocalsound} um , to , {vocalsound} uh , come up with a {disfmarker} a {disfmarker} a model {disfmarker} {comment} um , a graphical model , {vocalsound} that treats {pause} the intermediate categories {vocalsound} as hidden {disfmarker} hidden variables , latent variables , that we don't know anything about ,
but that through , {vocalsound} um , s statistical training and the EM algorithm , {vocalsound} um , at the end of the day , {vocalsound} we have , um {disfmarker} we have learned something about these {disfmarker} these latent , um {disfmarker} latent variables
which happen to correspond to {vocalsound} intermediate categories .
