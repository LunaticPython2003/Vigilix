#! /bin/bash

# Turn off Bluetooth
rmmod --force btusb

# Ability to install apps
chmod 0000 $(whereis apt)

# Turn off the USB interfaces
echo 'ACTION=="add", SUBSYSTEMS=="usb", RUN+="/bin/sh -c '\''echo 0 >/sys$DEVPATH/authorized'\''"' >> /etc/udev/rules.d/99-usb-restrict.rules
udevadm control --reload-rules

gsettings set org.gnome.system.location enabled false ## Disables location