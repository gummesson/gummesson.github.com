# Gems
require 'rake'

# Default Git message
GITMSG = "New blog post."

# rake deploy
# rake deploy["Commit message"]
desc "Deploy the site to it's remote git repository"
task :deploy, :message do |t, args|
  message = args[:message]

  if message.nil?
    system "git add . && git commit -m \"#{GITMSG}\" && git push origin master"
    puts "The site was deployed."
  else
    system "git add . && git commit -m \"#{message}\" && git push origin master"
    puts "The site was deployed."
  end
end
