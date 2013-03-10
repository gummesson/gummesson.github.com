# Gems
require 'rake'

# Default Git message
GITMSG = "New blog post."

# rake deploy
# rake deploy["Commit message"]
desc "Deploy the site to it's remote git repository"
task :deploy, :message do |t, args|
  message = args[:message]

  if message.nil? or message.empty?
    system "git commit -am \"#{GITMSG}\" && git push origin master"
    puts "The site was deployed."
  else
    system "git commit -am \"#{message}\" && git push origin master"
    puts "The site was deployed."
  end
end
