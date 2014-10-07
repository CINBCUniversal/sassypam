# SassyPAM

SassyPam is our distributed style toolkit for different apps. Currently you can use SassyPAM using Ruby or Bower. More
integrations are coming out soon!

![SassyPAM](/vendor/assets/images/sassy_pam.png)

> <img align="right" height="300" src="http://bower.io/img/bower-logo.png">

## Ruby Installation

Add this line to your application's Gemfile:

    gem 'sassypam', git: 'git@github.com:CINBCUniversal/sassypam.git'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install sassypam

## Bower Installation

You must have Bower installed first:

    $ npm install -g bower

Using sassypam as a Bower package is still being tested. It is compatible with node-sass 0.8.3+:

    $ bower install sassypam --save

## Usage

Once you've installed the SassyPAM toolkit, use it by calling the main file name:

    @import "sassypam"

## Contributing

1. Create your feature branch (`git checkout -b my-new-feature`)
2. Commit your changes (`git commit -am 'Add some feature'`)
3. Push to the branch (`git push origin my-new-feature`)
4. Create new Pull Request
