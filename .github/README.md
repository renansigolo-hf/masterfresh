# GitHub Actions

All the HelloFresh documentation related to GitHub Actions can be found at the [HelloDev Docs](https://hellodev.hellofresh.io/project/github-actions/docs)

## .workflows

In order to use the GitHub Actions inside the workflows folder you need to make sure that:

1. Your repo has access to GH Actions by following the instructions at [HelloDev - GitHub Actions](https://hellodev.hellofresh.io/project/github-actions/docs/user/opt-in/)
1. Copy the desired actions to the root of your project. It must follow the same folder structure \
   (E.g.: `<your_root_folder>/.github/workflows/<any_github_action>.yml`)
1. Replace any specific paths or secrets with your application defaults. Try searching for `<your_repo_bucket_name>` as an example

LalaLand
