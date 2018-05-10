Um , I can say about {disfmarker} just q just quickly to get through it , that Dave and I submitted this ASRU .
I mean , basically we 're dealing with rever reverberation ,
and , um , when we deal with pure reverberation , the technique he 's using works really , really well .
And actually it brought up a question which may be relevant to the Aurora stuff too .
Um , I know that when you figured out the filters that we 're using for the Mel scale , there was some experimentation that went on at {disfmarker} at , uh {disfmarker} at OGI .
but one of the differences that we found between the two systems that we were using , {comment} the {disfmarker} the Aurora HTK system baseline system {comment} and the system that we were {disfmarker} the {disfmarker} the uh , other system we were using , the uh , the SRI system , was that the SRI system had maybe a , um , hundred hertz high - pass .
still , it 's possible that we 're getting in some more noise .
So I wonder , is it {disfmarker} @ @ Was there {disfmarker} their experimentation with , uh , say , throwing away that filter or something ?
so I think when {disfmarker} when he gets done with his prelim study I think {vocalsound} one of the next things we 'd want to do is to take this , uh {disfmarker} uh , noise , uh , processing stuff and {disfmarker} and , uh {disfmarker} uh , synthesize some speech from it .
I , um {disfmarker} {vocalsound} uh , started working on the uh {disfmarker} Mississippi State recognizer .
So , I got in touch with Joe and {disfmarker} and , uh , from your email and things like that .
And , uh , they added me to the list {disfmarker}
uh , the mailing list .
And he gave me all of the pointers and everything that I needed .
And so I downloaded the , um {disfmarker}
There were two things , uh , that they had to download .
So I downloaded the software and compiled all of that .
And it compiled fine .
Is there any word yet about the issues about , um , adjustments for different feature sets or anything ?
Uh , I 'll {disfmarker} I 'll d I 'll double check that and ask him again .
You asked me to write to him
it 's like that {disfmarker} that could r turn out to be an important issue for us .
Cuz they have , uh , already frozen those in i insertion penalties and all those stuff is what {disfmarker} I feel .
And they have these tables with , uh , various language model weights , insertion penalties .
So now , we may come back to the situation where we may be looking for a modification of the features to account for the fact that we can't modify these parameters .
but it 's still worth , I think , just {disfmarker} since {disfmarker} you know , just chatting with Joe about the issue .
Um , I 've been playing with , first , the , um , VAD .
Um , {vocalsound} so it 's exactly the same approach ,
but the features that the VAD neural network use are , uh , MFCC after noise compensation .
Before it was just P L
I mean , it was just the noisy features I guess .
It 's based on the system that has a fifty - three point sixty - six percent improvement .
The only thing that changed is the n a p eh {disfmarker} a es the estimation of the silence probabilities .
Which now is based on , uh , cleaned features .
And , it 's a l it 's a lot better .
but the problem is still that the latency is too large .
the {disfmarker} the latency of the VAD is two hundred and twenty milliseconds .
But well , we could probably put the delta , um , {vocalsound} before on - line normalization .
What if you used a smaller window for the delta ?
I mean , I guess there 's a lot of things you could do to {disfmarker}
So if you {disfmarker} if you put the delta before the , uh , ana on - line {disfmarker} If {disfmarker}
uh {disfmarker} then {disfmarker} then it could go in parallel .
cuz the time constant of the on - line normalization is pretty long compared to the delta window ,
Wh - what 's the baseline you need to be under ?
Well , we don't know .
They 're still arguing about it .
I mean , if it 's two {disfmarker} if {disfmarker} if it 's , uh {disfmarker} if it 's two - fifty , then we could keep the delta where it is if we shaved off twenty .
If it 's two hundred , if we shaved off twenty , we could {disfmarker} we could , uh , meet it by moving the delta back .
So , how do you know that what you have is too much if they 're still deciding ?
I mean , the main thing is that since that we got burned last time , and {disfmarker} you know , by not worrying about it very much , we 're just staying conscious of it .
I mean , if {disfmarker} if {disfmarker} if a week before we have to be done someone says , " Well , you have to have fifty milliseconds less than you have now " , it would be pretty frantic around here .
and you could experiment with cutting various pieces of these back a bit ,
I mean , we 're s we 're not {disfmarker} we 're not in terrible shape .
Where {disfmarker} where is this {disfmarker} where is this fifty - seven point O two in {disfmarker} in comparison to the last evaluation ?
The best was fifty - four point five .
Well , it 's {disfmarker} I think it 's better than anything , uh , anybody got .
Uh , but I started to play with the , um , {vocalsound} {vocalsound} uh , tandem neural network .
I just did the configuration that 's very similar to what we did for the February proposal .
So . There is a f a first feature stream that use uh straight MFCC features .
And the other stream is the output of a neural network , using as input , also , these , um , cleaned MFCC .
Well , it improves on the well - matched and the mismatched conditions ,
but it get worse on the highly mismatched .
You 're just using the full ninety features ?
From the networks , it 's twenty - eight .
And from the other side it 's forty - five .
So it 's {disfmarker} you have seventy - three features ,
There 's a KLT after the neural network , as {disfmarker} as before .
That 's how you get down to twenty - eight ?
But we have to {disfmarker} for sure , we have to go down ,
I wanted to do something very similar to the proposal as a first {disfmarker} first try .
because the limit is now sixty features .
we have to find a way to decrease the number of features .
Well , what 's your {disfmarker} what 's your thought about what to do next with it ?
I 'm surprised ,
because I expected the neural net to help more when there is more mismatch , as it was the case for the {disfmarker}
Well , we might {disfmarker} uh , we might have to experiment with , uh better training sets .
I {disfmarker} The other thing is , I mean , before you found that was the best configuration , but you might have to retest those things now that we have different {disfmarker} The rest of it is different ,
For instance , what 's the effect of just putting the neural net on without the o other {disfmarker} other path ?
I mean , you know what the straight features do .
they felt they wanted to set a limit .
So they chose sixty .
I {disfmarker} I {disfmarker} I think it 's kind of r arbitrary too .
Yeah , actually {vocalsound} to s eh , what I observed in the HM case is that the number of deletion dramatically increases .
It {disfmarker} it doubles .
When I added the num the neural network it doubles the number of deletions .
Yeah , so I don't you know {vocalsound} how to interpret that ,
Me either .
And {disfmarker} and did {disfmarker} an other numbers stay the same ?
They p stayed the same ,
Did they increase the number of deletions even for the cases that got better ?
No .
So it 's only the highly mismatched ?
When you {disfmarker} in {disfmarker} in the old experiments when you ran with the neural net only , and didn't have this side path , um , uh , with the {disfmarker} the pure features as well , did it make things better to have the neural net ?
It was {disfmarker} b a little bit worse .
until you put the second path in with the pure features , the neural net wasn't helping at all .
It was helping , uh , if the features are b were bad ,
as soon as we added LDA on - line normalization , and {vocalsound} all these things , then {disfmarker}
Well , I still think it would be k sort of interesting to see what would happen if you just had the neural net without the side thing .
And {disfmarker} and the thing I {disfmarker} I have in mind is , uh , maybe you 'll see that the results are not just a little bit worse .
Maybe that they 're a lot worse .
But if on the ha other hand , uh , it 's , say , somewhere in between what you 're seeing now and {disfmarker} and {disfmarker} and , uh , what you 'd have with just the pure features , then maybe there is some problem of a {disfmarker} of a , uh , combination of these things , or correlation between them somehow .
If it really is that the net is hurting you at the moment , then I think the issue is to focus on {disfmarker} on , uh , improving the {disfmarker} the net .
In the , um {disfmarker} a lot of the , um {disfmarker} the Hub - five systems , um , recently have been using LDA .
and {disfmarker} and they , um {disfmarker} They run LDA on the features right before they train the models .
Uh , this LDA is different from the LDA that you are talking about .
The LDA that you {disfmarker} saying is , like , you take a block of features , like nine frames or something , {comment} and then do an LDA on it ,
and then reduce the dimensionality to something like twenty - four or something like that .
And the LDA that we are f applying is only in time ,
So this is a two dimensional tile .
So it 's like {disfmarker} more like a filtering in time ,
but what if you put {disfmarker} ran the other kind of LDA , uh , on your features right before they go into the HMM ?
But it 's {disfmarker} it 's like a nonlinear discriminant analysis .
The tandem stuff is kind of like i nonlinear LDA .
But I mean , w but the other features that you have , um , th the non - tandem ones ,
Well , in the proposal , they were transformed u using PCA ,
Yeah , it might be that LDA could be better .
The uh , other thing I was wondering was , um , if the neural net , um , has any {disfmarker} because of the different noise con unseen noise conditions for the neural net ,
where , like , you train it on those four noise conditions , while you are feeding it with , like , a additional {disfmarker} some four plus some {disfmarker} f few more conditions which it hasn't seen , actually ,
instead of just h having c uh , those cleaned up t cepstrum , sh should we feed some additional information , like {disfmarker} The {disfmarker} the {disfmarker}
I mean , should we f feed the VAD flag , also , at the input so that it {disfmarker} it has some additional discriminating information at the input ?
We have the VAD information also available at the back - end .
So if it is something the neural net is not able to discriminate the classes {disfmarker}
So , by having an additional , uh , feature which says " this is speech and this is nonspeech " , I mean , it certainly helps in some unseen noise conditions for the neural net .
So you 're saying , feed that , also , into {pause} the neural net .
Yeah . So it it 's an {disfmarker} additional discriminating information .
The other thing {comment} you could do is just , um , p modify the , uh , output probabilities of the {disfmarker} of the , uh , uh , um , neural net , tandem neural net , {comment} based on the fact that you have a silence probability .
Now the only thing that {disfmarker} that bothers me about all this is that I {disfmarker} I {disfmarker} I {disfmarker} The {disfmarker} the fact {disfmarker}
i i It 's sort of bothersome that you 're getting more deletions .
So I might maybe look at ,
is it due to the fact that um , the probability of the silence at the output of the network , is ,
too {disfmarker} too high
So I won't be here for {disfmarker}
Uh , I 'm leaving next Wednesday .
I 'm leaving {disfmarker} leaving next Wednesday .
so next week I won't ,
and the week after I won't ,
cuz I 'll be in Finland .
By that time you 'll be {disfmarker} {comment} Uh , you 'll both be gone {pause} from here .
So it 'll be a few weeks , really , before we have a meeting of the same cast of characters .
and then uh , uh , we 'll start up again with Dave and {disfmarker} Dave and Barry and Stephane and us on the , uh , twentieth .
