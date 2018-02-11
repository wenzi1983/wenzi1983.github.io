# wenzi1983.github.io

## Linux Server Deployment

OS:CentOS 7.4 64bit

1.安装图形用户接口
yum groupinstall "X Window System"

2.安装GNOME
yum groupinstall "GNOME Desktop"
启动:startx

3.安装nodejs
wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.gz
tar -zxvf node-v8.9.4-linux-x64.tar.gz

###Ftp服务器安装
yum install -y vsftpd
systemctl start vsftpd.service #启动
systemctl enable vsftpd.service #设置vsftpd开机启动