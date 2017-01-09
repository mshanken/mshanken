#M. Shanken Site
[M. Shanken Media Kit web site.](http://www.mshanken.com)

##How it works.
1. ```git clone git@github.com:mshanken/mshanken```
2. ```npm install```<br>
**Note:** Because harp-js uses Ruby for sass and other features under the hood, you might see error logs in your screen, if that's the case, just run this ```npm install grunt-harp``` with sudo before the next command)
3. ```grunt server```

Check [http://localhost:9000](http://localhost:9000) in your browser. That's all, start working in your project now.

##list of commads
This is a list of commads at your dispose to create a simple static web-site. Enjoy it!

###```grunt server```
Runs harp server from your harpjs working directory ```_site/```, after you run this command open your browser with this location http://localhost:9000 to preview it. Type ```ctrl+c``` to turn off the server.

###```grunt compile```
Runs harp compile to generate the static HTML of your dinamic website.

###```grunt static```
Like ```grunt server``` it runs another server but this one serves the generated HTML (compiled), this can help to review the generated HTML site. Open your browser with this url http://localhost:8800.

###```grunt gh-pages```
This command will copy the generated HTML (compiled) version of your site at rooted level so it can be render at github gh-pages.

**NOTE:** this command should run once you are in the **_gh-pages_** branch only.

Site was built using [harp-boilerplate, check site](https://github.com/mshanken/harp-boilerplate) for how to use this tool info