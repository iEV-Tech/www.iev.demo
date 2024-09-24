### install nginx + certbot (ubuntu)
```Terminal
sudo apt install nginx certbot python3-certbot-nginx -y
```

### clone source build
```Terminal
cd /var
git clone https://github.com/iEV-Tech/www.iev.demo.git www.iev.demo
```

### pull update
```Terminal
cd /var/www.iev.demo
git pull
```

### copy config to nginx
```Terminal
cp /var/www.iev.demo/nginx/ievapp.batdau.click.conf /etc/nginx/conf.d/
```

### create ssl R3
```Terminal
sudo certbot --nginx -d ievapp.batdau.click
```