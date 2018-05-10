The {disfmarker} uh , Java {disfmarker} the embedded Bayes {pause} wants to take input {disfmarker} uh , uh , a Bayes - net {disfmarker} in {disfmarker} in some Java notation
and Eva is using the Xalan style sheet processor to convert the XML that 's output by the Java Bayes for the {disfmarker} into the , uh , E Bayes input .
Actually , maybe I could try , like , emailing the guy
and see if he has any something already .
The generation templates are done .
the XML trees for the {disfmarker} for the gene for the synthesizer are written .
So I just need to {pause} do the , uh {disfmarker} write a new set of {pause} tree combining rules .
But I think those 'll be pretty similar to the old ones .
OK , so {pause} natural language generation {pause} produces not a {disfmarker} just a surface string that is fed into a text - to - speech but , a {pause} surface string with a syntax tree that 's fed into a concept - to - speech .
Now and this concept - to - speech module has {pause} certain rules on how {pause} if you get the following syntactic structure , how to map this onto prosodic rules .
And Fey has foolheartedly agreed to rewrite uh , the German concept uh syntax - to - prosody rules {disfmarker}
Well , I guess if you 're not used to functional programming , Scheme can be completely incomprehensible .
That 's the LISP - type scheme .
Yep . We ha we have to change the voice .
It is {disfmarker} Uh , we have the choice between the , uh , usual Festival voices ,
which I already told the SmartKom people we aren't gonna use because they 're really bad .
OGI has , uh , crafted a couple of diphone type voices that are really nice
And it 's probably also absolutely uninteresting for all of you to , um learn that as of twenty minutes ago , David and I , per accident , uh managed to get the whole SmartKom system running on the {disfmarker} uh , ICSI Linux machines with the ICSI NT machines
so I also had a nice email correspondence with Daphne Kohler , who said yes indeed she would love to work with us on the , um , {disfmarker} you know , using these structured belief - nets and stuff
and then we 'll figure out a way for you {disfmarker} uh {disfmarker} you to get seriously connected with , um their group .
And it looks to me like {comment} we 're now at a good point to do something {disfmarker} start working on something really hard .
Uh , w Which is {comment} mental spaces and uh {disfmarker} and - or {disfmarker}
But the other part of it is the way they connect to these , uh , probabilistic relational models .
So {pause} there 's all the problems that the linguists know about , about mental spaces , and the cognitive linguists know about ,
but then there 's this problem of the belief - net people have only done a moderately good job of dealing with temporal belief - nets .
one of the things I w would like to do over the next , uh , month , it may take more , {comment} is to st understand to what extent we can not only figure out the constructions for them for multiple worlds
uh sort of what the formalism will look like and where the slots and fillers will be , but also what that would translate into in terms of belief - net and the inferences .
and
But that 's g that 's , as far as I can tell , it 's {disfmarker} it 's putting together two real hard problems .
One is the linguistic part of what are the couplings
and {disfmarker} and when you have a certain , uh , construction , that implies certain couplings and other couplings ,
and then we have this inference problem of exactly technically how does the belief - net work
No , I know , I th I I think that is gonna be sort of the key to this wh to th the big project of the summer of {disfmarker} of getting the constructions right
is that people do manage to do this
so there probably are some , uh , relatively clean rules ,
Anyway , uh , that we were {disfmarker} that we 're gonna try to get a uh , first cut at the revised formalism by the end of next week .
Uh , just trying to write up essentially what {disfmarker} what you guys have worked out so that everybody has something to look at .
but {disfmarker} uh {disfmarker} but I interrupted before Keith got to tell us what happened with " where is the Powder - Tower ? " or whatever
The question of whether the polysemy is sort of like in the construction or pragmatic .
The question is whether the construction is semantic or like ambiguous between asking for location and asking for path .
So you might be {disfmarker} yeah , y And asking for directions .
or {disfmarker} or whether the construction semantically , uh , is clearly only asking for location
but pragmatically that 's construed as meaning " tell me how to get there " .
So I a I I th I agree with you that , um , it 's a disaster to try to make separate constructions for every uh , pragmatic reading ,
although there are some that will need to be there .
Well the question is basically , is this conventional or conversational implicature ?
f in the short run it 's more important to know how we would treat {disfmarker} technically what we would do if we decided A and what we would do if we decided B , than it is t to decide A or B r right now .
W we know for sure that we have to be able to do both .
But the nice thing is w we would have a person that would like to work on it ,
And she would like to {vocalsound} apply the {pause} ontology that is , um {vocalsound} being crafted at EML .
and then there is the , uh , middle way that I 'm suggesting
and that is you {disfmarker} you get X , which is whatever ,
the castle .
The ontology will tell us that castles have opening hours ,
and look up {pause} certain linguistic surface structures {pause} that are related to these concepts
and feed those through the dialogue history
and check dynamically
for each e entity . We look it up check whether any of these were mentioned and then activate the corresponding nodes on the discourse side .
But Keith suggested that a {disfmarker} a much cleaner way would be {disfmarker} is , you know , to keep track of the discourse in such a way that you {disfmarker} if you know that something like that ha has been mentioned before , this just a continues to add up ,
back to the old Johno observation that if y if you have a dialogue history {pause} and it said the word " admission fee " was uh , mentioned um , it 's more likely that the person actually wants to enter {pause} than just take a picture of it
priming a spreading activation
in th in the bl Bayes - net you could {disfmarker} you could think about it this way , that if um {pause} at the time " admissions fee " was mentioned {pause} you could increase the probability {pause} that someone wanted to enter .
so {disfmarker} so {disfmarker} but my guess is what {disfmarker} what 'll probably will happen , Here 's a {disfmarker} here 's a proposed design . {comment} is that there 're certain constructions which , uh , for our purposes do change the probabilities of EVA decisions and various other kinds
th that the , uh , standard way that {disfmarker} that the these contexts work is sort of stack - like or whatever ,
And so it could be that {pause} when another uh , en tourist entity gets mentioned , you
re re essentially re - initiali you know , re - i essentially re - initialize the {pause} state .
And of course i if we had a fancier one with multiple worlds you could have {disfmarker} uh , you could keep track of what someone was {pause} uh saying about this and that .
So , if the issue is , if {disfmarker} so now th this construction has been matched and you say " OK . Does this actually have any implications for our decisions ? " Then there 's another piece of code {vocalsound} that presumably {pause} does that computation .
Now , uh {disfmarker} But I think Ro - Robert 's right , that to determine that , OK ? you may well want to go through a th thesaurus
I mean it {disfmarker} th {vocalsound} I can thi I can think of arguments in either direction on that .
What {disfmarker} uh , what 's the argument for putting it in the construction ?
you 've recognized the word , which means you have a lexical construction for it ,
so you could just as well tag the lexical construction with the fact that it 's a uh , you know , thirty percent increase in probability of entering .
I think it 's also something that people have not done before , is um , sort of abuse an ontology for these kinds of , uh , inferences , on
whether anything relevant to the current something has been {disfmarker} {vocalsound} uh , has crept up in the dialogue history already , or not .
I have the , uh {disfmarker} If we wanted to have that function in the dialogue hi dialogue module of SmartKom , I have the written consent of Jan to put it in there .
So the point is , it 's very likely that Robert 's thesis is going to be along these lines ,
and the local rules are if it 's your thesis , you get to decide how it 's done .
uh , this is {disfmarker} this is , speaking of hard problems , {comment} this is a very good time um , to start trying to make explicit where construal comes in
and {disfmarker} you know , where c where the construction per - se ends {pause} and where construal comes in ,
Yeah , we need {disfmarker} we need some {disfmarker} Then we need to make some dates .
Meeting {disfmarker} regular meeting time for the summer ,
So let 's say Thursday one .
so why don't we plan to meet Monday
and {pause} we 'll see if we want to meet any more than that .
Uh , so that 's the eighteenth .
Sorry , two PM .
So the idea is on Monday at two we 'll {disfmarker} we 'll see an intermediate version of the formalism for the constructions ,
and do an on - line merging with my construal {pause} ideas .
Someday we also have to {disfmarker} we should probably talk about the other side of the " where is X " construction ,
which is the issue of , um , how do you simulate questions ?
Part of what was missing were markings of all sorts that weren't in there ,
incl including the questions {disfmarker}
We didn't {disfmarker} we never did figure out how we were gonna do emphasis in {disfmarker} in uh , the semspec .
Oh , we talked about semspec , for " semantic spec specification "
since we have this idea about the indefinite pronoun thing and all that , you know , I ca can try and , um run with that ,
you know , try and do some of the sentence constructions now .
OK . Do you wanna run the indefinite pronoun idea past Jerry ?
and then , you know , " who fixed the car with a wrench ? "
In the {disfmarker} in {disfmarker} analogously to the way you would do " someone fixed the car with a wrench " .
the idea of sort of saying that you treat {disfmarker} from the simulation point of view or whatever {disfmarker} you treat , uh , WH constructions similarly to uh , indefinite pronouns
Skolemization .
and we 'll figure out exactly how to write that up and so on ,
Uh , no , all the focus stuff .
Yeah . Well , if {disfmarker} if {disfmarker} I mean , i part of {disfmarker} of what the exercise is , t by the end of next week , is to say what are the things that we just don't have answers for yet .
Has {disfmarker} I haven't seen Hans Boas ?
He 's been around .
Sometimes Hans has been sort of coming in there as sort of like a {pause} devil 's advocate type role or something ,
but different perspec
And he 'll just go off on parts of it which {pause} definitely need fixing
OK . This is consistent with um the role I had suggested that he {disfmarker} he play ,
OK , which was {pause} that o one of the things I would like to see happen is a paper that was tentatively called " Towards a formal cognitive semantics "
which was addressed to these linguists {pause} uh {pause} who haven't been following {pause} this stuff at all .
So {pause} it could be that he 's actually , at some level , thinking about how am I going to {pause} communicate this story {disfmarker}
when we 're into data and looking at the {disfmarker} some specific linguistic phenomenon {pause} in {disfmarker} in English or in German , in particular , whatever , that 's great ,
But when it 's like , well , w how do we capture these things , you know , I think it 's definitely been Keith and I who have d you know , who have worried more about the {disfmarker}
Which {pause} uh , so far , in terms of like putting up all the constraints as , you know , pushing them into type constraints , the {disfmarker} when I 've , you know , propo then proposed it to linguists who haven't yet given me {disfmarker} you know , we haven't yet thought of a reason that that wouldn't work .
Right ? As long as we allow our type constraints to be reasonably {pause} complex .
I was just gonna say , though , that , for instance , there was {disfmarker} you know , out of a meeting with Johno {pause} came the suggestion that " oh , could it be that the {pause} meaning {pause} constraints really aren't used for selection ? "
which has sort of been implicit {pause} in the parsing {pause} strategy we talked about .
and if you over - generate then you 'll have to do more .
Right . So . {vocalsound} Right . So thing {disfmarker} That 's part of why we want the formalism ,
The WH question has this as sort of extra thing which says " and when you 're done , tell me who fills that slot " or w you know .
