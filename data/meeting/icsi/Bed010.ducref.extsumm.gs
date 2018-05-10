The {disfmarker} we got to the point where we can now speak into the SmartKom system , and it 'll go all the way through and then say something like " Roman numeral one , am Smarticus . "
which means it 's just using a German sythesis module for English sentences .
and " concept to speech " is feeding into this synthesis module giving it what needs to be said , and the whole syntactic structure
so it can pronounce things better , presumably . Then , just with text to speech .
Uh , and did write the tree adjoining grammar for some {disfmarker} some sentences .
But I think that the point is that out of the twelve possible utterances that the German system can do , we 've already written the {disfmarker} the syntax trees for three or four .
Right now it 's brittle and you need to ch start it up and then make ts twenty changes on {disfmarker} on {disfmarker} on {disfmarker} on seventeen modules before they actually can stomach it , anything .
because it 's designed for this seevit thing , where you have the gestural recognition running with this s Siemens virtual touch screen , which we don't have here .
but it 's working now ,
Why {disfmarker} I had {disfmarker} I did need to chan generate different trees than the German ones ,
So uh we are committed for our funding .
n no , to just get the dem get the demos they need .
If it turns out we can also give them lots more than that by , you know , tapping into other things we do , that 's great .
So th the demo the demo requirements for this Fall are sort of taken care of as of later this week or something .
And then {disfmarker} So , it 's probably fifteen months or something until there 's another serious demo requirement .
so The idea is there 's this uh , other subgroup that 's worrying about formalizing the nota getting a notation .
But sort of in parallel with that , uh , the hope is tha in particularly you will work on constructions in English Ge - and German for this domain ,
but y not worry about parsing them or fitting them into SmartKom or any of the other {disfmarker} anything lik any other constraints for the time being .
So I 'd like to , for the summer turn into science mode .
So , c sh we could set that up as actually an institute wide thing ?
Well d we {disfmarker} we do wanna have all the bugs out b where you have to sort of pipe in extra XML messages from left and right before you 're {disfmarker}
Uh . I mean there are a lot of issues ,
what 's the ontology look like ,
you know what do the constructions look like ,
what 's the execution engine look like ,
But , more focused on uh an idealized version than just getting the demo out .
And I g I got the feeling that we are {pause} the only ones right now who have a running system .
Um . {vocalsound} Well it was just amazing to {disfmarker} to see uh how {disfmarker} how instable the whole thing is ,
e the version {disfmarker} that is , the full version that 's on the server d does not work .
And um , part of my responsibility is uh to use our internal " group - ware " server at EML ,
make that open to all of us and them ,
so that whatever we discuss in terms of parsing and {disfmarker} and generating and constructions w we {disfmarker} we sort of uh put it in there
and they put what they do in there
and maybe we can even um , get some overlap , get some synergy out of that .
because the tree adjoining grammars that {disfmarker} that Tilman is using is as you said nothing but a mathematical formalism .
And you can just do anything with it , whether it 's syntactic trees , H P S G - like stuff , or whether it 's construction .
So if you ever get to the generation side of constructing things and there might be something of interest there ,
And one of the things we need to do is the um , and this I think is relatively tight {disfmarker} tightly constrained , is to finish up this belief - net stuff .
and we went through this , and , I think , more or less convinced ourselves that at least the vast majority of the nodes that we needed for the demo level we were thinking of , were in there .
So , uh Bhaskara and I went off and looked at some technical questions about were certain operations sort of legitimate belief - net computations and was there some known problem with them or had someone already uh , solved you know how to do this and stuff .
The answer seems to be uh , " no , no one has done it , but yes it 's a perfectly reasonable thing to do if that 's what you set out to do " .
And there 're two aspects to it , one of which is , you know , technical ,
getting the coding right , and making it run , and uh stuff like that .
And the other is the actual semantics .
OK ? What all {disfmarker} you know , what are the considerations and how and what are the ways in which they relate .
We do in the long run wanna do better visualization and all that stuff .
I did look into that , uh in terms of , you know , exploding the nodes out and down ag
JavaBayes does not support that .
It 'd probably take two weeks or so to actually go through and do it ,
Yeah , the one that uh people seem to use is uh Hugin or whatever ?
I {disfmarker} I also s would suggest not to d spend two weeks in {disfmarker} in {disfmarker} in changing the {disfmarker} the JavaBayes code .
I {disfmarker} I will send you a pointer to a Java applet that does that ,
How do you go about this process of deciding what these connections are ?
One is you design and the other is you learn .
So uh what we 're gonna do initially is {disfmarker} is do design , and , i if you will , guess .
If it 's done right , and if you have data then , there are techniques for learning the numbers given the structure
but for the limited amount of stuff we have for this particular exercise I think we 'll just design it .
Cuz you know , I 'm still sort of itching to {disfmarker} to look at what {disfmarker} look at the stuff , and see what people are saying .
Um , but uh that 's th but we have data in English and German already .
Transcribed .
I will send you that .
because I went to a linguistics colloquium on the fictive motion stuff ,
seems to me that that will fairly obviously be of relevance to uh {disfmarker} to what we 're doing here
And there is a huge uh project on spatial descriptions uh {disfmarker} differences in spatial descriptions .
It 's KLEIST .
Carroll , ninety - three .
Um . I {disfmarker} There is a {disfmarker} a study on the differences between English and German on exactly that problem .
I can also give you uh , a pointer to a paper of mine which is the {disfmarker} the ultimate taxonomy of reference frames .
On this scale , you have it either be ego or allocentric .
It 's called " An Anatomy of a Spatial Description " .
By the way , there {disfmarker} something that I didn't know until about a week ago or so , is apparently , there are separate brain areas for things within reach , and things that are out of reach .
So in addition to e ego and allocentric uh which appear all over the place , you also apparently have this proximal - distal thing which is very deeply uh embedded .
And so these issues about uh , reference , and {disfmarker} spatial {comment} reference , discourse reference , uh - uh - uh - uh {comment} all this sort of stuff , uh , deixis which is part of what you were talking about ,
So we gotta do all this .
And then there 's also a set of system things that come up .
So " OK , we 're not using their system . That means we need our system . "
And so , uh , in addition to the business about just getting the linguistics right , and the formalism and stuff , we 're actually gonna build something
and we 're gonna start on that in parallel with the um , the grammar stuff .
But to do that we 're gonna need to make some decisions like ontology ,
i Does uh either the uh SmartKom project or one of the projects at EML have something that we can just p pull out , for that .
cuz we 're {disfmarker} we 're not only going {disfmarker} The plan is not only to lay out this thing , but to actually uh build some of it .
It looks like we 're now in a position that the construction analyzer that we want for this applied project can be the same as the construction analyzer that Nancy needs for the child language modeling .
To {disfmarker} to come full circle on that , this formalization task ,
is trying to get the formalism into {disfmarker} into a shape where it can actually uh
Be of use to someone who 's trying to do this ,
And , while we 're at this level , uh , there 's at least one new doctoral student in computer science who will be joining the project , either next week or the first of August , depending on the blandishments of Microsoft .
And actually I talked today to a uh undergraduate who wants to do an honors thesis on this .
Oh there 's yet another one of the incoming first {disfmarker} {comment} incoming first - year graduate students who 's expressed interest ,
so , I think as far as this group goes , um , it 's certainly worth continuing for the next few weeks to get closure on the uh belief - net and the ideas that are involved in that , and what are th what are the concepts .
and so anyway we c uh {disfmarker} We can m undoubtedly get Ami uh to give a talk at uh EML or something like that . While he 's in {disfmarker} in uh {disfmarker}
A lot of interest . Actually , either place , DFKI or uh {disfmarker}
So , how about if you two guys between now and next week come up with something that is partially proposal , and partially questions ,
Yeah , I 'm actually probably going to be in contact with her uh pretty soon anyway because of various of us students were going to have a reading group about precisely that sort of thing over the summer ,
we can even make a {disfmarker} sort of an internal demo ,
Absolutely .
