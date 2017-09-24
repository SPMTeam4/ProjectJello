Requirements:

* Git
* Vagrant 2.0.x
* VirtualBox 5.1.x

# Get Started:

* Install [Git](https://git-scm.com/).
* Clone this repository:
`git clone https://github.com/SPMTeam4/ProjectJello --depth=1`
* Install [VirtualBox 5.1.x](https://www.virtualbox.org/).
* Install [Vagrant 2.0.x](https://www.vagrantup.com/).

# Basic Usage:

* `vagrant up` :  When you are ready to spin up the virtual machine.
* `vagrant halt` : When you are ready to shut down the virtual machine.
* `vagrant ssh` : Allows you to SSH into the virutal machine.
* `vagrant provision` : can be used to bring an existing virtual machine to a ready
state without building from scratch. Useful if you accidentally break the machine,
or if you change some configuration.
* `vagrant destroy` : can be used to completely destroy the virtual machine, if necessary.

# Initial Environment

* The project will have been set up and running on `localhost:8080`.

# Making Changes to the Apache Configuration

The Apache VirtualHost configuration can be found in
`server/provision/roles/apache-server/files`. If you customize it,
make sure to run `vagrant provision`, which will copy it
into the virtual machine and restart Apache.
