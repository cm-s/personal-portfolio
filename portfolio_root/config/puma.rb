# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
#
threads_count = ENV.fetch("RAILS_MAX_THREADS") { 2 }
threads threads_count, threads_count
port = ENV.fetch("PORT") { 3000 }

# Specifies the `environment` that Puma will run in.
environment ENV.fetch("RAILS_ENV") { "development" }

# If using threads and workers together the concurrency of the application
# would be max `threads` * `workers`.

# Make development more realistic. Moderation makes a sound foundation.
workers ENV.fetch("WEB_CONCURRENCY") { 2 }
preload_app!

# Closing possible forked connections due to memory leakage threats (ref: Default puma.rb file)

before_fork do
	ActiveRecord::Base.connection_pool.disconnect! if defined?(ActiveRecord)
end

on_worker_boot do
	if defined?(ActiveRecord)

		ActiveRecord::Base.establish_connection
	end
end

# Don't allow puma to be restarted by `rails restart` command.
# plugin :tmp_restart
