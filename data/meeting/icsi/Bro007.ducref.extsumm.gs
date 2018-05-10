Do you e um they mentioned {disfmarker} made some {disfmarker} uh when I was on the phone with Sunil they {disfmarker} they mentioned some weighting scheme that was used to evaluate all of these numbers .
um well it 's uh forty percent for TI - digit , sixty for all the SpeechDat - Cars ,
Um and we don't have the TI - digits part yet ?
Generally what you observe with TI - digits is that the result are very close whatever the {disfmarker} the system .
And so have you put all these numbers together into a single number representing that ?
Uh not yet .
OK so that should be pretty easy to do and that would be good {disfmarker}
then we could compare the two and say what was better .
actually OGI two is the {disfmarker} the baseline with the OGI features
but this is not exactly the result that they have because they 've {disfmarker} they 're still made some changes in the features
and {disfmarker} well but uh actually our results are better than their results .
Um I don't know by how much because they did not send us the new results
Uh OK so the one {disfmarker} one place where it looks like we 're messing things up a bit is in the highly mismatched Italian .
Uh so one of the ideas that you had mentioned last time was having a {disfmarker} a second um silence detection .
Um yeah so it seems f for the {disfmarker} the well match and mismatched condition
it 's uh it brings something .
Uh but uh actually apparently there are {disfmarker} there 's no room left for any silence detector at the server side because of the delay .
Oh we can't do it .
No .
So {disfmarker} you know how many words are in uh one of these test sets ?
Um it 's {disfmarker} it depends {disfmarker} well {disfmarker} the well matched is generally larger than the other sets
So uh i if {disfmarker} if you had uh just you know {disfmarker} to give an example , if you had uh um if you had a thousand words then uh a {disfmarker} a tenth of a percent would just be one word ,
See the {disfmarker} I mean the reason I 'm asking is {disfmarker} is {disfmarker} is we have all these small differences and I don't know how seriously to take them , right ?
So {disfmarker} so it wouldn't mean anything .
um so um yeah it be kind of {disfmarker} I 'd kind of like to know what the sizes of these test sets were actually .
well also just to know the numbers ,
so anyway if you could just mail out what those numbers are and then {disfmarker} then {disfmarker} that {disfmarker} that be great .
It 's only one small experiment to know what happened .
To apply also to in include also the {disfmarker} the silence of the MLP we have the fifty - six form and the silence to pick up the silence and we include those .
No they 're {disfmarker} I think there is this silence in addition to the um KLT outputs
The silence plus the KLT output ?
it is because we {disfmarker} we {disfmarker} we just keep uh we don't keep all the dimensions after the KLT
and we not s we are not sure if we pick {disfmarker} we have the silence .
So we try to add the silence also in addition to the {disfmarker} these twenty - eight dimensions .
so it looks to me {disfmarker} I guess the same {disfmarker}
given that we have to take the filt ones out of the {disfmarker} the running because of this delay problem {disfmarker} so it looks to me like the ones you said I agree are {disfmarker} are the ones to look at
but I just would add the {disfmarker} the {disfmarker} the second row one
so if we can know what {disfmarker} how many words are in each
and then um Dave uh Dave promised to get us something tomorrow which will be there as far as they 've gotten {vocalsound} Friday
and then we 'll operate with that
do we fix the system uh tomorrow or do we fix the system on Tuesday ?
I think we fixed on Tuesday , yeah .
I {disfmarker} Yeah , OK except that we do have to write it up .
so maybe what we do is we {disfmarker} we {disfmarker} we uh as soon as we get the data from them we start the training and so forth
but we start the write - up right away because as you say there {disfmarker} there 's only minor differences between these .
I think you {disfmarker} we could {disfmarker} we could start soon , yeah .
Write up something .
Yeah , and {disfmarker} and I {disfmarker} I would {disfmarker} you know , I would {disfmarker} I 'd kind of like to see it
maybe I can {disfmarker} I can edit it a bit
Well anyway , sounds like there 'll be a lot to do just to {vocalsound} work with our partners to fill out the tables {vocalsound} over the next uh next few days
Yes , so I mean {disfmarker} I think we have to actually get it done Tuesday
but my assumption is that we basically have to be done Tuesday .
Um so then next Thursday we can sort of have a little aftermath
and {disfmarker} and uh maybe next meeting we can start talking a little bit about where we want to go from here uh in terms of uh the research .
Um you know what things uh did you think of when you were uh doing this process that uh you just didn't really have time to adequately work on
so basically we will {disfmarker} I think we 'll try to {disfmarker} to focus on these three architectures
and {disfmarker} and perhaps I was thinking also a fourth one with just {disfmarker} just a single KLT
Yeah , I mean that would be pretty low maintenance to try it .
um Oh well the other thing I guess that I will say is that uh the digits that we 're gonna record momentarily is starting to get {disfmarker} are starting to get into a pretty good size collection
and um in addition to the SpeechDat stuff we will have those to work with really pretty soon now
so that 's {disfmarker} that 's another source of data .
uh today we 're looking at a number of uh things we 're trying
