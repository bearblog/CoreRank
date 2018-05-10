Oh , this was about {pause} um , inferring intentions from features in context , and the words ,
like " s go to see " , or " visit " , or some
the street network of our geographic information system .
It would always use the closest point to the object ,
So , {vocalsound} what we found interesting is , first of all , intentions differ .
Maybe you want to see it ,
Maybe you want to enter a building .
take a picture of it .
Or maybe you actually want to come as close as possible to the building .
If you don't have the intention of entering your building , but you know that something is really close to it , and you just want to approach it , or get to that building .
And the places where you will lead them for these intentions are sometimes ex in incredibly different .
And we get tons of {disfmarker} of these " how do I get to " , " I want to go to " ,
um , we can look at some factors that may make a difference .
This is of course a crucial factor , " what type of object is it ? "
Then of course the {disfmarker} the actual phrases may give us some idea of what the person wants .
Um . Sometimes I found in the {disfmarker} Uh , looking at the data , in a superficial way , I found some s sort of modifiers that {disfmarker} that m may also give us a hint ,
And this leads us straight to the context which also should be considered .
What we do know , is that the parser we use in the SmartKom system will never differentiate between any of these .
Maybe for a deep understanding task , that 's a nice sort of playground or first little thing . "
So it 's {disfmarker} it 's {disfmarker} it 's way too crude to d capture those differences in intentions .
" OK , we need , we gonna get those M - three - L structures .
And I will try to {disfmarker} to sort of come up with a list of factors that we need to get out of there ,
and maybe we want to get a g switch for the context .
if we feed it through a belief - net or {disfmarker} or something along those lines . We 'd get an inferred intention , we {disfmarker} we produce a structure that differentiates between the Vista , the Enter , and the , um , Tango mode .
So we think it 's a well - formed , uh , starter task for this , uh , deeper understanding in the tourist domain .
there 's gonna be contextual things ,
there 're gonna be linguistic things ,
there 're gonna be discourse things ,
and they gotta be combined .
And , my idea on how to combine them is with a belief - net ,
which is going to have as output , the conditional pr probability of one of three things ,
there are two questions {disfmarker}
is , uh , one , where do you get this i {comment} information from ,
and two , what 's the structure of the belief - net ?
So what are the conditional probabilities of this , that , and the other , given these things ?
And you probably need intermediate nodes .
I {disfmarker} we don't know what they are yet .
Oh , another thing you want is some information abou I think , about the time of day .
You want the {disfmarker} you want the ability to a You want the ability to ask ,
but what you don't wanna do is onl build a system that always asks every time ,
That 's not getting at the scientific problem ,
So one thing you could do is build a little system that , said , " whenever you got a question like that I 've got one of three answers .
Yeah . S so {disfmarker} so the way that might come up , if you wanna {disfmarker} Suppose you wanted to do that , you might say , " Um , as an intermediate step in your belief - net , is there a Source - Path - Goal schema involved ? "
What he was saying is , the M - three - L does not have any of that .
The M - three - L is the old SmartKom output ?
So , th they 're gonna give us some cr uh {disfmarker} or {disfmarker} We can assume that y you get this crude information .
About intention ,
And they don't give you the kind of object ,
A lot of parsers , um ,
That 's way beyond their scope , is {disfmarker} of interpreting that .
Because i we can not differentiate , at the moment , between , you know , the intention of wanting to go there or the intention of just know wanting to know where {disfmarker} where it is .
Yeah , well I think we ought to d a As we have all along , d We {disfmarker} we 've been distu distinguishing between situational context ,
which is what you have as context ,
and discourse context ,
but the idea is to take as a first goal , see if we could actually build a belief - net that would make this three way distinction uh , in a plausible way ,
these {disfmarker} We have all these transcripts
and we 're able to , by hand , extract the features to put in the belief - net .
here 're the things which , if you get them out of {disfmarker} out of the language and discourse , and put them into the belief - net , it would tell you which of these three uh , intentions is most likely . "
If that goes well , then we can start worrying about how we would extract them .
And if {disfmarker} to actually do that , build it , um {disfmarker} you know , run it {disfmarker} y y run it on the data where you hand - transcribe the parameters .
And , expand it to {disfmarker} to other things like this .
But if we can't do that , then we 're in trouble .
I think that , uh , if we can get the information , a belief - net is a perfectly good way of doing the inferential combination of it .
The real issue is , do what are the factors involved in determining this ?
But , um , since we are designing a {disfmarker} a {disfmarker} a {disfmarker} an , compared to this , even bigger data collection effort , {comment} um , we will definitely take care to put it in there ,
And {disfmarker} and it 's clear from the data , um , like , sorta the correct answer in each case .
Not from that data .
And I 'm sure even i the most , sort of , deliberate data collection experiment will never give you data that say , " Well , if it 's phrased like that , the intention is this . "
So , uh , I think you all know this , but we are going to actually use this little room
and start recording subjects probably within a month or something .
But {disfmarker} It was never th th the goal of that data collection to {disfmarker} to serve for sat for such a purpose .
So that 's why for example the tasks were not differentiated by intentionality ,
I 'm sure we can produce some if we need it ,
um , that {disfmarker} that will help us along those lines .
u u Sort of I 'm , at the moment , curious and I 'm {disfmarker} I 'm {disfmarker} s w want to approach it from the end where we can s sort of start with this toy system that we can play around with ,
so that we get a clearer notion of what input we need for that ,
And then we can start worrying about where to get this input ,
How exactly does the data collection work ?
And {disfmarker} and you see , uh , either th the three - D model , or uh , a QuickTime animation of standing u in a square in Heidelberg .
So , just off a textbook , uh , tourist guide , to familiarize , uh , yourself with that sort of odd - sounding German street names , like Fischergasse and so forth .
Part two is , you 're told that this huge new , wonderful computer system exists , that can y tell you everything you want to know ,
and you get a certain amount of tasks that you have to solve .
First you have to know {disfmarker} find out how to get to that place ,
And then the g system breaks down .
And then , a human operator comes on , and {disfmarker} and exp apologizes that the system has crashed ,
And so , you have basically the same tasks again ,
just with different objects ,
OK , so it 's just like , " Let 's figure out what they would say under the circumstances " .
I guess the reason I was asking about the sort of the de the details of this kind of thing is that , um , it 's one thing to collect data for , I don't know , speech recognition or various other tasks that have pretty c clear correct answers ,
but with intention {vocalsound} um , obviously , as you point out , there 's a lot of di other factors
and {disfmarker} I 'm not really sure , um , how {disfmarker} how {disfmarker} e the question of how to make it a t appropriate toy version of that {disfmarker} Um , it 's ju it 's just hard .
So , we that 's part of what we 'll have to figure out .
the {disfmarker} The problem that I was tr gonna try to focus on today was , let 's suppose by magic you could collect dialogues in which , one way or the other , you were able to , uh , figure out both the intention ,
and set the context ,
and know what language was used .
The issue is , can we find a way to , basically , featurize it
so that we get some discrete number of features so that , uh , when we know the values to all those features , or as many as possible , we can w come up with the best estimate of which of the , in this case three little intentions , are most likely .
Is there a construction , or the kind of object ,
or w uh , anything else that 's in the si It 's either in the {disfmarker} in the s the discourse itself or in the context .
So if it turns out that , whatever it is , you want to know whether the person 's uh , a tourist or not , OK ? that becomes a feature .
Now , how you determine that is another issue .
Though sin f in the short run , you 'd set them ,
and then in the longer run , you would figure out how you could derive them . From previous discourse or w any anything else you knew .
OK ? So {disfmarker} y so one of th one of the things we wanna do is actually , uh , pick a package ,
You know , we don't need the one that 'll solve massive , uh , belief - nets quickly .
But we do want one in which it 's easy to interact with and , uh , modify .
And probably one in which it 's easy to have , um , what amounts to transcript files .
uh , do e either of you guys , you got a favorite belief - net that you 've , you know , played with ?
JavaBayes or something ?
you want it stable , you want it {disfmarker}
And , as soon as we have one , we can start trying to , uh , make a first cut at what 's going on .
OK ? We {disfmarker} we have a {disfmarker} we know what the outcomes are gonna be ,
and we have some {disfmarker} some data that 's loose ,
we can use our own intuition ,
So it {disfmarker} if it turns out that just , thinking about the problem , you come up with things you really need to {disfmarker} You know , this is the kind of thing that is , you know , an intermediate little piece in your belief - net . That 'd be really interesting .
an and there 're plenty of people around , students in the department who , you know , live and breathe Bayes - nets .
For example , this th th the dialogue history is {disfmarker} is um , producing XML documents .
And the ontology that um , uh the student is {disfmarker} is constructing for me back in {disfmarker} in EML is in OIL and that 's also in XML .
And so that 's where a lot of knowledge about bakeries , about hotels , about castles and stuff is gonna come from .
So , yeah , we 're sort of {nonvocalsound} committed to XML as the kind of , uh , interchange .
if we , um , get really w wild on this , we may actually want to use some {disfmarker} some corpora that other people made
and , for example , if {disfmarker} if they are in {disfmarker} in MATE , then we get X M L documents with discourse annotations , t
It 'd be nice , but {disfmarker} but I {disfmarker} I {disfmarker} I do I don't wanna count on it .
Yeah . So in terms of {disfmarker} of the , um {disfmarker} the {disfmarker} what the SmartKom gives us for M - three - L packages , it could be that they 're fine , or it could be eeh .
So we 're not {disfmarker} we 're not abs we 're not required to use their packages .
We are required at the end to give them stuff in their format ,
What 's the time frame for this ?
Yeah bu w I 'd like that this {disfmarker} y yeah , this week , to ha to n to {vocalsound} have y guys , uh , you know , pick {vocalsound} the {disfmarker} y you know , belief - net package
And , then as soon as we have it , I think we should start trying to populate it for this problem .
Well , I 'd like to also , though , uh , ha have a first cut at what the belief - net looks like .
Even if it 's really crude .
So we 'll be like , hand , uh , doing all the probabilities .
Oh , yeah , unt until we know more .
Uh , what one hopes is that when we understand how the analyzer works , we can both worry about converting it to English and worry about how it could ex extract the parameters we need for the belief - net .
n None of this is i n Neither of these projects has got a real tight time - line ,
in the sense that over the next month there 's a {disfmarker} there 's a deliverable .
Yeah , but uh {disfmarker} but the uh {disfmarker} This point is really {disfmarker} I think very , very valid that ultimately we hope that {disfmarker} that both will merge into a harmonious and , um , wonderful , um , state
where we can not only do the bare necessities , IE , changing the table so it does exactly in English what it does in German , but also that we can sort of have the system where we can say , " OK , this is what it usually does ,
and now we add this little thing to it " ,
Johno 's and Bhaskara 's great belief - net ,
and we know that navigational tasks are gonna be a core domain of the new system ,
it all {disfmarker} all of a sudden it does much better .
So not only can you show that you know something sensible but ultimately , if you produce a system like this , it takes the person where it wants to go .
Rather than taking him always to the geometric center of a building ,
and then for these certain tasks ,
And if so , uh , is there a focus on the goal ?
Right .
So . Uh , we {disfmarker} we have to have this discussion of th the experiment , and the data collection , and all that sorta stuff
Maybe that 's what I will do next Monday
is show the state and show the system and show that .
