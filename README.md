#M. Shanken Site
[M. Shanken Media Kit web site.](http://www.mshanken.com)

Need to have harp-js installed ```sudo npm install harp -g``` if you are working from your local machine. Harpjs is installed in QA already if you want to work from there,

After cloning/forking this repo dive into de project ```cd mshanken``` then run ```harp server _site``` , browse the app at //localhost:9000/

##Making changes
Create a branch to start working in you new changes. Do not work in the gh-pages when updating harp files

##Updating Master
After you made your changes merge your changes into master and create a pull request or simply pull if you have the right privilages

##Updating gh-pages
Once you have committed your changes checkout gh-pages and merge your updates from master now lets build gh-pages static content ```harp compile _site ./``` check your gh-pages brach for updated static content. Once you confirm your changes are in place commit your changes to gh-pages ```git push origin master``` to update the mshanken site at github.

##Making Changes
Create a branch to start working with your new changes. Do not work in the gh-pages branch just pull or merge from master for updates.

##Updating Master
After you made your changes in your created branch, merge your changes into master (create a pull request if you have forked this project or simply pull if you have the right privilages). Just push if you work from master branch.

##Updating gh-pages Branch
Once you have committed (and push if you need to) your changes, checkout gh-pages branch ```git checkout gh-pages``` and merge your updates from master or the branch you were working ```git merge branch-name```. Now lets build gh-pages static content with the following command ```harp compile _site``` check your gh-pages brach for updated static content. Once you confirm your changes are in place commit and push your changes to gh-pages branch at github ```git push origin master``` to update the mshanken site at github.


Do changes accordingly, any help contact [Edison](mailto:eleon@mshanken.com)
