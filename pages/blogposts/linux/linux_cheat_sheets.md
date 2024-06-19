# Introduction to Linux

This blog provides an overview of essential Linux commands and their usage, based on the "Introduction to Linux" tutorial by Abu Bakor Hayat Arnob from AIM lab,NUIST.

## Contents

1. Connecting to Linux Systems
2. Basic Linux Commands
3. I/O Redirection
4. Navigating the File System
5. File Manipulation Commands
6. Processes and Job Control
7. Text Editors
8. File Permissions
9. Networking Commands
10. Package Management
11. Author

## Connecting to Linux Systems

### Remote Connections

- **SSH (Secure SHell)**: Used for secure remote connections.
  - **Windows**: [MobaXterm](https://mobaxterm.mobatek.net/)
  - **macOS**: Built-in Terminal
  - **Linux**: Built-in Terminal

  ```bash
  ssh username@hostname
  ```

- **Remote Graphics**: X-Windowing (X, X-Win)
  - **macOS**: [XQuartz](https://www.xquartz.org/)
  - **Windows**: Included with MobaXterm

- **Data Transfer**: Secure File Transfer Protocol (SFTP)
  - **macOS**: [Cyberduck](https://cyberduck.io)
  - **Cross-platform**: [Filezilla](https://filezilla-project.org/)

## Basic Linux Commands

- **whoami**: Display the current user.
  ```bash
  whoami
  ```

- **hostname**: Display the name of the current host.
  ```bash
  hostname
  ```

- **echo**: Print text or environment variables.
  ```bash
  echo "Hello, world"
  echo $HOME
  echo "my login is $(whoami)"
  ```

- **date**: Display the current date and time.
  ```bash
  date
  ```

- **cal**: Display the calendar.
  ```bash
  cal
  cal -j 3 1999
  ```

### Command History

- **history**: Show command history.
  ```bash
  history
  ```

- Use `!!` to redo the last command.
- Use `!<number>` to repeat a specific command from history.

## I/O Redirection

- **Pipes (|)**: Redirect the output of one command to another.
  ```bash
  w | less
  w | grep 'username'
  w | grep -v 'username'
  ```

- **Output Redirection (>)**: Redirect output to a file.
  ```bash
  command > output.txt
  ```

- **Append Output (>>)**: Append output to a file.
  ```bash
  command >> output.txt
  ```

## Navigating the File System

- **pwd**: Print the current directory.
  ```bash
  pwd
  ```

- **ls**: List directory contents.
  ```bash
  ls
  ls -a
  ls -l
  ```

- **cd**: Change directory.
  ```bash
  cd /path/to/directory
  cd ~  # Change to home directory
  cd .. # Move to parent directory
  ```

## File Manipulation Commands

- **cp**: Copy files or directories.
  ```bash
  cp source_file destination_file
  ```

- **mv**: Move or rename files or directories.
  ```bash
  mv source_file destination_directory
  ```

- **rm**: Remove files or directories.
  ```bash
  rm file
  rm -r directory  # Recursive remove
  ```

- **mkdir**: Create a new directory.
  ```bash
  mkdir new_directory
  mkdir -p parent_directory/new_directory  # Create nested directories
  ```

- **rmdir**: Remove empty directories.
  ```bash
  rmdir empty_directory
  ```

- **touch**: Create an empty file or update the timestamp of an existing file.
  ```bash
  touch newfile.txt
  ```

- **ln**: Create hard and symbolic links.
  ```bash
  ln source_file link_name
  ln -s source_file symbolic_link_name
  ```

## Processes and Job Control

- **ps**: Display currently running processes.
  ```bash
  ps
  ps -ef  # Full listing
  ```

- **top**: Display dynamic real-time information about running processes.
  ```bash
  top
  ```

- **kill**: Terminate processes.
  ```bash
  kill PID  # Replace PID with the process ID
  kill -9 PID  # Force kill
  ```

- **jobs**: List background jobs.
  ```bash
  jobs
  ```

- **bg**: Resume a job in the background.
  ```bash
  bg %jobnumber
  ```

- **fg**: Bring a job to the foreground.
  ```bash
  fg %jobnumber
  ```

- **Ctrl+Z**: Suspend a job.
- **Ctrl+C**: Terminate a job.

## Text Editors

- **nano**: Simple command-line text editor.
  ```bash
  nano filename
  ```

- **vim**: Powerful command-line text editor.
  ```bash
  vim filename
  ```

- **emacs**: Extensible, customizable text editor.
  ```bash
  emacs filename
  ```

## File Permissions

- **chmod**: Change file permissions.
  ```bash
  chmod 755 filename  # rwxr-xr-x
  chmod u+x filename  # Add execute permission for the owner
  ```

- **chown**: Change file owner and group.
  ```bash
  chown owner:group filename
  ```

- **chgrp**: Change group ownership.
  ```bash
  chgrp groupname filename
  ```

- **umask**: Set default file permissions.
  ```bash
  umask 022  # Default permission: rw-r--r--
  ```

## Networking Commands

- **ifconfig**: Display or configure a network interface.
  ```bash
  ifconfig
  ```

- **ping**: Check network connectivity.
  ```bash
  ping hostname
  ```

- **netstat**: Network statistics.
  ```bash
  netstat -a
  ```

- **scp**: Secure copy files between hosts.
  ```bash
  scp source_file username@hostname:/path/to/destination
  ```

## Package Management

- **apt-get**: APT package handling utility (Debian-based).
  ```bash
  sudo apt-get update  # Update package lists
  sudo apt-get upgrade # Upgrade all packages
  sudo apt-get install package_name  # Install a package
  ```

- **yum**: Package manager for RPM-based distributions (e.g., CentOS, Fedora).
  ```bash
  sudo yum check-update  # Check for updates
  sudo yum update  # Update packages
  sudo yum install package_name  # Install a package
  ```

## Author

### Abu Bakor Hayat Arnob

- **Role**: Instructor
- **Affiliation**: Artificial Intelligence in Medichine Lab, Nanjing University of Information Science and Technology
- **Contact Information**: [satcarnob@gmail.com](mailto:satcarnob@gmail.com)

For more information about the course and additional resources, feel free to reach out via email.

## Additional Resources

- [Linux man pages](https://man7.org/linux/man-pages/)

This document provides a basic overview and should be supplemented with hands-on practice and further reading.


