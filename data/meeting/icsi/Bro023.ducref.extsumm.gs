And uh Hans - uh , Hans - Guenter will be here , um , I think by next {disfmarker} next Tuesday or so .
So he 's {disfmarker} he 's going to be here for about three weeks ,
Just for a visit ?
Uh , we 'll see .
We might {disfmarker} might end up with some longer collaboration or something .
So he 's gonna look in on everything we 're doing
and give us his {disfmarker} his thoughts .
Th - that 's his spectral subtraction group ?
Is that right ?
yeah .
So I guess I should probably talk to him a bit too ?
Yeah .
So , um , {vocalsound} {comment} I guess we got lots to catch up on .
And we haven't met for a couple of weeks .
why don't we {disfmarker} why don't we start with you , Dave ,
So , um , since we 're looking at putting this , um {disfmarker} mean log m magnitude spectral subtraction , um , into the SmartKom system , I I did a test seeing if , um , it would work using past only {comment} and plus the present to calculate the mean .
So , I did a test , um , {vocalsound} where I used twelve seconds from the past and the present frame to , um , calculate the mean .
Twelve seconds , um , counting back from the end of the current frame ,
So it was , um , twen I think it was twenty - one frames
And compared to , um , do using a twelve second centered window , I think there was a drop in performance
but it was just a slight drop .
So say twe twelve seconds in the earlier test seemed like a good length of time ,
but what happens if you have less than twelve seconds ?
So I w bef before , um {disfmarker} Back in May , I did some experiments using , say , two seconds , or four seconds , or six seconds .
In those I trained the models using mean subtraction with the means calculated over two seconds , or four seconds , or six seconds .
here , I was curious , what if I trained the models using twelve seconds
but I f I gave it a situation where the test set I was {disfmarker} subtracted using two seconds , or four seconds , or six seconds .
And it seems like it {disfmarker} it {disfmarker} it hurts compared to if you actually train the models {comment} using th that same length of time
I mean , why would you do it , if you knew that you were going to have short windows in testing .
Yeah , it seems like for your {disfmarker} I mean , in normal situations you would never get twelve seconds of speech ,
The other thing , um , which maybe relates a little bit to something else we 've talked about in terms of windowing and so on is , that , um , I wonder if you trained with twelve seconds , and then when you were two seconds in you used two seconds ,
and when you were four seconds in , you used four seconds ,
and when you were six {disfmarker}
and you basically build up to the twelve seconds .
So that if you have very long utterances you have the best ,
but if you have shorter utterances you use what you can .
And that 's actually what we 're planning to do in
I don't know much about {disfmarker} as much as I should about the rest of the system
But if you did first pass with , um , the {disfmarker} with {disfmarker} either without the mean sub subtraction or with a {disfmarker} a very short time one ,
and then , um , once you , uh , actually had the whole utterance in , if you did , um , the , uh , uh , longer time version then , based on everything that you had , um , and then at that point only used it to distinguish between , you know , top N , um , possible utterances or something , you {disfmarker} you might {disfmarker} it might not take very much time .
I mean , I know in the large vocabulary stu uh , uh , systems , people were evaluating on in the past , some people really pushed everything in to make it in one pass
but other people didn't and had multiple passes .
the argument , um , against multiple passes was u u has often been " but we want to this to be r you know {disfmarker} have a nice interactive response " .
And the counterargument to that which , say , uh , BBN I think had , {comment} was " yeah ,
but our second responses are {disfmarker} second , uh , passes and third passes are really , really fast " .
uh , do you wanna go , Sunil ?
So I 've been working on that Wiener filtering .
found that , uh , s single {disfmarker} like , I just do a s normal Wiener filtering , like the standard method of Wiener filtering .
And that doesn't actually give me any improvement over like {disfmarker}
I mean , uh , b it actually improves over the baseline
but it 's not like {disfmarker} it doesn't meet something like fifty percent or something .
Improves over the base line MFCC system ?
So that 's {disfmarker} The improvement is somewhere around , like , thirty percent over the baseline .
Is that using {disfmarker} in combination with something else ?
No ,
just {disfmarker} just one stage Wiener filter
which is a standard Wiener filter .
uh , I ran this stuff with one more stage of Wiener filtering on it
but the second time , what I did was I {disfmarker} estimated the new Wiener filter based on the cleaned up speech , and did , uh , smoothing in the frequency to {disfmarker} to reduce the variance {disfmarker}
And so by adding another stage of Wiener filtering , the results on the SpeechDat - Car was like ,
But the overall improvement was like fifty - six point four six .
do we know yet ?
about {disfmarker} as far as what they 're {disfmarker} what the rules are going to be and what we can use ?
so actually I received a {disfmarker} a new document , describing this .
And what they did finally is to , mmm , uh , not to align the utterances but to perform recognition ,
um , only on the close - talking microphone ,
and to take the result of the recognition to get the boundaries uh , of speech .
Oh , so they will send files
so everybody will have the same boundaries to work with ?
Yeah .
Can I ask just a {disfmarker} a high level question ?
Can you just say like one or two sentences about Wiener filtering and why {disfmarker} why are people doing that ?
I mean , so the basic principle of Wiener filter is like you try to minimize the , uh , d uh , difference between the noisy signal and the clean signal
Do you wanna go , Stephane ?
So , {vocalsound} I 've been , uh , working still on the spectral subtraction .
So to r to remind you {vocalsound} {vocalsound} a little bit of {disfmarker} of what I did before , is just {vocalsound} to apply some spectral subtraction with an overestimation factor
Um , doing just this , uh , either on the FFT bins or on the mel bands , um , t doesn't yield any improvement
Well , actually I tried , {vocalsound} something else based on this , um , is to {disfmarker} to put some smoothing ,
um , because it seems to {disfmarker} to help or it seems to help the Wiener filtering
So what I did is , uh , some kind of nonlinear smoothing .
uh , although I 've just {disfmarker} just tested on Italian and Finnish .
And on Italian it seems {disfmarker} my result seems to be a little bit better than the Wiener filtering ,
Well , none of these systems , by the way , have {disfmarker} I mean , y you both are {disfmarker} are working with , um , our system that does not have the neural net ,
So one would hope , presumably , that the neural net part of it would {disfmarker} would improve things further as {disfmarker} as they did before .
Yeah .
Yeah , another thing that I {disfmarker} it 's important to mention is , um , that this has a this has some additional latency .
And I noticed that it 's better if we take into account this latency .
It 's depending on how all this stuff comes out
we may or may not be able to add any latency .
b but I don't think we have to worry too much on that right now while {disfmarker} you kno .
I would worry about it a little .
Because if we completely ignore latency , and then we discover that we really have to do something about it , we 're going to be {disfmarker} find ourselves in a bind .
And {disfmarker} and that 's sort of one of the {disfmarker}
all of that sort of stuff is things that they 're debating in their standards committee .
The second thing I was working on is to , um , try to look at noise estimation , {comment} mmm , and using some technique that doesn't need voice activity detection .
and for this I u simply used some code that , uh , {vocalsound} I had from {disfmarker} from Belgium ,
which is technique that , um , takes a bunch of frame ,
and for each frequency bands of this frame , takes a look at the minima of the energy .
And then average these minima and take this as an {disfmarker} an energy estimate of the noise for this particular frequency band .
But the spectral subtraction scheme that you reported on also re requires a {disfmarker} a noise estimate .
Yeah .
Couldn't you try this for that ?
Do you think it might help ?
Yeah , for {disfmarker} for sure I will .
I can try also , mmm , the spectral subtraction .
