Sunil 's here for the summer ,
and then just uh , I guess uh , progress reports individually , and then uh , plans for where we go between now and then , pretty much .
I could say a few words about um , some of the uh , compute stuff that 's happening around here ,
so that people in the group know .
So we just put in an order for about twelve new machines , uh , to use as sort of a compute farm .
and Andreas has sort of gotten that all uh , fixed up and up to speed .
And he 's got a number of little utilities that make it very easy to um , {vocalsound} run things using P - make and Customs .
or , maybe I should do an FAQ on the web site about it or something .
How about an email that points to the FAQ ,
And , if you say that and then some job that you want to execute , uh , it will find the fastest currently available machine , and export your job to that machine ,
And , so , soon , when we get all the new machines up , {vocalsound} um , e then we 'll have lots more compute to use .
there 's a lot of nice features to it
and it kinda helps to balance the load of the machines
Sunil since you 're {vocalsound} haven't {disfmarker} haven't been at one of these yet , why don't yo you tell us what 's {disfmarker} what 's up with you ?
uh , the other {disfmarker} other thing what I tried was , I just um , uh , took the baseline and then ran it with the endpoint inf uh th information ,
just the Aurora baseline ,
to see that how much the baseline itself improves
by just supplying the information of the {disfmarker} I mean the w speech and nonspeech .
I found that the baseline itself improves by twenty - two percent by just giving the wuh .
because the {disfmarker} the second {disfmarker} the new phase is going to be with the endpointed speech .
And just to get a feel of how much the baseline itself is going to change by adding this endpoint information , I just , uh , use {disfmarker}
So people won't even have to worry about , uh , doing speech - nonspeech then .
Yeah
so maybe uh , just briefly , you could remind us about the related experiments .
Cuz you did some stuff that you talked about last week ,
both of you I guess were both combining something from the uh , French Telecom system with {vocalsound} the u uh {disfmarker}
The main thing that we did is just to take the spectral subtraction from the France Telecom ,
So we just tried directly to {disfmarker} to just , keep the system as it was
when we plug the spectral subtraction it improves uh , signif significantly .
You can remove on - line normalization , or put it , it doesn't change anything .
Uh , uh , as long as you have the spectral subtraction .
And , right now if we look at the results , it 's , um , always better than {disfmarker} it seems always better than France Telecom for mismatch and high - mismatch .
And it 's still slightly worse for well - matched .
but this is not significant .
We are playing {disfmarker} we are also playing , trying to put other spectral subtraction mmm , in the code .
it would be a very simple spectral subtraction , on the um , mel energies
well we find some people so that {vocalsound} uh , agree to maybe work with us ,
maybe we {disfmarker}
and they have implementation of VTS techniques
so it 's um , Vector Taylor Series that are used to mmm , {vocalsound} uh f to model the transformation between clean cepstra and noisy cepstra .
it can be used for {vocalsound} uh , getting rid of the noise and the channel effect .
Anything else going on ?
I don't have good result , with the {disfmarker} inc including the new parameters ,
I don't have good result .
I tried to include another new parameter to the traditional parameter ,
The idea is to found another feature for discriminate between voice sound and unvoice sound .
And we try to use this new feature {disfmarker} feature .
I do {disfmarker} I did two type of experiment to include this feature directly with the {disfmarker} with the other feature
n with the neural network I have more or less the same result .
As using just the cepstrum ,
sometime it 's worse ,
sometime it 's a little bit better ,
I mean we 've had these discussions before ,
and {disfmarker} and one of the things that struck me was that {disfmarker} uh , about this line of thought that was particularly interesting to me was that we um {disfmarker} whenever you condense things , uh , in an irreversible way , um , you throw away some information .
And so the question is , uh , can we figure out if there 's something we 've thrown away that we shouldn't have .
when they were looking at the difference between the filter bank and the FFT that was going into the filter bank , I was thinking " oh , OK ,
so they 're picking on something
they 're looking on it to figure out noise , or voice {disfmarker} voiced property whatever . "
But for me sort of the interesting thing was , " well , but is there just something in that difference which is useful ? "
So another way of doing it , maybe , would be just to take the FFT uh , power spectrum , and feed it into a neural network ,
And , you know , maybe if it 's used in combination , it will get at something that we 're missing .
I can {disfmarker} I will try to do that .
It 's just a thought .
Yeah ,
With what {disfmarker} what other new p new parameter ?
So maybe {disfmarker} You probably need to back up a bit
that , like , the auto - correlation , the R - zero and R - one over R - zero
and another estimation of the var the variance of the difference for {disfmarker} of the spec si uh , spectrum of the signal
and {disfmarker} and the spectrum of time after filt mel filter bank .
anything on your end you want to talk about ?
Sunil hasn't {disfmarker} hasn't heard about uh , what I 've been doing .
So basically that 's just , um , trying to propose um , uh , your next your {disfmarker} your following years of {disfmarker} of your PHD work ,
trying {disfmarker} trying to find a project to {disfmarker} to define and {disfmarker} and to work on .
So , I 've been , uh , looking into , um , doing something about r uh , speech recognition using acoustic events .
um , building robust um , primary detectors for these acoustic events ,
and using the outputs of these robust detectors to do speech recognition .
Is that {disfmarker} that something worth talking about ,
Well , um , it {disfmarker} I don't think it directly relates .
Um , well , so , I was helping a speech researcher named Pierre Divenyi
and he 's int He wanted to um , look at um , how people respond to formant changes , I think .
So he {disfmarker} he created a lot of synthetic audio files of vowel - to - vowel transitions ,
and then he wanted a psycho - acoustic um , spectrum .
And he wanted to look at um , how the energy is moving {pause} over time in that spectrum
and compare that to the {disfmarker} to the listener tests .
And I can send an email around
