#! /bin/bash

# Ensure superuser access
sudo su

# Turn off the USB interfaces
# echo "blacklist uas" >> /etc/modprobe.d/blacklist.conf
# echo "blacklist usb-storage" >> /etc/modprobe.d/blacklist.conf

# Turn off Bluetooth
rmmod --force btusb
# To enable - modprobe btusb

# Ability to install apps
chmod 0000 $(whereis apt)
#To re-enable -> chmod 7777 $(whereis apt)

