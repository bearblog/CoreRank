one of which is just lay out the influence structure of what we think influences what
so but du we should sort of have all of the uh basic design of what influences what done before we decide exactly how to compute it .
We were gonna do two things
So Go - there in the first place or not is definitely uh one of the basic ones .
you could have all those values for Go - there
or you could have Go - there be binary and given that you 're going there when .
Everything that has user comes from the user model
everything that has situation comes from the situation model - A .
So here is the {disfmarker} the {disfmarker} we had that the user 's budget may influence the outcome of decisions .
Um the finance is sort of here thought of as {disfmarker} as the financial policy a person carries out in his life ,
this is actually a GUI to a simulator that will if we tell it all the right things we 'll wind up with a functioning belief - net at the other end .
It 's {disfmarker} you took some actions , you spent money and stuff ,
And if it does influence anything then you 're gonna need something that converts from the {disfmarker} the number here to something that 's relevant to the decision there .
The other thing is that um every time that 's updated beliefs will have to be propagated
but then the question is do you {disfmarker} do we wanna propagate beliefs every single time it 's updated or only when we need to ?
so w that was the {disfmarker} of the endpoint ?
OK , so this was EVA .
the way we had been designing this , there were three intermediate nodes
uh which were the endpoint decision as seen from the uh user model as seen from the ontology and as seen from the discourse .
there was a decision with the same three outcomes uh based on the th those three separate considerations
But the {disfmarker} they 're {disfmarker} they 're undoubtedly gonna be more things to worry about .
If the {disfmarker} if the person talking is angry or slurs their speech they might be tired or , you know
uh I was thinking less likely to view
So {disfmarker} so my advice to do is {disfmarker} is get this down to what we think is actually likely to {disfmarker} to be a {disfmarker} a strong influence .
so that the belief - net itself has properties
and the properties are filled in uh from on ontology items .
So that there 'd be certain properties that would fit into the decision node
and then again as part of the ou outer controlling conditioning of this thing those would be set ,
so that some somehow someone would find this word , look it up in the ontology , pull out these properties , put it into the belief - net , and then the decision would flow .
if it 's fixing things selling things , or servicing things
but for this kind of purpose uh one of these places is quite like the other .
so the idea would be that you might wanna merge those three
So for this decision it 's just uh true or false
What ex um and so either those is true f or false ?
That {disfmarker} that if any of those things is true then it 's the kind of place that you uh
are more likely to enter .
So we 're deriving um this {disfmarker} the {disfmarker} this feature of whether the {disfmarker} the main action at this place happens inside or outside or what we 're deriving that from what kind of activity is done there ?
So , you know what does this look like ,
what are {disfmarker} what are uh intermediate things that are worth computing ,
what are the features we need in order to make all these decisions
and what 's the best way to organize this so that um it 's clean and {disfmarker} and consistent and all that sort of stuff .
so {disfmarker} and {disfmarker} and we assume that some of these properties would come indirectly through an ontology ,
but then we had this third idea of input from the discourse .
we have the user interest is a {disfmarker} is a vector of five hundred values ,
you could have a node that 's {disfmarker} that was a measure of the match between the object 's feature , you know , the match between the object the entity , I 'm sorry and the user .
It seems like everything in a user model a affects {disfmarker}
cuz then we get into huge combinatorics and stuff like that
we 're gonna have to somehow figure out uh some way to encapsulate that
uh so if there 's some general notion of for example the uh relation to the time to do this to the amount of time the guy has or something like that is {disfmarker} is the uh compatibility with his current state ,
Yeah , just seems like it 'd push the problem back a level .
No but , it 's more than that ,
one is the technical one that you don't wind up with such big exponential uh CBT 's ,
the other is it can be {disfmarker} it presumably can be used for multiple decisions .
Anyway th so in general this is the design , this is really design problem .
It 's hard for me to imagine how everything wouldn't just contribute to user state again .
Oh but the thing is that we uh uh we had some things that uh
And anyway we 're gonna have to find some way to cl uh get this sufficiently simple to make it feasible .
I mean clearly there 's more work to be done on this
but I think it 's gonna be more instructive to {disfmarker} to think about uh other decisions that we need to make in path land .
Well the fir see the first thing is , getting back to thing we left out of the other is the actual discourse .
because uh we 're gonna want to know you know , which constructions indicate various of these properties
I guess we 're gonna wind up pulling out uh discourse properties like we have object properties
and we don't know what they are yet .
so in terms of the uh planner what 's {disfmarker} what 's a good one to do ?
go there or not I think is a good one .
For Go - there , probably is true and false , let 's say .
And they 'll be a y uh , a user Go - there
Situation Go - there ,
Yeah , I mean , see I 'm {disfmarker} I 'm thinking that any node that begins with " Go - there " is either gonna be true or false .
Uh really important in {disfmarker} in the belief worl net world not to have loops
so what 's going to happen is that eventually
uh they 'll be some sort of system which is able to take the discourse in context and have outputs that can feed the rest of belief - net .
And now some of those will get fancier like mode of transportation and stuff
that you 'd have to do see in order to do reference and stuff like that um you 've gotta have both the current discourse and the context to say I wanna go back there ,
S so we 're {disfmarker} we 're gonna have to use some t care in the knowledge engineering to not have this explode .
So we {disfmarker} we just have to figure out what the regularities are and and code them .
I don't know how easy it is to do this in the interface
but you {disfmarker} it would be great if you could actually just display at a given time uh all the things that you pick up ,
you click on " endpoint " ,
and everything else fades
and you just see the links that are relevant to that .
Yeah , I {disfmarker} I mean , it might soon , if this is gonna be used in a serious way like java base then it might soon be necessary to uh start modifying it for our purposes .
So um recall the basic problem which is that um you have a belief - net and you have like a lot of different nodes all contributing to one node .
So as we discussed specifying this kind of thing is a big pain
So what um helps us in our situation is that these all have values in the same set ,
These are all like saying EV or A ,
we wanna view each of these as experts
and we wanna sort of combine their decisions
and create you know , um sorta weighted combination .
ea who are each of them is making a decision based on some factors
So the problem is to specify the uh so the conditional property of this given all those ,
like each node given its parents ,
So what uh I guess , what Jerry suggested earlier was basically that we , you know view these guys as voting
and we just take the uh we essentially take um averages ,
S so this assumes symmetry and equal weights and all this sort of things , which may or may not be a good assumption ,
So step two is um
Sure , so we don't wanna like give them all equal weight
You 'd compute the weighted average ,
So the next possibility is that um we 've given just a single weight to each expert ,
whereas it might be the case that um in certain situations one of the experts is more uh reliable and in certain situations the other expert is more reliable .
you have a new thing called " H " ,
This is a hidden variable .
and what it does is it decides which of the experts is to be trusted in this particular situation .
So H produces some you know , it produces a number ,
either one , two , three , or four , in our situation ,
W I was just , if you wanted to pay attention to more than one you could pass a w a weighting s system though too ,
Oh The situations that H has , are they built into the net
OK , so they {disfmarker} they could either be hand coded or learned or
Based on training data ,
Well I mean we need data with people intentions ,
like , are we able to get these nodes from the data ?
Well in terms of java base I think it 's basically what you see is what you get in
I would be surprised if it supports anything more than what we have right here .
and um you know , I mean one might be f fairly pleased with getting a really good analysis of five maybe ten in a summer
so , I mean I know we 're going for sort of a rough and ready .
