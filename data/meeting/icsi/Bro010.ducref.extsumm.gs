Do you have news from the conference talk ?
No , nobody 's told me anything .
No , that would have been a good thing to find out before this meeting ,
I mean , let 's {disfmarker} let 's assume for right now that we 're just kind of plugging on ahead ,
because even if they tell us that , uh , the rules are different , uh , we 're still interested in doing what we 're doing .
So what are you doing ?
Uh , well , we 've {disfmarker} a little bit worked on trying to see , uh , what were the bugs and the problem with the latencies .
We took {disfmarker} first we took the LDA filters
and , {vocalsound} uh , we designed new filters ,
using uh recursive filters actually .
So we took the filters {disfmarker} the FIR filters {vocalsound} and we {comment} designed , uh , IIR filters that have the same frequency response .
Well , similar , but that have shorter delays .
You {disfmarker} you had a discussion with Sunil about this though ?
No .
Yeah , you should talk with him .
No , I mean , because the {disfmarker} the {disfmarker} the {disfmarker} the whole problem that happened before was coordination ,
So {disfmarker} so you need to discuss with him what we 're doing ,
uh , cuz they could be doing the same thing and {disfmarker} or something .
We just {disfmarker} we just have to be in contact more .
I think that {disfmarker} the {disfmarker} the fact that we {disfmarker} we did that with {disfmarker} had that thing with the latencies was indicative of the fact that there wasn't enough communication .
And the low frequency band has sixty - four milliseconds of delay ,
and the high frequency band filter has something like eleven milliseconds compared to the two hundred milliseconds of the IIR filters .
So that would be , uh , a reduction of a hundred and thirty - six milliseconds ,
What was the total we ended up with through the whole system ?
Three hundred and thirty .
So that would be within {disfmarker} ?
Yeah ,
so , sixty - five , plus ten , plus {disfmarker} for the downsampling ,
plus eighty - five for the on - line normalization .
plus {disfmarker} plus eighty for the neural net and PCA .
So it would be around two hundred and forty {disfmarker}
Just {disfmarker} just barely in there .
What 's the allowable ?
Two - fifty ,
unless they changed the rules .
Which there is {disfmarker} there 's some discussion of .
What were they thinking of changing it to ?
Uh , well the people who had very low latency want it to be low {disfmarker} uh , very {disfmarker} {vocalsound} very very narrow , uh , latency bound .
And the people who have longer latency don't .
Unfortunately we 're the main ones with long latency ,
and basically the best proposal had something like thirty or forty milliseconds of latency .
To get down to forty or fifty milliseconds we 'd have to throw out most of what we 're doing .
A person {disfmarker} I don't think a person can tell the difference between , uh , you know , a quarter of a second and a hundred milliseconds ,
I 'm not even sure if we can tell the difference between a quarter of a second and half a second .
I mean it just {disfmarker} it feels so quick .
we could cut {disfmarker} we know what else , we could cut down on the neural net time
by {disfmarker} by , uh , playing around a little bit ,
going more into the past ,
So is the latency from the neural net caused by how far ahead you 're looking ?
Mm - hmm .
Also we were thinking to {disfmarker} to , uh , apply the eh , spectral subtraction from Ericsson
and to {disfmarker} to change the contextual KLT for LDA .
Uh , to change and use LDA discriminative .
uh , one thing that would be no {disfmarker} good to find out about from this conference call is that what they were talking about , what they 're proposing doing , was having a third party , um , run a good VAD , and {disfmarker} and determine boundaries .
And then given those boundaries , then have everybody do the recognition .
uh , I guess they argued about that yesterday
I don't {disfmarker} don't know the answer
but we should find out .
Well , there 's a lot of different ways of computing the noise spectrum .
it seems like this kind of thing could add to the latency .
I mean , depending on where the window was that you used to calculate {pause} the signal - to - noise ratio .
Not necessarily .
Cuz if you don't look into the future ,
Actually , it 's a mmm {disfmarker} If - if you want to have a good estimation on non - stationary noise you have to look in the {disfmarker} in the future .
but what does {disfmarker} what {disfmarker} what {disfmarker} what does Alcatel do ?
And {disfmarker} and France Telecom .
They just look in the past .
I guess it works because the noise are , uh pret uh , almost stationary
Yeah , y I mean , you 're talking about non - stationary noise
but I think that spectral subtraction is rarely {disfmarker} is {disfmarker} is not gonna work really well for {disfmarker} for non - stationary noise ,
But it 's hard to {disfmarker}
Uh , maybe we can talk about a couple other things briefly ,
So you 're coming up with your quals proposal ,
Um , but I 'm , uh , looking into extending the work done by Larry Saul and John Allen and uh Mazin Rahim .
Um , they {disfmarker} they have a system that 's , uh , a multi - band , um , system
but their multi - band is {disfmarker} is a little different than the way that we 've been doing multi - band in the past ,
where um {disfmarker} Where we 've been @ @ {comment} uh taking {pause} um {pause} {vocalsound} sub - band features and i training up these neural nets and {disfmarker} on {disfmarker} on phonetic targets ,
and then combining them some somehow down the line ,
they 're {disfmarker} they 're taking sub - band features and , um , training up a detector that detects for , um , these phonetic features
and h he shows that using this {disfmarker} this method to detect sonorance is it 's very robust compared to , um {disfmarker} {vocalsound} to typical , uh , full - band Gaussian mixtures um estimations of {disfmarker} of sonorance .
so that 's just {disfmarker} that 's just one detector .
So you can imagine building many of these detectors on different features .
You get enough of these detectors together , um , then you have enough information to do , um , higher level discrimination ,
So , um , that 's {disfmarker} that 's the direction which I 'm {disfmarker} I 'm thinking about going in my quals .
for example , discriminating between phones
and then you keep working your way up until you {disfmarker} you build a full recognizer .
so , uh , y you want to talk maybe a c two or three minutes about what we 've been talking about today and other days ?
we 're interested in , um , methods for far mike speech recognition ,
um , {pause} mainly , uh , methods that deal with the reverberation {pause} in the far mike signal .
one approach would be , um , say MSG and PLP , like was used in Aurora one
and , um , there are other approaches which actually attempt to {pause} remove the reverberation , instead of being robust to it like MSG .
And so we 're interested in , um , comparing the performance of {pause} um , a robust approach like MSG with these , um , speech enhancement or de - reverber de - reverberation approaches .
There 's also this , uh , um , uh , echo cancellation stuff that we 've sort of been chasing ,
and when we 're saying these digits now we do have a close microphone signal
and then there 's the distant microphone signal .
And you could as a kind of baseline say , " OK , given that we have both of these , uh , we should be able to do , uh , a cancellation . "
So that , uh , um , we {disfmarker} we , uh , essentially identify the system in between {disfmarker} the linear time invariant system between the microphones and {disfmarker} and {disfmarker} and {disfmarker} and re and invert it ,
uh , or {disfmarker} or cancel it out to {disfmarker} to some {disfmarker} some reasonable approximation
Yesterday morning on video conference .
But , well , when we add up everything it 's {disfmarker} it will be alright .
that 's hard to do .
