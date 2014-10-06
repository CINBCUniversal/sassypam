module Sassypam
  module Rails
    class Engine < ::Rails::Engine
      initializer "sassypam.assets.precompile" do |app|
        %w(stylesheets javascripts fonts images).each do |sub|
          app.config.assets.paths << root.join('assets', sub)
        end
      end
    end
  end
end
