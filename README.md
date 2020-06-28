# [smsp][smsp]

[![Netlify Status][netlify-badge]][netlify-deploys]

Encrypted static pages powered by AJAX. It's a really simple project made with
HTML, CSS, and JS. It's not meant to be very secure or anything like that. I
just made this to send... Special Messages for Special People.

To set this up:

1. Host this repo on a web server.
2. Use [`create.html`](create.html) to generate a special message.
   Use [`template.html`](template.html) if necessary.
3. Create a new directory inside the [`messages`](messages) directory using the
   hashed password as its name. The hash is shown in the address bar after you
   click the `Create` button. It's the string after `#`.
4. Create a new `index.html` file inside the folder and paste the encrypted
   message into it. Make sure there is no trailing newline.
5. Done! The page is now accessible by entering the password from the main site.

Demo: https://smsp.laymonage.com/?key=helloworld

Site theme is ripped off the [Moon][moon] theme for Jekyll.

[smsp]: https://smsp.laymonage.com
[netlify-badge]: https://api.netlify.com/api/v1/badges/f1066428-6142-495f-87b0-79892656ddbf/deploy-status
[netlify-deploys]: https://app.netlify.com/sites/smsp/deploys
[moon]: https://github.com/TaylanTatli/Moon
