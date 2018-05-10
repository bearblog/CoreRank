New version of the presegmentation .
New version of presegmentation .
Update on transcripts .
And I guess that includes some {disfmarker} the filtering for the , the ASI refs , too .
OK well , the , w uh as you can see from the numbers on the digits we 're almost done .
The digits goes up to {pause} about four thousand .
Um , and so , uh , we probably will be done with the TI - digits in , um , another couple weeks . um , depending on how many we read each time .
And so , once we 're {disfmarker} it 's done it would be very nice to train up a recognizer and actually start working with this data .
So we 'll have a corpus that 's the size of TI - digits ?
One particular test set of TI - digits .
So , I 'm impressed by what we could do , Is take the standard training set for TI - digits , train up with whatever , you know , great features we think we have , uh for instance , and then test on uh this test set .
And presumably uh it should do reasonably well on that ,
and then , presumably , we should go to the distant mike , and it should do poorly .
Um , but , in order to do that we need to extract out the actual digits .
Um , so that {disfmarker} the reason it 's not just a transcript is that there 're false starts , and misreads , and miscues and things like that .
And so I have a set of scripts and X Waves where you just select the portion , hit R ,
um , it tells you what the next one should be , and you just look for that .
And so the {disfmarker} the question is , should we have the transcribers do that or should we just do it ?
and I think it 's a {disfmarker} it 's a fine idea partly because , um , it 's not un unrelated to their present skill set ,
Yeah just by way of uh , uh , a uh , order of magnitude , uh , um , we 've been working with this Aurora , uh data set .
And , uh , the best score , on the , nicest part of the data , that is , where you 've got training and test set that are basically the same kinds of noise and so forth , uh , is about ,
I think the best score was something like five percent , uh , error , per digit .
So {disfmarker} So the {disfmarker} The point there , and this is uh car noise uh , uh things , but {disfmarker} but real {disfmarker} real situation ,
Um , the {disfmarker} uh there 's one microphone that 's close , that they have as {disfmarker} as this sort of thing , close versus distant .
Uh but in a car ,
instead of {disfmarker} instead of having a projector noise it 's {disfmarker} it 's car noise .
I think that we could have done better on the models ,
but the thing is that we got {disfmarker} this {disfmarker} this is the kind of typical number , for all of the , uh , uh , things in this task , all of the , um , languages .
Um , so , uh . Anyway , just an indication once you get into this kind of realm even if you 're looking at connected digits it can be pretty hard .
I mean the prosodics are not the same as TI - digits , for example .
Um , just what we were talking about with grouping .
That with these , the grouping , there 's no grouping at all , and so it 's just {disfmarker} the only sort of discontinuity you have is at the beginning and the end .
but it was {disfmarker} but it 's {disfmarker} but I mean . The very best system that I saw in the literature was a point two five percent or something that somebody had at {disfmarker} at Bell Labs , or . Uh , but . But , uh , sort of pulling out all the stops .
do we do on TI - digits ?
Uh , I th no I think we got under a percent ,
But that {disfmarker} I mean it 's really {disfmarker} it 's {disfmarker} it 's close - talking mikes , no noise , clean signal , just digits , I mean , every everything is good .
OK , so , um , what I 'll do then is I 'll go ahead and enter , this data .
And then , hand off to Jane , and the transcribers to do the actual extraction of the digits .
One question I have that {disfmarker} that I mean , we wouldn't know the answer to now but might , do some guessing , but I was talking before about doing some model modeling of arti uh , uh , marking of articulatory , features , with overlap and so on .
One thought might be to do this uh , on {disfmarker} on the digits , or some piece of the digits .
The reason for doing it is because the {disfmarker} the argument is that certainly with conversational speech , the stuff that we 've looked at here before , um , just doing the simple mapping , from , um , the phone , to the corresponding features that you could look up in a book , uh , isn't right .
In fact there 's these overlapping processes where some voicing some up and then some , you know , some nasality is {disfmarker} comes in here , and so forth .
You know i you should . It should be such that if you , if you , uh , if you had o um , all of the features , determined that you {disfmarker} that you were uh ch have chosen , that that would tell you , uh , in the steady - state case , uh , the phone .
Yeah , I mean , I I I 'm jus at the moment of course we 're just talking about what , to provide as a tool for people to do research who have different ideas about how to do it .
But {disfmarker} What I 'm imagining is a score - like notation , where each line is a particular feature .
Well the other difference is that the {disfmarker} the features , are not synchronous ,
They overlap each other in weird ways .
So it 's not a strictly one - dimensional signal .
Well not with our current system but you could imagine designing a system , that the states were features , rather than phones .
You can add the features in , uh , but it 'll be underspecified .
Well , you know , um {disfmarker} I mean if we 're talking about , having the , annotators annotate these kinds of features , it seems like ,
The {disfmarker} the question is , do they do that on , meeting data ?
So I mean i we 'll see wha how much we can , uh , get the people to do , and how much money we 'll have and all this sort of thing ,
But it {disfmarker} it might be good to do what Jane was saying uh , you know , seed it , with , guesses about what we think the features are , based on , you know , the phone or Steve 's transcriptions or something . to make it quicker .
So I mean that 's probably the right way to go anyway , is to {disfmarker} is to start off with an automatic system with a pretty rich pronunciation dictionary that , that , um , you know , tries , to label it all .
And then , people go through and fix it .
So , I mean another way to look at this is to , is to , uh , do some stuff on Switchboard which has all this other , stuff to it .
And then , um , As we get , further down the road and we can do more things ahead of time , we can , do some of the same things to the meeting data .
Uh , oh yeah , um , {vocalsound} I worked a little bit on the {disfmarker} on the presegmentation to {disfmarker} to get another version which does channel - specific , uh , speech - nonspeech detection .
And , what I did is I used some normalized features which , uh , look in into the {disfmarker} which is normalized energy , uh , energy normalized by the mean over the channels and by the , minimum over the , other .
within each channel .
And to {disfmarker} to , mm , to , yeah , to normalize also loudness and {disfmarker} and modified loudness and things and that those special features actually are in my feature vector .
And , and , therefore to be able to , uh , somewhat distinguish between foreground and background speech in {disfmarker} in the different {disfmarker} in {disfmarker} each channel .
And , eh , I tested it on {disfmarker} on three or four meetings and it seems to work , well yeah , fairly well , I {disfmarker} I would say .
There are some problems with the lapel mike .
So new use ninetieth quartile , rather than , minimum .
Yeah {disfmarker} yeah , then {disfmarker} I {disfmarker} I did some {disfmarker} some {disfmarker} some things like that ,
Then , the , yeah , there are {disfmarker} there are some problems with {disfmarker} with {disfmarker} with n with normalization , and , then , uh , there the system doesn't work at all .
And , the thing is I {disfmarker} I , then the evaluation of {disfmarker} of the system is a little bit hard , as I don't have any references .
I think I might have done what you 're requesting , though I did it in the service of a different thing .
I have thirty minutes that I 've more tightly transcribed with reference to individual channels .
so , yeah {disfmarker} yeah , that {disfmarker} that {disfmarker} that 's great , but what would be nice to have some more meetings , not just one meeting to {disfmarker} to be sure that {disfmarker} that , there is a system ,
Yeah , so if we could get a couple meetings done with that level of precision I think that would be a good idea .
It seems to me that it would be good to have , a few minutes from {disfmarker} from different meetings ,
so , would you be training then , um , the segmenter so that , it could , on the basis of that , segment the rest of the meeting ?
I {disfmarker} I could do a {disfmarker} a retraining with that , yeah .
but , there are some {disfmarker} some {disfmarker} as I said some problems with the lapel mike ,
but , perhaps we can do something with {disfmarker} with cross - correlations to , to get rid of the {disfmarker} of those .
Well {disfmarker} well what I want to do is to {disfmarker} to look into cross - correlations for {disfmarker} for removing those , false overlaps .
and {disfmarker} and having as much variety for speaker certainly would be a big part of that I think .
So this , blends nicely into the update on transcripts .
it drifted into the afternoon , {comment} {vocalsound} uh , concerning this issue of , um , the , well there 's basically the issue of the interplay between the transcript format and the processing that , they need to do for , the SRI recognizer .
And {pause} the , what we discussed this morning , I would summarize as saying that , um , these units that result , in a {disfmarker} a particular channel and a particular timeband , at {disfmarker} at that level , um , vary in length .
And , um , {nonvocalsound} their recognizer would prefer that the units not be overly long .
So , as a first pass through , a first chance without having to do a lot of hand - editing , what we 're gonna do , is , I 'll run it through channelize , give them those data after I 've done the editing process and be sure it 's clean .
And I can do that , pretty quickly , with just , that minimal editing , without having to hand - break things .
And then we 'll see if the units that we 're getting , uh , with the {disfmarker} at that level , are sufficient .
And if they do need to be further broken down then maybe it just be piece - wise , maybe it won't be the whole thing .
also we discussed some adaptational things ,
uh {disfmarker} You know I hadn't , uh , incorporated , a convention explicitly to handle acronyms , for example ,
And then , a similar conv uh , convention for numbers .
Um , and also I 'll be , um , encoding , as I do my post - editing , the , things that are in curly brackets , which are clarificational material .
So , it 's gonna be either a gloss or it 's gonna be a vocal sound like a , laugh or a cough , or , so forth .
Or a non - vocal sound like a doors door - slam , and that can be easily done with a , you know , just a {disfmarker} one little additional thing in the , in the general format .
And {pause} uh , Jane had this nice , uh , idea of having , like an extra , uh couple tiers ,
And then there 's also , things like door - slams that 's really in no one 's channel ,
And we were thinking , that is useful also when there 's uncertainties .
So if they hear a breath and they don't know who breath it is it 's better to put it in that channel than to put it in the speaker 's channel
So the idea is then , uh , Don can take , uh , Jane 's post - processed channelized version , and , with some scripts , you know , convert that to {disfmarker} to a reference for the recognizer
So {pause} when that 's , ready {disfmarker} you know , as soon as that 's ready , and as soon as the recognizer is here we can get , twelve hours of force - aligned and recognized data .
I {disfmarker} I {disfmarker} I thought that perhaps the transcribers could start then from the {disfmarker} those mult multi - channel , uh , speech - nonspeech detections , if they would like to .
That 's very important .
I mean it 's probably good enough for force - alignment .
uh , but for free recognition I 'm {disfmarker} it 'll probably not be good enough .
We 'll probably get lots of errors because of the cross - talk , and , noises and things .
It 's , um , it 's by Crown ,
and it 's one of these sort of mount around the ear thingies ,
Since , what I decided to do , on Morgan 's suggestion , was just get two , new microphones , um , and try them out .
the microphones {disfmarker} the new microphones ,
