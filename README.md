# @fc/navbar

[CI Pipelines](https://app.circleci.com/pipelines/github/fitch-connect-microfrontends-workshop/navbar)

## Creating a new microfrontend

Steps to recreate this repo.

1. Sign up for Github.
1. Provide Github username to Joel (or whoever is granting organization access) to become an org admin
1. Add your new microfrontend to [this HTML file](https://github.com/fitch-connect-microfrontends-workshop/root-config/blob/master/src/index.ejs).
1. Add a new nav link to your microfrontend to [this file](https://github.com/fitch-connect-microfrontends-workshop/navbar/blob/master/src/App.vue).
1. Create a new repo by going to https://github.com/fitch-connect-microfrontends-workshop and clicking on "New". Add a default readme and license. Your gitignore choice doesn't matter.
1. Clone the repo.
1. Change directories to be in the newly created repo's folder.
1. `npm init single-spa`. Choose current directory, single-spa application, Vue, `npm`, default Vue preset.
1. Copy the `vue.config.js` file from this repo into your repo. [Link](https://github.com/fitch-connect-microfrontends-workshop/navbar/blob/master/vue.config.js)
2. Go to the `set-public-path.js` file in the src directory and add the `@fc/` prefix to your app name.
3. Run `npm run serve`
4. In a browser, go to https://localhost:8080/js/app.js. You will receive an SSL warning. Click on Advanced -> Proceed Anyway. You should now see the javascript code. You can close the browser tab.
5. Go to https://fc.microfrontends.app
6. Open browser console. Run `localStorage.setItem('devtools', true);`. Refresh the page.
7. Click on the yellowish rectangle at the bottom right
8. Add a new module called `@fc/<your-microfrontend-repo-name>`. The URL is https://localhost:8080/js/app.js
9. Refresh the page. Click on the nav link to go to your microfrontend. You should now see the hello world vue page!
10. Implement a component or two
11. Copy `.circleci/config.yml` file into your project. [Link](https://github.com/fitch-connect-microfrontends-workshop/navbar/blob/master/.circleci/config.yml)
12. Git commit and push
13. Go to https://circleci.com/gh/fitch-connect-microfrontends-workshop/workflows and find the CI pipeline for your project. Click on the top workflow to see whether deployment succeeds. You'll need to "Login with github"
14. After deployment succeeds, go to https://fc.microfrontends.app/fitch.importmap and check that your microfrontend exists in the import map. Click on the URL for the javascript file and verify that it is downloadable.
15. Go to https://fc.microfrontends.app and click on the yellow / pink rectangle at the bottom right. Clear all overrides and refresh the page. Verify that your app is now working as a deployed app!!

Bonus Round:

1. Add vue-router sub routes to your application.
1. Perform a [cross microfrontend import](https://single-spa.js.org/docs/recommended-setup#functions-components-logic-and-environment-variables) to import/export components between two microfrontends. To do this, mark the other microfrontend as a [webpack external](https://webpack.js.org/configuration/externals/#root). You can do this inside of the `configureWebpack` section of your `vue.config.js`
1. Upgrade or add a shared dependency to https://github.com/fitch-connect-microfrontends-workshop/shared-dependencies/
