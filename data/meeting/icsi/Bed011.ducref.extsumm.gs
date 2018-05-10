So what I 've tried to do here is list all the decision nodes that we have identified on this {pause} side .
Commented and {disfmarker} what they 're about and sort of {disfmarker} the properties we may um give them .
And here are the uh {disfmarker} tasks to be implemented via our data collection .
And these are the data tasks where w we can assume the person would like to enter , view or just approach the thing .
so there 's a lot of things where we have no analogous tasks , and {pause} that may or may not be a problem .
We can change the tasks slightly if we feel that we should have data for e sort of for every decision node
so {disfmarker} trying to im um {disfmarker} implant the intention of going to a place now , going to a place later on the same tour ,
So What we 're gonna do today is two related things .
Uh one of them is to work on the semantics of the belief - net which is going to be the main inference engine for thi the system uh making decisions .
And decisions are going to turn out to be parameter choices for calls on other modules .
And we 're also , sort of uh in the same process , going to work with Fey on what there should be in the dialogues .
OK . We were gonna put this in front of people .
Then {disfmarker} then they will read uh {disfmarker} a task where lots of German words are sort of thrown in between .
And um {disfmarker} and they have to read isolated proper names
And um {disfmarker} And then they gonna have to f um um choose from one of these tasks , which are listed here .
Six different things they sort of think they would do if they were in Heidelberg or traveling someplace {disfmarker}
and um {disfmarker} and they have a map .
Very sketchy , simplified map .
And then they call this computer system that works perfectly , and understands everything .
And um {disfmarker} And then after three tasks the system breaks down .
And Fey comes on the phone as a human operator .
And um {disfmarker} And Fey has some thirty subjects lined up ?
Yeah .
And um we 're still l looking for a room on the sixth floor because they stole away that conference room . Um {disfmarker} behind our backs .
David and {disfmarker} and Jane and {disfmarker} and Lila are working on that as we speak .
we get to the uh {disfmarker} uh belief - net just focusing on {disfmarker} on the g Go - there node .
And what w what happened is that um design - wise I 'd sort of n noticed that we can {disfmarker} we still get a lot of errors from a lot of points to one of these sub Go - there User Go - there Situation nodes .
So I came up with a couple of additional nodes here where um
um {disfmarker} I can now sort of draw straight lines from these to here , meaning it g of course goes where the sub - S {disfmarker}
everything that comes from situation , everything that comes from user goes with the sub - U ,
and whatever we specify for the so - called " Keith node " , or the discourse , what comes from the {disfmarker} um {disfmarker} parser , construction parser , um will contribute to the D and the ontology to the sub - O node .
And um one just s sort of has to watch which {disfmarker} also final decision node so it doesn't make sense {disfmarker} t to figure out whether he wants to enter , view or approach an object if he never wants to go there in the first place .
And um {disfmarker} And for now uh the {disfmarker} the question is " How much of these decisions do we want to build in explicitly into our data collection ? "
but {disfmarker} but s th point is to {disfmarker} to y to {disfmarker} build a system that 's got everything in it that might happen you do one thing .
T to build a system that um {disfmarker} had the most data on a relatively confined set of things , you do something else .
And the speech people , for example , are gonna do better if they {disfmarker} if {disfmarker} things come up uh {disfmarker} repeatedly .
so if {disfmarker} if it 's one service , one luxury item , you know , one big - ish place , and so forth and so on , um {disfmarker} then my guess is that {disfmarker} that the data is going to be easier to handle .
Now of course you have this I guess possible danger that somehow there 're certain constructions that people use uh when talking about a museum that they wouldn't talk about with a university and stuff ,
I mean {pause} you know , if our goal is to really sort of be able to handle a whole bunch of different stuff , then throwing harder situations at people will get them to do more linguistic {disfmarker} more interesting linguistic stuff .
Maybe {disfmarker} I suggest we make some fine tuning of these , get {disfmarker} sort of {disfmarker} run through ten or so subjects
and see whether we wanna make it more complex or not , depending on what {disfmarker} what sort of results we 're getting .
and I looked at one of them which was about ten sentences , found fifteen , twenty different construction types that we would have to look for and so on
Um {disfmarker} I can {disfmarker} Yeah , I mean I s I think can probably schedule ten people , uh , whenever .
Um {disfmarker} I {disfmarker} I would say maybe two weeks .
Let 's plan next Monday , OK , to have a review of what we have so far .
This means audio , but {disfmarker}
but it would be great if you could , um , not transcribe it all , but pick out uh , some stuff .
Are you gonna have the audio on the web site ?
OK .
It 's actually like five minutes dialogue .
I b My guess is it 's gonna be ten .
Um But anyway {disfmarker} yeah , so I think {disfmarker} it 's a good idea to start with the sort of relatively straight forward res just response system .
And then if we want to uh {disfmarker} get them to start doing {disfmarker} uh {disfmarker} multiple step planning with a whole bunch of things and then organize them
tell them which things are near each other
uh {disfmarker} You know , " Which things would you like to do Tuesday morning ? "
That w maybe one thing we should do is go through this list and sort of select things that are categories and then o offer only one member of that category ?
That 's what I was suggesting for the first round , yeah .
like at you know , " attend a theater , symphony or opera " is {disfmarker} is a group ,
and " tour the university , castle or zoo " ,
But I mean i it seem that um {disfmarker} there is a difference between going {disfmarker} to see something , and things like " exchange money " or " dine out "
So we {disfmarker} yeah we don't know how many we can get next door at the {disfmarker} uh shelter for example .
I mean , Go - there is {disfmarker} is a yes or no .
I 'm also interested in th in this " property " uh line here ,
um , timing was um {disfmarker} I have these three .
Now , later on the same tour , sometimes on the next tour .
Um , the reason why {disfmarker} why do we go there in the first place
IE uh {disfmarker} it 's either uh {disfmarker} for sightseeing , for meeting people , for running errands , or doing business .
Um , " mode " ,
" drive there " , " walk there " uh {disfmarker} or " be driven " , which means bus , taxi , BART .
OK , " Length " is um , you wanna get this over with as fast as possible ,
I mean you 're {disfmarker} you 're talking about rather than having the user decide this you 're supposed t we 're supposed to figure it out ?
Th - the user can always s say it , but it 's just sort of we {disfmarker} we hand over these parameters if we make {disfmarker} if we have a feeling that they are important .
And that we can actually infer them to a significant de degree , or we ask .
Or {disfmarker} eh so , y but there 's th but definitely a back - off position to asking .
And , Timing , uh , uh , Length would definitely be part of it ,
" Costs " ,
" Little money , some money , lots of money " ?
Um {disfmarker} " Object information " ,
" Do I {disfmarker} do I wanna know anything about that object ? "
So " object " becomes " entity " ,
Alright , so um {disfmarker} So I think the order of things is that um , Robert will clean this up a little bit , although it looks pretty good .
Uh Robert and Eva and Bhaskara are gonna actually {disfmarker} build a belief - net that {disfmarker} that , um , has CPT 's and , you know , tries to infer this from various kinds of information .
And Fey is going to start collecting data ,
and we 're gonna start thinking a about {disfmarker} uh {disfmarker} what constructions we want to elicit .
Well , I will tell you the German tourist data .
Dialogues . SmartKom {disfmarker}
Those files that you sent me are the user side of some interaction with Fey ?
Some data I collected in a couple weeks for training recognizers and email way back when .
see this {disfmarker} this {disfmarker} this {disfmarker} uh {disfmarker} ontology node is probably something that I will try to expand .
We are expecting Johno to build a parser ,
Uh {disfmarker} He 's g he 's hoping to do this for his masters ' thesis s by a year from now .
Uh {disfmarker} limited .
Well , the hope is that the parser itself is , uh , pretty robust .
so the idea is {disfmarker} uh {disfmarker} first of all I misspoke when I said we thought you should do the constructions .
OK , Because uh {disfmarker} we do wanna get them r u perfectly {disfmarker} but I think we 're gonna have to do a first cut at a lot of them to see how they interact .
And I {disfmarker} I me it would it would be completely out of the question to really do more than , say , like , oh I don't know , ten , over the summer ,
so you can do f you know , f f uh {disfmarker} have a complete story ov of s of some piece of dialogue .
And that 's gonna be much more useful than having all of the clausal constructions and nothing else , or {disfmarker} or {disfmarker} or something like that .
So that the {disfmarker} the trick is going to be t to take this and pick a {disfmarker} some sort of lattice of constructions ,
whatever you need in order to uh , be able to then , uh , by hand , you know , explain , some fraction of the utterances .
We could sit down and think of sort of the {disfmarker} the ideal speaker utterances ,
the ideal sentences where we have complete construction coverage and , sort of , they match nicely .
Um , the action planner guy has wrote {disfmarker} has written a {disfmarker} a p lengthy {disfmarker} proposal on how he wants to do the action planning .
And I responded to him , also rather lengthy , how he should do the action planning .
And I tacked on a little paragraph about the fact that the whole world calls that module a dis disc dialogue manager ,
And also Rainer M Malaka is going to be visiting us shortly ,
And . if I care about it being open , accessible or not , I don't think there 's any middle ground there .
And hopefully you can sort of also try to find out , you know , sooner or later in the course of the summer what we can expect to get from the discourse that might , you know {disfmarker} or the {disfmarker}
