This is my attempt at the task set by Aire Logic to create an image hosting app that writes to the cloud and returns a URL.

I initially thought "alright, an app/site that uploads to an S3 bucket using an iam user with PUT access, and then I can figure out how to display the endpoint URL to the user to access that image's URL." I then spent time  researching online, and saw that Javascript and Node were going to be key parts to this task.

The files included here aren't my own, the code was sourced from a Youtube channel "Sam Meech-Ward" who step by step went through the code on how to upload via an app on a node.js server to an S3 bucket, and the code does infact do that. My contribution to this app has been the bucket information I'm writing to, including programmatic access via an iam user, and comments that I wrote both to ensure that I understand roughly how the app functions, but also to display it to others which I hope it achieves.

I intend to spend the rest of my time looking at how containerisation would've factored into this so that I can at least bring to the table further understanding on the other processes involved that I wasn't able to include in the task.

Also, for this to work it requires the Access Key and Secret Access Key attributed to the iam role that has permissions to write to an S3 which is included in an .env file that I haven't included in a public repo for obvious reasons

Thank you, Tom.