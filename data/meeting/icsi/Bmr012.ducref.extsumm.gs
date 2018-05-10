Uh well I have {disfmarker} I wanna talk about new microphones and wireless stuff .
And I 'm sure Liz and Andreas wanna talk about recognition results .
um with Andreas ' help um Andreas put together a sort of no frills recognizer
which is uh gender - dependent but like no adaptation , no cross - word models , no trigrams {disfmarker}
a bigram recognizer
and that 's trained on Switchboard which is telephone conversations .
Don took the first meeting that Jane had transcribed
and um {vocalsound} you know separated {disfmarker} used the individual channels we segmented it in into the segments that Jane had used
Anyway so it 's twenty minutes and I actually
suddenly {disfmarker} the {disfmarker} the overall error rate when we first ran it was like eighty percent
yeah i it was a complicated bug
because they were sometimes one off and then sometimes totally random
but i looking at {disfmarker} the first sentences looked much better than that
and then we noticed that the reference was always one off with the {disfmarker}
and then suddenly it turned very bad
So {disfmarker} so we have everything recognized but we scored only the first uh whatever , up to that time to
yeah , I was pretty certain that it worked up until that time ,
but that {disfmarker} that will be completely gone if this synch time problem
There {disfmarker} there {disfmarker} there 's an acoustic glitch that occurs where um the channels get slightly asynchronized
so the {disfmarker} that {disfmarker} that problem has gone away in the original driver believe it or not when the SSH key gen ran the driver paused for a fraction of a second
Well , the {disfmarker} the synch time {disfmarker} the synch numbers have more significant digits than they should ,
There 's things that are l in smaller increments than a frame .
I do remember seeing once the transcriber produce an incorrect XML file where one of the synch numbers was incorrect .
So anyway these are just the ones that are the prebug for one meeting .
this is really encouraging cuz this is free recognition ,
There are a fair number of errors that are , you know where {disfmarker} got the plural S wrong or the inflection on the verb wrong .
a lot of the errors I think are out of vocabulary ,
so , I mean the bottom line is even though it 's not a huge amount of data um it should be uh reasonable to actually run recognition and be like within the scope of {disfmarker} of r reasonable s you know Switchboard
this is like h about how well we do on Switchboard - two data with the Switchboard - one trained {disfmarker} mostly trained recognizer
and Switchboard - two is {disfmarker} got sort of a different population of speakers and a different topic
the acoustic models were also from Switchboard or {disfmarker} or
And actually {disfmarker} we actually um used Switchboard telephone bandwidth models
I should {disfmarker} I should say that {disfmarker} the language model is not just Switchboard
Yeah .
I mean there 's uh actually more data is from Broadcast News
but with a little less weight
I mean our complete system starts by doing ge a gender detection
um and it might be reassuring for everybody to know that it got all the genders right .
and we 'll have more data and we can also start to maybe adapt the language models once we have enough meetings .
So this is only twenty minutes of one meeting with no {disfmarker} no tailoring at all .
I mean clearly there are um with just a small amount of uh actual meeting transcriptions uh thrown into the language model you can probably do quite a bit better
And I have to try it on the far field mike
and this is {disfmarker} this is good news
because that means the force alignments should be good
but if the force alignments are good we can get all kinds of information .
For example about , you know prosodic information
and speaker overlaps and so forth directly from the aligned times .
actually in order to assess the forced alignment um we need s some linguists or some people to look at it and say are these boundaries in about the right place .
So this would be like if you take the words um you know and force align them on all the individual close talk uh close talking mikes then how good are these sort of in reality
Um but I think it 's gotta be pretty good
because otherwise the word recognition would be really b crummy .
yeah certainly I 'd like to see as soon as we could ,
but soon as we could how well it does with say with the P Z Ms or maybe even one of the
I mean maybe get some of the glitches out of the way
it 's not the case that the end of one utterance is in the next segment and things like that which we had more problems with in Switchboard
We {disfmarker} we talked about setting up the SRI recognizer here .
That 's {disfmarker} you know if {disfmarker} if there are more machines um uh here
plus people can {disfmarker} could run their own uh you know variants of {disfmarker} of {disfmarker} of the recognition {pause} runs
Yeah so we just have to go through this process of having people approve the transcriptions ,
we need to work at a system for doing that approval so that we can send people the transcripts
There are lots of w {vocalsound} there are lots of ways to do the downsampling um different filters to put on ,
So {disfmarker} so the other thing we should try is to just take the original wave forms ,
I mean segment them but not downsample them .
And {disfmarker} and feed them to {disfmarker} feed them to the SRI recognizer and see if {disfmarker} if the SRI front - end does something .
And {disfmarker} and if for some reason we see that it works better then we might investigate why
So we could try that with this particular twenty minutes of speech and sort of see if there 's any differences .
Are you {disfmarker} are you using uh uh mel cepstrum or PLP over there ?
Mel cepstrum .
One {disfmarker} one question which is I {disfmarker} I had the impression {comment} from this {disfmarker} from this meeting that w that I transcribed that um that there was already automatic downsampling occurring ,
There 's one level that 's already happening right here .
This is being recorded at forty - eight kilohertz . Which is more that anybody needs
And it gets downsampled to sixteen .
Sixteen is more common for {disfmarker} for uh broadband stuff that isn't {disfmarker}
that isn't music and isn't telephone ,
and but uh Jerry also agreed so uh we 're starting on {disfmarker} on
and it 's a meeting on even deeper understanding , EDU ,
and one of the things that I was realizing is um it would be really great if anyone has any ideas on some kind of time synchronous way that people in the meeting can make a comment to the person whose gonna transcribe it
Yeah , we could do it with the cross pads .
but is this thing of two eight channel boards a maximum for this setup or could we go to a third board ?
I {disfmarker} I think that it 's the maximum we can do without a lot of effort
because it 's one board with two digital channels .
So it {disfmarker} it takes two fibers in to the one board .
And so w I think if we wanna do that {disfmarker} more than that we 'd have to have two boards ,
and then you have the synchronization issue .
you know already we have a {disfmarker} a {disfmarker} a group of people in this room that cannot all be miked
So the oth topic is uh getting more mikes and different mikes ,
We can fit {disfmarker} we have room for one more wireless
So why don't we get one of these with the crown with a different headset ?
Just order it .
Is {disfmarker} {vocalsound} is there any way we can have you know like a {disfmarker} a wireless microphone that you pass around to the people who you know the extra people for the times they wanna talk that {disfmarker}
if we can't get another board and even if we can I have a feeling they 'll be some work .
so yeah you have these {disfmarker} these mikes with a little antenna on the end
But that 's {disfmarker} that 's a great idea
and then just sort of have that as the {disfmarker} and then you can have groups of twenty people or whatever
One of them is to give you a status in terms of the transcriptions so far .
I think that by tomorrow we 'll have ten .
So um as of last night um I 'd assigned twelve hours and they 'd finished nine
And then um also an idea for another meeting , which would be to have the transcribers talk about the data
Yeah , I 'd like to hear what they s say .
That 's a great idea .
So maybe we could {disfmarker} they could have a meeting more or less without us that {disfmarker} to do this and we should record it
OK , my name is uh Espen Eriksen .
I 'm a Norwegian .
So with the help of uh Dan Ellis I 'm gonna do small project associated to this .
What I 'm gonna try to do is uh use {disfmarker} use ech echo cancellation to uh to handle the periods where you have overlapping talk .
