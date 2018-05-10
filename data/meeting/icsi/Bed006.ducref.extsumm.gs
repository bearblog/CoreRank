Um , so we 're about to collect data
And um we have a little description of asking peop subjects to contact Fey for you know recruiting them for our thing
however there is always more people in a {disfmarker} in a facul uh in a department than are just taking his class or anybody else 's class at the moment
Um and then , secondly , we had , you may remember , um the problem with the re - phrasing ,
that subject always re - phrase sort of the task that uh we gave them ,
there the idea is now that next actually we {disfmarker} we need to hire one more person to actually do that job
Um {vocalsound} the idea now is to sort of come up with a high level of sort of abstract tasks
" go shopping "
So out of these f s these high level categories the subject can pick a couple ,
sort of make up their own itinerary a and {disfmarker} and tasks
so um y you 'll have those say somewhere what their intention was {disfmarker}
the person is able to take notes on a map that we will give him and the map will be a tourist 's sort of schematic representation with {disfmarker} with symbols for the objects .
And then we 're going to have another {disfmarker} we 're gonna have w another trial run
so they 'll have a little bit more natural interaction ?
Hopefully .
It 's a tourist information web site ,
Talk to a machine and it breaks down and then the human comes on .
The question is just sort of how do we get the tasks in their head that they have an intention of doing something and have a need to ask the system for something without giving them sort of a clear wording or phrasing of the task .
Well , so the idea is to try to get the actual phrasing that they might use and try to interfere as little as possible with their choice of words .
Well , u u the one experiment th that {disfmarker} that {disfmarker} that I 've read somewhere , it was {disfmarker} they u used pictures .
However , not only was {disfmarker} the common census were {disfmarker} among all participants of Friday 's meeting was it 's gonna be very laborious to {disfmarker} to make these drawings for each different things ,
So all of a sudden we 'll get descriptions of pictures in there .
let me make one more general remark , has sort of two {disfmarker} two side uh um actions , its um action items that we 're do dealing with ,
one is modifying the SmartKom parser and the other one is modifying the SmartKom natural language generation module .
Uh , meaning that Tilman Becker , who does the German one , actually took out some time and already did it in English for us .
And um I {disfmarker} I do have some good news for the natural language generation however .
It 's the last week of April until the fourth of May
and ask them more questions
No it 's just um you know they 're coming for us so that we can bug them
and they can give some nice talks and stuff .
Um , the basic requirement is fulfilled almost .
When Andreas Stolcke and {disfmarker} and his gang ,
when they have um changed the language model of the recognizer and the dictionary , then we can actually a put it all together
you can speak into it and ask for TV and movie information
if {disfmarker} if something actually happens and some answers come out , then we 're done .
Then uh on to the modeling .
The idea is , so , imagine we have a library of schema
such as the Source - Path - Goal
and then we have forced uh motion ,
And then those actions can be in multiple categories at the same time if necessary .
We 're talking more on the sort of intention level , up there ,
and more on the {disfmarker} this is the {disfmarker} your basic bone um schema , down there .
Basically , what this is {disfmarker} is that there 's an interface between what we are doing and the action planner
and right now the way the interface is " action go " and then they have the {disfmarker} what the person claimed was the source and the person claimed as the goal passed on .
And the problem is , is that the current system does not distinguish between goes of type " going into " , goes of type " want to go to a place where I can take a picture of " , et cetera .
In the future though , the content of a hypothesis will not only be an object and an {disfmarker} an action and a domain object but an action , a domain object , and a rich action description ,
instead of just making it an attribute and which {disfmarker} which is just one thing we {disfmarker} we decided to make it 's own entity so that we could explode it out later on in case there is some structure that {disfmarker} that we need to exploit .
Right , so the {disfmarker} the {disfmarker} the roles will be filled in with the schema
and then what actual a action is chosen is {disfmarker} will be in the {disfmarker} in the action schema section .
But if it is , then the top block is sort of like
and maybe it has stuff about that specific to entering or viewing or approaching ,
and you can also describe them in a general way as Source - Path - Goal schema
So all of those have um basically f either specific {disfmarker} frame specific roles or more general frame specific roles that might have binding .
it {disfmarker} it 's somewhere in there that you need to represent that there is some container
and the interior of it corresponds to some part of the Source - Path - Goal um you know goal {disfmarker} uh goal I guess in this case .
a and the answer is absolutely .
meaning we can reference .
and link it to another one , and this not only within a document but also via documents ,
I mean personally , I 'm looking even more forward to the day when we 're going to have X forms , which l is a form of notation where it allows you to say that if the SPG action up there is Enter , then the goal type can never be a statue .
S So um , like are you gonna have similar schemas for FM
like forced motion and caused action and stuff
like you have for SPG ?
Yeah .
so it would be considered valid if we have an SPG action " Enter " and no SPG schema , but a forced action schema .
it 's {disfmarker} it 's crucially necessary , is that we can have multiple schemas and multiple action schemas in parallel .
I mean you could have a flat structure and just say these are two independent things ,
but there 's also this sort of like causal ,
well , so one is really facilitating the other and it 's part of a compound action of some kind , which has structure .
So there 's like levels of granularity .
Well , I think we 're gonna hit a lot of interesting problems
um well I should have {disfmarker} we should have added an ano an XML example ,
and {disfmarker} and this is on {disfmarker} on a {disfmarker} on {disfmarker} on my list of things until next {disfmarker} next week .
It 's also a question of the recursiveness and {disfmarker} and a hier hierarchy um in there .
Well {disfmarker} well you have to be careful with that uh uh thing
because uh {vocalsound} I mean many actions presuppose some {disfmarker} um almost {vocalsound} infinitely many other actions .
What are some types of action schemas ?
Well one of the types of action schemas is Source - Path - Goal action .
And what are some types of that ?
And an Enter , a View , an Approach .
Inside of Enter there will be roles that can be filled basically .
So if I want to go from outside to inside {vocalsound} then you 'd have the roles that need to filled , where you 'd have a Source - Path - Goal set of roles .
So if you wanted to have a new type of action you 'd create a new type of category .
So there 's a bit a redundancy ,
Which is why I would think you would say Enter
and then just say all the things that are relevant specifically to Enter .
And then the things that are abstract will be in the abstract things as well .
And that 's why the bindings become useful .
Um and I agree that you know this is something we need to discuss ,
It 's just like a frame hierarchy ,
We will not end this discussion anytime soon .
And it 's gonna get more and more complex the {disfmarker} the l complexer and larger our domains get .
So like unless @ @ {disfmarker} Are there reasons why one is better than the other I mean that come from other sources ?
This is {disfmarker} this is a schema that defines XML messages that are passed from one module to another ,
mainly meaning from the natural language understanding , or from the deep language understanding to the action planner .
Now the {disfmarker} the reason for {disfmarker} for not using this approach is because you always will have to go back ,
each module will try {disfmarker} have to go back to look up which uh you know entity can have which uh , you know , entity can have which parents ,
So you always need the whole body of {disfmarker} of y your model um to figure out what belongs to what .
Or you always send it along with it ,
Yeah , we {disfmarker} I will promise for the next time to have fleshed out N {comment} XML examples for a {disfmarker} a run through and {disfmarker} and see how this {disfmarker} this then translates ,
but the principal distinction between having the {disfmarker} the pure schema and their instantiations on the one hand , and adding some whatever , more intention oriented specification um on parallel to that {disfmarker} that {disfmarker} this approach seems to be uh workable to me .
Meeting time rescheduling .
I n Didn't you say something about Friday ,
So I mean clearly there 's {disfmarker} I can talk about the um the parser changes on Friday at least ,
and um if you can get that binding point also maybe with a nice example that would be helpful for Johno and me .
but it 's {disfmarker} it {disfmarker} for me it seems to be conceptually important that we find out if we can s if {disfmarker} if there {disfmarker} if there are things in there that are sort of a general nature ,
we should distill them out
So , in general they 'll be bindings across both intentions and the actions .
and put them where the schemas are .
Um are the {disfmarker} are the sample data that you guys showed sometime ago {disfmarker}
Cuz it 'd be nice for me to like look if I 'm thinking about examples
and there 's gonna be s a lot of stuff on the Goal and blah - blah - blah , that a goal can be and so forth .
