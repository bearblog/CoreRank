What we think is gonna happen is that , uh , in parallel starting about now {vocalsound} we 're gonna get Fey {vocalsound} to , where you 're working with me and Robert , draft a note that we 're gonna send out to various CogSci c and other classes saying , " here 's an opportunity to be a subject .
OK . So , we 're looking for a total of fifty people ,
In parallel with that , we 're gonna need to actually do the script .
But what I 'd like to do , if it 's O K , {vocalsound} is to s to , as I say , start the recruiting in parallel and possibly start running subjects next week .
not necessarily by any means all students
which is we gonna check out our social infrastructures for possible subjects .
This {disfmarker} The permission form .
and I think we 're just gonna use it as it is ,
Um , so what I 'd like to do is also have our subjects sign a waiver saying " I don't want to see the final transcript " .
except that with Munich everything is fine now .
They 're also gonna translate the , uh , German data from the TV and cinema stuff for Andreas .
They 're gonna {vocalsound} transcribe .
And , um {disfmarker} and now it 's {disfmarker} We have a complete English parser that does everything the German parser does .
And , uh , the reason was that the parser i c completely ignores the verb .
So it really is key word matching , basically .
Um . These are the {disfmarker} sort of the ten different sentence types that the uh {disfmarker} {vocalsound} the parser was able to do .
And it still is , now in English .
And , of course , you can have i many variations in those sentences , they will still parse fine .
One thing I was wondering , was , those functions there , are those things that modify the M - three - L basically ?
Yep .
One thing I was wondering was , {vocalsound} those percentage signs , right ?
And the value of the score is , v I assume , I guess , the more of these optional things that are actually in there , the higher the r score {vocalsound} it is .
OK . {vocalsound} Um , let 's hope that the generation will not be more difficult ,
And the next thing I would like to be able to do , and it seems like this would not be too difficult either , is {vocalsound} to say , " OK let 's now pretend we actually wanted to not only change the {disfmarker} {vocalsound} the mapping of {disfmarker} of , uh , words to the M - three - L but we also wanted to change {disfmarker} add a new sentence type
and and make up some {disfmarker} some new M - three - L {disfmarker} s "
Well , we 'll find that out .
those functions " Action " , " Goodbye " , and so on , right ?
Um , are they present in the code for the parser ?
I think each of those functions act on the current XML structure , and change it in some way , for example , by adding a {disfmarker} a l a field to it , or something .
there were other actions uh , that {disfmarker} that s seemed to step {disfmarker} state variables somewhere ,
It 's mystery functions .
Well , they 're defined somewhere , presumably .
So , yeah . I definitely think it 's {disfmarker} {vocalsound} It 's worth the exercise of trying to actually add something that isn't there .
Sort of get a complete understanding of the whole thing .
I got the , uh , M - three - L for the routes today .
So these are {disfmarker} these are your friends back at EML .
Uh {disfmarker} You {disfmarker} you have a route ,
and you cut it up in different pieces .
And every {disfmarker} every element of that e r r f of that {disfmarker} Every segment we call a " route element " .
And so , from A to B we cut up in three different steps ,
and every step has a " from object " where you start , a " to object "
where y where {pause} you sort of end , and some points of interest along the way .
And I {vocalsound} suggested that they should n be {disfmarker} k uh , kind enough to do s two things for us ,
is one , um , {vocalsound} {vocalsound} Also allocating , uh , some tags for our Action Schema Enter - Vista - Approach ,
And the Approach mode , anyhow , is the default .
That 's all they do it these days .
Wherever you 'll find a route planner it n does nothing but get to the closest point where the street network is {vocalsound} at minimal distance to the geometric center .
The problem isn't the short ra range optimization .
OK . What are the thl class of things we think we might try to do in a year or two ?
and what do we want to request now {vocalsound} that 's leave enough space to do all that stuff ?
So it seemed to me , what we ought to do is get our story together .
And think about it some , internally , before asking them to make changes .
Uh , this {disfmarker} and this , of course , was just the {vocalsound} {vocalsound} action end .
Uh , at some point we 're going to have to worry about the language end .
Oh . It 's beyond Source - Path - Goal ,
It seems to me we can get {vocalsound} all the complexity we want in actions and in language without going outside of tourists in Heidelberg .
This is {disfmarker} this is everything that {disfmarker} that , um , {pause} {vocalsound} you know , um {pause} we might want to do in the next couple years .
So , at least {disfmarker} unless somebody else wants t to suggest otherwise I think {vocalsound} the general domain we don't have t to uh , broaden .
That is , tourists in Heidelberg .
And , again , this is li in the databa this is also pretty well formed
because there is an ontology ,
and the database , and stuff .
Although th the {vocalsound} To get at them from a language may not be trivial .
Now , we hav the {disfmarker} the whole {disfmarker} Unfortunately , the whole database is , uh , {vocalsound} in German .
We have just commissioned someone to translate some bits of it ,
So , it 's a relational database with persons , events , {vocalsound} and , um , objects .
let 's say that by the end of spring break , I 'll try to come up with some {vocalsound} general story about , um , construction grammar ,
and what constructions we 'd use
and how all this might fit together .
There 's this whole framework problem that I 'm feeling really uncomfortable about .
is {disfmarker} is in this sort of over - arching story we {disfmarker} we worked it out for th as you say , this {disfmarker} the storytelling scenario .
And I think it 's really worth thinking through {vocalsound} {vocalsound} what it looks like .
What is the simspec mean , et cetera .
And we can {disfmarker} w we can do all sorts of things that don't fit into their framework at all .
I mean , once we have fulfilled these requirements ,
So , if we want to turn it into u understan standing stories about Heidelberg , we can do that .
what is the {disfmarker} the basic thing that {disfmarker} that you are , um , obligated to do , um , uh , by the summer before w uh y c we can move {disfmarker}
the {disfmarker} There 's two packages
there 's a , uh , quote parser ,
there 's a particular piece {vocalsound} of this big system ,
which , in German , uh , takes these t sentence templates and produces XML structures .
And one of our jobs was to make the English equivalent of that .
That , these guys did in a {disfmarker} in a day .
The other thing is , at the other end , roughly at the same level , there 's something that takes , uh , X M L structures , produces an output XML structure
Eh , but again , there 's one module in which there 's one piece {vocalsound} that we have to convert to English .
and then after that a s a synthesizer that goes from an XML structure to , uh , language generation , to actual specifications for a synthesizer .
And then there 's a language generator ,
which is instructions for the generator .
So , um {disfmarker} {vocalsound} Recall that , uh , we want to have this kind of structure in our Bayes - nets .
the typical example is that , um , these are all a bunch of cues for something ,
and this is a certain effect that we 'd like to conclude .
Enter , V View , Approach , right ?
Given N - nodes , and furthermore , the fact that there 's three things here , we need to specify " three times " , uh , " two to the N " probabilities .
And , that 's a lot of probabilities to put here , which is kind of a pain .
So {pause} Noisy - ORs are a way to , uh , {vocalsound} sort of deal with this .
So , for example , if we don't really know {vocalsound} if the thing is a landmark or not , Or , i if that just doesn't seem relevant , then that would be th sort of the Disting - the Distinguish state .
Yeah .
So , this is the Heckerman paper you 're working with ?
So , you know , if it is a landmark , and no none of the other things really ap applicable , then {disfmarker} this would represent the probability distribution .
So {pause} The idea is that , each of these EI {disfmarker} is {disfmarker} {vocalsound} represents what this would be {disfmarker} if all the other ones were in the distinguish state . Right ?
So we come up with these l little tables for each of those
The important point is {disfmarker} that {disfmarker} Um {disfmarker} There is a {disfmarker} a {disfmarker} a general kind of idea of shortcutting the full CPT .
Th - c the full conditional probability table {disfmarker} with some function .
And the final thing is that , um {disfmarker} {vocalsound} {vocalsound} this is a deterministic function of these ,
Um {pause} {vocalsound} {nonvocalsound} The {disfmarker} so what we want , is basically JavaBayes to support deterministic , uh , functions .
So , if Ba - JavaBayes won't do it for you ,
The f the {disfmarker} the {disfmarker} the Bayes - nets in general are quite good at saying , " if you have no current information about this variable just take the prior for that . "
So , if you don't have any information about the discourse , you just use your priors of {disfmarker} of whatever {disfmarker} eh the {disfmarker} discourse {disfmarker}
And , I thi I think that 's the standard way people get around the {disfmarker} uh
There are ways of breaking this up into s to {disfmarker} to subnets and stuff like that .
I think we definitely {disfmarker} I think it 's a great idea tha to {disfmarker} to pursue that .
uh , like the Noisy - OR function , really is one that 's essentially says , uh , take the max .
Which is {disfmarker} The hierarchy that s comes with the ontology is just what you want for this .
Let 's {disfmarker} OK , so we have {vocalsound} the EVA vector for {disfmarker} for various kinds of landmarks .
If you know it for a specific landmark you put it there .
If you don't , you just go up the hierarchy to the first place you find one .
but {disfmarker} but in any case {disfmarker} i View it logically as being in the ontology .
It 's part of what you know about {disfmarker} a {disfmarker} an object , {vocalsound} is its EVA vector .
So , that 's a very pretty relationship between these local vectors and the ontology .
We 're gonna need some way to either get a p tag in the ontology , or add fields ,
The reason is , {vocalsound} given the craw bet uh , the {disfmarker} the {disfmarker} the projects that all carry their own taxonomy and , on all history , {vocalsound} they 're really trying to build one top level ontology ft that covers all the EML projects ,
But , nevertheless , it 's going to be there by n by , uh , next Monday
what I don't think is ever going to be in the ontology , is sort of , you know , the likelihood of , eh , people entering r town halls , and looking at town halls , and approaching town halls ,
especially since we are b dealing with a case - based ,
not an instance - based ontology .
And , so , since the d decision was on types , on a d simply type - based , {vocalsound} we now have to hook it up to instances .
If it 's that type of thing , and we want its EVA vector , pppt - pppt ! {comment} it 's that . "
And then {disfmarker} But , the combination functions , and whether we can put those in Java Bayes , and all that sort of stuff , is , uh {disfmarker} is the bigger deal .
That 's the question is " to what extent does it allow us to put in these G functions ? "
I don't see why the , uh , combining f functions have to be directly hacked into
I mean , they 're used to create tables
so we can just make our own little functions that create tables in XML .
OK . And I I 'll {disfmarker} I 'll think s through this , uh , {vocalsound} eh {disfmarker} getting EVA vectors dynamically out of ontologies one more time
Well , you and I should talk about it .
All the entities do have concrete reference .
Eh {disfmarker} so , you {disfmarker} you {disfmarker} you may or {disfmarker} So , then you 'd have this little vector of , um , you know , Approach Mode or EVA Mode .
