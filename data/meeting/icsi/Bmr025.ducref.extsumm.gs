Um I hired several more transcribers ,
They 're making great progress .
uh I 've been uh finishing up the uh double checking .
as a somewhat segue into the next topic , um could I get a hold of uh the data even if it 's not really corrected yet
just so I can get the data formats
and make sure the information retrieval stuff is working ?
I 've uh just processed the first five EDU meetings
and they are chunked up
so they would {disfmarker} they probably can be sent to IBM
whenever they want them .
Well the second one of those
Yep . It 's already at IBM ,
That 's the one that {pause} we 're waiting to hear from them on .
And so as soon as we hear from Brian that this one is OK
and we get the transcript back
and we find out that hopefully there are no problems matching up the transcript with what we gave them ,
then uh we 'll be ready to go and we 'll just send them the next four as a big batch ,
We 're sort of doing things in parallel ,
especially for the information retrieval stuff .
So I 've been working on using the THISL tools to do information retrieval on meeting data
and the THISL tools are {disfmarker} there 're two sets , there 's a back - end and a front - end ,
so the front - end is the user interface
and the back - end is the indexing tool and the querying tool .
And so I 've written some tools to convert everything into the right for file formats .
And the command line version of the indexing and the querying is now working .
So at least on the one meeting that I had the transcript for uh conveniently you can now do information retrieval on it ,
do {disfmarker} type in a {disfmarker} a string and get back a list of start - end times for the meeting ,
but my intention is to do a prettier user interface based either {disfmarker}
Uh the other option is Dan did the Tcl - TK THISL GUI front - end for Broadcast News
but it does mean you need to be running a web server .
Uh and it would be difficult to port to Windows
And so it {disfmarker} it 's pretty big and complex .
So another idea I w t had just now actually for the demo was whether it might be of interest to sh to show some of the prosody uh {vocalsound} work that Don 's been doing .
and then show for instance a task like finding sentence boundaries or finding turn boundaries .
you know , you can show that graphically , sort of what the features are doing .
It , you know , it doesn't work great but it 's definitely giving us something .
I don't know if that would be of interest or not .
at {disfmarker} at the very least we 're gonna want something illustrative with that
and so i if there 's something that shows it graphically it 's much better than me just having a bullet point
S so when we here were having this demo meeting , what we 're sort of coming up with is that we wanna have all these pieces together , to first order , by the end of the month
Yeah we can probably find some examples of different type of prosodic events going on .
Next month .
Uh {disfmarker} that 'll {disfmarker} that 'll give us {disfmarker} that 'll give us a week or so to uh {disfmarker} to port things over to my laptop and make sure that works ,
So I 've been doing a bunch of XML tools
So yet again we should probably meet to talk about transcription formats in XML
because there are a lot of tools that let you do extraction and reformatting of XML tools .
I 'm converting the Key files to XML so that you can extract m uh various inf uh sorted information on individual meetings
Oh , quick question on that . Is {disfmarker} do we have the {disfmarker} {vocalsound} the seat information ?
The seat information is on the Key files for the ones which
but I just hadn't ever been putting it in the Key files .
I never knew we were supposed to put it in the Key file .
I mean this is why I wanna use a g a tool to do it rather than the plain text
because with the plain text it 's very easy to skip those things .
Yeah and then the other thing also that Thilo noticed is , on the microphone ,
on channel zero it says hand - held mike or Crown mike ,
you actually have to say which one .
And then uh also in a couple of places instead of filling the participants under " participants " they were filled in under " description " .
the {disfmarker} the one that shows up here , {comment} that will flash yellow if the mike isn't connected .
Um I spoke with Dave Johnson about putting all the Meeting Recorder stuff on non - backed - up disk to save the overhead of backup
In fact what he said is doing the manual one , {comment} doing uh NW archive to copy it {comment} is a good idea
but he thought it was a bad idea .
and we should do that and have it backed up .
He w he 's a firm believer in {disfmarker} in lots of different modalities of backup .
This data cannot be recovered .
and if then a mistake is made and we lose the archive we should have the backup .
if it 's stationary it 's not going to go through the increment it 's not gonna burden things in the incremental backups .
Just {disfmarker} just the monthly full .
and we 're far enough away from saturation on full backups that it 's w probably OK .
And uh , so the only issue here is the timing between getting more disks and uh recording meetings .
So I guess the idea is that we would be reserving the non - backed - up space for things that took less than twenty - four hours to recreate or something like that ,
Things that are recreatable easily and also {disfmarker} Yeah , basically things that are recreatable .
I know that uh that Thilo you were , um , bringing the Channeltrans interface onto the Windows machine ?
Yeah it 's {disfmarker} it {disfmarker} Basically it 's done ,
Good . CrossPads ?
who basically said " if you 're not using them , could you return them ? "
We {disfmarker} we used them a couple times ,
And I have {disfmarker} uh so my {disfmarker} my feeling on it is that I think in principle it 's a really nice idea ,
and you have the time tags which makes it better tha than just taking ra raw notes .
On the other hand , I {disfmarker} the down side for me was that I think the pen is really noisy .
so that you can {disfmarker} you have a record of whatever it is you 've written .
So i if you take notes it 's a great little device .
And one of the reasons that it was brought up originally was because uh we were interested in {disfmarker} in higher - level things ,
not just the , you know , microphone stuff but also summarization and so forth
so that it 's synchronized with the time on that
and then you have to download to an application ,
and then you have to figure out what the data formats are and convert it over if you wanna do anything with this information .
we {disfmarker} we get somebody to buy into the idea of doing this as part of the task .
uh part of the reason {disfmarker} I think part of the reason that Adam was so interested in uh the SpeechCorder sort of f idea from the beginning is he said from the beginning he hated taking notes
Well if you wanted to do that maybe the right architecture for it is to get a PDA with a wireless card .
And {disfmarker} and that way you can synchronize very easily with the {disfmarker} the {disfmarker} the meeting
I mean for what {disfmarker} what you 've been describing buttons would be even more convenient than anything else ,
Maybe we could do like a student project ,
you know , maybe someone who wants to do this as their main like s project for something would be cool .
I mean if we had them out and sitting on the table people might use them a little more
but {disfmarker} uh by I {disfmarker} I would suggest you return one .
Because we {disfmarker} we you know , we {disfmarker} we haven't used it at all .
One would probably be fine .
W uh {disfmarker} {comment} We ordered uh more wireless ,
And then at the same time I 'll probably rewire the room as per Jane 's suggestion
so that uh the first N channels are wireless , eh are the m the close - talking and the next N are far - field .
I mean there 's {disfmarker} there 's all this stuff going on uh between uh Andreas and {disfmarker} and {disfmarker} and Dave and Chuck and others with various kinds of runs
uh um {disfmarker} recognition runs ,
trying to figure things out about the features
but it 's {disfmarker} it 's all sort of in process ,
DARPA demos ,
Well , what if you 're sitting there and you just wanna make an X
and you don't wanna take notes
Yeah , so we might wanna do it simultaneous .
I mean you hav sorta have to .
