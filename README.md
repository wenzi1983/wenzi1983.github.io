# wenzi1983.github.io

## Linux Server Deployment

OS:CentOS 7.3 64bit

1.安装图形用户接口
yum groupinstall "X Window System"

2.安装GNOME
yum groupinstall "GNOME Desktop"
启动:startx

3.安装nodejs
wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.gz
tar -zxvf node-v8.9.4-linux-x64.tar.gz

forever start app

###Ftp服务器安装
yum install -y vsftpd
systemctl start vsftpd.service #启动
systemctl enable vsftpd.service #设置vsftpd开机启动

/usr/sbin/adduser -d /用户目录 -g ftp -s /sbin/nologin 用户名
passwd 用户名

vi /etc/vsftpd/vsftpd.conf
新增如下
allow_writeable_chroot=YES
pasv_min_port=2001 　　　　　　　　　 //设置被动模式的端口范围，最小端口号~最大端口号
pasv_max_port=2100

修改如下
chown_uploads=YES
chown_username=用户名

###Nginx服务配置
vi /etc/nginx/nginx.conf
注释掉server{}中的root此行
写入
location / {
  proxy_pass http://127.0.0.1:3000;
}
重启service nginx restart