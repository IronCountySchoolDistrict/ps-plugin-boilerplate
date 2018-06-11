
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
6. Install all dependency from package.json
	- `npm i --save-dev`
	- or
	- `yarn install --dev`
7. Initialize git and push. 
	- `git init`
	- `git remote add origin git@github.com:User/UserRepo.git`
	- `git add .`
	- `git commit -m "first commit"`
	- `git push origin HEAD`
8. If supported initialize eslint
	- `eslint -init`
9. When development is finished use `gulp4-ps-tasks` to package the application.  
	- Standalone plugin 
		- Creates a `plugin.zip` with all dist directory contents.
	- Plugin with Image Server deployment
		- Creates a `plugin.zip` with web_root hooks.
		- Calls `gulp.config.json` and pushes `.js` and `.css` to selected image server.
10. `gulp4-ps-tasks` has several tasks. The boilerplate is only concerned with the two Orchestrator tasks. Orchestrators will call the other tasks as needed.
	- `gulp createPkgNoImage`
	- `gulp createPkgWithImage`
11. To include the SCSS file it is required to import it into the index.js so webpack can complie it.
	- `import '../css/index.scss'`
12. To package images add them to the Images/{{App_name}}/ directory. Then referance like so.
	- `../../../images/{{app_name}}/my_image_file`

### Standalone Plugin

- Run cmd: `gulp createPkgNoImage`

### Plugin with Image Server

- Setup `gulp.config.json`
- Rename `image_server_name` to desired name
- Define `default_deploy_target:`
- Create and Deploy
	- Default : `gulp createPkgWithImage`
	- With Env: `gulp createPkgWithImage --env image_server_name`
 

