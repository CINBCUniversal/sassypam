# SassyPAM [![Gem Version](https://badge.fury.io/rb/sassypam.svg)](http://badge.fury.io/rb/sassypam) [![Bower Version](https://badge.fury.io/bo/sassypam.svg)](http://badge.fury.io/bo/sassypam)

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

## Node Installation

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

### Setting up development dependencies

    $ rvm install ruby-2.2.0
    $ bundle
    $ npm install
    $ npm install -g grunt grunt-cli

### Updating Styleguide

    $ grunt sass # Only necessary if you change CSS rules
    $ hologram # Regenerates styleguide when you change hologram comment docs
    $ open docs/index.html

### Updating Bower Registry

Bower requires a semver tagging rules (visit http://bower.io/), when pushing an update. It'll look something like this:

#### commit your changes

    $ git commit -am "Made some awesome new changes, now its even awesomer"

#### tag the commit

    $ git tag -a v 0.0.5 -m "Release version 0.0.5"
    $ bower version patch -m "Made some awesome new changes, now its even awesomer"

#### push to GitHub

    $ git push origin master --tags

### Updating Ruby Gem

Gem versions are automatically tracked when running bundle update within a ruby app environment. But we'll from time to time
change the version number when making large updates. 

    $ cd ./lib/sassypam
    $ mvim version.rb

Then change it to the correct version