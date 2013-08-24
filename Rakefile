# == Dependencies ==============================================================

require 'rake'

# == Configuration =============================================================

# Default Git message
GITMSG = "New blog post"

# == Helpers ===================================================================

# Execute a system command
def execute(command)
  system "#{command}"
end

# == Tasks =====================================================================

# rake deploy
# rake deploy["Commit message"]
desc "Deploy the site to it's remote git repository"
task :deploy, :message do |t, args|
  message = args[:message]
  if message.nil? or message.empty?
    execute("git add .")
    execute("git commit -m \"#{GITMSG}\".")
    execute("git push origin master")
    puts "The site was deployed."
  else
    execute("git add .")
    execute("git commit -m \"#{message}\".")
    execute("git push origin master")
    puts "The site was deployed."
  end
end
