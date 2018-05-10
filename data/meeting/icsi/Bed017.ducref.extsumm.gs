Um , so Robert , why don't you bring us up to date on where we are with EDU ?
uh in a {disfmarker} in a smaller group we had uh , talked and decided about continuation of the data collection .
So Fey 's time with us is almost officially over ,
and she brought us some thirty subjects and , t collected the data ,
and ten dialogues have been transcribed
Um , and we found another uh , cogsci student who 's interested in playing wizard for us .
Here we 're gonna make it a little bit more complicated for the subjects , uh this round .
She 's actually suggested to look um , at the psychology department students ,
because they have to partake in two experiments in order to fulfill some requirements .
As for SmartKom , I 'm {disfmarker} the last SmartKom meeting I mentioned that we have some problems with the synthesis ,
which as of this morning should be resolved .
so maybe uh uh , when tomorrow is over , we 're done .
something happened , in {disfmarker} on Eva 's side with the PRM that we 're gonna look at today ,
we have a visitor from Bruchsal from the International University .
I 've been looking at the PRM stuff .
I sorta constructed a couple of classes .
Like , a user class , a site class , and {disfmarker} and you know , a time , a route , and then {disfmarker} and a query class .
And I tried to simplify it down a little bit ,
The red lines on the , um , graph are the um , relations between the different um , classes .
this is more or less similar to the flat Bayes - net that I have , you know , with the input nodes and all that .
So I tried to construct the dependency models ,
a lot of these stuff I got from the flat Bayes - net ,
and it turns out , you know , the CPT 's are really big , if I do that ,
Actually , you know , a class of {disfmarker} with different attributes that are the intermediate nodes ,
and one of them is like , time affordability money affordability , site availability , and the travel compatibility .
but , if you look at travel compatibility for each of these factors , you need to look at a pair of , you know , what the um , preference of the user is
versus , you know , what type of an event it is ,
And that makes the scenario a little different in a PRM ,
Um , so anyhow , using those intermediate nodes then , this {disfmarker} this would be the class that represent the intermediate nodes .
with , you know , references to the user and the site and the time .
And so , you know , it 's easier to specify the CPT and all .
OK . So it only makes two decisions , in this model .
And one is basically how desirable a site is
meaning , um , how good it matches the needs of a user .
And the other is the mode of the visit ,
whether th It 's the EVA decision .
the {disfmarker} You {disfmarker} you didn't look at all yet to see if there 's anybody has a implementation .
uh , we aren't gonna build our own interpreter ,
Uh , so one of the things that Eva 's gonna do over the next few weeks is see if we can track that down .
the people at Stanford write papers as if they had one ,
So w Anyway . So that 's a {disfmarker} a major open issue .
Uh , I actually think it is cleaner ,
I mean , the notion of instantiating your el elements from the ontology and stuff fits this very nicely and doesn't fit very well into the extended belief - net .
And the , uh , other question I would have is that presumably , from the way the Stanford people talk about it , you can put the probabilities also on the relations .
I remember them learning when , you know , you don't know the structure for sure ,
but I don't remember reading how you specify
So , uh , the {disfmarker} the plan is {disfmarker} is when Daphne gets back , we 'll get in touch
and supposedly , um , we 'll actually get s deep {disfmarker} seriously connected to {disfmarker} to their work
somebody 'll {disfmarker} Uh , you know {disfmarker} If it 's a group meeting once a week probably someone 'll go down and , whatever .
Good . Then , we can move on and see what Andreas has got out his sleeve .
OK , so , um , what I started looking at , uh , to begin with is just uh , content management systems uh , i i in general .
um , uh what 's uh {disfmarker} Sort of the state of the art there is to um {disfmarker} uh you have a bunch of {disfmarker} of uh documents or learning units or learning objects ,
um , and you store meta - data uh , associate to them .
So there 's some international standards
because there 's an implicit um , uh , assumption behind that
is that uh , all the users of this system share the same interpretation of the keyword and the same interpretation of uh , whichever taxonomy is used ,
and uh {disfmarker} As a matter of fact , the only thing that m apparently really works out so far are library ordering codes ,
and so , what I want to build is basically a {disfmarker} a smart F A Q system .
Now , what you uh need to do here is you need to provide some context information
So , I want to be able to model information like , um , so in the {disfmarker} in the context of {disfmarker} in the context of developing distributed systems , of a at a computer science school ,
now , um , u using this you can infer more information ,
and you could then match this to the meta - data of um {disfmarker} off the documents you 're {disfmarker} you 're searching against .
Now , the big problem that I 'm facing right now is um , it 's fairly easy to hack up a system uh quickly , that {disfmarker} that works in the small domain ,
but the problem is obviously the scalability .
What I 'm also looking into is a probabilistic approach into this
so it 's probably not that easy to simply have a symbolic uh , computational model .
And I think a lot of the {disfmarker} even though it 's a {disfmarker} it 's a very different domain , but I think a lot of the , um , issues are {disfmarker} are fairly similar .
Uh , I want to build a smart librarian , basically
that can point you to the right reference .
I don't wanna compute the answer ,
and I 'm guessing that you {disfmarker} you won't be doing that ?
No .
cuz some of us do pretty detailed linguistic analyses ,
On the other hand , uh , FrameNet could well be useful .
cuz it 's {disfmarker} it 's very easy to whip up something quickly ,
and {disfmarker} and if we want to share and integrate things , they must {disfmarker} well , they must be well designed really .
Uh , unfortunately , Srini , who is heavily involved in DAML and all this sort of stuff is himself out of town .
The other person I thought of is Dan Gildea ?
We {disfmarker} There 's someone in ICSI who actually has been working on {disfmarker} has worked on that kinda stuff ,
This uh {disfmarker} Oh , they refused the budget again ?
Is it {disfmarker} so about CITRIS ?
Yeah , still nothing .
So , I {disfmarker} it turns out I wound up having lunch today with a guy named Tom Kalil .
In fact he 's hired to run a lot of CITRIS ,
He said , " for example " ,
" if you had a adult literacy program that was as good as an individual tutor ,
and as compelling as a video game ,
then that would have a huge social impact " .
I said , " Oh great ! That 's a good problem to work on . "
And so I ended up making several classes {disfmarker}
Now , what I plan to do is I want to uh sort of do a uh {disfmarker} uh {pause} try to improve the quality of the search results ,
