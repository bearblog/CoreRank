I was saying Hynek 'll be here next week ,
uh , Wednesday through Friday {disfmarker}
uh , through Saturday ,
But my suggestion is that , uh , at least for this meeting , people should go ahead ,
uh , cuz Hynek will be here ,
I won't be here Thursday and Friday .
I don't really have , uh , anything new .
Been working on {pause} Meeting Recorder stuff .
Do you think that would be the case for next week also ?
What 's your projection on {disfmarker} ?
Cuz the one thing {disfmarker} the one thing that seems to me we really should try , if you hadn't tried it before , because it hadn't occurred to me {disfmarker}
is , um , adjusting the , uh , sca the scaling and , uh , insertion penalty sorta stuff .
I did play with that , actually , a little bit .
Um . What happens is , uh , {vocalsound} when you get to the noisy stuff , you start getting lots of insertions .
so I 've tried playing around a little bit with , um , the insertion penalties and things like that .
I mean , it {disfmarker} it didn't make a whole lot of difference .
Like for the well - matched case , it seemed like it was pretty good .
Um . {vocalsound} I could do more playing with that , though .
But you were looking at mel cepstrum .
Oh , you 're talking about for th {vocalsound} for our features .
So , I mean , i it it 's not the direction that you were working with that we were saying what 's the {disfmarker} uh , what 's the best you can do with {disfmarker} with mel cepstrum .
Uh , so the next question to ask , which is I think the one that {disfmarker} that {disfmarker} that Andreas was dre addressing himself to in the lunch meeting , is , um , we 're not supposed to adjust the back - end ,
but anybody using the system would .
if you were just adjusting the back - end , how much better would you do , uh , in noise ?
Uh , because the language scaling and insertion penalties and so forth are probably set to be about right for mel cepstrum .
But , um , they 're probably not at all set right for these things ,
so the experiment is to , um , run our front - end like normal , with the default , uh , insertion penalties and so forth ,
and then tweak that a little bit
and see how much of a difference it makes
So by " our front - end " I mean take , you know , the Aurora - two s take some version that Stephane has that is , you know , our current best version of something .
How {disfmarker} how much , uh , does it improve if you actually adjust that ?
When you adjusted those numbers for mel cepstrum , did it {disfmarker} ?
Uh , I {disfmarker} I don't remember off the top of my head .
Yeah . I didn't even write them down .
Looking at the {disfmarker} I wrote down what the deletions , substitutions , and insertions were ,
for different numbers of states per phone .
Um , but , uh , that {disfmarker} that 's all I wrote down .
I would need to do that .
I can do that for next week .
but I think it would be {disfmarker} it 'd be good to know that .
So maybe I can have that for next week when Hynek 's here .
I wonder if there 's anything that we could do {vocalsound} to the front - end that would affect the insertion {disfmarker}
So , if you have something that has a much smaller range or a much larger range , and taking the appropriate root .
part of what 's going on , um , is the , uh , the range of values .
If something is kind of like the equivalent of a bunch of probabilities multiplied together , you can take a root of some sort .
because it changes the scale of the numbers {disfmarker} of the differences between different candidates from the acoustic model
as opposed to what 's coming from the language model .
So , in effect , that 's changing the value of your insertion penalty .
I mean , it 's more directly like the {disfmarker} the language scaling or the , uh {disfmarker} the model scaling or acoustic scaling ,
So if we know what the insertion penalty is , then we can get an idea about what range our number should be in ,
If you 're operating in the wrong range {disfmarker} I mean , that 's why just in general , if you {vocalsound} change what these {disfmarker} these penalties and scaling factors are , you reach some point that 's a {disfmarker} that 's a minimum .
We do have to do well over a range of different conditions ,
some of which are noisier than others .
But , um , I think we may get a better handle on that if we {disfmarker} if we see {disfmarker}
it 's if we actually could pick a {disfmarker} a {disfmarker} a more stable value for the range of these features , it , um , uh , could {disfmarker}
Even though it 's {disfmarker} it 's {disfmarker} it 's true that in a real situation you can in fact adjust the {disfmarker} these {disfmarker} these scaling factors in the back - end , and it 's ar artificial here that we 're not adjusting those , you certainly don't wanna be adjusting those all the time .
And if you have a nice front - end that 's in roughly the right range {disfmarker}
I remember after we got our stuff more or less together in the previous systems we built , that we tended to set those scaling factors at kind of a standard level ,
and we would rarely adjust them again ,
As for these other things , it may turn out that , uh , {vocalsound} it 's kind of reasonable .
I mean , Andreas gave a very reasonable response ,
and he 's probably not gonna be the only one who 's gonna say this in the future {disfmarker}
people {disfmarker} people within this tight - knit community who are doing this evaluation {vocalsound} are accepting , uh , more or less , that these are the rules .
But , people outside of it who look in at the broader picture are certainly gonna say " Well , wait a minute . You 're doing all this standing on your head , uh , on the front - end ,
when all you could do is just adjust this in the back - end with one s one knob . "
so we have to at least , I think , determine that that 's not true ,
And as you say {disfmarker} as you point out {disfmarker} finding ways to then compensate for that in the front - end {vocalsound} also then becomes a priority for this particular test ,
What 's new with you ?
So there 's nothing {pause} new .
What 's old with you that has developed over the last week or two ?
Well , so we 've been mainly working on the report
On the report {pause} of the work that was already done .
Any - anything new on the thing that , uh , you were working on with the , uh {disfmarker} ?
I don't have results yet .
So , what {disfmarker} wha {vocalsound} wh wha what what 's going on ?
Well , we work in the report , too ,
because we have a lot of result ,
they are very dispersed ,
and was necessary to {disfmarker} to look in all the directory to {disfmarker} to {disfmarker} to give some more structure .
I if I can summarize , basically what 's going on is that you 're going over a lot of material that you have generated in furious fashion ,
f generating many results and doing many experiments
and trying to pull it together into some coherent form to be able to see wha see what happens .
y yeah . Basically we we 've stopped , uh , experimenting ,
I mean . We 're just writing some kind of technical report .
For ICSI .
Just summary of the experiment and the conclusion
So , my suggestion , though , is that you {disfmarker} you not necessarily finish that .
But that you put it all together so that it 's {disfmarker} you 've got {disfmarker} you 've got a clearer structure to it .
You know what things are ,
you have things documented ,
you 've looked things up that you needed to look up .
So that , you know {disfmarker} so that such a thing can be written .
When {disfmarker} when {disfmarker} when do you leave again ?
First of July .
And that you figure on actually finishing it in {disfmarker} in June .
Because , you know , you 're gonna have another bunch of results to fit in there anyway .
And right now it 's kind of important that we actually go forward with experiments .
So {disfmarker} so , I {disfmarker} I think it 's good to pause , and to gather everything together and make sure it 's in good shape ,
so that other people can get access to it
and so that it can go into a report in June .
But I think {vocalsound} to {disfmarker} to really work on {disfmarker} on fine - tuning the report n at this point is {disfmarker} is probably bad timing , I {disfmarker} I {pause} think .
Are you discovering anything , uh , that makes you scratch your head as you write this report ,
like why did we do that ,
or why didn't we do this ,
Uh .
Yeah .
Actually , there were some tables that were also with partial results .
We just noticed that ,
wh while gathering the result that for some conditions we didn't have everything .
We have , yeah , extracted actually the noises from {pause} the SpeechDat - Car .
we can train neural network with speech and these noises .
It 's difficult to say what it will give ,
I think this is something we have to try anyway .
adding the noises from {disfmarker} from the SpeechDat - Car .
that 's permitted ?
Well ,
OGI does {disfmarker} did that .
At some point they did that for {disfmarker} for the voice activity detector .
The rules as I understand it , is that in principle the Italian and the Spanish and the English {disfmarker}
Italian and the Finnish and the English ? {disfmarker} were development data
And Spanish , yeah .
on which you could adjust things .
And the {disfmarker} and the German and Danish were the evaluation data .
And then when they finally actually evaluated things they used everything .
it {disfmarker} it doesn't appear that there 's strong evidence that even though things were somewhat tuned on those three or four languages , that {disfmarker} that going to a different language really hurt you .
And the noises were not exactly the same .
I mean they were different drives .
Different cars .
It 's tuned more than , you know , a {disfmarker} a {disfmarker} a {disfmarker} a {disfmarker}
You 'd really like to have something that needed no particular noise at all ,
But that 's not really what this contest is .
That 's something I 'd like to understand before we actually use something from it ,
it 's probably something that , mmm , the {disfmarker} you know , the , uh , experiment designers didn't really think about ,
because I think most people aren't doing trained systems , or , you know , uh , systems that are like ours , where you actually use the data to build models .
I mean , they just {pause} doing signal - processing .
except that , uh , that 's what we used in Aurora one ,
and then they designed the things for Aurora - two knowing that we were doing that .
And they didn't forbid us {disfmarker}
to build models on the data ?
No .
But , I think {disfmarker} I think that it {disfmarker} it {disfmarker}
it probably would be the case that if , say , we trained on Italian , uh , data and then , uh , we tested on Danish data and it did terribly , uh , that {disfmarker} that it would look bad .
And I think someone would notice
Maybe {disfmarker} that 's maybe a topic {disfmarker}
Especially if you talk with him when I 'm not here ,
that 's a topic you should discuss with Hynek
to , you know , double check it 's OK .
there is also the spectral subtraction ,
I think maybe we should , uh , try to integrate it in {disfmarker} in our system .
I think that would involve to {disfmarker} {vocalsound} to mmm {vocalsound} use a big {disfmarker} a {disfmarker} al already a big bunch of the system of Ericsson .
Because he has spectral subtraction ,
then it 's followed by , {vocalsound} um , other kind of processing that 's {disfmarker} are dependent on the {disfmarker} uh , if it 's speech or noi or silence .
and s I {disfmarker} I think it 's important , um , {vocalsound} to reduce this musical noise and this {disfmarker} this increase of variance during silence portions .
This was in this would involve to take almost everything from {disfmarker} from the {disfmarker} this proposal
and then just add some kind of on - line normalization in {disfmarker} in the neural network .
Well , this 'll be , I think , something for discussion with Hynek next week .
How are , uh , uh {disfmarker} how are things going with what you 're doing ?
I took a lot of time just getting my taxes out of the way {disfmarker}
So , I 'm {disfmarker} I 'm starting to write code now for my work
but I don't have any results yet .
do you wanna {pause} say something about your stuff here ?
I {pause} just , um , continuing looking at , uh , ph uh , phonetic events ,
and , uh , this Tuesday gonna be , uh , meeting with John Ohala with Chuck to talk some more about these , uh , ph um , phonetic events .
Um , came up with , uh , a plan of attack ,
It 's {disfmarker} that 's pretty much it .
I {disfmarker} I was thinking getting {disfmarker} getting us a set of acoustic events to {disfmarker} um , to be able to distinguish between , uh , phones and words and stuff .
we would figure out a set of these events that can be , you know , um , hand - labeled or {disfmarker} or derived , uh , from h the hand - labeled phone targets .
Um , we could take these events and , um , {vocalsound} do some cheating experiments ,
um , where we feed , um , these events into {pause} an SRI system , um , eh , and evaluate its performance on a Switchboard task .
Can you give an example of an event ?
So , he In this paper , um , it 's talking about phoneme recognition using acoustic events .
So , things like frication or , uh , nasality .
this is a paper by Hubener and Cardson {pause} Benson {disfmarker} Bernds - Berndsen .
just to expand a little bit on the idea of acoustic event .
There 's , um {disfmarker} in my mind , anyways , there 's a difference between , um , acoustic features and acoustic events .
And I think of acoustic features as being , um , things that linguists talk about ,
Stuff that 's not based on data , necessarily .
That 's not based on , you know , acoustic data .
So they talk about features for phones ,
which may or may not be all that easy to measure in the acoustic signal .
Versus an acoustic event , which is just {nonvocalsound} some {nonvocalsound} something in the acoustic signal {nonvocalsound} that is fairly easy to measure .
It 's kinda like the difference between top - down and bottom - up .
I think of the acoustic {disfmarker} you know , phonetic features as being top - down .
You know , you look at the phone
and you say this phone is supposed to be {disfmarker} you know , have this feature , this feature , and this feature .
Whether tha those features show up in the acoustic signal is sort of irrelevant .
Whereas , an acoustic event goes the other way .
Here 's the signal .
Here 's some event .
And then that {disfmarker} you know , that may map to this phone sometimes ,
And so it 's sort of a different way of looking .
