Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 80, host: 8000
  config.vm.network "forwarded_port", guest: 3000, host: 3333
  config.vm.network "private_network", ip: "10.10.10.10"
  config.vm.synced_folder "www", "/usr/share/nginx/html", type: "nfs"
  config.vm.synced_folder "src", "/home/vagrant/src", type: "nfs"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "4096"
  end
  config.vm.provision "shell", path: "install.sh", privileged: false
end
