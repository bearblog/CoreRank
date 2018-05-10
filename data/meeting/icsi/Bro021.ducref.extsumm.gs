Let 's see , maybe we should just get a list of items {disfmarker}
I guess there 's the usual {pause} updates ,
everybody going around and saying , uh , you know , what they 're working on ,
the things that happened the last week .
Uh , do you want to start , Stephane ?
Well , the first thing maybe is that the p Eurospeech paper is , uh , accepted .
So it 's the paper that describe basically the , um , system that were proposed for the {pause} Aurora .
So and the , fff {comment} comments seems {disfmarker} from the reviewer are good .
well , I 've been working on {disfmarker} on t mainly on on - line normalization this week .
Uh , I 've been trying different {disfmarker} slightly {disfmarker} slightly different approaches .
This actually don't s doesn't seem to help ,
although it doesn't hurt .
But {disfmarker} well , both {pause} on - line normalization approach seems equivalent .
So do you maybe make errors in different places ?
Different kinds of errors ?
I didn't look , uh , more closely .
I I really would like to suggest looking , um , a little bit at the kinds of errors .
I know you can get lost in that and go forever and not see too much , but {disfmarker} {vocalsound} sometimes ,
just seeing that each of these things didn't make things better may not be enough .
It may be that they 're making them better in some ways and worse in others ,
or increasing insertions and decreasing deletions ,
you know , helping with noisy case
but hurting in quiet case .
And if you saw that then maybe you {disfmarker} it would {disfmarker} {vocalsound} something would occur to you of how to deal with that .
Yeah . I 've been playing a little bit with some kind of thresholding ,
as a first experiment , I think I
no , the maximum energy of s each utterance
Then put a threshold that 's fifteen DB below {disfmarker}
Actually it was not a threshold ,
it was just adding noise .
When we look at {disfmarker} at the , um , MFCC that result from this , they are {pause} a lot more smoother .
And the result that we have in term of speech recognition , actually it 's not {disfmarker} it 's not worse ,
it 's not better neither ,
A third thing is that , um , {vocalsound} I play a little bit with the , um {disfmarker} {vocalsound} finding what was different between , um ,
he had the France Telecom blind equalization in the system .
the number o of MFCC that was {disfmarker} were used was different .
You used thirteen
and we used fifteen .
Uh , so the {disfmarker} the {disfmarker} right now , the {disfmarker} the system that is there in the {disfmarker} what we have in the repositories , with {disfmarker} uses fifteen .
So , we haven't {disfmarker} w we have been always using , uh , fifteen coefficients ,
not thirteen ?
um , I 'll t s run some experiments to see whether {disfmarker} once I have this {vocalsound} {comment} noise compensation to see whether thirteen and fifteen really matters or not .
Never tested it with the compensation ,
but without , {vocalsound} uh , compensation it was like fifteen was s slightly better than thirteen ,
How about you , Barry ?
Um , {vocalsound} still working on my {disfmarker} my quals preparation stuff .
Um , {vocalsound} so I 'm {disfmarker} I 'm thinking about , um , starting some , {vocalsound} uh , cheating experiments to , uh , determine the , um {disfmarker} {vocalsound} the relative effectiveness of , um , some intermediate categories that I want to classify .
So , for example , um , {vocalsound} if I know where voicing occurs and everything , um , {vocalsound} I would do a phone {disfmarker} um , phone recognition experiment ,
And so this would be a useful thing , um , to know {vocalsound} in terms of , like , which {disfmarker} which , um {disfmarker} which of these categories are {disfmarker} are good for , um , speech recognition .
I hope to get those , uh {disfmarker} those experiments done by {disfmarker} by the time quals come {disfmarker} come around in July .
Well , in my lunch talk last week I {disfmarker} I said I 'd tried phase normalization and gotten garbage results using that l um , long - term mean subtraction approach .
It turned out there was a bug in my Matlab code .
and , um , the results {vocalsound} were {disfmarker} were better .
But they still weren't as good as just subtracting the magnitude {disfmarker} the log magnitude means .
And also I 've been talking to , um , Andreas and Thilo about the , um , SmartKom language model
and about coming up with a good model for , um , far mike use of the SmartKom system .
I 'm gonna be working on , um , implementing this mean subtraction approach in the {vocalsound} far - mike system {disfmarker}
for the SmartKom system , I mean .
Also , I guess we had {disfmarker} we 've had these , uh , little di discussions {disfmarker}
So , I mean , I {disfmarker} I guess that was something I could say would be that we 've talked a little bit about
you just doing it all with complex arithmetic
and not {disfmarker} not , uh , doing the polar representation with magnitude and phase .
And so I thought at first , um , that , uh , what I should do is unwrap the phase
Um , but I actually got worse results doing that unwrapping using the simple phase unwrapper that 's in Matlab than I did not unwrapping at all .
How about you , Sunil ?
So , um , I 've been , uh , implementing this , uh , Wiener filtering for this Aurora task .
I {disfmarker} I actually thought it was {disfmarker} it was doing fine when I tested it once .
I it 's , like , using a small section of the code .
and I got , {vocalsound} like , worse results than not using it .
So , I 've been trying to find where the problem came from .
And then it looks like I have some problem in the way {disfmarker}
there is some {disfmarker} some very silly bug somewhere .
I {disfmarker} I mean , i uh , it actually {disfmarker} i it actually made the whole thing worse .
and it 's , like {disfmarker} w it 's {disfmarker} it 's very horrible .
I was like {disfmarker} I 'm trying to find where the m m problem came ,
Well , Hynek showed up one {disfmarker} suddenly on one day
So I was actually {disfmarker} that day I was thinking about d doing something about the Wiener filtering , and then Carlos matter of stuff .
And then he gave me a whole bunch of filters {disfmarker}
what Carlos used for his , uh , uh , thesis
So instead of designing our own new Wiener filters , I may just use one of those Carlos filters in {disfmarker} in this implementation
that {disfmarker} so that is the next thing . Once this {disfmarker} I {disfmarker} once I sort this pro uh , problem out maybe I 'll just go into that also .
the {disfmarker} the other thing was about the subspace approach .
Oh . How about you , Carmen ?
Mmm . I 'm working with VTS .
only with VTS and nothing more .
Not VAD ,
no LDA ,
nothing more .
To remove the noise too .
And when we put the {disfmarker} m m the , em , VAD , the result is better .
And we put everything , the result is better ,
but it 's not better than the result that we have without VTS .
So that @ @ {comment} given that you 're using the VAD also , the effect of the VTS is not {pause} so far {disfmarker}
So , um , {vocalsound} I guess I 'll just pass it on to Dave .
