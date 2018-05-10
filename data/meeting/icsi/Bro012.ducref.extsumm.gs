where this came up was that uh I was showing off these wave forms that we have on the web
and {disfmarker} and uh {vocalsound} I just sort of hadn't noticed this , but that {disfmarker} the major , major component in the wave {disfmarker} in the second wave form in that pair of wave forms is actually the air conditioner .
I {vocalsound} {vocalsound} I have to be more careful about using that as a {disfmarker} as a {disfmarker} {vocalsound} as a good illustration ,
uh , in fact it 's not , of uh {disfmarker} {vocalsound} of the effects of room reverberation .
It is isn't a bad illustration of the effects of uh room noise . {vocalsound} on {disfmarker} on uh some mikes
OK , so uh {vocalsound} had some interesting mail from uh Dan Ellis .
um The other thing that I don't know the answer to , but when people are using Feacalc here , uh whether they 're using it with the high - pass filter option or not .
So when we 're doing all these things using our software there is {disfmarker}
and {vocalsound} it 's {disfmarker} it 's pretty {disfmarker} it 's not a very severe
filter . Doesn't affect speech frequencies ,
So . We {disfmarker} we {disfmarker} we want to go and check that in i for anything that we 're going to use the P D
but if we do make use of the cheap mikes , {vocalsound} uh we want to be sure to do that {disfmarker} that filtering before we {vocalsound} process it .
since I was talking about reverberation and showing this thing that was noise , it wasn't a good match ,
So I think we 'll change our {disfmarker} our picture on the web , when we 're @ @ .
um {vocalsound} Another , I was thinking of was um {vocalsound} taking some spectral slices ,
and look at the spectrum or cepstrum that you get out of there ,
Well , I mean um all the recognizers look at frames .
at one point in time or uh twenty {disfmarker} over twenty milliseconds or something , {vocalsound} you have a spectrum or a cepstrum .
Uh . Since the last meeting we 've {disfmarker} we 've tried to put together um {vocalsound} the clean low - pass um downsampling , upsampling , I mean ,
Uh the new filter that 's replacing the LDA filters ,
and then we have results that are not um {vocalsound} {vocalsound} very impressive .
Well , there is no {vocalsound} real improvement .
But it 's not wer worse
and it 's better {disfmarker} better latency ,
It seems better when we look at the mismatched case
but {vocalsound} I think we are like {disfmarker} like cheated here by the {disfmarker} th this problem
that {vocalsound} uh in some cases when you modify slight {disfmarker} slightly modify the initial condition you end up {vocalsound} completely somewhere air somewhere else in the {disfmarker} in the space , {vocalsound} the parameters .
I don't {disfmarker} I don't think it means that the new system is more robust
but I mean {vocalsound} from this se seventy - eight um percent recognition rate system , {vocalsound} I could change the transition probabilities for the {disfmarker} the first HMM and {pause} it will end up to eighty - nine also .
By using point five instead of point six , point four {vocalsound} as in the {disfmarker} the HTK script .
Yeah I looked at um {disfmarker} {vocalsound} looked at the results when Stephane did that
and it 's {disfmarker} it 's really wo really happens .
and it causes ten percent difference in the word error rate .
I mean th the only difference is you change the self - loop transition probability by a tenth of a percent
and n not tenth of a percent , one tenth ,
it 's just very um {disfmarker}
you know get stuck in some local minimum
and this thing throws you out of it I guess .
Well , what 's {disfmarker} what are {disfmarker} according to the rules what {disfmarker} what are we supposed to do about the transition probabilities ?
I think you 're not allowed to {disfmarker}
That 's supposed to be point six , for the self - loop .
But changing it to point five I think is {disfmarker}
which gives you much better results ,
but that 's {vocalsound} not allowed .
Yeah , but even if you use point five , I 'm not sure it will always give you the better results
Right . We only tested it on the {disfmarker} the medium mismatch ,
Somebody , I think it was Morgan , suggested at the last meeting that I actually count to see {vocalsound} how many parameters and how many frames .
And there are uh almost one point eight million frames of training data
and less than forty thousand parameters in the baseline system .
And that {disfmarker} that says that we could have lots more parameters actually .
For {disfmarker} for all of the digit models , they end up at three mixtures per state .
And so I just did a quick experiment , where I changed it so it went to four
and um {vocalsound} it it {disfmarker} it didn't have a r any significant effect at the uh medium mismatch and high mismatch cases
Uh so I 'm r gonna run that again but {vocalsound} um with many more uh mixtures per state .
but one one thing I {disfmarker} I wanted to check out before I increased the um {vocalsound} number of mixtures per state was {vocalsound} uh {vocalsound} in their {vocalsound} default training script they do an initial set of three re - estimations
and then they do seven iterations then the add mixtures
and they do another seven then they add mixtures
then they do a final set of seven and they quit .
and it also makes the experiments go take a really long time
And so one of the things I did was I compiled HTK for the Linux {vocalsound} machines
cuz we have this one from IBM that 's got like five processors in it ?
and so now I 'm {disfmarker} you can run stuff on that and that really helps a lot because now we 've got {vocalsound} you know , extra machines that we can use for compute .
And if {disfmarker} I 'm do running an experiment right now where I 'm changing the number of iterations ? {vocalsound} from seven to three ?
just to see how it affects the baseline system .
And if it 's not a {disfmarker} a huge difference from running with seven iterations , {vocalsound} um , you know , we should be able to get a lot more experiments done .
And so . I 'll let you know what {disfmarker} what happens with that .
Yeah , actually the way the final score is computed is quite funny .
It 's not a mean of word error rate .
It 's not a weighted mean of word error rate ,
it 's a weighted mean of improvements .
Which means that {vocalsound} actually the weight on the well - matched is {disfmarker}
Well I well what what {disfmarker} What happened is that if you have a small improvement or a small if on the well - matched case {vocalsound} it will have uh huge influence on the improvement compared to the reference
because the reference system is {disfmarker} is {disfmarker} is quite good for {disfmarker} for the well - ma well - matched case also .
So they do improvement in terms of uh accuracy ? rather than word error rate ?
No , it 's compared to the word er it 's improvement on the word error rate ,
So if you have uh ten percent error and you get five percent absolute uh {vocalsound} improvement then that 's fifty percent .
OK . So what you 're saying then is that if it 's something that has a small word error rate , {vocalsound} then uh a {disfmarker} even a relatively small improvement on it , in absolute terms , {vocalsound} will show up as quite {disfmarker} quite large in this .
But yeah that 's {disfmarker} that 's {disfmarker} it 's the notion of relative improvement .
That 's why I 've been saying we should be looking at word error rate uh and {disfmarker} and not {disfmarker} not at {vocalsound} at accuracies .
I mean uh we probably should have standardized on that all the way through .
but you 're {disfmarker} but when you look at the numbers , your sense of the relative size of things is quite different .
Well anyway
Yeah . So it hurts a little bit on the well - match
No , point six {comment} uh percent absolute on Italian {disfmarker}
Uh well we start from ninety - four point sixty - four ,
and we go to ninety - four point O four .
For Finnish , we start to ninety - three point eight - four
and we go to ninety - three point seventy - four .
And for Spanish we are {disfmarker} we were at ninety - five point O five
and we go to ninety - three - s point sixty one .
OK , so we are getting hurt somewhat .
but the filter {disfmarker} So the filter with the shorter delay hurts on Italian well - matched ,
Uh . Do the {disfmarker} does the new filter make things uh better or worse for the other cases ?
Doesn't hurt , but doesn't get a little better , or something .
Um . What I was asking , though , is uh {disfmarker} are {disfmarker} what 's {disfmarker} what 's the level of communication with uh {vocalsound} the O G I gang now , about this
Well , we are exchanging mail as soon as we {disfmarker} {vocalsound} we have significant results .
For the moment , they are working on integrating {vocalsound} the um {vocalsound} spectral subtraction apparently from Ericsson .
We are working on our side on other things like {vocalsound} uh also trying a sup spectral subtraction
but of {disfmarker} of our own , I mean , another {vocalsound} spectral substraction .
Is there any further discussion about this {disfmarker} this idea of {disfmarker} of having some sort of source code control ?
Well . For the moment they 're {disfmarker}
There is this Eurospeech deadline ,
Sounds like a great idea
but {disfmarker} but I think that {disfmarker} that um {vocalsound} he 's saying people are sort of scrambling for a Eurospeech deadline .
But that 'll be uh , uh done in a week .
So , maybe after {vocalsound} this next one .
Yeah . So , I mean , I {disfmarker} I think that you could certainly start looking at {disfmarker} at the issue
uh but {disfmarker} but uh {vocalsound} I think it 's probably , on s from what Stephane is saying , it 's {disfmarker} it 's unlikely to get sort of active participation from the two sides until after they 've {disfmarker}
but I could {pause} try to look into like this uh CVS over the web .
That seems to be a very popular {vocalsound} way of {pause} people distributing changes and {disfmarker} over , you know , multiple sites and things
so maybe {vocalsound} if I can figure out how do that easily and then pass the information on to everybody so that it 's {vocalsound} you know , as easy to do as possible
and {disfmarker} and people don't {disfmarker} it won't interfere with {comment} their regular work ,
And if you 're interested in using CVS , I 've set it up here ,
so maybe I can ask you some questions .
So . I 'll be away tomorrow and Monday but I 'll be back on Tuesday or Wednesday .
Dave , the other thing , actually , is {disfmarker} is this business about this wave form .
Maybe you and I can talk a little bit at some point about {vocalsound} coming up with a better {vocalsound} uh demonstration of the effects of reverberation for our web page ,
It made a good {disfmarker} good audio demonstration because when we could play that clip the {disfmarker} the {disfmarker} the really {vocalsound} obvious difference is that you can hear two voices and {disfmarker} {vocalsound} {vocalsound} in the second one and only hear {disfmarker}
but I mean you can't {disfmarker} when you play it back in a room with a {disfmarker} you know a big room , {vocalsound} nobody can hear that difference really .
But for the {disfmarker} the visual , just , you know , I 'd like to have uh {vocalsound} uh , you know , the spectrogram again ,
The other thing that we had in there that I didn't like was that um {vocalsound} the most obvious characteristic of the difference uh when you listen to it is that there 's a second voice ,
and the {disfmarker} the {disfmarker} the {disfmarker} the {disfmarker} the uh {vocalsound} cuts that we have there actually don't correspond to the full wave form .
But {vocalsound} it {disfmarker} it 's um {disfmarker} {vocalsound} it 's the first six seconds or something {vocalsound} of it
and it 's in {vocalsound} the seventh or eighth second or something where @ @ the second voice comes in .
So we {disfmarker} we would like to actually see {vocalsound} the voice coming in , too , I think ,
Well . I start {disfmarker} we started to work on spectral subtraction .
And {vocalsound} um {vocalsound} the preliminary results were very bad .
So the thing that we did is just to add spectral subtraction before this , the Wall uh process , which contains LDA on - line normalization .
And it hurts uh a lot .
Can I ask a , I mean {disfmarker} a sort of top - level question ,
which is {vocalsound} um " if {disfmarker} if most of what the OGI folk are working with is trying to {vocalsound} integrate this other {disfmarker} other uh spectral subtraction , {vocalsound} why are we worrying about it ? "
It 's just uh {disfmarker} Well it 's another {disfmarker}
They are trying to u to use the um {disfmarker} {vocalsound} the Ericsson
and we 're trying to use something {disfmarker} something else .
And what they did at OGI is just {vocalsound} uh they don't use on - line normalization , for the moment , on spectral subtraction
I think as soon as they will try on - line normalization {vocalsound} there will be a problem .
So yeah , we 're working on the same thing but {vocalsound} I think
with different {disfmarker} different system
Intellectually it 's interesting to work on things th uh one way or the other
but I 'm {disfmarker} I 'm just wondering if um {disfmarker} {vocalsound} on the list of things that there are to do ,
if there are things that we won't do because {vocalsound} we 've got two groups doing the same thing .
Just {disfmarker} just asking .
Do you remember when the next meeting is supposed to be ?
It 's uh in June .
Um . Yeah , the other thing is that you saw that {disfmarker} that mail about uh the VAD {disfmarker} V A Ds performing quite differently ?
This {disfmarker} there was this experiment of uh " what if we just take the baseline ? "
and you inc incorporate the different V A
And it looks like the {disfmarker} the French VAD is actually uh better {disfmarker} significantly better .
Yeah but I don't know which VAD they use .
It 's Pratibha that {disfmarker} that did this experiment .
Um . We should ask which VAD she used .
He {disfmarker} Actually , I think that he say with the good VAD of {disfmarker} from OGI
I mean it was enough better that {disfmarker} that it would {vocalsound} uh account for a fair amount of the difference between our performance , actually .
So if they have a better one , we should use it .
H Hynek will be back in town uh the week after next ,
back {disfmarker} back in the country .
And start {disfmarker} start organizing uh {vocalsound} more visits and connections and so forth ,
working towards June .
Also is Stephane was thinking that {vocalsound} maybe it was useful to f to think about uh {vocalsound} voiced - unvoiced {disfmarker}
Yeah , my feeling is that um actually {vocalsound} when we look at all the proposals , ev everybody is still using some kind of spectral envelope
No use of pitch uh basically .
but to look at the um fine {disfmarker} at the {disfmarker} at the high re high resolution spectrum .
Cuz I have a feeling that {vocalsound} when we look {disfmarker} when we look at the {disfmarker} just at the envelope there is no way you can tell if it 's voiced and unvoiced ,
Um yeah , so yeah , I think if we try to develop a second stream
well , there would be one stream that is the envelope and the second , it could be interesting to have
that 's {disfmarker} something that 's more related to the fine structure of the spectrum .
well , voiced - speech detector , that 's working on {disfmarker} on the FFT
Larry Saul could be an idea .
We were are thinking about just {vocalsound} kind of uh taking the spectrum
and computing the variance of {disfmarker} of the high resolution spectrum {vocalsound} and things like this .
Uh we had a guy here some years ago who did some work on {vocalsound} um {vocalsound} making use of voicing information uh to {vocalsound} help in reducing the noise .
So what he was doing is basically y you {disfmarker} {vocalsound} you do estimate the pitch .
or you estimate fine harmonic structure ,
i if there is strong harmonic structure , {vocalsound} you can throw away stuff that 's {disfmarker} that 's non - harmonic .
And that {disfmarker} that is another way of getting rid of part of the noise
brings in a little more information than just spectral subtraction .
And he had some {disfmarker} I mean , he did that sort of in combination with RASTA .
and {disfmarker} and got some {disfmarker} some decent results doing that .
So that {disfmarker} that 's another {disfmarker} another way .
Yeah , that 's a good idea .
Because , yeah , well , spectral subtraction is good
and we could u we could use the fine structure to {disfmarker} to have a better estimate of the noise
but {vocalsound} still there is this issue with spectral subtraction that it seems to increase the variance of {disfmarker} of {disfmarker} of
Well it 's this musical noise which is annoying if you d you do some kind of on - line normalization after .
Well . Spectral subtraction and on - line normalization don't seem to {disfmarker} to go together very well .
In fact if you get {disfmarker} if you go into uh {disfmarker} a uh harmonics - related thing {vocalsound} it 's definitely going to be different than what they 're doing
should have some interesting properties in noise .
