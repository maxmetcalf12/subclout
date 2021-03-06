source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

## DEFAULT
gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.4.4', require: false
gem 'image_processing', '~> 1.2'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'rails', '~> 6.1.4'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'

## ADDED
gem 'aws-sdk-s3', require: false
gem 'bundler-audit'
gem 'graphql'
gem 'pundit'
gem 'redis', '~> 4.0'
gem 'sidekiq'


group :development, :test do
  ## DEFAULT
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  ## ADDED
  gem 'brakeman'
  gem 'knapsack'
  gem 'rspec-rails'
end

group :development do
  ## DEFAULT
  gem 'web-console', '>= 4.1.0'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  gem 'spring'

  ## ADDED
  gem 'annotate', require: false
  gem 'debase', '>= 0.2.5.beta2'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'graphiql-rails'
  gem 'rubocop', require: false
  gem 'ruby-debug-ide'
end

group :test do
  ## DEFAULT
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  gem 'webdrivers'

  ## ADDED
  gem 'database_cleaner'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
