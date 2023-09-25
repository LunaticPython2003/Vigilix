#! /bin/bash

# Ensure superuser access
sudo su

# Turn off Bluetooth
rmmod --force btusb
# To enable - modprobe btusb

# Ability to install apps
chmod 0000 $(whereis apt)
#To re-enable -> chmod 7777 $(whereis apt)


# Turn off the USB interfaces
echo 'ACTION=="add", SUBSYSTEMS=="usb", RUN+="/bin/sh -c '\''echo 0 >/sys$DEVPATH/authorized'\''"' >> /etc/udev/rules.d/99-usb-restrict.rules
udevadm control --reload-rules

# Deactivate SSH
systemctl stop ssh