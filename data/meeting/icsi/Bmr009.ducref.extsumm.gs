but um uh Jose and I were just talking about {vocalsound} the uh {nonvocalsound} uh , speech e energy thing ,
Right now , that he 's not really showing any kind of uh distinction , but uh {disfmarker}
Um . And uh one is that uh this is all in log energy
and log energy is basically compressing the distances {vocalsound} uh {pause} between things .
Um {pause} Another is that he needs to play with the {disfmarker} the different uh {pause} uh temporal sizes .
He was {disfmarker} he {disfmarker} he was taking everything over two hundred milliseconds
Um And uh {disfmarker} and the other thing is that the {disfmarker} yeah doing the {disfmarker} {vocalsound} subtracting off the mean and the variance in the {disfmarker} {pause} uh and dividing it by the {pause} standard deviation in the log domain , {vocalsound} may not be {pause} the right thing to do .
uh , and uh he 's going to vary that number and also look at moving windows , as we discussed before .
It 's uh between the pauses {pause} uh for some segment .
Are these the long term means ?
And so i i his {disfmarker} his {disfmarker} He 's making the constraint it has to be at least two hundred milliseconds .
And then he 's {disfmarker} he 's uh measuring at the frame level {disfmarker}
and then {disfmarker} and then just uh normalizing with that larger amount .
um and {disfmarker} But one thing he was pointing out is when he {disfmarker} he looked at a bunch of examples in log domain , it is actually pretty hard to see {vocalsound} the change .
So {disfmarker} So what I was suggesting to him is that {disfmarker}
Actually , a PDF .
And when he 's looking in the log domain he 's not really seeing it .
And when he 's looking in straight energy he is ,
Yeah , but I think {pause} also u I think a good first indicator is when the {disfmarker} the {disfmarker} the researcher looks at {vocalsound} examples of the data and can not see a change {pause} in how big the {disfmarker} the signal is , {vocalsound} when the two speaker {disfmarker}
So yeah there {disfmarker} there {disfmarker} there {disfmarker} There 's a good chance then given that different people do talk different amounts {pause} that there is {disfmarker} there {disfmarker} there is still a lot more to be gained from gain norm normalization with some sort
Uh . But we were agreed that in addition to that {comment} uh there should be {pause} s stuff related to pitch and harmonics and so forth .
so that 's a good place to start .
Well , actually , you do have some distributions here , uh for these cases .
um {pause} and {pause} uh , they don't look very separate .
uh {vocalsound} {pause} separated .
Before we get complicated , let 's start with the most basic wh thing , which is {pause} we 're arguing that if you take energy {disfmarker} uh if you look at the energy , that , when two people are speaking at the same time , usually {vocalsound} {pause} there 'll be more energy than when one is
That 's {disfmarker} that sort of hypothesis .
is that you would just take a look at the distribution of those two things ,
But I had maybe made it too complicated by suggesting early on , that you look at scatter plots
Let 's start off just in one , uh , with this feature .
Um And then we w I think we 're agreed that pitch - related things are {disfmarker} are {disfmarker} are going to be a {disfmarker} a really likely candidate to help .
Um {pause} But {pause} since {disfmarker} {vocalsound} uh your intuition from looking at some of the data , is that when you looked at the regular energy , that it did in fact usually go up , {vocalsound} when two people were talking , {vocalsound} that 's {disfmarker} eh you know , you should be able to come up with a measure which will {pause} match your intuition .
What you would imagine eventually , is that you 'll feed all of these features into some {pause} discriminative system .
And {disfmarker} I was just going to say that {disfmarker} that {pause} right now we 're just exploring .
And so even if {disfmarker} if one of the features does a good job at one type of overlap , another feature might do a good job at another type of overlap .
This is the thing I {disfmarker} I comment with you before , that uh we have a great variation of th situation of overlapping .
So uh , if you generated something like that just for the energy and see , and then , a a a as {disfmarker} as Liz says , when they g have uh uh smaller um , more coherent groups to look at , that would be another interesting thing later .
And then that should give us some indication {disfmarker} between those , should give us some indication of whether there 's anything to be achieved f from energy at all .
And then you can move on to the uh {pause} uh more {nonvocalsound} pitch related stuff .
I {disfmarker} I {disfmarker} I think this is a good idea .
Not consider the log energy .
I think I would just sort of look at the energy {pause} and then get into the harmonicity as {disfmarker} as a suggestion .
so I was planning to do a taxonomy of types overlaps with reference to that .
So , when I presented my results about the uh distribution of overlaps and the speakers and the profiles of the speakers , at the bottom of that I did have a proposal ,
and I had plan to go through with it , of {disfmarker} of co coding the types of overlaps that people were involved in s just with reference to speaker style so , you know , with reference {disfmarker}
that {pause} you know so it 's like people may have different amounts of being overlapped with or overlapping
but that in itself is not informative without knowing what types of overlaps they 're involved in
I {disfmarker} I think a a another parameter we c we {disfmarker} we can consider is eh the {pause} duration .
Because is possible {vocalsound} eh some s s um eh some classes eh has eh {pause} a type of a duration ,
Well , we {disfmarker} we wouldn't be able to do any work without a forced alignment anyway ,
so somehow if {disfmarker} once he gets going we 're gonna hafta come up with one
But it is definitely true that we need to have the time marks ,
and I was assuming that will be inherited because , if you have the words and they 're roughly aligned in time via forced alignment or whatever we end up using , then you know , this {pause} student and I would be looking at the time marks
I mean that you have eh you have a backchannel , eh , eh {disfmarker} you have a overlapping zone very short
eh {pause} that I {disfmarker} I mean the {disfmarker} the e effect of the normalization eh with the mean and the {disfmarker} and the variance eh is different that if you consider {pause} only a {pause} window compared eh with the n the duration of overlapping .
Yeah this was the problem with these categories ,
I {disfmarker} I picked those categories from TIMIT .
But I don't know how to {disfmarker} I don't know how to {disfmarker} I don't know how to categorize them .
So I 'm not sure what to do about the Region field for English variety .
Um , did you guys get my email on the multitrans ?
Yeah . So . So . I {disfmarker} I have a version also which actually displays all the channels .
The {disfmarker} what {disfmarker} the ones I applied , that you can actually do are Dan 's , because it doesn't slow it down .
No , the {disfmarker} the one that 's installed is fine .
It 's not slow at all .
I wrote another version . Which , instead of having the one pane with the one view , It has multiple panes {pause} with the views .
But the problem with it is the drawing of those waveforms is so slow that every time you do anything it just crawls .
Just about anything , and it {disfmarker} it was so slow it was not usable .
And this 'll be a {disfmarker} hav having the multiwave will be a big help
So . I think that the one Dan has is usable enough .
It doesn't display the others .
It displays just the mixed signal .
But you can listen to any of them .
So is there any hope for actually displaying the wave form ?
Um , not if we 're going to use Tcl - TK At least not if we 're going to use Snack .
And so it 's really {disfmarker} It 's not too bad to find places in the {disfmarker} in the stream where things are happening .
I think if {disfmarker} if {disfmarker} if one of us sat down and coded it , so that it could be displayed fast enough I 'm sure they would be quite willing to incorporate it .
But it 's not a trivial task .
but we discussed a couple of the possible things that uh he can look at .
