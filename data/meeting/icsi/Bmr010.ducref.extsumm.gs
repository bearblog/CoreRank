Well , um , I can {pause} give you an update on the {pause} transcription effort .
Uh , maybe {nonvocalsound} raise the issue of microphone , uh , um procedures
with reference to the {pause} cleanliness of the recordings .
The {disfmarker} we have great {disfmarker} great , uh , p steps forward in terms of the nonspeech - speech pre - segmenting of the signal .
Well , it 's a {disfmarker} it 's a big improvement .
Um , so , uh , what we basically did so far was using the mixed file to {disfmarker} to detect s speech or nonspeech {pause} portions in that .
And what I did so far is I just used our old Munich system ,
which is an HMM - ba based system with Gaussian mixtures for s speech and nonspeech .
And it was a system which used only one Gaussian for silence and one Gaussian for speech .
And now I added , uh , multi - mixture possibility for {disfmarker} {vocalsound} for speech and nonspeech .
And I did some training on {disfmarker} on one dialogue , which was transcribed by {disfmarker}
Yeah . We {disfmarker} we did a nons s speech - nonspeech transcription .
And I did some pre - segmentations for {disfmarker} for Jane .
Uh , they {disfmarker} they think it 's a terrific improvement .
And I 'm not sure how good they are or what {disfmarker} what the transcribers say .
So I saw that there were loud {disfmarker} loudly speaking speakers and quietly speaking speakers .
And so I did two mixtures , one for the loud speakers and one for the quiet speakers .
It 's just our {disfmarker} our old Munich , uh , loudness - based spectrum
on mel scale twenty {disfmarker} twenty critical bands and then loudness .
And four additional features , which is energy , loudness , modified loudness , and zero crossing rate .
You can specify {vocalsound} the minimum length of speech or {disfmarker} and silence portions which you want .
basically changing the minimum {disfmarker} minimum {pause} length for s for silence
to have more or less , uh , silence portions in inserted .
Right . So this would work well for , uh , pauses and utterance boundaries and things like that .
But {nonvocalsound} it {disfmarker} it saves so much time {disfmarker} the {disfmarker} the {nonvocalsound} transcribers
Is there a {disfmarker} a transformation , uh , like principal components transformation or something ?
No . W w we {disfmarker} originally we did that
yeah , for our {disfmarker} for our recognizer in Munich {disfmarker}
we saw that w it 's {disfmarker} it 's not {disfmarker} it 's not so necessary .
It {disfmarker} it works as well f with {disfmarker} with {disfmarker} without , uh , a LDA or something .
because at present , {nonvocalsound} {vocalsound} um , because {nonvocalsound} of the limitations of {vocalsound} th the interface we 're using ,
overlaps are , uh , not being {nonvocalsound} encoded by {nonvocalsound} the transcribers in as complete {nonvocalsound} and , uh , detailed a way as it might be ,
So we don't have start and end points {nonvocalsound} at each point where there 's an overlap .
We just have the {disfmarker} the {nonvocalsound} overlaps {nonvocalsound} encoded in a simple bin .
Well , OK . So {nonvocalsound} @ @ the limits of the {nonvocalsound} over of {disfmarker} of the interface are {vocalsound} such that we were {disfmarker} at this meeting we were entertaining how we might either expand {nonvocalsound} the {disfmarker} the {vocalsound} interface or find other tools which already {pause} do what would be useful .
Because what would ultimately be , um , ideal in my {disfmarker} my view
and I think {disfmarker} I mean , I had the sense that it was consensus ,
is that , um , a thorough - going musical score notation would be {nonvocalsound} the best way to go .
Because {nonvocalsound} you can have multiple channels ,
there 's a single time - line ,
it 's very clear , flexible , and all those nice things .
Susanne Bur - Burger , who is at se CMU , he wa who was formally at {disfmarker} in Munich and w and is now at {disfmarker} with CMU ,
she said she has something
which she uses to do eight channels , uh , trans transliterations ,
Well , maybe we should get it
and if it 's good enough we 'll arrange Windows machines to be available .
this {disfmarker} this is called Praat , PRAAT , {nonvocalsound} which I guess means spee speech in Dutch or something .
No , no . Praat isn't {disfmarker} Praat 's multi - platform .
What our decision was is that {pause} we 'll go ahead with what we have with a not very fine time scale on the overlaps .
And {disfmarker} and I was just thinking that , um , {vocalsound} if it were possible to bring that in , like , {vocalsound} you know , this week ,
then {nonvocalsound} when they 're encoding the overlaps {nonvocalsound} it would be nice for them to be able to specify when {disfmarker} you know , the start points and end points of overlaps .
uh Th - they 're {nonvocalsound} making really quick progress .
the hack to {vocalsound} preserve the overlaps {nonvocalsound} better would be one which creates different output files for each channel ,
which then {nonvocalsound} would also serve Liz 's request {pause} of having ,
separable , uh , cleanly , easily separable ,
uh , transcript tied to a single channel , uh , audio .
And Dan Ellis 's hack handles the , {vocalsound} um , choice {nonvocalsound} {disfmarker} the ability to choose different waveforms {vocalsound} from moment to moment .
And {disfmarker} and , um , Dan Ellis 's hack already allows them to be {nonvocalsound} able to display {vocalsound} different {nonvocalsound} waveforms to clarify overlaps and things ,
No . They can only display one ,
Well , {vocalsound} uh , yes , but {nonvocalsound} what I mean is {pause} that , uh , from the transcriber 's {nonvocalsound} perspective , uh , those {nonvocalsound} two functions are separate .
Oh , we should definitely get with them then ,
They {vocalsound} seem to want to {pause} get absolutely clear on standards for {disfmarker} transcription standards and so forth with {disfmarker} with us .
Have , uh , folks from NIST been in contact with you ?
agree upon a format .
I 'm keeping the conventions {pause} absolutely {pause} as simple {nonvocalsound} as possible .
and Dan Gel - and Dave Gelbart is interested in pursuing the aspect {nonvocalsound} of using amplitude {nonvocalsound} as a {disfmarker} a {disfmarker} a {disfmarker} as a basis for the separation .
Cross - correlation .
I had mentioned this a couple times before , the c the commercial devices that do , uh , {vocalsound} uh , voice , uh {disfmarker} you know , active miking ,
basically look at the amp at the energy at each of the mikes .
And {disfmarker} and you basically compare the energy here to {vocalsound} some function of all of the mikes .
by doing that , you know , rather than setting any , uh , absolute threshold , you actually can do pretty good , uh , selection of who {disfmarker} who 's talking .
Cuz there is one thing that we don't have right now and that is the automatic , um , channel identifier .
That {disfmarker} that , you know , that would g help in terms of encoding of overlaps .
The {disfmarker} the transcribers would have less , uh , disentangling to do {pause} if that were available .
OK . What {disfmarker} what are the different , uh , classes to {disfmarker} to code , uh , the {disfmarker} the overlap , you will use ?
so types of overlap ?
it {nonvocalsound} i the {disfmarker} it 's basically a two - tiered structure where the first one is whether {nonvocalsound} the person who 's interrupted continues or not .
And then below that there 're {nonvocalsound} subcategories , uh , that have more to do with , {nonvocalsound} you know , is it , {vocalsound} uh , simply {nonvocalsound} backchannel
or is {nonvocalsound} it , um , someone completing someone else 's thought ,
or is it someone in introducing a new thought .
And I hope that if we do a forced alignment with the close - talking mike , that will be enough to recover at least some of the time the time information of when the overlap occurred .
Well , let 's {disfmarker} why don't we talk about microphone issues ?
But I {disfmarker} I think that it {disfmarker} it doesn't hurt , uh , the naturalness of the situation to try to have people {pause} wear the microphones properly , if possible ,
so one thing is that I did look on Sony 's for a replacement for the mikes {disfmarker} {vocalsound} for the head m head - worn ones
cuz they 're so uncomfortable .
So , anything to reduce breathing is {disfmarker} is {disfmarker} is a good thing .
It seemed to me when I was using Dragon that it was really microphone placement helped an {disfmarker} in , uh {disfmarker} an enormous amount .
So you want it enough to the side so that when you exhale through your nose , it doesn't {disfmarker} the wind doesn't hit the mike .
And then just close enough so that you get good volume .
One more remark , uh , concerning the SRI recognizer .
It is useful to transcribe and then ultimately train models for things like breath ,
and also laughter is very , very frequent and important to {disfmarker} {vocalsound} to model .
They 're putting {disfmarker} Eh , so in curly brackets they put " inhale " or " breath " .
It {disfmarker} they {disfmarker} and then in curly brackets they say " laughter " .
Well , the thing that you {disfmarker} is hard to deal with is whe {vocalsound} when they speak while laughing .
The other thing we could do , actually , uh , is , uh , use them for a more detailed analysis of the overlaps .
Well , you know , and I also thought , y Liz has this , eh , you know , and I do also , this {disfmarker} this interest in the types of overlaps that are involved .
These people would be {nonvocalsound} great choices for doing coding of that type if we wanted ,
I think it would also be interesting to have , uh , a couple of the meetings have more than one transcriber do ,
cuz I 'm curious about inter - annotator agreement .
because , uh , I have the results , eh , of the study of different energy without the law length .
the other , uh {disfmarker} the {disfmarker} the last w uh , meeting {disfmarker}
we have problem to {disfmarker} with the {disfmarker} {vocalsound} with {disfmarker} with the parameter {disfmarker}
with the representations of parameter ,
because the {disfmarker} the valleys and the peaks in the signal , eh , look like , eh , it doesn't follow to the {disfmarker} to the energy in the signal .
And it was a problem , uh , with the scale .
Eh , and I {disfmarker} I change the scale and we can see the {disfmarker} the variance .
But the bottom line is it 's still not , uh , separating out very well .
but {disfmarker} {vocalsound} but you don't want to keep , uh {disfmarker} keep knocking at it if it 's {disfmarker} if you 're not getting any {disfmarker} any result with that .
But , I mean , the other things that we talked about is , uh , {vocalsound} pitch - related things and harmonicity - related things ,
a completely different tack on it wou is the one that was suggested , uh , by your colleagues in Spain ,
which is to say , don't worry so much about the , uh , features .
That is to say , use , you know , as {disfmarker} as you 're doing with the speech , uh , nonspeech , use some very general features .
And , uh , then , uh , look at it more from the aspect of modeling .
You know , have a {disfmarker} have a couple Markov models
and , uh , try to indi try to determine , you know , w when is th when are you in an overlap , when are you not in an overlap .
And let the , uh , uh , statistical system {pause} determine what 's the right way to look at the data .
And , I {disfmarker} I have prepared the {disfmarker} the pitch tracker now .
And I hope the {disfmarker} the next week I will have , eh , some results and we {disfmarker} we will show {disfmarker} we will see , eh , the {disfmarker} the parameter {disfmarker} the pitch , {vocalsound} eh , tracking in {disfmarker} with the program .
So you have , uh {disfmarker} you have , {vocalsound} uh , nonspeech , single - person speech , and multiple - person speech ?
And then you have a Markov model for each ?
I {disfmarker} I thought about , uh , adding , uh , uh , another class too .
So far , um , uh , Jose has {disfmarker} has been {disfmarker}
uh , the {disfmarker} has {disfmarker} has , uh , been exploring , uh , e largely the energy issue
as with a lot of things , it is not {disfmarker} uh , like this , it 's not as simple as it sounds .
And then there 's , you know {disfmarker} Is it energy ? Is it log energy ? Is it LPC residual energy ? Is it {disfmarker} is it {disfmarker} {vocalsound} is it , uh , delta of those things ?
Should there be a long window for the {vocalsound} normalizing factor and a short window for what you 're looking at ?
and {disfmarker} and so far at least has not come up with {vocalsound} any combination that really gave you an indicator .
but it may be {disfmarker} given that you have a limited time here , it {disfmarker} it just may not be the best thing to {disfmarker} {vocalsound} to {disfmarker} to focus on for the remaining of it .
But it seems like if we just wanna get something to work ,
that , uh , their suggestion of {disfmarker} of {disfmarker}
Th - they were suggesting going to Markov models ,
uh , but in addition there 's an expansion of what Javier did .
And one of those things , looking at the statistical component ,
even if the features that you give it are maybe not ideal for it , it 's just sort of this general filter bank
But , eh , what did you think about the possibility of using the Javier software ?
eh , using the {disfmarker} the mark , eh , by hand , eh , eh , to distinguish be mmm , to train overlapping zone and speech zone . I mean ,
But it 's possible with my segmentation by hand {pause} that we have information about the {disfmarker} the overlapping ,
Right . So if we {disfmarker} if we fed the hand - segmentation to Javier 's and it doesn't work , then we know something 's wrong .
Yeah . I think that 's probably worthwhile doing .
