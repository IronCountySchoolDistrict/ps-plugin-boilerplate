## PowerSchool Plugin Boilerplate

The boilerplate is designed to enable PowerSchool Plugin development with modern Javascript standards with Babel transformation. This boilerplate uses Webpack and Gulp to compile the code into a distribution plugin.zip file. 

1. Clone the boilerplate into a Project directory.
2. Delete .git in the directory. 
	- `rm -rf .git`
3. Rename the ps-plugin-boilerplate directory to the desired name of the application. 
	- `mv ps-plugin-boilerplate {{app_name}}`
4. Open package.json and change the following.
	- `name:`
	- `version:`
	- `description:`
	- `author:`
5. All `{{tags}}` should be renamed to the respective `tag_name`
6. Initialize git and push. 
	- `git init`
	- `git remote add origin git@github.com:User/UserRepo.git`
	- `git add .`
	- `git commit -m "first commit"`
	- `git push origin HEAD`
7. Install all dependency from package.json
	- `npm i`
	- or
	- `yarn install`
8. If supported initialize eslint
	- `eslint -init`
9. Open and setup `gulpfile.config.js` if plugin is not standalone.

