So y you guys had a {disfmarker} a meeting with uh {disfmarker} with Hynek which I unfortunately had to miss .
So everybody knows what happened except me .
Well . Uh first we discussed about some of the points that I was addressing in the mail I sent last week .
About the um , well {disfmarker} the downsampling problem .
Uh and about the f the length of the filters
Was there any conclusion about that ?
Uh " try it " .
We should have a look first at , perhaps , {vocalsound} the modulation spectrum .
Um . {vocalsound} {vocalsound} So the i this idea of trying to find filters with shorter delays .
Um . We started to work with this .
And the third point um {vocalsound} {vocalsound} was the um ,
yeah , {vocalsound} the on - line normalization where ,
well , the recursion f recursion for the mean estimation {vocalsound} is a filter with some kind of delay
For this , the conclusion of Hynek was , well , " we can try it but {disfmarker} "
So basically that was {disfmarker} that 's {vocalsound} all we discussed about .
I mean I g I guess the key thing for me is {disfmarker} is figuring out how to better coordinate between the two sides
uh I was talking with Hynek about it later
and the {disfmarker} the {disfmarker} sort of had the sense sort of that {disfmarker} that neither group of people wanted to {disfmarker} to bother the other group too much .
But there was also problem {disfmarker} perhaps a problem of communication .
Now we will try to {disfmarker}
Just talk more .
but I think that {vocalsound} you were sort of waiting for them to {vocalsound} tell you that they had something for you
and {vocalsound} they were sort of waiting for you
and {disfmarker} and {disfmarker} and uh we ended up with this thing where they {disfmarker} they were filling up all of the possible latency themselves ,
Let 's {disfmarker} let 's , I mean , I think that as {disfmarker} as we said before that one of the things that we 're imagining is that uh there {disfmarker} there will be {vocalsound} uh in the system we end up with there 'll be something to explicitly uh uh do something about noise
in terms of uh I think they were using Ericsson 's {vocalsound} approach or something
Uh so Carmen is just looking at the Ericsson {disfmarker} Ericsson code .
Yeah , I modified it {disfmarker}
to take @ @ the first step the spectral subtraction .
But we haven't result until this moment .
But well , we are working in this also
So um I suggest actually now we {disfmarker} we {disfmarker} we sorta move on and {disfmarker} and hear what 's {disfmarker} what 's {disfmarker} what 's happening in {disfmarker} in other areas
like {vocalsound} what 's {disfmarker} what 's happening with your {vocalsound} investigations {vocalsound} about echos and so on .
Well um I haven't started writing the test yet , I 'm meeting with Adam today
um and he 's going t show me the scripts he has for um {vocalsound} {vocalsound} running recognition on mee Meeting Recorder digits .
I haven't asked Hynek for {disfmarker} for the {disfmarker} for his code yet .
Cuz I looked at uh Avendano 's thesis and {vocalsound} I don't really understand what he 's doing yet
but it {disfmarker} {vocalsound} it {disfmarker} it sounded like um {vocalsound} the channel normalization part {vocalsound} um of his thesis um {vocalsound} was done in a {disfmarker} a bit of I don't know what the word is , a {disfmarker} a bit of a rough way
he {disfmarker} he {disfmarker} it {disfmarker} it wasn't really fleshed out
but I {disfmarker} I 'm not sure if it 's {vocalsound} what I 'd wanna use
and maybe he did something that was {vocalsound} interesting for the test situation
I don't really understand what he 's doing yet .
Um . {comment} So continuing to um extend
Um . {vocalsound} And uh I don't know if we 've talked lately about the {disfmarker} the plans you 're developing that we talked about this morning
So they 're training up nets to try to recognize these acoustic features ?
But that 's uh uh all {disfmarker} that 's {disfmarker} is a {disfmarker} a certainly relevant {comment} {vocalsound} uh study
So I mean , there 's these issues of what are the {disfmarker} what are the variables that you use
and do you combine them using the soft " AND - OR " or you do something , you know , more complicated
and eh w why don't you tell us again about this {disfmarker} this database ?
that {disfmarker} people have done studies like that w way way back
I mean {vocalsound} I can't remember where {disfmarker} uh Wisconsin or someplace that used to have a big database of {disfmarker}
Um , {vocalsound} {vocalsound} researcher at A T - andT a while back that was studying , trying to do speech recognition from these kinds of features .
you mean when was {disfmarker} was Mark Randolph there , or {disfmarker} ?
Yeah he 's {disfmarker} he 's {disfmarker} he 's at Motorola now .
Is it the guy that was using the pattern of pressure on the tongue
But I know {disfmarker} I just remember it had to do with you know {vocalsound} uh positional parameters
and trying to m you know do speech recognition based on them .
So the only {disfmarker} the only uh hesitation I had about it since , I mean I haven't see the data is it sounds like it 's {disfmarker} it 's {vocalsound} continuous variables and a bunch of them .
I don't know how complicated it is to go from there {disfmarker}
What you really want are these binary {pause} labels , and just a few of them .
And maybe there 's a trivial mapping if you wanna do it
and it 's e but it {disfmarker}
I {disfmarker} I {disfmarker} I worry a little bit that this is a research project in itself ,
whereas um {vocalsound} if you did something instead that {disfmarker} like um having some manual annotation by {vocalsound} uh you know , linguistics students ,
this would {disfmarker} there 'd be a limited s set of things that you could do a as per our discussions with {disfmarker} with John before
Course then , that 's the other question is do you want binary variables .
Uh what 's next ?
I could say a little bit about w stuff I 've been playing with .
Um {vocalsound} so I wanted to do this experiment to see um {vocalsound} uh what happens if we try to uh improve the performance of the back - end recognizer for the Aurora task
and see how that affects things .
and then com and then uh optimize the b HTK system and run that again .
So look at the difference there
and then uh do the same thing for {vocalsound} the ICSI - OGI front - end .
Uh I 'm looking at the Italian right now .
One of the first things I thought of was the fact that they use {vocalsound} the same number of states for all of the models
and just looked at , you know , the number of phones in each one of the digits .
And so when I did that for the Italian digits , I got a number of states , ranging on the low end from nine to the high end , eighteen .
And so um {vocalsound} {vocalsound} their guess of eighteen states seems to be pretty well matched to the two longest words of the Italian digits ,
Um {vocalsound} {vocalsound} but for the {disfmarker} most of the words are sh much shorter .
So the majority of them wanna have nine states .
And so theirs are s sort of twice as long .
and it turns out that the longest words are actually the ones that do the best .
So um I 'm going to try to um create more word - specific {vocalsound} um uh prototype H M Ms to start training from .
Yeah so I 'll {disfmarker} I 'll , the next experiment I 'm gonna try is to just um you know create {vocalsound} uh models that seem to be more w matched to my guess about how long they should be .
I guess your plan for {disfmarker} You {disfmarker} you {disfmarker} you guys ' plan for the next {disfmarker} next week is {vocalsound} just continue on these {disfmarker} these same things we 've been talking about for Aurora and
I guess we can try to {vocalsound} have some kind of new baseline for next week perhaps .
with all these minor things {vocalsound} {vocalsound} modified .
You have a big list of {disfmarker} {vocalsound} of things to do .
Well that 's good .
