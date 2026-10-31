# thrisharajkumar.github.io

My personal website: https://thrisharajkumar.github.io/

## Adding something new

Everything on the site lives in **`content.js`**. You don't need to touch the HTML.

| To add | Edit this list in `content.js` |
|---|---|
| A paper | `PAPERS` |
| A photo or LinkedIn post | `MOMENTS` |
| A new job or milestone | `JOURNEY` |
| An award | `AWARDS` |
| A recommendation | `QUOTES` |
| What you're doing now | `SITE.now` |

Copy an existing block, paste it at the top of the list, change the words and save.

### Adding photos from LinkedIn

1. Open your own LinkedIn post, then right-click the photo and choose **Save image as**.
2. Put the file in `assets/photos/` with a short name, such as `sydney-poster.jpg`.
3. In `MOMENTS`, set `photo: "assets/photos/sydney-poster.jpg"` and paste the post's link into `link`.

You can also show a whole LinkedIn post. On LinkedIn, click **•••** on your post, then **Embed this post**. Copy the address inside `src="..."` and paste it into `embed`.

If a photo is missing, the site shows a colourful card instead, so nothing ever looks broken.

## Privacy

There is no email address anywhere on the site. All contact goes through LinkedIn.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
