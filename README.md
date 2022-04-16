
### pacakge installed in project

```
$ npm init
$ npm install express body-parser --save
$ npm install npm-run-all --save
$ npm install aws-sdk dotenv --save
$ npm install nodemon -D
```

with `npm-run-all`installed, we add some configuration inner configure `package.json`:

```
{
  // some code ...

  "scripts": {
    "start-orders-svc": "node ./orderssvc/index.js 8081",
    "start-emails-svc": "node ./emailssvc/index.js",
    "start": "npm-run-all -p -r start-orders-svc"
  },

  // some code ...
}

```

### consumer

```
$ npm i sqs-consumer --save
$ npm i nodemailer
```

### nodemailer

Important
In my case, Gmail blocked my email for security issues. To make this work, I activated the less secured app Gmail’s option:
1.  Go to your Gmail account https://myaccount.google.com/
2. In the search input type less secure apps.
3. Select the first result and enable access to these apps.


### .gitignore

1) Create a .gitignore file. To do that, you just create a .txt file and change the extension as follows:

Enter image description here

Then you have to change the name, writing the following line in a cmd window:

 rename git.txt .gitignore
Where git.txt is the name of the file you've just created.

Then you can open the file and write all the files you don’t want to add on the repository. For example, mine looks like this:

```
#OS junk files
[Tt]humbs.db
*.DS_Store

#Visual Studio files
*.[Oo]bj
*.user
*.aps
*.pch
*.vspscc
*.vssscc
*_i.c
*_p.c
*.ncb
*.suo
*.tlb
*.tlh
*.bak
*.[Cc]ache
*.ilk
*.log
*.lib
*.sbr
*.sdf
*.pyc
*.xml
ipch/
obj/
[Bb]in
[Dd]ebug*/
[Rr]elease*/
Ankh.NoLoad

#Tooling
_ReSharper*/
*.resharper
[Tt]est[Rr]esult*

#Project files
[Bb]uild/

#Subversion files
.svn

# Office Temp Files
~$*
```

Once you have this, you need to add it to your Git repository. You have to save the file where your repository is.

Then in Git Bash you have to write the following line:

git config --global core.excludesfile ~/.gitignore_global
If the repository already exists then you have to do the following:

```
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"
```

If the step 2 doesn’t work then you should write the whole route of the files that you would like to add.

### push my git local to remote

```
git remote add origin https://github.com/ale-fuentes/AWS_SQS_Node_tutorial.git
git push -u origin master
```