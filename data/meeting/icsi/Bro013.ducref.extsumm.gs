Um . {vocalsound} {vocalsound} What are we talking about today ?
Uh , well , first there are perhaps these uh Meeting Recorder digits that we tested .
The {disfmarker} both the uh {disfmarker} {vocalsound} the SRI System and the oth
And for one thing that {disfmarker} that sure shows the {vocalsound} difference between having a lot of uh training data {vocalsound} or not ,
uh , the uh {disfmarker} {vocalsound} The best kind of number we have on the English uh {disfmarker} on near microphone only is {disfmarker} is uh three or four percent .
And uh it 's significantly better than that , using fairly simple front - ends {vocalsound} on {disfmarker} {vocalsound} on the uh {disfmarker} {vocalsound} uh , with the SRI system .
But that 's {disfmarker} that 's using uh a {disfmarker} a pretty huge amount of data ,
In fact , mostly not digits for the actual training the H M Ms whereas uh in this case we 're just using digits for training the H M
because it 's their very d huge , their huge system .
But {disfmarker} but uh what {disfmarker} what I think I 'd be interested to do given that , is that we {disfmarker} we should uh {vocalsound} take {disfmarker}
is to take some of these tandem things and feed it into the SRI system ,
But I guess the main point is the data because
Our back - end is {disfmarker} is fairly simple
but until now , well , the attempts to improve it or {disfmarker} have fail
I mean so to {disfmarker} {vocalsound} So there 's {disfmarker} there 's {disfmarker} there 's two things being affected .
I mean . One is that {disfmarker} that , you know , there 's something simple that 's wrong with the back - end .
We 've been playing a number of states
uh I {disfmarker} I don't know if he got to the point of playing with the uh number of Gaussians yet
But , yeah , so far he hadn't gotten any big improvement ,
but that 's all with the same amount of data which is pretty small .
So , yeah , we could retrain some of these tandem on {disfmarker} on huge {disfmarker}
Well , you could do that , but I 'm saying even with it not {disfmarker} with that part not retrained ,
just {disfmarker} just using {disfmarker} having the H M Ms {disfmarker} much better H M
perhaps it 's not related , the amount of data but the um recording conditions .
The {disfmarker} the fact that {disfmarker} the result with the tandem and Aurora system are {vocalsound} uh so much worse .
What {disfmarker} what is the problem that you 're trying to explain ?
I uh but I 'm {disfmarker} I 'm almost certain that it {disfmarker} it {disfmarker} {vocalsound} I mean , that it has to do with the um amount of training data .
It {disfmarker} it 's {disfmarker} it 's orders of magnitude off .
let 's see , in the {disfmarker} in these multi - train things did we include noisy data in the training ?
I mean , that could be hurting us actually , for the clean case .
You know , I don't think there 's anything magical here .
It 's , you know , we used a simple HTK system with a modest amount of data .
And this is a {disfmarker} a , you know , modern {vocalsound} uh system
uh has {disfmarker} has a lot of nice points to it .
So . I mean , the HTK is an older HTK , even .
But to me it just {disfmarker} it just meant a practical {vocalsound} point that um if we want to {vocalsound} publish results on digits that {disfmarker} that people pay {vocalsound} attention to we probably should uh {disfmarker}
Cuz we 've had the problem before that you get {disfmarker} show some {vocalsound} nice improvement on something that 's {disfmarker} that 's uh , uh {disfmarker} it seems like too large a number ,
and uh {vocalsound} uh people don't necessarily take it so seriously .
I mean , there 's {disfmarker} {vocalsound} even though it 's close - miked there 's still {disfmarker} there really is background noise .
Um . And {vocalsound} uh I suspect when the TI - digits were recorded if somebody fumbled or said something wrong or something that they probably made them take it over .
It was not {disfmarker} I mean there was no attempt to have it be realistic in any {disfmarker} in any sense at all .
TI - digit is {disfmarker} it 's very , very clean and it 's like studio recording
whereas these Meeting Recorder digits sometimes you have breath noise
Perhaps the point is that we 've been working on {vocalsound} is ,
yeah , we have put the um the good VAD in the system
and {vocalsound} it really makes a huge difference .
I think , yeah , this is perhaps one of the reason why our system was not {disfmarker} {vocalsound} not the best ,
because with the new VAD , it 's very {disfmarker} the results are similar to the France Telecom results and perhaps even better sometimes .
Uh . The problem is that it 's very big and {vocalsound} {vocalsound} we still have to think how to {disfmarker} where to put it
uh either some delay
and we {disfmarker} if we put it on the server side , it doesn't work ,
because on the server side features you already have LDA applied {vocalsound} from the f from the terminal side
and {vocalsound} so you accumulate the delay
So wha where did this good VAD come from ?
It 's um from OGI .
This is the one they had originally ?
Yeah , but they had to {pause} get rid of it because of the space ,
But the abso assumption is that we will be able to make a VAD that 's small and that works fine .
But the other thing is uh to use a different VAD entirely .
I {disfmarker} I don't know what the thinking was amongst the {disfmarker} the {disfmarker} the {vocalsound} the ETSI folk
but um if everybody agreed sure let 's use this VAD and take that out of there {disfmarker}
They just want , apparently {disfmarker} they don't want to fix the VAD because they think there is some interaction between feature extraction and {disfmarker} and VAD or frame dropping
But they still {vocalsound} want to {disfmarker} just to give some um {vocalsound} requirement for this VAD
because it 's {disfmarker} it will not be part of {disfmarker} they don't want it to be part of the standard .
So there just will be some requirements that are still not {disfmarker} uh not yet uh ready I think .
but I don't think we need to be stuck on using our or OGI 's {pause} VAD .
We could use somebody else 's if it 's smaller
You know , as long as it did the job .
Uh I designed a new {disfmarker} a new filter
because when I designed other filters with shorter delay from the LDA filters , {vocalsound} there was one filter with fif sixty millisecond delay and the other with ten milliseconds
and {vocalsound} uh Hynek suggested that both could have sixty - five sixty - s
Both should have sixty - five because {disfmarker}
You didn't gain anything , right ?
and uh it 's running .
Uh but the filter is of course closer to the reference filter .
Yeah , and then we 've started to work with this of um voiced - unvoiced stuff .
No , I w {vocalsound} I begin to play {vocalsound} with Matlab and to found some parameter robust for voiced - unvoiced decision .
And we {disfmarker} {vocalsound} they {disfmarker} we found that maybe w is a classical parameter , the {vocalsound} sq the variance {vocalsound} between the um FFT of the signal and the small spectrum of time {vocalsound} we {disfmarker} after the um mel filter bank .
And , well , is more or less robust .
Is good for clean speech .
So , basically we wa want to look at something like the ex the ex excitation signal and {disfmarker}
which are the variance of it and {disfmarker}
So now I wonder {disfmarker}
I know you want to get at something orthogonal from what you get with the smooth spectrum
Um . But if you were to really try and get a voiced - unvoiced , do you {disfmarker} do you want to totally ignore that ?
I mean , clearly a {disfmarker} a very big {disfmarker} very big cues {vocalsound} for voiced - unvoiced come from uh spectral slope and so on ,
Well , this would be {disfmarker} this would be perhaps an additional parameter ,
Yeah because when did noise clear {nonvocalsound} in these section is clear
I mean , {vocalsound} certainly if {vocalsound} you want to do good voiced - unvoiced detection , you need a few features .
But , you know , people look at {disfmarker} at slope and {vocalsound} uh first auto - correlation coefficient , divided by power .
Each {disfmarker} each feature is {vocalsound} by itself not enough .
Or maybe you could you just do it going through the P FFT 's figuring out some um probable {vocalsound} um harmonic structure .
yeah , it 's {disfmarker} it 's another problem .
If you look at this um spectrum ,
Is it {vocalsound} the mel - filters ?
and what we clearly see is that in some cases ,
and the {disfmarker} the harmonics are resolved by the f
Well , there are still appear after mel - filtering ,
and it happens {vocalsound} for high pitched voice because the width of the lower frequency mel - filters {vocalsound} is sometimes even smaller than the pitch .
so we were thinking to modify the mel - spectrum to have something that {disfmarker} that 's smoother on low frequencies .
What I was talking about was just , starting with the FFT
you could {disfmarker} you could uh do a very rough thing to estimate {disfmarker} estimate uh pitch .
And uh uh , given {disfmarker} you know , given that , uh {vocalsound} you could uh uh come up with some kind of estimate of how much of the low frequency energy was {disfmarker} was explained by {disfmarker} {vocalsound} by uh uh those harmonics .
It 's uh a variant on what you 're s what you 're doing .
But as you say it 's not that smooth here .
And {disfmarker} and so if you {disfmarker} {vocalsound} if you just you know subtracted off uh your guess of the harmonics then something like this would end up with {vocalsound} quite a bit lower energy in the first fifteen hundred hertz or so
What 's up with you ?
Um {vocalsound} our t I went to {vocalsound} talk with uh Mike Jordan this {disfmarker} this week
um {nonvocalsound} and uh {vocalsound} shared with him the ideas about um {vocalsound} extending the Larry Saul work
and um I asked him some questions about factorial H M
so like later down the line when {vocalsound} we 've come up with these {disfmarker} these feature detectors , how do we {disfmarker} {vocalsound} how do we uh {vocalsound} you know , uh model the time series that {disfmarker} that happens
um {vocalsound} {vocalsound} and {vocalsound} and we talked a little bit about {vocalsound} factorial H M Ms and how {vocalsound} um when you 're doing inference {disfmarker} or w when you 're doing recognition , there 's like simple Viterbi stuff that you can do for {disfmarker} {vocalsound} for these H M
and {vocalsound} the uh {disfmarker} {vocalsound} the great advantages that um a lot of times the factorial H M Ms don't {vocalsound} um {vocalsound} don't over - alert the problem
there they have a limited number of parameters and they focus directly on {disfmarker} {vocalsound} on uh the sub - problems at hand
So he {disfmarker} he seemed {disfmarker} he seemed like really interested in {disfmarker} {vocalsound} in um {disfmarker} in this
and said {disfmarker} said this is {disfmarker} this is something very do - able and can learn a lot
yeah , I 've just been {vocalsound} continue reading um about certain things .
thinking of maybe using um {vocalsound} um m modulation spectrum stuff to {vocalsound} um {disfmarker} as features um also in the {disfmarker} in the sub - bands
because {vocalsound} it seems like {vocalsound} the modulation um spectrum tells you a lot about the intelligibility of {disfmarker} of certain um words and stuff
so I 've been looking at Avendano 's work
uh I 'll try to write up in my next stat status report a nice description of {vocalsound} what he 's doing ,
but it 's {disfmarker} it 's an approach to deal with {vocalsound} reverberation or that {disfmarker} the aspect of his work that I 'm interested in
s so I 'm {disfmarker} I guess my first stab actually in continuing {vocalsound} his work is to um {vocalsound} re - implement this {disfmarker} this thing which um {vocalsound} changes the time and frequency resolutions
cuz he doesn't have code for me .
So that that 'll take some reading about the theory .
I don't really know the theory .
so the {disfmarker} the way I want to extend his work is make it able to deal with a time varying reverberation response
we don't really know {vocalsound} how fast the um {disfmarker} the reverberation response is varying the Meeting Recorder data
y you do {disfmarker} I think you read some of the {disfmarker} the zeros as O 's and some as zeros .
Is there a particular way we 're supposed to read them ?
Perhaps in the sheets there should be another sign for the {disfmarker}
I mean . I think people will do what they say .
I mean in digit recognition we 've done before , you have {disfmarker} you have two pronunciations for that value , " O " and " zero " .
No , they just write {disfmarker}
and {disfmarker} and people pronounce " O " or zero {disfmarker}
and you just {disfmarker} They just want people to read the digits as you ordinarily would
