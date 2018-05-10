Um , so we 're pretty much out of digits .
so I {disfmarker} I just have to go through them
and uh pick out the ones that have problems ,
and either correct them or have them re - read .
We have about two hours worth .
but you think we 'll be able to retrieve the other hour , reasonably ?
So it 's just a question of a little hand - editing of some files
and then waiting for more people to turn in their speaker forms .
So what that means is we have about an hour of transcribed digits that we can play with .
and I sent mail to everyone who hadn't filled out a speaker form ,
and they 're slowly s trickling in .
So the relevance of the speaker form here , s
It 's for labeling the extracted audio files .
By speaker ID and microphone type .
So the other topic with digits is uh ,
Liz would like to elicit different prosodics ,
and so we tried last week with them written out in English .
And it just didn't work at all
because no one grouped them together .
but I mean it seems to me that , at least for us , we can learn to read them as digits
don't think that 'd be that hard to read them as single digits .
because the digits are easier to recognize .
They 're better trained than the numbers .
Just let them read it how they read it .
I just thought well we 're {disfmarker} if we 're collec collecting digits , and Adam had said we were running out of the TI forms , I thought it 'd be nice to have them in groups ,
and also w maybe we can just let them choose " zero " versus " O " as they {disfmarker} as they like
and probably , all else being equal , it 'd be better for me to just have single digits
OK so {disfmarker} so I can just add to the instructions to read it as digits
The spaces already bias it toward being separated .
I {disfmarker} I was just gonna say , so we have in the vicinity of forty hours of {disfmarker} of recordings now .
And you 're saying two hours , uh , is digits ,
something like twenty {disfmarker} twenty to one .
Um , yeah like you say , I think a couple hours for a {disfmarker} for a {disfmarker} for a test {disfmarker} test set 's OK .
You said there 's like ten different groupings ?
Right , just groupings in terms of number of groups in a line ,
and number of digits in a group ,
and the pattern of groupings .
Um , I {disfmarker} I just roughly looked at what kinds of digit strings are out there ,
and they 're usually grouped into either two , three , or four , four digits at a time .
I purposely didn't want them to look like they were in any kind of pattern .
And which group appears is picked randomly , and what the numbers are are picked randomly .
So unlike the previous one , which I d simply replicated TI - digits , this is generated randomly .
so we have a problem with acoustic adaptation ,
and , I mean {disfmarker} so it 's {disfmarker} it 's nice to have the digits you know , replicated many times .
Especially for speakers that don't talk a lot .
but {disfmarker} but uh the truth is I 'm hoping that we {disfmarker} we through the {disfmarker} the stuff that {disfmarker} that you guys have been doing as you continue that , we get , uh , the best we can do on the spontaneous stuff uh , uh nearfield ,
and then um , we do a lot of the testing of the algorithms on the digits for the farfield ,
and at some point when we feel it 's mature and we understand what 's going on with it then we {disfmarker} we have to move on to the spontaneous data with the farfield .
but we don't have any overlapping digits .
but the people who wanna work on it we should talk to them .
but I think having a little bit might at least be fun for somebody like Dan to play around with ,
I think maybe if we wanted to do that we would do it as a separate session ,
We have ASR results from Liz ,
transcript status from Jane ,
and disk space and storage formats from Don .
um , it 's pretty preliminary in terms of ASR results
like it 's not the speaking style that differs ,
it 's the fact that there 's overlap that causes recognition errors .
And then , the fact that it 's almost all insertion errors ,
but you might also think that in the overlapped regions you would get substitutions and so forth ,
um , leads us to believe that doing a better segmentation , like your channel - based segmentation , or some kind of uh , echo cancellation to get basically back down to the individual speaker utterances would be probably all that we would need to be able to do good recognition on the {disfmarker} on the close - talking mikes .
I guess the other neat thing is it shows for sure w that the lapel , you know within speaker is bad .
And it 's bad because it picks up the overlapping speech .
And someone said " oh " in the front {disfmarker} in the middle .
So if there was a segment of speech this long
and so the rec you know , there 're error rates
because of insertion {disfmarker}
Insertions aren't bounded ,
so with a one - word utterance and ten insertions you know you got huge error rate .
So I this is sort of what we expected ,
because right now we 're not able to actually report on recognition in a real paper ,
because it would look sort of premature .
And also I just wanted to mention briefly that , um , uh Andreas and I called up Dan Ellis who 's still stuck in Switzerland ,
and we were gonna ask him if {disfmarker} if there 're {disfmarker} you know , what 's out there in terms of echo cancellation and things like that .
It {disfmarker} just {disfmarker} it just to r to remove cross - talk .
So the idea is to basically run this on the whole meeting .
and get the locations , which gives you also the time boundaries of the individual speak
Right . Except that there are many techniques for the kinds of cues , um , that you can use to do that .
that 's really the next step
because we can't do too much , you know , on term in terms of recognition results knowing that this is a big problem
um , until we can do that kind of processing .
So at this point we can sort of finalize the naming , and so forth ,
and we 're gonna basically re rewrite out these waveforms that we did
Don , you had disk space and storage formats .
Yeah , l I mean over all our data , we {disfmarker} we want to not downsample .
I mean the r the front - end on the SRI recognizer just downsamples them on the fly ,
So we can't shorten them ,
but we can downsample them .
As {disfmarker} yeah , as long as there is a {disfmarker} a form that we can come from again , that is not downsampled , {comment} then ,
Yeah those are gonna be kept .
That {disfmarker} that 's why we need more disk space
So the SRI front - end won't take a uh {disfmarker} an {disfmarker} an {disfmarker} a large audio file name and then a {disfmarker} a list of segments to chop out {comment} from that large audio file ?
Um , it 's better if they 're chopped out ,
cuz you can run them , you know , in different orders .
And that 's the whole point about the naming conventions
You can't load an hour of speech into X Waves .
You need to s have these small files ,
No , with the Transcriber tool , it 's no problem .
Alright so , first of all , um , there was a {disfmarker} an interest in the transcribe transcription , uh , checking procedures
and the first thing I did was obviously a spell - check .
And then , in addition to that , I did an exhaustive listing of the forms in the data file ,
which included n detecting things like f faulty punctuation and things {disfmarker}
And th and then another check involves , uh , being sure that every utterance has an identifiable speaker .
Then there 's this issue of glossing s w so - called " spoken - forms " .
mo for the most part , we 're keeping it standard wo word level transcription .
However , things like " cuz " where you 're lacking an entire very prominent first syllable ,
those are r reasons {disfmarker} f for those reasons I {disfmarker} I kept that separate ,
and used the convention of using " CUZ " for that form ,
however , glossing it
so that it 's possible with the script to plug in the full orthographic form for that one ,
And the way I tag ac pronounced acronyms is that I have underscores between the components .
the things in curly brackets are viewed as comments .
There 're comments of four types .
One of them is , um , the gloss type we just mentioned .
Uh , then you have if it 's {disfmarker} uh , there 're a couple different types of elements that can happen that aren't really properly words ,
And then the third type right now , {vocalsound} uh , is {pause} m things that fall in the category of comments about what 's happening .
I have frequencies .
So you 'll see how often these different things occur .
So , right now I 've standardized across all the existing data with these spoken forms .
But , um , uh , the very front page deals with this , uh , final c pa uh , uh , aspect of the standardization
which has to do with the spoken forms like " mm - hmm " and " mm - hmm " and " ha " and " uh - uh " and all these different types .
So , it {disfmarker} it 's actually probably good for us to know the difference between the real " eh " and the one that 's just like " uh " or transcribed " aaa "
what 's QUAL ?
Qual - qualifier .
Comment or contextual comment .
We have this {disfmarker} there is this thing I was gonna talk to you about at some point about , you know , what do we do with the dictionary as we 're up updating the dictionary ,
but if there 's things that um , we change later , then we always have to keep our {disfmarker} the dictionary up to date .
it seems like there are lots of different ways it 's being done .
On the glosses for numbers ,
" NUMS " ,
which means this is part of the numbers task .
Now why do we {disfmarker} what 's the reason for having like the point five have the " NUMS " on it ?
Oh these are all these , the " NUMS point " , this all where they 're saying " point " something or other .
And the other thing too is for readability of the transcript .
And this is just really a {disfmarker} a way of someone who would handle th the data in a more discourse - y way to be able to follow what 's being said .
where we 're gonna have a master file of the channelized data .
Um , there will be scripts that are written to convert it into these t these main two uses
and th some scripts will take it down th e into a f a for ta take it to a format that 's usable for the recognizer
an uh , other scripts will take it to a form that 's usable for the {disfmarker} for linguistics an and discourse analysis .
And , um , the implication that {disfmarker} that I have is that th the master copy will stay unchanged .
that , um , Thilo requested , um , that we ge get some segments done by hand to e e s reduce the size of the time bins
so you have that data don't you ?
Yeah , that 's the training data .
And he requested that there be , uh , similar , uh , samples done for five minute stretches c involving a variety of speakers and overlapping secti sections .
I mean , if we could do the {disfmarker} the more fine grained tuning of this , uh , using an algorithm , that would be so much more efficient .
So I {disfmarker} I thought we {disfmarker} we sh we sh perhaps we should try to {disfmarker} to start with those channelized versions
Give it {disfmarker} Give one tr transcriber the {disfmarker} the channelized version of {disfmarker} of my speech - nonspeech detection
and look if {disfmarker} if that 's helpful for them ,
So , uh , have those {disfmarker} e e the vis the ten hours that have been transcribed already , have those been channelized ?
Yes , they have .
Well , you know the problem {disfmarker} the problem is that some {disfmarker} some of the adjustments that they 're making are to bring {disfmarker} are to combine bins that were {disfmarker} time bins which were previously separate .
And the reason they do that is sometimes there 's a word that 's cut off .
And so , i i i it 's true that it 's likely to be adjusted in the way that the words are more complete .
No I know {disfmarker} I know that adjusting those things are gonna {disfmarker} is gonna make it better .
but do you have like a time frame when you can expect like all of it to be done ,
you know , it takes a couple hours t to do , uh , ten minutes .
So I {disfmarker} I th I think probably the way it 'll go is that , you know , when we make this first general version and then start working on the script , that script @ @ that will be ma you know primarily come from what you 've done , um , we 'll need to work on a channelized version of those originals .
and then we 'll rerun the script and produce better uh versions .
uh , and then probably what will happen is as the transcribers finish tightening more and more , you know , that original version will get updated
But the {disfmarker} I guess the ef the effect for you guys , because you 're pulling out the little wave forms into separate ones , that would mean these boundaries are constantly changing
you 'd have to constantly re rerun that ,
The cutting of the waveforms is pretty trivial .
So if you b merge two things , then you know that it 's the sum of the transcripts ,
but if you split inside something , you don't where the word {disfmarker} which words moved .
