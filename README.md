> ⚠️ The following sample application is a personal, open-source project shared by the app creator and not an officially supported Zoom Communications, Inc. sample application. Zoom Communications, Inc., its employees and affiliates are not responsible for the use and maintenance of this application. Please use this sample application for inspiration, exploration and experimentation at your own risk and enjoyment. You may reach out to the app creator and broader Zoom Developer community on https://devforum.zoom.us/ for technical discussion and assistance, but understand there is no service level agreement support for this application. Thank you and happy coding!

> ⚠️ このサンプルのアプリケーションは、Zoom Communications, Inc.の公式にサポートされているものではなく、アプリ作成者が個人的に公開しているオープンソースプロジェクトです。Zoom Communications, Inc.とその従業員、および関連会社は、本アプリケーションの使用や保守について責任を負いません。このサンプルアプリケーションは、あくまでもインスピレーション、探求、実験のためのものとして、ご自身の責任と楽しみの範囲でご活用ください。技術的な議論やサポートが必要な場合は、アプリ作成者やZoom開発者コミュニティ（ https://devforum.zoom.us/ ）にご連絡いただけますが、このアプリケーションにはサービスレベル契約に基づくサポートがないことをご理解ください。

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
Then the token will not displayed in the shell, but directly copied into the clipboard. Remember the token will expire in 2 hours.
Happy tokens!
