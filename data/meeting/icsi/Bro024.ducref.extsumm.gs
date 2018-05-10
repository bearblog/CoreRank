Why don't you go ahead , Dave ?
so , yeah , the {disfmarker} this past week I 've been main mainly occupied with , um , getting some results , u from the SRI system trained on this short Hub - five training set for the mean subtraction method .
I ran some tests last night .
the results are suspicious .
Um , it 's , um , {vocalsound} cuz they 're {disfmarker} the baseline results are worse than , um , Andreas {disfmarker} than results Andreas got previously .
ap ap apart from that , I guess the {disfmarker} the main thing I have t ta I have to talk is , um , where I 'm planning to go over the next week .
So I 've been working on integrating this mean subtraction approach into the SmartKom system .
And there 's this question of , well , so , um , in my tests before with HTK I found it worked {disfmarker} it worked the best with about twelve seconds of data used to estimate the mean ,
but , we 'll often have less {comment} in the SmartKom system .
So I think we 'll use as much data as we have {pause} at a particular time ,
and we 'll {disfmarker} {vocalsound} we 'll concatenate utterances together , um , to get as much data as we possibly can from the user .
But , {vocalsound} um , {vocalsound} there 's a question of how to set up the models . So um , we could train the models .
If we think twelve seconds is ideal we could train the models using twelve seconds to calculate the mean , to mean subtract the training data .
Or we could , um , use some other amount .
And then there 's um , another thing I wanna start looking at , um , {vocalsound} wi is , um , the choice of the analysis window length .
with the {disfmarker} with the HTK set - up I should be able to do some experiments , on just varying that length ,
say between one and three seconds , in a few different reverberation conditions ,
I guess one thing that might also be an issue , uh , cuz part of what you 're doing is you 're getting a {disfmarker} a spectrum over a bunch of different kinds of speech sounds .
and so it might matter how fast someone was talking for instance .
You know , if you {disfmarker} if {disfmarker} if {disfmarker} if there 's a lot of phones in one second maybe you 'll get a {disfmarker} a really good sampling of all these different things ,
and {disfmarker} {vocalsound} and , uh , on the other hand if someone 's talking slowly maybe you 'd need more .
a actually I was just thinking about what I was asking about earlier , wi which is about having {vocalsound} less than say twelve seconds in the SmartKom system to do the mean subtraction .
You said in {vocalsound} systems where you use cepstral mean subtraction , they concatenate utterances
and , {vocalsound} do you know how they address this issue of , um , testing versus training ?
I think what they do is they do it always on - line ,
I mean , that you just take what you have from the past ,
that you calculate the mean of this and subtract the mean .
and , um , so {disfmarker} so in tha in that case , wh what do they do when they 're t um , performing the cepstral mean subtraction on the training data ?
So {disfmarker} because you 'd have hours and hours of training data .
So do they cut it off and start over ?
and so if you 're splitting things up into utterances {disfmarker}
So , for instance , in a dialogue system , {comment} where you 're gonna be asking , uh , you know , th for some information , there 's some initial th something .
and I think the heuristics of exactly how people handle that and how they handle their training I 'm sure vary from place to place .
so you 'd {disfmarker} you {disfmarker} and so in training you would start over at {disfmarker} at every new phone call or at every {vocalsound} new speaker .
Do you wanna go , Barry ?
Um , so for the past , {vocalsound} uh , week an or two , I 've been just writing my , uh , formal thesis proposal .
Um , so I 'm taking {vocalsound} this qualifier exam that 's coming up in two weeks .
And I {disfmarker} I finish writing a proposal and submit it to the committee .
so briefly , {vocalsound} I 'm proposing to do a n a new p approach to speech recognition using um , a combination of , uh , multi - band ideas and ideas , um , {vocalsound} {vocalsound} {comment} about the uh , acoustic phonec phonetic approach to speech recognition .
Um , so I will be using {vocalsound} these graphical models that {disfmarker} um , that implement the multi - band approach {vocalsound} to recognize a set of intermediate categories that might involve , uh , things like phonetic features {vocalsound} or other {disfmarker} other f feature things that are more closely related to the acoustic signal itself .
Um , and the hope in all of this is that by going multi - band and by going into these , {vocalsound} um intermediate classifications , {vocalsound} that we can get a system that 's more robust to {disfmarker} to unseen noises , and situations like that .
Do you wanna go , Sunil ?
so the last week , uh , I showed some results with only SpeechDat - Car
which was like some fifty - six percent .
I mean , I wasn't getting that r results on the TI - digit .
So I was like looking into " why , what is wrong with the TI - digits ? " .
And I found that , the noise estimation is a reason for the TI - digits to perform worse than the baseline .
And every when we now start introducing some {disfmarker} some noise reduction technique we {disfmarker} we introduce also somehow artificial distortions .
And these artificial distortions {disfmarker} uh , I have the feeling that they are the reason why {disfmarker} why we have the problems in this multi - condition training .
it {disfmarker} it seems to be the best what {disfmarker} wh wh what {disfmarker} what we can do in this moment is multi - condition training .
That means the H M Ms we trained , they are {disfmarker} they are based on Gaussians ,
And if we introduce now this {disfmarker} this u spectral subtraction , or Wiener filtering stuff {disfmarker}
I mean , this is your noise estimate and you somehow subtract it or do whatever .
And then I think what you do is you introduce some {disfmarker} some artificial distribution in this
in {disfmarker} in the models .
So the other thing is the {disfmarker} I 'm just looking at a little bit on the delay issue where the delay of the system is like a hundred and eighty millisecond .
So {vocalsound} I just {disfmarker} just tried another sk system {disfmarker} I mean , another filter which I 've like shown at the end .
Which is very similar to the existing uh , filter .
Only {disfmarker} Uh , only thing is that the phase is {disfmarker} is like a totally nonlinear phase
So it 's just like {disfmarker} it 's like a three percent relative degradation ,
But {disfmarker} but is there {disfmarker} is there a problem with the one hundred eighty milliseconds ?
So {disfmarker} So , basically our {disfmarker} our position is {vocalsound} that , um , we shouldn't be unduly constraining the latency at this point
because we 're all still experimenting with trying to make the performance better in the presence of noise .
Uh , there is a minority in that group who is a arguing {disfmarker} who are arguing for {vocalsound} um , uh , having a further constraining of the latency .
So we 're s just continuing to keep aware of what the trade - offs are and , you know , what {disfmarker} what do we gain from having longer or shorter latencies ?
Well , France Telecom was {disfmarker} was {disfmarker} was very short latency
It was in the order of thirty milliseconds
Uh , did you wanna go next , Stephane ?
I can go next .
yeah , there are two figures showing actually the , mmm , um , performance of the current VAD .
So it 's a n neural network based on PLP parameters ,
uh , which estimate silence probabilities ,
and then I just put a median filtering on this
to smooth the probabilities , right ?
for Italian and Spanish it 's {disfmarker} th this value works good but not necessarily for Finnish .
But unfortunately there is , like , this forty millisecond latency
Yeah , so I would try to somewhat reduce this @ @ .
I already know that if I completely remove this latency , so . {vocalsound} um , {comment} it {disfmarker} um there is a three percent hit on Italian .
s So to summarize the performance of these , SpeechDat - Car results is similar than {disfmarker} than yours so to say .
Carmen ?
Well , I only say that the {disfmarker} this is , a summary of the {disfmarker} of all the VTS experiments
and say that the result in the last {comment} um , for Italian {disfmarker} the last experiment for Italian , {vocalsound} are bad .
If we put everything , we improve a lot u the spectral use of the VTS
but the final result {vocalsound} are not still mmm , good {vocalsound} like the Wiener filter for example .
Maybe you {disfmarker} you are leaving in {disfmarker} in about two weeks Carmen .
what {disfmarker} what I would do is I {disfmarker} I {disfmarker} I would pick @ @ {comment} the best consolation , which you think ,
and {vocalsound} c create {disfmarker} create all the results for the whole database that you get to the final number as {disfmarker} as Sunil did it
and maybe also to {disfmarker} to write somehow a document where you describe your approach , and what you have done .
I was thinking to do that next week .
I wi I {disfmarker} I will do that next week .
