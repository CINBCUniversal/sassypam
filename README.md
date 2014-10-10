# SassyPAM

<img align="right" height="200" src="/vendor/assets/images/sassy_pam.png">

SassyPam is our distributed style toolkit for different apps. Currently you can use SassyPAM using Ruby or Bower. More
integrations are coming out soon!

SassyPAM is maintained by the PAM Design Team. Please contact them if you have any questions.

<br>


## Ruby Installation

Add this line to your application's Gemfile:

    gem 'sassypam', git: 'git@github.com:CINBCUniversal/sassypam.git'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install sassypam

## Node.js Installation

You must have Bower installed first:

    $ npm install -g bower

Using sassypam as a Bower package is still being tested. It is compatible with node-sass 0.8.3+:

    $ bower install sassypam

## Usage

Once you've installed the SassyPAM toolkit, use it by calling the main file in your application.sass/scss:

    @import "sassypam"

## Contributing

1. Create your feature branch (`git checkout -b my-new-feature`)
2. Commit your changes (`git commit -am 'Add some feature'`)
3. Push to the branch (`git push origin my-new-feature`)
4. Create new Pull Request

## Tagging

In order to allow Bower to install pacakges, we must follow semver tagging rules when pushing updates
to the toolkit. To see a list of tags:

    $ git tag

To create a new tag, it might look something like this:

    $ git tag -a 0.0.6 -m 'updating to version 0.0.6: adding dropdowns'
