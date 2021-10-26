
const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")
  //listens for the form being submitted
imageForm.addEventListener("submit", async event => {
  event.preventDefault()
  const file = imageInput.files[0]

  // get secure url from our server
  const { url } = await fetch("/s3Url").then(res => res.json())
  console.log(url)

  // post the image directly to the s3 bucket
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })
  //upon uploaded to the S3, splits the URL on the ?, and prints the first part of the split in the console
  //I wasn't 100% sure how to display this on the page itself, and rather than open the URL, it actually downloads the uploaded object directly
  const imageUrl = url.split('?')[0]
  console.log(imageUrl)

  // displays the image that was uploaded onto the s3 bucket onto the page as an image file
  const img = document.createElement("img")
  img.src = imageUrl
  document.body.appendChild(img)
})
