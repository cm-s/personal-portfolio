# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

# Add font files to the asset paths. Thank you d3vkit
Dir.glob("#{Rails.root}/vendor/assets/fonts/**/").each do |path|
  Rails.application.config.assets.paths << path
end

Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)$/

Rails.application.config.assets.configure do |env|
  env.context_class.class_eval do
    include ActionView::Helpers
    include Rails.application.routes.url_helpers
  end
end