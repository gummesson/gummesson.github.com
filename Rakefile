# Requirements
require 'rake'  # For the rake tasks

# rake deploy["Commit message"]
desc "Deploy the site to it's remote git repository"
task :deploy, :message do |t, args|
  message = args[:message]

  if message.nil?
    system "git add ."
    system "git commit -m \"New blog post.\""
    system "git push origin master"
    puts "The site was deployed."

  else
    system "git add ."
    system "git commit -m \"#{message}\""
    system "git push origin master"
    puts "The site was deployed."
  end
end
