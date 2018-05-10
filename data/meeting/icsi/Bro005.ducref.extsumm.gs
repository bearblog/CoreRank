OK , s so there is kind of summary of what has been done {disfmarker}
Summary of experiments since , well , since last week
and also since the {disfmarker} we 've started to run {disfmarker} work on this .
Um . {pause} So since last week we 've started to fill the column with um {vocalsound} uh features w with nets trained on PLP with on - line normalization
but with delta also ,
but {pause} we have more results to compare with network using without PLP
and {pause} finally , hhh , {comment} um {pause} ehhh {comment} PL - uh delta seems very important .
uh {pause} when we use the large training set using French , Spanish , and English , you have one hundred and six without delta
and eighty - nine with the delta .
a And again all of these numbers are with a hundred percent being , uh , the baseline performance ,
Yeah ,
But , actually , um , for English training on TIMIT is still better than the other languages .
so , it 's multi - English ,
we have a ninety - one number ,
and training with other languages is a little bit worse .
And , yeah , and here the gap is still more important between using delta and not using delta .
If y if I take the training s the large training set , it 's {disfmarker} we have one hundred and seventy - two ,
and one hundred and four when we use delta .
Uh . {pause} Even if the contexts used is quite the same ,
except for the multi - English , which is always one of the best .
then we started to work on a large dat database containing , uh , sentences from the French , from the Spanish , from the TIMIT , from SPINE , uh from {comment} uh English digits , and from Italian digits .
and {pause} uh , actually we did this before knowing the result of all the data ,
uh , so we have to to redo the uh {disfmarker} the experiment training the net with , uh PLP , but with delta .
We have also started feature combination experiments .
Uh many experiments using features and net outputs together .
And this is {disfmarker} The results are on the other document .
so , uh , you 've got some , uh , Xerox things to pass out ?
Yeah , I 'm sorry for the table ,
but as it grows in size , uh , it .
Uh , so for th the last column we use our imagination .
So it 's the {disfmarker} kind of similar to the tandem that was proposed for the first .
The multi - stream tandem for the first proposal .
The second is using features and KLT transformed MLP outputs .
And the third one is to u use a single KLT trans transform features as well as MLP outputs .
Yeah , we ju just to be clear , the numbers here are uh recognition accuracy .
Yes , and the baseline {disfmarker} the baseline have {disfmarker} i is eighty - two .
Baseline is eighty - two .
And first in the experiment - one I {disfmarker} I do {disfmarker} I {disfmarker} I use different MLP ,
and is obviously that the multi - English MLP is the better .
Um . for the ne {disfmarker} rest of experiment I use multi - English ,
And I try to combine different type of feature ,
but the result is that the MSG - three feature doesn't work for the Italian database
because never help to increase the accuracy .
Yeah , eh , actually , if w we look at the table ,
the huge table ,
um , we see that for TI - digits MSG perform as well as the PLP ,
but this is not the case for Italian what {disfmarker} where the error rate is c is almost uh twice the error rate of PLP .
I don't know what exactly .
Perhaps the fact that the {disfmarker} the {disfmarker} there 's no low - pass filter ,
or no pre - emp pre - emphasis filter
and that there is some DC offset in the Italian ,
But {disfmarker} that we need to sort out if want to uh get improvement by combining PLP and MSG
because for the moment MSG do doesn't bring much information .
when you said the baseline system was uh , uh eighty - two percent , that was trained on what and tested on what ?
That was , uh Italian mismatched d uh , uh , digits , uh , is the testing ,
and the training is Italian digits ?
Yeah .
So the " mismatch " just refers to the noise and {disfmarker} and , uh microphone and so forth ,
So , um {disfmarker} So what that says is that in a matched condition , {vocalsound} we end up with a fair amount worse putting in the uh PLP .
Now w would {disfmarker} do we have a number , I suppose for the matched {disfmarker}
I {disfmarker} I don't mean matched ,
but uh use of Italian {disfmarker} training in Italian digits for PLP only ?
so this is {disfmarker} basically this is in the table .
Uh {pause} so the number is fifty - two ,
Another table .
Fifty - two percent .
Fift - So {disfmarker} No , it 's {disfmarker} it 's the {disfmarker}
No , fifty - two percent of eighty - two ?
Of {disfmarker} of {disfmarker} of uh {pause} eighteen {disfmarker}
Eighty .
of eighteen .
So it 's {disfmarker} it 's error rate , basically .
It 's plus six .
It 's er error rate ratio .
Oh this is accuracy !
Yeah .
Uh , so we have nine {disfmarker} nine {disfmarker} let 's say ninety percent .
Oh , I 'm sorry ,
I k I keep getting confused
because this is accuracy .
Yeah , sorry .
And then adding the MSG does nothing , basically .
No .
So , um {disfmarker} So actually , the answer for experiments with one is that adding MSG , if you {disfmarker} uh does not help in that case .
Mm - hmm .
So then you 're assuming multi - English is closer to the kind of thing that you could use
since you 're not gonna have matching , uh , data for the {disfmarker} uh for the new {disfmarker} for the other languages and so forth .
So , it it 's still {disfmarker} it hurts you {disfmarker} seems to hurt you a fair amount to add in this French and Spanish .
I wonder why
Well Stephane was saying that they weren't hand - labeled ,
the French and the Spanish .
first the feature are without delta and delta - delta ,
and we can see that in the situation , uh , the MSG - three , the same help nothing .
And then I do the same
but with the delta and delta - delta {disfmarker} PLP delta and delta - delta .
What {disfmarker} what we 're saying is that one o one of the things that {disfmarker}
I mean my interpretation of your {disfmarker} your s original suggestion is something like this , as motivation .
When we train on data that is in one sense or another , similar to the testing data , then we get a win by having discriminant training .
When we train on something that 's quite different , we have a potential to have some problems .
So I guess the other thing is to take {disfmarker} you know {disfmarker} if one were to take , uh , you know , a couple of the most successful of these ,
Yeah , and test across everything .
Yeah , try all these different tests .
Um , discussion with Hynek , Sunil and Pratibha for trying to plug in their our {disfmarker} our networks with their {disfmarker} within their block diagram ,
uh , where to plug in the {disfmarker} the network , uh , after the {disfmarker} the feature ,
before as um a as a plugin or as a anoth another path ,
actually Hynek would like to see ,
perhaps if you remember the block diagram there is , uh , temporal LDA followed b by a spectral LDA for each uh critical band .
And he would like to replace these by a network
which would , uh , make the system look like a TRAP .
uh , I started multi - band MLP trainings ,
So I take exactly the same configurations ,
seven bands with nine frames of context ,
and we just train on TIMIT ,
and on the large database ,
so , with SPINE and everything .
mmm , I 'm starting to train also , networks with larger contexts .
So , this would {disfmarker} would be something between TRAPS and multi - band
because we still have quite large bands ,
and {disfmarker} but with a lot of context also .
we still have to work on Finnish ,
um , basically , to make a decision on which MLP can be the best across the different languages .
For the moment it 's the TIMIT network , and perhaps the network trained on everything .
Uh , well , the next part of the document is , well , basically , a kind of summary of what {disfmarker} everything that has been done .
So . We have seventy - nine M L Ps trained on
ten {disfmarker} on ten different databases .
yeah ! {comment} As we mentioned , TIMIT is the only that 's hand - labeled ,
and perhaps this is what makes the difference .
Yeah , the other are just Viterbi - aligned .
Yeah , basically the observation is what we discussed already .
The MSG problem ,
the fact that the MLP trained on target task decreased the error rate .
but when the M - MLP is trained on the um {disfmarker} is not trained on the target task , it increased the error rate compared to using straight features .
Uh , so the fourth point is , yeah , the TIMIT plus noise seems to be the training set that gives better {disfmarker} the best network .
So , on the MSG uh problem
um , I think that in {disfmarker} in the {disfmarker} um , in the short {pause} time {pause} solution
um , that is , um , trying to figure out what we can proceed forward with to make the greatest progress ,
I think it 's kind of in category that it 's , it {disfmarker} it may be complicated .
And uh it might be {disfmarker} if someone 's interested in it , uh , certainly encourage anybody to look into it in the longer term ,
once we get out of this particular rush {pause} uh for results .
But in the short term , unless you have some {disfmarker} some s strong idea of what 's wrong ,
but {disfmarker} but my {disfmarker} my guess would be that it 's something that is a simple thing that could take a while to find .
That 's {disfmarker} that {disfmarker} what we were concerned about is that if it 's not on the target task {disfmarker}
If it 's on the target task then it {disfmarker} it {disfmarker} it helps to have the MLP transforming it .
If it uh {disfmarker} if it 's not on the target task , then , depending on how different it is , uh you can get uh , a reduction in performance .
Yeah . So , {pause} the {disfmarker} the reason {disfmarker} Yeah , the reason is that the {disfmarker} perhaps the target {disfmarker} the {disfmarker} the task dependency {disfmarker} the language dependency , {vocalsound} and the noise dependency {disfmarker}
Well , the e e But this is still not clear
I {disfmarker} I {disfmarker} I don't think we have enough result to talk about the {disfmarker} the language dependency .
Well , the TIMIT network is still the best
the fact that it 's {disfmarker} it 's hand - labeled .
yes there 's what you would expect in terms of a language dependency and a noise dependency . That is , uh , when the neural net is trained on one of those and tested on something different , we don't do as well as in the target thing .
But you have two {disfmarker} two effects , the effect of changing language
and the effect of training on something that 's {pause} Viterbi - aligned instead of hand {disfmarker} hand - labeled .
Do you think the alignments are bad ?
I mean , have you looked at the alignments at all ?
What the Viterbi alignment 's doing ?
Might be interesting to look at it .
Yeah . But {disfmarker} Yeah . But , perhaps it 's not really the {disfmarker} the alignment that 's bad
but the {disfmarker} just the ph phoneme string that 's used for the alignment
The pronunciation models and so forth
there {disfmarker} there might be errors just in the {disfmarker} in {disfmarker} in the ph string of phonemes .
Yeah , so this is not really the Viterbi alignment ,
We can , we can tell which training set gives the best result ,
but {vocalsound} we don't know exactly why .
Uh . Right , I mean the multi - English so far is {disfmarker} is the best .
Yeah .
" Multi - multi - English " just means " TIMIT " ,
So perhaps , I think something like multi - band trained on a lot of noises with uh , features - based targets could {disfmarker} could {disfmarker} could help .
The future work is , {pause} well , try to connect to the {disfmarker} to make {disfmarker} to plug in the system to the OGI
Um , there are still open questions there ,
where to put the MLP basically .
but one of the core quote {comment} " open questions " for that is um , um , if we take the uh {disfmarker} you know , the best ones here ,
maybe not just the best one ,
but the best few or something {disfmarker}
You want the most promising group from these other experiments .
We know that there 's a mis there 's a uh {disfmarker} a {disfmarker} a loss in performance when the neural net is trained on conditions that are different than {disfmarker} than , uh we 're gonna test on ,
but well , if you look over a range of these different tests um , how well do these different ways of combining the straight features with the MLP features , uh stand up over that range ?
look at these different ways of combining it .
And just look {disfmarker} take that case and then look over all the different things .
How does that {disfmarker} How does that compare between the {disfmarker}
All the different test sets ,
and for {disfmarker} and for the couple different ways that you have of {disfmarker} of {disfmarker} of combining them .
Um . {pause} How well do they stand up , over the {disfmarker}
Yeah , so thi this sh would be more working on the MLP as an additional path instead of an insert to the {disfmarker} to their diagram .
Perhaps the insert idea is kind of strange
So . Uh , we {disfmarker} we wanna get their path running here ,
If so , we can add this other stuff .
as an additional path
So they will send us the {disfmarker} Well , provide us with the feature files ,
Yeah , the way we want to do it perhaps is to {disfmarker} just to get the VAD labels and the final features .
So we {disfmarker} So . First thing of course we 'd wanna do there is to make sure that when we get those labels of final features is that we get the same results as them .
Without putting in a second path .
Yeah just th w i i Just to make sure that we {pause} have {disfmarker} we understand properly what things are , our very first thing to do is to {disfmarker} is to double check that we get the exact same results as them on HTK .
Barry , you 've been pretty quiet .
but {disfmarker} {vocalsound} That {disfmarker} what {disfmarker} what {disfmarker} what were you involved in in this primarily ?
Well , they 've been kind of running all the experiments and stuff
and I 've been uh , uh w doing some work on the {disfmarker} on the {disfmarker} preparing all {disfmarker} all the data for them to {disfmarker} to um , train and to test on .
Yeah . Right now , I 'm {disfmarker} I 'm focusing mainly on this final project I 'm working on in Jordan 's class .
And um , {vocalsound} I 'm just gonna see if {disfmarker} if that {disfmarker} that better models {pause} um , uh asynchrony in any way
Here the problem seems to be is that we don't have a hug a really huge net with a really huge amount of training data .
But we have s f {pause} for this kind of task , I would think , {pause} sort of a modest amount .
I mean , a million frames actually isn't that much .
We have a modest amount of {disfmarker} of uh training data from a couple different conditions ,
and then uh {disfmarker} in {disfmarker} yeah , that {disfmarker} and the real situation is that there 's enormous variability that we anticipate in the test set in terms of language ,
and noise type
uh , and uh , {pause} uh , channel characteristic ,
Yeah , that {pause} seems like a good thing to do , probably ,
not uh again a short - term sort of thing .
the two of the main issues perhaps are still the language dependency {vocalsound} and the noise dependency .
And perhaps to try to reduce the language dependency , we should focus on finding some other kind of training targets .
For moment you use {disfmarker} we use phonetic targets
but we could also use articulatory targets , soft targets ,
and perhaps even , um use networks that doesn't do classification
but just regression
and well , basically com com compute features and noit not , nnn , features without noise . I mean uh , transform the fea noisy features {vocalsound} in other features that are not noisy .
