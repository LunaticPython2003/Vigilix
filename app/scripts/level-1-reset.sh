modprobe btusb # Renables bluetooth
chmod 7777 $(whereis apt) # Re-enables app installation
systemctl start ssh # Restarts the ssh
gsettings set org.gnome.system.location enabled true # Enables location