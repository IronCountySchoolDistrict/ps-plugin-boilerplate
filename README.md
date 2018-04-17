## PowerSchool Plugin Boilerplate

The boilerplate is designed to enable PowerSchool Plugin development with modern Javascript standards with Babel transformation. This boilerplate uses Webpack and Gulp to compile the code into a distribution plugin.zip file. 

- Clone the boilerplate into a Project directory.
- Delete .git in the directory. 
	- `rm -rf .git`
- Rename the ps-plugin-boilerplate directory to the desired name of the application. 
	- `mv ps-plugin-boilerplate {{app_name}}`
- All `{{tags}}` should be renamed to the respective `{{tag_name}}`
- Initialize git and push. 
	- `git init`
	- `git remote add origin git@github.com:User/UserRepo.git`
	- `git add .`
	- `git commit -m "first commit"`
	- `git push origin HEAD`
- Install all dependency from package.json
	- `npm i`
	- or
	- `yarn install`
- If supported initialize eslint
	- `eslint -init`

