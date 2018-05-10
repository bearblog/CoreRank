so {pause} We {disfmarker} we had a meeting with , uh {disfmarker} with Hynek , um , in {disfmarker} in which , uh , uh , Sunil and Stephane , uh {vocalsound} summarized where they were and {disfmarker} and , uh , talked about where we were gonna go .
So that {disfmarker} that happened sort of mid - week .
D did {disfmarker} did you guys get your code pushed together ?
It 's {disfmarker} it 's {disfmarker} it 's {disfmarker} it was updated yesterday ,
What was the update ?
So there is th then {disfmarker} the {disfmarker} all the new features that go in .
The , um , noise suppression , the re - synthesis of speech after suppression .
Is the , um {disfmarker} the CVS mechanism working {pause} well ?
Yeah .
Are {disfmarker} are people , uh , up at OGI grabbing code uh , via that ?
I don't know if they use it ,
Yeah , I I don't think anybody up there is like {pause} working on it right now .
So right now nobody 's working on Aurora there .
Yeah . They 're working on a different task .
So has {disfmarker} Has anybody tried remotely accessing the CVS using , uh , uh , SSH ?
Actually I {disfmarker} I tried wh while {disfmarker} when I installed the {pause} repository , I tried from Belgium .
I logged in there and I tried {pause} to import {disfmarker}
It worked good ?
Yeah , it works .
But I guess maybe the thing {disfmarker} since you weren't {disfmarker} yo you guys weren't at that {disfmarker} that meeting , might be just {disfmarker} just to , um , sort of recap , uh , the {disfmarker} the conclusions of the meeting .
You 're talking about the meeting with Hynek ?
Since he 's going out of town like now , and I 'm going out town in a couple weeks , uh , and time is marching , sort of , given all the mu many wonderful things we could be working on , what {disfmarker} what will we actually focus on ?
And , uh {disfmarker} and what do we freeze ?
And , you know , what do we {disfmarker} ?
and then within that , I guess the idea was to freeze a certain set of options for now , to run it , uh , a particular way , and decide on what things are gonna be experimented with , as opposed to just experimenting with everything .
So keep a certain set of things constant .
Uh , maybe describe roughly what {disfmarker} what we are keeping constant for now ,
Well . So we 've been working like six weeks on {disfmarker} on the noise compensation and we end up with something that seems reasonable .
Are you gonna use {disfmarker} which of the two techniques ?
So finally it 's {disfmarker} it 's , um , Wiener filtering on FFT bins .
So we are going to fix this for the moment and work on the other aspects of {vocalsound} the whole system .
But structurally it seemed like the things {disfmarker} the main things that {disfmarker} that we brought up that , uh , are {disfmarker} are gonna need to get worked on seriously are , uh , uh , a {disfmarker} {vocalsound} a significantly better VAD , uh , putting the neural net on , um , which , you know , we haven't been doing anything with , the , uh , neural net at the end there , and , uh , the , uh , {vocalsound} opening up the second front .
The other half of the channel ?
Yeah , yeah , I mean , cuz we {disfmarker} we have {disfmarker} we have , uh , uh , half the {disfmarker} the , uh , data rate that they allow .
And , uh , so the initial thing which came from , uh , the meeting that we had down south was , uh , that , um , we 'll initially just put in a mel spectrum as the second one .
It 's , you know , {pause} cheap , easy .
There 's a question about exactly how we do it .
We probably will go to something better later ,
So if you took the system the way it is now , the way it 's fro you 're gonna freeze it , and it ran it on the last evaluation , where it would it be ?
In terms of ranking ?
Ri - right now it 's second .
And {disfmarker} and , {vocalsound} um , you know , in some sense we 're all doing fairly similar things .
So how did they fill up this {disfmarker} all these {disfmarker} these bits ?
Um , why are we using half ?
We have the on - line normalization and then we have the LDA RASTA .
The LDA RASTA , uh , throws away high modulation frequencies .
And they 're not doing that .
So that if you throw away high modulation frequencies , then you can downsample .
And , uh , so I {disfmarker} you know , we {disfmarker} we 've found in a lot of ways for quite a while that having a second stream uh , helps a lot .
So that 's {disfmarker} that 's put in , and you know , it may even end up with mel spectrum even though I 'm saying I think we could do much better , just because it 's simple .
So this second stream , will it add latency to the system
No , it 's in parallel .
We 're not talking about computation time here .
So it 's just in terms of what data it 's depending on .
It 's depending on the same data as the other .
So , I 'll , um {disfmarker} I 'll actually {disfmarker} after the meeting I 'll add the second stream to the VAD and maybe I 'll start with the feature net in that case .
OK , so just figure how to take the features from the final {disfmarker}
What about the , um {disfmarker} uh , the new part of the evaluation ,
the , uh , Wall Street Journal part ?
Have you ever worked with the Mississippi State h uh , software ?
Not yet .
Well you {disfmarker} you may be called upon to help , uh , uh , on account of , uh , all the work in this stuff here has been , uh , with small vocabulary .
OK .
Cuz one of the things that might be helpful , if you 've {disfmarker} if you 've got time in all of this is , is if {disfmarker} if these guys are really focusing on improving , uh , all the digit stuff , uh , maybe {disfmarker} and you got the front - end from them , maybe you could do the runs for the {disfmarker}
Sure .
and {disfmarker} and , you know , iron out hassles that {disfmarker} that you have to , uh , tweak Joe about or whatever ,
because you 're more experienced with running the large vocabulary stuff .
So I 'll point you to the web site and the mails corresponding .
So these sugges these {disfmarker} this , uh , period during which people are gonna make suggestions is to know whether it is actually biased towards any set of features or {disfmarker}
Oh , so they 're gonna just deliver a system basically .
Yeah , th I {disfmarker} I guess it 's almost ready .
So they have released their , uh , document , describing the system .
Yeah , so I th th certainly the thing that I would want to know about is whether we get really hurt , uh , on in insertion penalty , language model , scaling , sorts of things .
Using our features .
Uh , in which case , um , H Hari or Hynek will need to , you know , push the case {pause} more about {disfmarker} about this .
And we may be able to revisit this idea about , you know , somehow modifying our features to work with {disfmarker}
You know Joe ,
Just to sort of ask him about the issue of , um , different features having different kinds of , uh , scaling characteristics and so on .
So sh shall we , like , add Chuck also to the mailing lists ?
that 'd be great .
Yeah , I guess maybe Hari or Hynek , one of them , has to {pause} send a mail to Joe .
I {disfmarker} I could send him an email .
I {disfmarker} I was just talking with him on email the other day actually .
Uh , yeah , and just , um , se maybe see .
Yeah , so maybe just CC Hari and say that you 've just been asked to handle the large vocabulary part here ,
Why don't you just ask Joe but CC Hari , and then in the note say , " Hari , hopefully this is OK with you " .
And then if Joe feels like he needs a confirmation , Hari can answer it .
Got anything to tell us ?
Well , I 've been reading some literature about clustering of data .
OK , so we 're talking about discovering intermediate categories to , um {disfmarker} to classify .
And , uh , I was looking at some of the work that , uh , Sangita was doing on these TRAPS things .
So she has , um {disfmarker} she has temporal patterns for , um , a certain set of phonemes , from {disfmarker} from TIMIT ,
Um , and , um , I was thinking about ways to {disfmarker} to generalize this
because w you 're {disfmarker} it 's sort of like a {disfmarker} it 's not a completely automatic way of clustering ,
Are you looking at these in narrow bands ?
Yeah , I mean , it seems somehow that needs th uh , there 's a couple things that I wonder about with this .
I mean , if you 're going for this sort of thing where you have {pause} uh , little detectors that are looking at narrow bands , then what you 're going to be looking for should be some category that you can find with the narrow bands .
Um , the sort of standard answer about this sort of thing is that if you 're trying to find {pause} the right system in some sense , whether you 're trying by categories or {disfmarker} or parameters {pause} um , and your goal is discrimination , then having choices based on discrimination as opposed to , um , unsupervised nearness of things , um , is actually better .
Um , and I don't know if that {disfmarker} I mean , since you 're dealing with issues of robustness , you know , maybe {disfmarker} maybe this isn't right , but it 'd be something I 'd be concerned about .
Because , for instance , you can imagine , uh , uh , i i if you remember from {disfmarker} from , uh {disfmarker} from your {disfmarker} your quals , John Ohala saying that , uh , " buh " {comment} and " puh " {comment} differed , uh , not really cuz of voicing but because of aspiration .
So , um , if you looked {disfmarker} if you were doing some coarse clustering , you probably would put those two sounds together .
And yet , I would gue I would guess that many of your recognition errors were coming from , uh , um , pfft , {comment} screwing up on this distinction .
if you go and take any recognizer that 's already out there and you say , " how well is it distinguishing between {pause} schwas and stops ? "
Boy , I bet they 're all doing nearly perfectly on this ,
