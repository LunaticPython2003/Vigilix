modprobe btusb # Renables bluetooth
gsettings set org.gnome.system.location enabled true # Enables location

# Re enable USB
rm -rf /etc/udev/rules.d/99-usb-restrict.rules
echo 'ACTION=="add", SUBSYSTEMS=="usb", RUN+="/bin/sh -c '\''echo 1 >/sys$DEVPATH/authorized'\''"' >> /etc/udev/rules.d/99-usb-restrict.rules
udevadm control --reload-rules

service NetworkManager start