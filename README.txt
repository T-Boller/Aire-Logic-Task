I'd like to say this is my attempt at the task set by Aire Logic to create an image hosting app that writes to the cloud and returns a URL, but I found it extremely difficult, coming fresh from the course to do so.
I initially thought "alright, an app/site that uploads to an S3 bucket using an iam user with PUT access, and then I can figure out how to display the endpoint URL to the user to access that image's URL."
Though in reality I quickly found that my lacking of knowledge surrounding how apps actually function, as well as my arguably very basic knowledge of programming, and at that only really in Python was going to be a major roadblock.
I spent a good portion of my weekend (the task being provided to us Friday evening) just searching for articles and youtube videos specially around "Image hosting on AWS" and through the videos that I found, saw that Javascript and Node were going to be key parts to this task.
The files included here aren't my own, the code was sourced from a Youtube channel "Sam Meech-Ward" who step by step went through the code on how to upload via an app on a node.js server to an S3 bucket, and the code does infact do that.
My contribution to this app has been the bucket information i'm writing to, including programmatic access via an iam user, and comments that i wrote both to ensure that I understand roughly how the app functions, but also to display it to others which I hope it achieves.
I felt quite panicked when I intially saw the task, and to some extent I still do, but I feel much more comfortable being honest than I do trying to pass off others way as my own.
I intent to spend the rest of my time looking at how containerisation would've factored into this so that I can at least bring to the table further understanding on the other processes involved that I wasn't able to factor into this task.
Thank you, Tom.

