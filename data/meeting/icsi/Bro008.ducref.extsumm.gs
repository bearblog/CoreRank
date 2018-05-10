So , I got , uh {pause} these results from , uh , Stephane .
Also , um , I think that , uh {pause} um {pause} we might hear later today , about other results .
I think s that , uh , there were some other very good results that we 're gonna wanna compare to .
But , {vocalsound} r our results from other {disfmarker} other places ,
You know most of the time , even {disfmarker} I mean even though it 's true that the overall number for Danish {disfmarker} we didn't improve it
Y Actually , uh , um , for the Danish , there 's still some kind of mystery
because , um , um , when we use the straight features , we are not able to get these nice number
with the ICSI OGI one , I mean .
Uh , so , uh , that 's probably something wrong with the features that we get from OGI .
Uh , and Sunil is working on {disfmarker} on trying to {disfmarker} to check everything .
When {disfmarker} when {disfmarker} when do you folks leave ?
Sunday ?
We have a little bit of time on that , actually .
We have a day or so ,
until Saturday midnight , or something , we have
I mean , even with these results as they are , it 's {disfmarker} it 's {disfmarker} it 's really not that bad .
And it looks like the overall result as they are now , even without , you know , any {disfmarker} any bugs being fixed is that , uh , on the {disfmarker} the other tasks , we had this average of , uh , forty uh {disfmarker} nine percent , or so , improvement .
And here we have somewhat better than that than the Danish , and somewhat worse than that on the German ,
but I mean , it sounds like , uh , one way or another , the methods that we 're doing can reduce the error rate from {disfmarker} from mel ceptrum {pause} down by , you know {pause} a fourth of them to , uh , a half of them .
I mean , I think that , uh , one of the things that Hynek was talking about was understanding what was in the other really good proposals
and trying to see if what should ultimately be proposed is some , uh , combination of things .
Cuz there 's things that they are doing {pause} there that we certainly are not doing .
And there 's things that we 're doing that {pause} they 're not doing .
How much {disfmarker} how much better was the best system than ours ?
Well , we don't know yet .
Uh , I mean , first place , there 's still this thing to {disfmarker} to work out ,
and second place {disfmarker} second thing is that the only results that we have so far from before were really development set results .
Um {pause} It 's probably a good time to look at what 's really going on and seeing if there 's a {disfmarker} there 's a way to combine the best ideas
while at the same time not blowing up the amount of , uh , resources used ,
But i it it {disfmarker} so it looks like they did some {disfmarker} some , uh , reasonable things ,
uh , and they 're not things that we did , precisely .
We did unreasonable things , {vocalsound} which {disfmarker} because we like to try strange things ,
and {disfmarker} and , uh , and our things worked too .
uh , it 's possible that some combination of these different things that were done would be the best thing to do .
But the only caveat to that is that everybody 's being real conscious of how much memory and how much CPU they 're using
because these , {vocalsound} {vocalsound} {vocalsound} uh , standards are supposed to go on cell phones with m moderate resources in both respects .
Um , now , one of the things that 's nice about what we did is , we do have a {disfmarker} a , uh {disfmarker} a filtering , which leads to a {disfmarker} a , uh {disfmarker} a reduction in the bandwidth in the modulation spectrum , which allows us to downsample .
So , uh , as a result of that we have a reduced , um , transmission rate for the bits .
so in reality , if you put this {disfmarker} this system in into , uh , the field , it would be twenty - four hundred bits per second , not forty - eight hundred .
um , so that 's a nice feature of what {disfmarker} what we did .
When is the development set {disfmarker} I mean , the , uh , uh , test set results due ?
Uh , probably the day after they leave ,
but we 'll have to {disfmarker} {vocalsound} we 'll have to stop it the day before {comment} we leave .
I think tha I think the {disfmarker} the meeting is on the thirteenth or something .
this Tuesday ,
And the {disfmarker} the , uh , results are due like the day before the meeting or something .
So {pause} {vocalsound} um , since we have a bit farther to travel than {vocalsound} some of the others , {vocalsound} uh , we 'll have to get done a little quicker .
But , um , I mean , it 's just tracing down these bugs .
I mean , just exactly this sort of thing of , you know , why {disfmarker} why these features seem to be behaving differently , uh , in California than in Oregon .
So , Hynek will try to push for trying to combine , uh , different things ?
I mean , I think the question is " Is there {disfmarker} is there some advantage ? "
I mean , you could just take the best system and say that 's the standard .
But the thing is that if different systems are getting at good things , um , a again within the constraint of the resources , if there 's something simple that you can do
So , um , everything that we did could probably just be added on to what Alcatel did ,
and i it 'd probably work pretty well with them , too .
And , um , so {disfmarker} and they both had some kind of on - line normalization ,
I mean , the VAD stuff they both had ,
so , it seems like the main different there is the {disfmarker} is the , uh , filtering .
shouldn't take a lot of memory to do that Uh , and I also wouldn't think the CPU , uh , would be much either for that part .
So , if you can {disfmarker} if you can add those in {pause} um {pause} then , uh , you can cut the data rate in half .
So , uh , I 'm interested in hearing {disfmarker} hearing your thoughts about {pause} where you think we should go from this .
I mean , we tried a lot of things in a hurry ,
and , uh , if we can back off from this now and sort of take our time with something , and not have doing things quickly be quite so much the constraint , what {disfmarker} what you think would be the best thing to do .
Well , first , uh , to really have a look at {disfmarker} at the speech {pause} {vocalsound} from these databases
because , well , we tried several thing ,
but we did not really look {vocalsound} at what what 's happening , and {vocalsound} where is the noise , and
Actually , there is one thing that {disfmarker} well {pause} Um , generally we {disfmarker} we think that {vocalsound} most of the errors are within phoneme classes ,
so I think it could be interesting to {disfmarker} to see if it {disfmarker} I don't think it 's still true when we add noise ,
and {vocalsound} so we have {disfmarker} I {disfmarker} I guess the confusion ma the confusion matrices are very different when {disfmarker} when we have noise , and when it 's clean speech .
And probably , there is much more {pause} between classes errors for noisy speech .
Yeah , so perhaps we could have a {disfmarker} a large gain , eh , just by looking at improving the , uh , recognition , not of phonemes , but of phoneme classes , simply .
The other thing that strikes me , just looking at these numbers is , just taking the best cases ,
I mean , some of these , of course , even with all of our {disfmarker} our wonderful processing , still are horrible kinds of numbers .
But just take the best case , the well - matched {pause} uh , German case after {disfmarker} er well - matched Danish after we {disfmarker}
the kind of numbers we 're getting are about eight or nine {pause} uh {pause} p percent {pause} error {pause} per digit .
This is obviously not usable ,
I mean , if you have ten digits for a phone number {comment} I mean , every now and then you 'll get it right .
So , in a way , that 's , you know , that 's sort of the dominant thing
is that even , say on the development set stuff that we saw , the , uh , the numbers that , uh , that Alcatel was getting when choosing out the best single numbers , {vocalsound} it was just {disfmarker} you know , it wasn't good enough for {disfmarker} for {pause} a {disfmarker} a {disfmarker} for a real system .
So , uh , we still have stuff to do .
Does a any you have any thoughts about what else {vocalsound} y you 're thinking that you didn't get to that you would like to do if you had more time ?
Maybe {vocalsound} we trying again with the articulatory feature .
because we tried {disfmarker} we {disfmarker} some {disfmarker} one experiment that doesn't work .
because , tsk {comment} {vocalsound} maybe do better some step the general , {vocalsound} eh , diagram .
there were a lot of times when we 've tried something and it didn't work right away , even though we had an intuition that there should be something there .
And so then we would just stop it .
And , uh , one of the things {disfmarker} I don't remember the details on , but I remember at some point , when you were working with a second stream , and you tried a low - pass filtering to cepstrum , in some case you got {disfmarker}
Well , but it was {comment} an MSG - like thing , but it wasn't MSG ,
Uh , you {disfmarker} y I think in some case you got some little improvement ,
And it seems to me that , um , if that is an important idea , which , you know , might be , that one could work at it for a while , as you 're saying .
Uh , and you had , you know , you had the multi - band things also , and , you know , there was issue of that .
Um , Barry 's going to be , uh , continuing working on multi - band things as well .
We were just talking about , um , {vocalsound} some , uh , some work that we 're interested in .
Kind of inspired by the stuff by Larry Saul with the , uh {pause} uh , learning articulatory feature in {disfmarker} I think , in the case of his paper {disfmarker} with sonorance based on , uh , multi - band information where you have a {disfmarker} a combination of gradient learning an and , uh , EM .
Uh {pause} {vocalsound} Uh {pause} {vocalsound} I mean , they 're much better than they were , you know .
We 're talking about thirty to sixty percent , uh , error rate reduction .
That 's {disfmarker} that 's really great stuff to {disfmarker} to do that in relatively short time .
But even after that it 's still , you know , so poor that {disfmarker} that , uh , no one could really use it .
Uh , now , I 'm interested in , um , uh {pause} looking at the experiments where you use , um {pause} uh , data from multiple languages to train the neural net .
And I don't know how far , or if you guys even had a chance to try that , but {pause} that would be some it 'd be interesting to me .
Again , it 's the kind of {disfmarker} of thing that , uh , we were thin thinking {disfmarker} thinking that it would work , but it didn't work .
And , eh , so there is kind of {disfmarker} of {pause} not a bug , but something wrong in what we are doing , perhaps .
Uh , something wrong , perhaps in the {disfmarker} just in the {disfmarker} the fact that the labels are {disfmarker}
What worked best is the hand - labeled data .
I don't know if we can get some hand - labeled data from other languages .
But {pause} that would be something interesting t to {disfmarker} to see .
Also , uh , {vocalsound} I mean , there was just the whole notion of having multiple nets that were trained on different data .
So one form of different data was {disfmarker} is from different languages , but the other
Well , i in fact , uh , m in those experiments it wasn't so much combining multiple nets , it was a single net that had different
So , first thing is would it be better if they were multiple nets , for some reason ?
Second thing is , never mind the different languages , just having acoustic conditions rather than training them all up in one ,
would it be helpful to have different ones ?
