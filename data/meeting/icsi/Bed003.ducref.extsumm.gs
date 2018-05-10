It 's basically uh talks about uh {disfmarker} {vocalsound} It just refers to the fact that uh {pause} one of main things we had to do was to {pause} decide what the intermediate sort of nodes were ,
So then the features we decided {disfmarker} or we decided we were {disfmarker} talked about ,
Uh the {disfmarker} the prosody , the discourse , {pause} verb choice .
You know . We had a list of things like " to go " and " to visit " and what not .
The " landmark - iness " of uh {disfmarker}
" Nice walls " {vocalsound} which we can look up
The context , which in this case we 've limited to {pause} " business person " , " tourist " , or {pause} " unknown " ,
the time of day ,
There 's landmark for um , touristic reasons and landmark for
navigational reasons or something .
but you can imagine maybe wanting the oth both kinds of things there for different um , goals .
OK , So our initial idea was not very satisfying , {pause} because {disfmarker} uh our initial idea was basically all the features pointing to the output node .
Reasons being , you know , it 'd be a pain to set up all the probabilities for that .
If we moved onto the next step and did learning of some sort , uh according Bhaskara we 'd be handicapped .
If you have N features , then it 's two to the N {disfmarker} {pause} or exponential in N .
So then our next idea was to add a middle layer ,
but the middle thing , we were thinking along the lines of maybe trying to figure out , like , the concept of whether they 're a tourist {pause} or {pause} whether they 're running an errand or something like that
Yes , we could things we couldn't extract the {disfmarker} from the data , the hidden variables .
So then the hidden variables {disfmarker} hair variables we came up with were whether someone was on a tour , running an errand , or whether they were in a hurry ,
Um right now it 's still kind of {pause} in a toy {pause} version of it ,
because we didn't know the probabilities of {disfmarker} {pause} or {disfmarker}
So . The mode {pause} basically has three different {pause} outputs .
The probability {disfmarker} whether the probability of a Vista , Tango , or Enter .
Um {disfmarker} The " context " , we simplified .
Basically it 's just the businessman , the tourist , unknown .
mainly because it 's {disfmarker} it 's just whether the verb is a Tango verb , an Enter verb , or a {pause} Vista verb .
That 's {disfmarker} that {disfmarker} that needs a lot of work .
but the other ones , the final destination , the whether they 're doing business , whether they 're in a hurry , and whether they 're tourists ,
that kind of thing is all uh {vocalsound} sort of {disfmarker} you know probabilistically depends on the other things .
Like we don't have nodes for " discourse " and " parse " ,
although like in some sense they are parts of this belief - net .
But uh {disfmarker} {vocalsound} The idea is that we just extract those features from them , so we don't actually have a node for the entire parse ,
So we looked at the data
and in a lot of data people were saying things like {vocalsound} " Can I get to this place ? "
" What is the admission fee ? " .
So that 's like a huge uh clue that they 're trying to Enter the place rather than uh to Tango or Vista ,
So there are certain cues that are very strong {pause} either lexical or topic - based um , concept cues
And then in that second row {pause} or whatever that row of Time of Day through that {disfmarker} So all of those {disfmarker} Some of them come from the utterance
and some of them are sort of {vocalsound} either world knowledge or situational {pause} things .
but you could see perhaps discus the " admission fee " going directly to the mode pointing at " Enter " ,
Uh {disfmarker} we kept um {disfmarker} things from directly affecting the mode {pause} beyond the concept ,
But we just decided to keep all the things we extracted {pause} to point at the middle and then {pause} down .
Normally context will include a huge amount of information ,
but um , we are just using the particular {vocalsound} part of the context which consists of the switch that they flick to indicate whether they 're a tourist or not , I guess .
Similarly prosody is not all of prosody
but simply {vocalsound} for our purposes whether or not they appear tense or relaxed .
So , the {disfmarker} the middle layer is also binary ?
Yeah ,
So um , of course this will happen when we think more about the kinds of verbs that are used in each cases
but you can imagine that it 's verb plus various other things that are also not in the bottom layer that would {disfmarker} that would help you {disfmarker}
and um {disfmarker} Uh maybe at this stage we will {disfmarker} we do want to {disfmarker} uh sort of get {disfmarker} uh modifiers in there
because they may also tell us whether the person is in a hurry or not
I mean {disfmarker} We can do a demo in the sense that we can um , {vocalsound} just ob observe the fact that this will , in fact do inference .
So we can , you know , set some of the uh nodes
and then try to find the probability of other nodes .
The reason I say the {pause} demo doesn't work very well is yesterday we uh {disfmarker} {pause} observed everything in favor of {pause} taking a tour ,
and it came up as " Tango " ,
Well , that 's obviously just to do with our probabilities .
Like , {pause} we totally hand - tuned the probabilities ,
However you know , it {disfmarker} The purpose was not really , at this stage , to come up with meaningful probabilities
but to get thinking about that hidden middle layer .
I guess once we look at the data more we 'll get more hidden {pause} nodes ,
So . Are " doing business " versus " tourist " {disfmarker}
They refer to your current task .
I think it 's more like " Are you are tourist ?
so , I thought that was directly given by the context {pause} switch .
That 's a different thing .
So the " tourists " node {pause} should be {pause} um , very consistent with the context node .
If the context were to set one way or another , that like strongly uh um , says something about whether {disfmarker} whether or not they 're tourists .
So the issue is that um in belief - nets , it 's not common to do what we did of like having , you know , a d bunch of values and then " unknown " as an actual value .
What 's common is you just like don't observe the variable ,
and then just marginalizes {disfmarker}
But uh {disfmarker} {vocalsound} We didn't do this because we felt that there 'd {disfmarker}
I guess we were thinking in terms of a switch that actually {disfmarker}
um {disfmarker} How long would it take to {disfmarker} to add another {pause} node on the observatory and , um , play around with it ?
So you want to have a {disfmarker} a node for like whether or not it can be entered ?
And then um , there 's also the question whether it may be entered .
Whether it 's a {disfmarker} Whether it 's a public building , and whether it 's {disfmarker} actually has a door .
explain to me why it 's necessary {pause} to distinguish between whether something has a door and is {pause} not public .
So I guess your question is {disfmarker} so far I have no really arg no real argument why to differentiate between statues as {disfmarker} statues and houses of celebrities ,
from that point of view .
Can we add , just so I can see how it 's done , uh , a " has door " {pause} property
You could affect {disfmarker} {pause} Theoretically you could affect " doing business " with " has door " .
I don't know if JavaBayes is nice about that .
It might be that if you add a new thing pointing to a variable , you just like {disfmarker} it just overwrites everything .
What would be nice if it {disfmarker} is if it just like kept the old function for either value
I mean in a way this is a lot of good features in Java
it 's cra has a GUI and it 's uh {disfmarker}
I didn't think it did learning .
Maybe it did a little bit of learning ,
But uh {disfmarker} it 's free .
But I mean its interface is not the greatest .
But actually it had an interface .
A lot of them were like , you know .
Command line .
There is actually a text file that you can edit .
So theoretically you could edit that .
But {pause} they 're not very friendly .
Yeah the ordering isn't very clear on {disfmarker}
we can maybe write an interface th for uh entering probability distributions easily ,
something like {disfmarker} like a little script .
I don't know if it actually manipulate the source , though .
That might be a bit complicated .
I think it might {disfmarker} it might be simpler to just {pause} have a script that , you know {disfmarker}
But if th if there is an XML {pause} file that {disfmarker} or format that it can also read {disfmarker}
Yeah I know there is an {disfmarker} I was looking on the we web page
and he 's updated it for an XML version of I guess Bayes - nets .
Well th you can either {disfmarker} you ca or you can read both .
is that maybe we ob we could observe a couple of um discourse phenomena such as the admission fee ,
and something else and something else , that happened in the discourse before .
So maybe this could be sort of a separate region of the net , {pause} which has two {disfmarker} {pause} has it 's own middle layer .
which is maybe something that is uh , a more general version of the actual {pause} phenomenon that you can observe .
That would all f funnel into one node that would {pause} constitute entrance requirements or something like that .
I mean it sort of get into plan recognition kinds of things in the discourse .
That 's a whole set of discourse related cues to your middle layer .
They ra may have there own hidden layer {pause} that points to some of {pause} the {disfmarker} the real hidden layer , um or the general hidden layer .
And the same we will be able to do for syntactic information ,
So essentially a lot of those nodes can be expanded into little Bayes - nets of their own .
I guess , the fact that the {disfmarker} there 's a complete separation between the {pause} observed features and in the output .
well for instance , the " discourse admission fee " {pause} node seems like it should point directly to the {disfmarker}
or increase the probability of " enter {pause} directly " versus " going there via tourist " .
Something {disfmarker} Somebody can have discussed the admission fee and u the answer {pause} is s if we {disfmarker}
um , you know , um {disfmarker} still , based on that result is never going to enter that building .
So the discourse refers to " admission fee " but it just turns out that they change their mind in the middle of the discourse .
What sort of discourse {pause} processing is uh {disfmarker} are the {disfmarker}
How much is built into SmartKom and {disfmarker}
And this um {disfmarker} m won't differentiate between all modes ,
but at least it 'll tell us " OK here we have something that {disfmarker}
somebody that wants to go someplace ,
what happens is you know the parser parses it
and then it 's handed on to the discourse history which is , um o one of the most elaborate {disfmarker} elaborate modules .
It helps an an anaphora resolution and it {disfmarker} and it fills in all the structures that are omitted ,
the discourse model actually stores what was presented at what location on the s on the screen
We can query it whether admission fees were discussed in the last turn
So one thing that might be helpful which is implicit in the {pause} use of " admission fee discussion " as a cue for entry , {vocalsound} {pause} is thinking about the plans that various people might have .
They 're {disfmarker} in {disfmarker} in non in sort of more traditional AI kinds of plan recognition things you sort of have {vocalsound} {pause} you know , some idea at each turn of agent doing something ,
I mean there are some {disfmarker} some of them are extremely elaborate ,
So by the way tha that structure {pause} that Robert drew on the board was like more um , {vocalsound} {pause} cue - type - based ,
and then {pause} some of the things we 're talking about here are more {disfmarker}
entering or som you know like they might be more task - based .
so {vocalsound} maybe what {disfmarker} what {disfmarker} what happened {disfmarker} what might happen is that we do get this sort of task - based middle layer ,
So , um I suggest w to {disfmarker} for {disfmarker} to proceed with this in {disfmarker} in the sense that {pause} maybe throughout this week the three of us will {disfmarker} will talk some more about maybe segmenting off different regions ,
Identify {pause} four regions ,
maybe make up some features for each region
middle layer for those .
And then these should then connect somehow to the more plan - based deep space
The probabilities and all are completely ad - hoc .
Yeah , another thing to do , um , is also to , um {disfmarker} I guess to ask around people about other Bayes - net packages .
also we can uh , start looking at the SmartKom tables
OK , I have to report {vocalsound} um , data collection .
We interviewed Fey ,
She 's willing to do it ,
meaning be the wizard for the data collection ,
also {vocalsound} maybe transcribe a little bit , if she has to ,
but also recruiting subjects , organizing them , and so forth .
Jerry however suggested that we should uh have a trial run with her ,
and it looks as if Friday afternoon will be the time when we have a first trial run for the data .
Well I just figured it has to be someone who 's , um , familiar enough with the data to cause problems for the wizard , so we can , uh , see if they 're you know good .
but {vocalsound} you know , if we take a subject that is completely unfamiliar with the task , or any of the set up , we get a more realistic
yes w we {disfmarker} we would like to test the wizard ,
So , is it a experimental setup for the um , data collection {pause} totally {pause} ready {disfmarker} determined ?
But um {disfmarker} in terms of specifying the scenario , {vocalsound} um {disfmarker} uh {disfmarker} uh {disfmarker} we 've gotten a little further
but um {disfmarker} we wanted to wait until we know who is the wizard ,
and have the wizard partake in the {pause} ultimate {pause} sort of definition probe .
So {disfmarker} so if {disfmarker} if on Friday it turns out that she really likes it and {disfmarker} and we really like her , then nothing should stop us from sitting down next week and {vocalsound} {comment} getting all the details completely figured out .
Like we wanna {disfmarker} we wanna be able to collect {vocalsound} as much of the variables that are needed for that ,
Bu - e e e I 'm even {disfmarker} This {disfmarker} this Tango , Enter , Vista is sort of , itself , an ad - hoc scenario .
The {disfmarker} the basic u um idea behind the uh {pause} data collection was the following .
The data we get from Munich is {pause} very command line ,
Not a rich language .
So we wanted just to collect data , to get {disfmarker} that {disfmarker} that {disfmarker} that {pause} elicits more , uh , that elicits richer language .
And we actually did not want to constrain it too much ,
Um . So this {disfmarker} this {disfmarker} this is a parallel track ,
So it may get us some more information on the human - machine pragmatics , um , that no one knows anything about , as of yesterday .
So now I think we should maybe have at least one navigational task with {disfmarker} with sort of explicit {disfmarker} uh
not ex it 's implicit that the person wants to enter ,
and maybe some task where it 's more or less explicit
So that we can label it .
