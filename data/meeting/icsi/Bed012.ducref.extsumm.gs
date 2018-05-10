What 's the situation like at the entity that is mentioned ?
if we know anything about it ?
That 's basically {pause} just specifying the {disfmarker} the input for the {disfmarker} w what 's
y Why are you specifying it in XML ?
And , also , I mean , this is a {disfmarker} what the input is going to be .
I mean , once {disfmarker} Once you have this sort of as {disfmarker} running as a module {disfmarker}
What you want is {disfmarker} You wanna say , " OK , give me the posterior probabilities of the Go - there {pause} node , when this is happening . "
So this is just a specification of all the possible inputs ?
Yep .
As , if I understand it correctly , it always gives you all the posterior probabilities for all the values of all decision nodes .
and the question is what to do with it ,
how to interpret it ,
So the person said , um , " Where is X ? "
we want to know , um , is {disfmarker} Does he want info ?
or know the location ?
Or does he want to go there ?
I mean . It 's always gonna give us a value of how likely we think i it is that he wants to go there and doesn't want to go there ,
or how likely it is that he wants to get information .
So , it {disfmarker} n I mean {disfmarker} a All I 'm saying is , whatever our input is , we 're always gonna get the full output .
And some {disfmarker} some things will always be sort of too {disfmarker} not significant enough .
You won't {disfmarker} it 'll be hard to decide .
you could say , " Well , there {disfmarker} Here 's the Where - Is construction . "
And for the Where - Is construction , we know we need to l look at this node , that merges these three things together
I guess they are evenly weighted .
The different decision nodes , you mean ?
If we trusted the Go - there node more th much more than we trusted the other ones , then we would conclude , even in this situation , that he wanted to go there .
What {disfmarker} what {disfmarker} what I am thinking , or what we 're about to propose here is we 're always gonna get the whole list of values and their posterior probabilities .
And now we need an expert system or belief - net or something that interprets that ,
Yeah I know . But how do we weight what we get out ?
As , which one i Which ones are important ?
So my i So , if we were to it with a Bayes - net , we 'd have to have a node {disfmarker} for every question that we knew how to deal with ,
that would take all of the inputs and weight them appropriately for that question .
Are we going to make a node for every question ?
Every construction .
I mean , in general , like , we won't just have those three ,
We 'll have , uh , like , many , many nodes .
So we have to , like {disfmarker} So that it 's no longer possible to just look at the nodes themselves and figure out what the person is trying to say .
Because there are interdependencies ,
I mean , it 's not based on constructions ,
it 's based on things like , uh , there 's gonna be a node for Go - there or not , and there 's gonna be a node for Enter , View , Approach .
Oh , so if {disfmarker} Let 's say I had a construction parser , and I plug this in , I would know what each construction {disfmarker} the communicative intent of the construction was
and so then I would know how to weight the nodes appropriately , in response .
So then , the Bayes - net that would merge there , that would make the decision between Go - there , Info - on , and Location , would have a node to tell you which one of those three you wanted ,
Like , if you 're asked a Where - Is question , you may not even look {disfmarker} like , ask for the posterior probability of the , uh , EVA node ,
Cuz , that 's what {disfmarker} I mean , in the Bayes - net you always ask for the posterior probability of a specific node .
you may not even bother to compute things you don't need .
Yeah , but that 's {disfmarker} that 's just shifting the problem .
Then you would have to make a decision ,
" OK , if it 's a Where - Is question , which decision nodes do I query ? "
Well , eventually , you still have to pick out which ones you look at .
I mean , maybe it does make a difference in terms of performance , computational time .
So basically , you 'd have a decision tree {pause} query , {pause} Go - there .
If k if that 's false , query this one . If that 's true , query that one .
And just basically do a binary search through the {disfmarker} ?
Also , I 'm somewhat boggled by that Hugin software .
I can't figure out how to get the probabilities into it .
basically , what {disfmarker} where we also have decided , prior to this meeting is that we would have a rerun of the three of us sitting together
sometime {pause} this week {pause} again
and finish up the , uh , values of this .
So we have , uh {disfmarker} Believe it or not , we have all the bottom ones here .
So , we have to come up with values for this , and this , this , this , and so forth .
And maybe just fiddle around with it a little bit more .
And , um , we won't {comment} meet next Monday .
We 'll meet next Tuesday , I guess .
OK , then . Let 's meet {disfmarker} meet again next Tuesday .
And , um , finish up this Bayes - net .
And we present our results ,
OK . Because then , once we have it sort of up and running , then we can start you know , defining the interfaces
and then feed stuff into it
and get stuff out of it ,
and then hook it up to some fake construction parser
Yeah , I can worry about the ontology interface
and you can {disfmarker} Keith can worry about the discourse .
maybe it 's OK , so that {disfmarker} that {disfmarker} that we can {disfmarker} that we have one node per construction .
Cuz even in people , like , they don't know what you 're talking about if you 're using some sort of strange construction .
Yeah , they would still c sort of get the closest , best fit .
But how many constructions do {disfmarker} could we possibly have {pause} nodes for ?
Any {disfmarker} any form - meaning pair , to my understanding , is a construction .
But , I mean , you know , you can probably count {disfmarker} count the ways .
as long as your analysis is finite .
