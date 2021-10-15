/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

gitDefinition = "Git is used to store projects so that you can keep all your code in one place";
console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

gitHubDefinition = "GitHub is an internet site that yourself or others can use to access your stored code across multiple devices";
console.log(gitHubDefinition);

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = "How you will initialize all your projects into git";
let initCode = "git init";

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let gitClone = "creates a copy of your current respository";
let gitCloneCode = "git clone";

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let gitStatus = "Gives you the status of whether or not your project is ready to push to git";
let gitStatusCode = "git status";

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let gitAdd = "This is the function that actually addds everything in your current folder that you are in to git";
let gitAddCode = "git add .";

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let gitCommit = "Commits your changes to git and you can add a message to describe what was changed";
let gitCommitCode = "git commit -m";


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let gitPush = "This step is what actually pushes your project/file that you are working on to GitHub";
let gitPushCode = "git push";
console.log(gitPush);
console.log(gitPushCode);