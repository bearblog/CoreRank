and the other bit of news is we had {disfmarker} you know , uh , I was visited by my German project manager
and B , is planning to come here either three weeks in July or three weeks in August , to actually work .
and he came up {disfmarker} we came up {disfmarker} with a pretty strange idea .
Imagine if you will , {vocalsound} that we have a system that does all that understanding that we want it to do based on utterances .
It should be possible to make that system produce questions .
So if you have the knowledge of how to interpret " where is X ? " under given conditions , situational , user , discourse and ontological {vocalsound} conditions , you should also be able to make that same system ask " where is X ? "
If you get the system to speak to itself , you may find n break downs and errors and you may be able to learn .
e I 'm sort of {disfmarker} have the impression that getting it to say the right thing in the right circumstances is much more difficult than getting it to understand something given the circumstances and so on ,
But maybe one could do some learning .
just the fact that we 'll get {disfmarker} The point is that getting it to understand one construction doesn't mean that it will n always know exactly when it 's correct to use that construction . Right ?
it 's not the same as the understanding .
The basic idea I guess would be to give {disfmarker} allow the system to have intentions , basically ?
If we don't have {disfmarker} Let 's assume we don't have any input from the language . Right ?
So there 's also nothing we could query the ontology ,
but we have a certain user setting .
If you just ask , what is the likelihood of that person wanting to enter some {disfmarker} something , it 'll give you an answer .
Well you can observe some user and context stuff and ask , what 's the posterior probabilities of all of our decision nodes .
Well , it will d r assign values to all the nodes . Yes .
Yeah . So what we actually then need to do is {disfmarker} is write a little script that changes all the settings ,
you know , go goes through all the permutations ,
didn't we calculate that once ?
Let 's see , so it would be two to the thirty for every output node ?
Which is very th very large .
Yeah , it 's g Anyway , the point is that given all of these different factors , it 's uh e it 's {disfmarker} it 's still going to be impossible to run through all of the possible situations or whatever .
But we can do randomized testing .
Which probabilistically will be good enough .
Yeah . So , it be it it 's an idea that one could n for {disfmarker} for example run {disfmarker} run past , um ,
Well we fixed some more things from the SmartKom system ,
How is the generation XML thing ?
I 'm gonna finish it today , uh hopefully .
It 's {disfmarker} it 's sort of t cognitive , neural , psycho , linguistic ,
but all for the sake of doing computer science .
Wait , is this a computer science conference
So it 's sort of cognitive , psycho , neural , plausibly motivated , architectures of natural language processing .
I mean we just {disfmarker} I mean it wouldn't hurt to write up a paper ,
Might be more interesting to do something like let 's assume um , we 're right ,
and take a " where is X " sentence ,
and how we cognitively , neurally , psycho - linguistically , construction grammar - ally , motivated , envision uh , understanding that " .
That should be able to {disfmarker} we should be able to come up with , you know , a sort of a {disfmarker} a parse .
Well , I {disfmarker} I also think that if we sort of write about what we have done in the past six months , we {disfmarker} we {disfmarker} we could sort of craft a nice little paper that {pause} if it gets rejected , which could happen , doesn't hurt
I mean , it 's obvious that we can't do any kind of evaluation ,
and have no {disfmarker} you know , we can't write an ACL type paper where we say , " OK , we 've done this
and now we 're whatever percentage better than everybody else " . You know .
maybe even {disfmarker} That 's maybe the time to introduce the {disfmarker} the new formalism that you guys have cooked up .
Look at the web page and let 's talk about it maybe tomorrow afternoon ?
don't make any plans for spring break next year .
We 're gonna do an int EDU internal workshop in Sicily .
I 've already got the funding .
So we could {disfmarker} we could say this is what {disfmarker} what 's sort of state of the art today . Nuh ?
And say , this is bad . Nuh ?
And then we can say , uh well what we do is this .
And how much to get into the cognitive neural part ?
That 's the only {disfmarker} That 's the question mark .
Yeah , and you can {disfmarker} you can just point to the {disfmarker} to the literature ,
Like , NLP cognitive neural .
The fact that the methods here are all compatible with or designed to be compatible with whatever , neurological {disfmarker} neuro neuro - biol su stuff .
Like introducing the formalism might be not really possible in detail ,
but you can use an example of it .
So this will be sort of documenting what we think , and documenting what we have in terms of the Bayes - net stuff .
The SUDO - square {nonvocalsound} is , {vocalsound} " Situation " , " User " , " Discourse " , right ? " Ontology " .
You know , these are our , whatever , belief - net decision nodes ,
and they all contribute to these {pause} {nonvocalsound} things down here .
Wait , wait , what 's the middle thing ?
Well , in the moment it 's a Bayes - net .
And it has sort of fifty not - yet - specified interfaces .
OK . Eh {pause} I have taken care that we actually can build little interfaces , {nonvocalsound} to other modules that will tell us whether the user likes these things and , n the {disfmarker} or these things ,
Think of {disfmarker} back at the EVA vector ,
and Johno coming up with the idea that if the person discussed the {disfmarker} discussed the admission fee , in {disfmarker} eh previously , that might be a good indication that , " how do I get to the castle ? " , actually he wants to enter .
So what would be kind of cool is that if we encounter concepts that are castle , tower , bank , hotel , we run it through the ontology ,
and the ontology tells us it has um , admission , opening times ,
and then search dynamically through the uh , discourse history for {pause} occurrences of these things in a given window of utterances .
And furthermore , I mean we can idealize that , you know , people don't change topics ,
But , even th for that , there is a student of ours who 's doing a dialogue act um , recognition module .
but we {disfmarker} what we actually decided last week , is to , and this is , again , for your benefit {disfmarker} is to um , pretend we have observed and parsed an utterance such as " where is the Powder - Tower " ,
So that {disfmarker} And I will {disfmarker} I will then {comment} {vocalsound} come up with the ontology side uh , bits and pieces ,
and then we can sort of fiddle with these things to see what it actually produces , in terms of output .
I don't see unde how we would be able to distinguish between the two intentions just from the g utterance , though .
I mean , uh bef or , before we don't {disfmarker} before we cranked it through the Bayes - net .
So we want to sort of come up with what gets uh , input , and how inter in case of a " where is " question .
So what {disfmarker} what would the outcome of {disfmarker} of your parser look like ?
And , what other discourse information from the discourse history could we hope to get , squeeze out of that utterance ?
So define the {disfmarker} the input into the Bayes - net {vocalsound} based on what the utterance , " where is X " , gives us .
So w if we have a construction {pause} node , " where is X " , it 's gonna both get the po posterior probability that {disfmarker} it 's Info - on up ,
Info - on is True - up , and that Go - there is True - up , as well .
Which would be exactly analogous to what I 'm proposing is , this makes {disfmarker} uh makes something here true ,
and this makes this True - up , and this makes this True - up as well .
I kinda like it better without that extra level of indirection too .
Wait , so do , or do not take other kinds of constructions into account ?
Well , if you {disfmarker} if you can , oh definitely do ,
If i if {disfmarker} if it 's not at all triggered by our thing , then it 's irrelevant ,
Think {disfmarker} Uh , well this is just a mental exercise .
focus on this question , how would you design {pause} that ?
So it 's like you infer the speaker intent ,
and then infer a plan , a larger plan from that , for which you have the additional information ,
so that we actually end up with um , um , nodes for the discourse and ontology
so that we can put them into our Bayes - net ,
and we can run our better JavaBayes , and have it produce some output .
So th this might be a nice opening paragraph for the paper as saying , " you know people look at kinds of {disfmarker} {vocalsound} at ambiguities " ,
A , uh these things are never really ambiguous in discourse , B ,
but normal statements that seem completely unambiguous , such as " where is the blah - blah " , actually are terribly complex , and completely ambiguous .
Also we 're getting a {disfmarker} a person who just got fired uh , from her job .
Uh a person from Oakland who is interested in maybe continuing the wizard bit once Fey leaves in August .
Remember this , we can completely change the set - up any time we want .
No , we 're approaching twenty now .
Look at the results we 've gotten so far for the first , whatever , fifty some subjects ?
But , until Fey is leaving , we surely will hit the {disfmarker} some of the higher numbers .
We have uh , eh found someone here who 's hand st hand transcribing the first twelve .
And so , @ @ whatever that is , it 's the generic default intention . That it would find out .
What would one possibly put in such a paper ?
and specify um , what {disfmarker} what we think the {disfmarker} the output uh , observe , out {disfmarker} i input nodes for our Bayes - nets for the sub sub - D , for the discourse bit , should be .
