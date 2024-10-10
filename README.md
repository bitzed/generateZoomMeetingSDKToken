# Zoom Meeting SDK Token Generator
This is a tiny sample to generate Zoom Meeting SDK Token locally.
## How to Install
You first need to add `.env` file to the root. Enter your own SDK Key and Secret as shown below;
```
ZOOM_MEETING_SDK_KEY="YOUR KEY GOES HERE"
ZOOM_MEETING_SDK_SECRET="YOUR SECRET GOES HERE"
```
## How to Run
after adding credentials, run;
```
npm install
```
and;
```
npm start
or
node index.js
```
and you will get your token in the console. Copy paste the token start from `ey`

## Tips
If you directly want to copy the token itself, you can try adding alias command to your bash (or zsh) by adding following lines to the config file, such as `~/.bashrc` or `~/.zshrc` 
```
alias msdktoken="pushd /directory/to/generateZoomMeetingSDKToken/ && node index.js | tr -d '\n' | pbcopy &&popd && echo 'Meeting SDK token copied!'"
```
Then the token will not displayed in the shell, but directly copied into the clipboard. Remember the token will expire in 8 hours.
Happy tokens!