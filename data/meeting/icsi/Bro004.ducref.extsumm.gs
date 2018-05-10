So where are we on {disfmarker} {pause} on uh {vocalsound} {pause} our runs ?
Uh so . {pause} uh {disfmarker} We {disfmarker} So {pause} As I was already said , we {disfmarker} we mainly focused on uh four kind of features .
The PLP , the PLP with JRASTA , the MSG , and the MFCC from the baseline Aurora .
Uh , and we focused for the {disfmarker} the test part on the English and the Italian .
Um . We 've trained uh several neural networks on {disfmarker}
so {disfmarker} on the TI - digits English {pause} and on the Italian data
and also on the broad uh {pause} English uh French and uh Spanish databases .
and um , actually what we {disfmarker} we @ @ observed is that if the network is trained on the task data it works pretty well .
But actually we didn't train network on {pause} uh both types of data
We only did either task {disfmarker} task data or {pause} uh broad {pause} data .
The first testing is {pause} with task data {disfmarker}
The second test is trained on a single language um with broad database ,
but the same language as the t task data .
But for Italian we choose Spanish which {pause} we assume is close to Italian .
The third test is by using , um the three language database
And the fourth test is uh {pause} excluding from these three languages the language {pause} that is {pause} the task language .
That 's including the w the {disfmarker} {pause} the {disfmarker}
the one that it 's {disfmarker}
Yeah .
it 's the broad {pause} data .
uh . The error rate increase u of {disfmarker} of {disfmarker} of ten percent , relative .
And then when we jump to the multilingual data it 's uh it become worse
Twenty to {disfmarker} to thirty percent further .
So . This was for the PLP ,
For the PLP with JRASTA the {disfmarker} {pause} the {disfmarker} we {disfmarker}
This is quite the same {pause} tendency , {pause} with a slight increase of the error rate , {pause} uh if we go to {disfmarker} to TIMIT .
And then it 's {disfmarker} it gets worse with the multilingual .
There {disfmarker} there is a difference actually with {disfmarker} b between PLP and JRASTA
is that {pause} JRASTA {pause} seems to {pause} perform better with the highly mismatched {pause} condition {pause} but slightly {disfmarker} slightly worse {pause} for the well matched condition .
Uh {vocalsound} {vocalsound} Um now , what 's the noise condition {pause} um {pause} of the training data {disfmarker}
The noise condition is the same {disfmarker}
So there 's not a {pause} statistical {disfmarker} sta a strong st {pause} statistically different {pause} noise characteristic between {pause} uh the training and test
No these are the s s s same noises ,
At least {disfmarker} at least for the first {disfmarker} {pause} for the well - matched ,
Yeah , so for the Italian the results are {vocalsound} uh {pause} stranger
So what appears is that perhaps Spanish is {pause} not very close to Italian
because uh , well , {pause} when using the {disfmarker} the network trained only on Spanish it 's {disfmarker} {pause} the error rate is {pause} almost uh twice {pause} the baseline error rate .
There {disfmarker} there is {disfmarker} another difference , is that the noise {disfmarker} the noises are different .
Well , For {disfmarker} for the Italian part I mean
the {pause} uh {pause} the um {pause} networks are trained with noise from {pause} Aurora {disfmarker} TI - digits ,
And perhaps the noise are {pause} quite different from the noises {pause} in the speech that Italian .
but {pause} actually there is something important ,
is that {pause} um we made a lot of assumption concerning the on - line normalization
and we just noticed {pause} uh recently that {pause} uh the {pause} approach that we were using {pause} was not {pause} uh {pause} leading to very good results {pause} when we {pause} used the straight features to HTK .
So {pause} what we see that {disfmarker} is {disfmarker} there is that um {pause} uh the way we were doing this was not correct ,
When we use the networks {pause} our number are better that {pause} uh Pratibha results .
and {pause} basically , {pause} the first thing is the mmm , {pause} alpha uh {pause} value .
um , {pause} I used point five percent , {pause} which was the default value in the {disfmarker} {pause} in the programs here .
And Pratibha used five percent .
I assume that this was not important because {pause} uh previous results from {disfmarker} from Dan and {disfmarker} show that basically {pause} the {pause} both {disfmarker} both values g give the same {disfmarker} same {pause} uh results .
It was true on uh {pause} TI - digits but it 's not true on Italian .
Uh , second thing is the initialization of the {pause} stuff .
Actually , {pause} uh what we were doing is to start the recursion from the beginning of the {pause} utterance .
And using initial values that are the global mean and variances {pause} measured across the whole database .
And Pratibha did something different is
that he {disfmarker} uh she initialed the um values of the mean and variance {pause} by computing {pause} this on the {pause} twenty - five first frames of each utterance .
Mmm . There were other minor differences ,
So . {pause} Uh , I changed the code
uh and now we have a baseline that 's similar to the OGI baseline .
well , the {disfmarker} the {disfmarker} the networks are retaining with these new {pause} features .
OK , but I think that {pause} given the pressure of time we probably want to draw {disfmarker} because of that {pause} especially , we wanna draw some conclusions from this ,
and make some strong decisions for what we 're gonna do testing on before next week .
uh so , act actually we have discussed uh {pause} @ @ um , these {disfmarker}
and {disfmarker} {pause} and {pause} we were thinking perhaps that {pause} uh {pause} the way we use the tandem is not {disfmarker}
If we trained the networks on the {disfmarker} on {pause} a language and a t or a specific {pause} task ,
um , what we ask is {disfmarker} to the network {disfmarker} is to put the bound the decision boundaries somewhere in the space .
And uh {pause} mmm and ask the network to put one , {pause} at one side of the {disfmarker} for {disfmarker} for a particular phoneme at one side of the boundary {disfmarker} decision boundary
And {pause} so there is kind of reduction of the information there that 's not correct
because if we change task {pause} and if the phonemes are not in the same context in the new task , {pause} obviously the {pause} decision boundaries are not {disfmarker} {pause} should not be at the same {pause} place .
But the way the feature gives {disfmarker} The {disfmarker} the way the network gives the features is that it reduce completely the {disfmarker} {pause} it removes completely the information {disfmarker} {pause} a lot of information from the {disfmarker} the features {pause} by uh {pause} uh {pause} placing the decision boundaries at {pause} optimal places for {pause} one kind of {pause} data
So uh what we were thinking about is perhaps {pause} um one way {pause} to solve this problem is increase the number of {pause} outputs of the neural networks .
well , basically context dependent phonemes .
And once you {disfmarker} the other thing is that once you represent {disfmarker} start representing more and more context {pause} it is {pause} uh {pause} much more {pause} um specific {pause} to a particular task in language .
for instance you may have some kinds of contexts that will never occur {pause} in one language and will occur frequently in the other ,
the issue of getting enough training {pause} for a particular kind of context becomes harder .
We already actually don't have a huge amount of training data
the way we {disfmarker} we do it now is that we have a neural network
and {pause} basically {pause} the net network is trained almost to give binary decisions .
but it would still be even more of a binary decision .
That would be even {disfmarker} even more distinct of a binary decision .
I mean we {disfmarker} we could disagree about it at length
but the {disfmarker} the real thing is if you 're interested in it you 'll probably try it
and {disfmarker} {pause} and {pause} we 'll see .
Are there {disfmarker} is there {disfmarker} are there any H T K {pause} trainings {disfmarker} testings going on ?
I {disfmarker} I {disfmarker} I 'm trying the HTK with eh , {pause} PLP twelve on - line delta - delta and MSG filter {pause} together .
The combination , yeah .
But I haven't result {vocalsound} at this moment .
And {pause} we {pause} plan to work also on the idea of using both {pause} features {pause} and net outputs .
So we have um {pause} come up with um {pause} different kind of {pause} broad phonetic categories .
And we have {disfmarker} Basically we have three {pause} types of broad phonetic classes .
Twenty - seven broad classes .
So it 's {disfmarker} Well , it 's basically a standard net with fewer {pause} classes .
But including the features .
because Well , I believe the effect that {disfmarker} of {disfmarker} of too reducing too much the information is {pause} basically {disfmarker} basically what happens
But you think if you include that {pause} plus the other features ,
And then uh , just to remind me , all of that goes {pause} into {disfmarker} uh , that all of that is transformed by uh , uh , K - KL or something , or {disfmarker} ?
one single KL to transform everything
So there 's a question of whether you would {disfmarker}
Whether you would transform together or just one .
Might wanna try it both ways .
So I think , you know , we need to {pause} choose the {disfmarker} choose the experiments carefully ,
so we can get uh key {disfmarker} {pause} key questions answered {pause} uh before then
so I think Hynek will be here Monday .
So they 're {disfmarker} they 're doing {pause} the {disfmarker} the VAD
I guess they mean voice activity detection So again , it 's the silence {disfmarker}
So um Their uh {disfmarker} {pause} the results look pretty good .
So um I think that it 's {disfmarker} it 's nice to do that in this
because in fact , it 's gonna give a better word error result
and therefore will help within an evaluation .
Um . Uh , as you know , part of the problem with evaluation right now is that the {pause} word models are pretty bad
and nobody wants {disfmarker} {pause} has {disfmarker} has approached improving them .
So um The question we 're gonna wanna go {pause} through next week when Hynek shows up I guess is given that we 've been {disfmarker}
we 're uh looking at {pause} uh ,
by then I guess , combinations of features and multi - band
Uh , and we 've been looking at {pause} cross - language , cross {pause} task {pause} issues .
But they 've been looking at uh {disfmarker} {pause} at these issues .
At the on - line normalization and the uh {pause} voice activity detection .
And I guess when he comes here we 're gonna have to start deciding about {pause} um what do we choose {pause} from what we 've looked at {pause} to um blend with {pause} some group of things in what they 've looked at
And once we choose that , {pause} how do we split up the {pause} effort ?
We have the {pause} little tiny IBM machine {vocalsound} {pause} that might someday grow up to be a big {pause} IBM machine .
It 's got s slots for eight ,
I think we only got two so far ,
Yeah , I mean you can check with uh {pause} Dave Johnson .
and {disfmarker} {pause} Somebody could do {disfmarker} {pause} you know , uh , check out {pause} uh the multi - threading {pause} libraries .
I mean , I guess the prudent thing to do would be for somebody to do the work on {disfmarker} {pause} on getting our code running {pause} on that machine with two processors {pause} even though there aren't five or eight .
There 's {disfmarker} there 's {disfmarker} there 's gonna be debugging hassles
and then we 'd be set for when we did have five or eight , to have it really be useful .
But . {pause} Notice how I said somebody
and {vocalsound} turned my head your direction .
That 's one thing you don't get in these recordings .
so , {pause} um I could try to get {pause} um the train the neural network trainings or the HTK stuff running under Linux , and to start with I 'm {pause} wondering which one I should pick first .
Uh , probably the neural net
example {pause} uh when we go from TI - digits training to {pause} TIMIT training {pause} uh we lose {pause} uh around ten percent ,
