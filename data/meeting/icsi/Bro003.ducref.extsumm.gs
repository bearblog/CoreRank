Um , We should talk a little bit about the plans for the uh {disfmarker} the field trip next week .
And uh {disfmarker} mostly uh First though about the logistics for it .
Then maybe later on in the meeting we should talk about what we actually you know , might accomplish .
Uh , in and {pause} kind of go around {disfmarker} see what people have been doing {disfmarker} talk about that , {pause} a r progress report . Um , Essentially .
Um {disfmarker} And then uh {disfmarker} Another topic I had was that uh {disfmarker} uh {disfmarker} Uh {disfmarker} Dave here had uh said uh " Give me something to do . "
And so maybe we can discuss that a little bit .
uh , and uh , then uh , talk a little bit about {disfmarker} about disks and resource {disfmarker} resource issues that {disfmarker} that 's starting to get worked out .
those of you who are not , you know , used to this area , it can be very tricky to get to the airport at {disfmarker} at uh , you know , six thirty .
So , uh , what 's been going on ?
Um . {vocalsound} Well , preparation of the French test data actually .
well , it is , uh , a digit French database of microphone speech ,
and I 've added noise to one part , with the {disfmarker} actually the Aurora - two noises .
Did you {pause} happen to find out anything about the OGI multilingual database ?
One they call the multi - language database , and another one is a twenty - two language , something like that .
But it 's also telephone speech .
Well , actually , for the moment if we w do not want to use these phone databases , we {disfmarker} we already have uh {disfmarker} English , Spanish and French uh , with microphone speech .
Uh , actually , these three databases are um generic databases .
So w f for {disfmarker} for uh Italian , which is close to Spanish , French and , i i uh , TI - digits we have both uh , digits {pause} training data and also {pause} more general training data .
Well , we also have this Broadcast News that we were talking about taking off the disk , which is {disfmarker} {vocalsound} is microphone data for {disfmarker} for English .
Yeah , perhaps {disfmarker} yeah , there is also TIMIT .
Cuz you don't know who 's gonna call ,
uh {disfmarker} how do you know what language it is ?
Somebody picks up the phone .
So thi this is their image .
so the phone doesn't know what a {disfmarker} what {disfmarker} what your language is .
But the particular image that the cellular industry has right now is that it 's distributed speech recognition , where the , uh , uh , probabilistic part , and {disfmarker} and s semantics and so forth are all on the servers , and you compute features of the {disfmarker} uh , on the phone .
We might {disfmarker} might or might not agree that that 's the way it will be in ten years ,
but that 's {disfmarker} that 's {disfmarker} that 's what they 're asking for .
So {disfmarker} so I think that {disfmarker} th th it is an important issue whether it works cross - language .
Your turn .
Um , Let 's see , I {disfmarker} I spent the last week , uh , looking over Stephane 's shoulder . And {disfmarker} {vocalsound} and understanding some of the data .
I re - installed , um , um , HTK , the free version ,
which is the same version that , uh , OGI is using .
Um , yeah , so I I 've been looking at , uh , uh , TIMIT stuff .
Um , the {disfmarker} the stuff that we 've been working on with TIMIT , trying to get a , um {disfmarker} a labels file so we can , uh , train up a {disfmarker} train up a net on TIMIT and test , um , the difference between this net trained on TIMIT and a net trained on digits alone .
Well , the inputs are one dimension of the cube ,
which , um , we 've talked about it being , uh , PLP , um , M F C Cs , um , J - JRASTA , JRASTA - LDA {disfmarker}
OK .
Were the digits , um , hand - labeled for phones ?
those were {disfmarker} those were automatically derived by {disfmarker} by Dan using , um , embedded {disfmarker} embedded training and alignment .
I {disfmarker} I think you 're doing this test because you want to determine whether or not , uh , having s general speech performs as well as having specific {pause} speech .
so I was just wondering if the fact that TIMIT {disfmarker} you 're using the hand - labeled stuff from TIMIT might be {disfmarker} confuse the results that you get .
It would be another interesting scientific question to ask , " Is it because it 's a broad source or because it was , you know , carefully ? "
and {disfmarker} So we plan to develop a subset of the phonemes , uh , that includes , uh , all the phonemes of our training languages ,
You mean a superset , sort of .
Uh , yeah ,
SAMPA phone ? For English {disfmarker} uh American English , and the {disfmarker} the {disfmarker} the language who have more phone are the English .
But n for example , in Spain , the Spanish have several phone that d doesn't appear in the E English and we thought to complete .
But for that , it needs {disfmarker} we must r h do a lot of work {vocalsound} because we need to generate new tran transcription for the database that we have .
So , a a actually {disfmarker} maybe {disfmarker} now you 've got me sort of intrigued .
Can you describe what {disfmarker} what 's on the cube ?
basically , the {disfmarker} the cube will have three dimensions .
The first dimension is the {disfmarker} the features that we 're going to use .
And the second dimension , um , is the training corpus .
And that 's the training on the discriminant neural net .
And then , there 's the testing corpus .
Um , for the training corpus {disfmarker} corpus , um , we have , um , the {disfmarker} the d {pause} digits {nonvocalsound} from the various languages .
something like seven things in each , uh {disfmarker} each column .
So that 's , uh , three hundred and forty - three , uh , {vocalsound} different systems that are going to be developed .
Isn't there like a limit {pause} on the computation load , or d latency , or something like that for Aurora task ?
so , there 's not really a limit .
What it is is that there 's {disfmarker} there 's , uh {disfmarker} it 's just penalty ,
That {disfmarker} that if you 're using , uh , a megabyte , then they 'll say that 's very nice ,
but , of course , it will never go on a cheap cell phone .
How long does it take for an , uh , HTK training ?
It 's around six hours , I think .
Maybe one day .
clearly , there {disfmarker} there 's no way we can even begin to do an any significant amount here unless we use multiple machines .
I mean there 's plenty of machines here
and they 're n they 're often not in {disfmarker} in a great {disfmarker} great deal of use .
It 's {disfmarker} it 's {disfmarker} let 's say it 's six hours or eight hours , or something for the training of HTK .
How long is it for training of {disfmarker} of , uh , the neural net ?
I would say two days .
Depends on the corpus .
Y you did a {disfmarker} you did it on a SPERT board .
Yes .
again , we do have a bunch of SPERT boards .
You could set up , uh , you know , ten different jobs , or something , to run on SPERT {disfmarker} different SPERT boards
or {disfmarker} or we 're not going to get through any significant number of these .
so , with very limited time , we actually have really quite a {disfmarker} quite a bit of computational resource available
if you , you know , get a look across the institute and how little things are being used .
Carmen , did you {disfmarker} do you have something else to add ?
D I begin to work with the Italian database to {disfmarker} nnn , to {disfmarker} with the f front - end and with the HTK program and the @ @ .
And I trained eh , with the Spanish two neural network with PLP and with LogRASTA PLP .
Um , and I think to {disfmarker} to {disfmarker} to recognize the Italian digits with the neural netw Spanish neural network ,
But prepa to prepare the {disfmarker} the database are difficult .
Was for me , n it was a difficult work last week with the labels
because the {disfmarker} the program with the label obtained that I have , the Albayzin , is different w to the label to train the neural network .
And {pause} {vocalsound} that is another work that we must to do , to {disfmarker} to change .
The Spanish labels ?
That was in different format ,
that the format for the em {disfmarker} the program to train the neural network .
I necessary to convert .
What 's {disfmarker} what 's great about this is it sets it up in a very systematic way ,
so that , uh , once these {disfmarker} all of these , you know , mundane but real problems get sorted out , we can just start turning the crank
So it seems like there 's {disfmarker} there 's some peculiarities of the , uh {disfmarker} of each of these dimensions that are getting sorted out .
And then , um , if {disfmarker} if you work on getting the , uh , assembly lines together , and then the {disfmarker} the pieces sort of get ready to go into the assembly line
and gradually can start , you know , start turning the crank , more or less .
And , uh , the thing is that once you get a better handle on how much you can realistically do , uh , um , {vocalsound} concurrently on different machines , different SPERTs , and so forth , uh , and you see how long it takes on what machine and so forth , you can stand back from it and say , " OK , if we look at all these combinations we 're talking about , and combinations of combinations , and so forth , " you 'll probably find you can't do it all .
so then at that point , uh , we should sort out which ones do we throw away .
Which of the combinations across {disfmarker} you know , what are the most likely ones ,
We 're {disfmarker} over the next year or two , we 're gonna be upgrading the networks in this place ,
but right now they 're still all te pretty much all ten megabit lines .
And we have reached the {disfmarker} this {disfmarker} the machines are getting faster and faster .
So , it actually has reached the point where it 's a significant drag on the time for something to move the data from one place to another .
It 's gonna take us a couple weeks at least to get the , uh , uh , the amount of disk we 're gonna be getting . We 're actually gonna get ,
uh , I think four more , uh , thirty - six gigabyte drives
Stephane , where you 're doing your computations .
It 's Nutmeg and Mustard , I think ,
Well , you 're the {disfmarker} you 're the disk czar now .
Well , I 'll check on that .
Dan {disfmarker} David , um , put a new , um , drive onto Abbott , that 's an X disk ,
um , I 've been going through and copying data that is , you know , some kind of corpus stuff usually , that {disfmarker} that we 've got on a CD - ROM or something , onto that new disk to free up space {pause} on other disks .
We haven't deleted them off of the slash - DC disk that they 're on right now in Abbott ,
uh , but we {disfmarker} I would like to go through {disfmarker} sit down with you about some of these other ones and see if we can move them onto , um , this new disk also .
Yeah , OK .
an another question occurred to me is {disfmarker} is what were you folks planning to do about normalization ?
Well , we were thinking about using this systematically for all the experiments .
but we think perhaps we can use the {disfmarker} the best , uh , um , uh , normalization scheme as OGI is using ,
so , with parameters that they use there ,
I mean it 's i i we {disfmarker} we seem to have enough dimensions as it is .
I {disfmarker} maybe we 're already there , or almost there , is goals for the {disfmarker} for next week 's meeting .
Uh . i i i it seems to me that we wanna do is flush out what you put on the board here .
so w we can say what we 're doing ,
And , um , also , if you have {pause} sorted out , um , this information about how long i roughly how long it takes to do on what and , you know , what we can {disfmarker} how many of these trainings , uh , uh , and testings and so forth that we can realistically do , uh , then one of the big goals of going there next week would be to {disfmarker} to actually settle on which of them we 're gonna do .
And , uh , when we come back we can charge in and do it .
And uh {disfmarker} and the other {disfmarker} the {disfmarker} the last topic I had here was , um , uh d Dave 's fine offer to {disfmarker} to , uh , do something {pause} {vocalsound} on this .
I mean he 's doing {disfmarker} {vocalsound} {disfmarker} he 's working on other things ,
but to {disfmarker} to do something on this project .
So the question is , " Where {disfmarker} where could we , uh , uh , most use Dave 's help ? "
Let 's fall back to that .
But I think the first responsibility is sort of to figure out if there 's something {pause} that , uh , an {disfmarker} an additional {disfmarker}
and , um , {vocalsound} trying to have a closer look at the {disfmarker} perhaps the , um , {vocalsound} speech , uh , noise detection or , uh , voiced - sound - unvoiced - sound detection
What an additional clever person could help with when we 're really in a crunch for time .
but if we could think of some {disfmarker} some piece that 's {disfmarker} that 's well defined , that he could help with ,
he 's expressing a will willingness to do that .
So {disfmarker} wh that {disfmarker} so the {disfmarker} the other suggestion that just came up was , well what about having him {pause} work on the , uh , {pause} multilingual super f superset {pause} kind of thing .
Uh , coming up with that and then , you know , training it {disfmarker} training a net on that , say , um , from {disfmarker} from , uh {disfmarker} from TIMIT or something .
wh what would this task consist of ?
um , creating the {disfmarker} the superset ,
and , uh , modifying the lab labels for matching the superset .
Well , creating the mappings , actually .
Has OGI done anything about this issue ?
Do they have {disfmarker} Do they have any kind of superset that they already have ?
Well , they {disfmarker} they {disfmarker} they 're going actually the {disfmarker} the other way , defining uh , phoneme clusters , apparently .
So they just throw the speech from all different languages together ,
then cluster it into sixty or fifty or whatever clusters ?
it 's {disfmarker} it 's OK for um , uh classifying the digits ,
but as soon as you will have more words ,
well , words can differ with only a single phoneme , and {disfmarker} which could be the same , uh , class .
So you 're saying that there may not be enough information coming out of the net to help you discriminate the words ?
Yeah ,
Fact , most confusions are within the phone {disfmarker} phone classes , right ?
So {disfmarker} so , maybe we could look at articulatory type stuff ,
because that 's {disfmarker} that 's the other route to go .
To really mark articulatory features , you really wanna look at the acoustics and {disfmarker} and see where everything is ,
and we 're not gonna do that .
uh , the second class way of doing it is {pause} to look at the , uh , phones that are labeled
and translate them into acoustic {disfmarker} uh , uh {disfmarker} articulatory , uh , uh , features .
So it won't really be right .
is that we could {disfmarker} we could , uh , just translate {disfmarker} instead of translating to a superset , {pause} just translate to articulatory features , some set of articulatory features and train with that .
We could do an interesting cheating experiment with that too .
So I was thinking , you know {disfmarker} it made me think about this ,
that if {disfmarker} it 'd be an interesting experiment just to see , you know , if you did get all of those right .
OK , so if {disfmarker} if everybody can get here at six .
and e i perhaps u using broad phoneme classes ,
