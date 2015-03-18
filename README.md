#M. Shanken Site
[M. Shanken Media Kit web site.](http://www.mshanken.com)

##How it works

There's two ways to do this, either in your desktop or in our QA machine. To start you need the following installed (QA's already installed)

1. Node
2. NPM
3. Grunt
4. [Harpjs](http://harpjs.com/)

This is a static page site build with [Harpjs](http://harpjs.com/). Once you have the requirements installed you can now clone this repo or git pull to update. You can start working on it, a list of commads at your dispose. Enjoy it!

##```npm install```
To install grunt task runner dependencies, NPM was added recently so you might want to run it now, not need to run it after that, unless you start by clonning the project again.

##```npm run server```
Runs harp server from your harpjs working directory (usually _site), once you run this command open your browser with this location http://localhost:9000 to preview your working site. Use ```ctrl+c``` to turn off the server.

##```npm  run compile```
Runs harp compile, this command will generate the HTML of your working project that harpjs had created, check harp project if it generates errors.

##```npm run static```
Like ```npm run server``` it turns on a server but this one serves all generated HTML, this can help you to preview if all generated HTML site works well and have updated correctly if any update. Open your browser with this url http://localhost:8800 to view the harpjs compiled version.

##```npm run gh-pages```
**NOTE:** this command should run at the **_gh-pages_** branch only.

This command will copy the compiled (HTML generated) version of your working site in the root folder so it can be render at gh-pages in the github site.



~~Need to have harp-js installed ```sudo npm install harp -g``` if you are working from your local machine. Harpjs is installed in QA already if you want to work from there.~~

~~After forking/cloning this repo, dive into the project ```cd mshanken``` then run the server with ```harp server _site``` , browse the app at //localhost:9000/ or //youwebserver:9000/~~

~~##Making Changes~~
~~Create a branch to start working with your new changes. Do not work in the gh-pages branch just pull or merge from master for updates.~~

~~##Updating Master~~
~~After you made your changes in your created branch, merge your changes into master (create a pull request if you have forked this project or simply pull if you have the right privilages). Just push if you work from master branch.~~

~~##Updating gh-pages Branch
Once you have committed (and push if you need to) your changes, checkout gh-pages branch ```git checkout gh-pages``` and merge your updates from master or the branch you were working ```git merge branch-name```. Now lets build gh-pages static content with the following command ```harp compile _site``` check your gh-pages brach for updated static content. Once you confirm your changes are in place commit and push your changes to gh-pages branch at github ```git push origin master``` to update the mshanken site at github.~~


Do changes accordingly, any help contact [Edison](mailto:eleon@mshanken.com)
