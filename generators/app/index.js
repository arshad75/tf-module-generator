'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.log(
      yosay('Welcome to the PSssss tf-module generator v1.0.0!')
    );

    this.answers = await this.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter name for the new terraform module : ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter description for the new terraform module : ',
      }
    ]);
  }

  writing() {
    this.destinationRoot(this.answers.name);

    this.fs.copyTpl(
      `${this.templatePath()}/.!(gitignorefile|gitattributesfile|pre-commit-config|terraform-version)*`,
      this.destinationRoot(),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('.gitignorefile'),
      this.destinationPath(`.gitignore`), {
        testFramework: this.answers.testFramework
      }
    );

    this.fs.copyTpl(
      this.templatePath('.gitattributesfile'),
      this.destinationPath(`.gitattributes`), {
        testFramework: this.answers.testFramework
      }
    );

    this.fs.copyTpl(
      this.templatePath('.pre-commit-config.yaml'),
      this.destinationPath(`.pre-commit-config.yaml`), {
        testFramework: this.answers.testFramework
      }
    );

    this.fs.copyTpl(
      this.templatePath('.terraform-version'),
      this.destinationPath(`.terraform-version`), {
      }
    );

    this.fs.copyTpl(
      `${this.templatePath()}/**/*`,
      this.destinationRoot()
    );

    this.fs.copyTpl(
      `${this.templatePath()}/.devcontainer/`,
      `${this.destinationRoot()}/.devcontainer`
    );

    this.fs.copyTpl(
      `${this.templatePath()}/test/terratest/*.go`,
      `${this.destinationRoot()}/test`
    );

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'), {
        name: this.answers.name,
        description: this.answers.description,
        author: this.answers.author,
        testFramework: this.answers.testFramework
      }
    );
  }
};