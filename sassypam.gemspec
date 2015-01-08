# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'sassypam/version'

Gem::Specification.new do |spec|
  spec.name          = "sassypam"
  spec.version       = Sassypam::VERSION
  spec.authors       = ["Abhi Sharma"]
  spec.email         = ["abhi.sharma@nbcuni.com"]
  spec.summary       = %q{Toolkit for PAM styles}
  spec.description   = %q{PAM is very very Sassy}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.5"
  spec.add_development_dependency "rake"
  spec.add_development_dependency 'pry'
  spec.add_development_dependency 'hologram'
  spec.add_development_dependency 'sass'
end
