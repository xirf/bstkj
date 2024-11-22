---
title: Konfigurasi FTP Server
group: Debian
updatedDate: 2024-11-22T22:59:00.000Z
---
Berikut adalah konversi kalimat yang Anda berikan ke format Markdown:

### File Transfer Protocol (FTP)
FTP adalah sebuah protokol yang digunakan untuk transfer file atau data melalui jaringan. Protokol ini seringkali digunakan untuk melakukan transfer file-file web ke web server.

Berikut cara konfigurasi FTP Server pada Debian.

### 1. Install Paket proftpd
```bash
root@sakutkj:~# apt-get install proftpd
```
Kita bisa langsung melakukan pengujian setelah menginstall paket di atas. Berikut pengujian pada client menggunakan Software Filezilla.

![ftp1](https://box.andka.my.id/ftp1.png)

Pada gambar di atas, bagian host Anda bisa mengisikannya dengan IP Address atau domain dari server diikuti dengan username dan password serta port dari FTP yaitu port 21.

### 2. Konfigurasi Direktori FTP
Pada contoh di atas sebelumnya, ketika user melakukan login maka otomatis akan diarahkan ke direktori user tersebut.

Pada contoh selanjutnya kita akan coba mengkonfigurasi agar ketika user login maka akan diarahkan ke direktori yang kita tentukan sebagai contoh direktori `/var/www/web` atau direktori web server yang kita buat pada materi sebelumnya.

```bash
root@sakutkj:~# nano /etc/proftpd/proftpd.conf
```

Lalu tambahkan konfigurasi berikut ini pada bagian paling bawah.

```bash
# Include other custom configuration files
Include /etc/proftpd/conf.d/
<Anonymous /var/www/web>
  User siswa2
</Anonymous>
```

Pada bagian `User siswa2`, kalian bisa menyesuaikan user mana yang akan diarahkan ke direktori `/var/www/web` ketika login menggunakan FTP.

### 3. Pengujian
Berikut pengujian pada client menggunakan Software Filezilla.

![ftp2](https://box.andka.my.id/ftp2.png)

Perhatikan pada garis merah gambar di atas. Disitu terdapat file `index.html` sama seperti yang ada pada direktori `/var/www/web`. Jadi, konfigurasi di atas telah berhasil.

Berikut adalah isi dari direktori `/var/www/web` pada server Debian.

```bash
root@sakutkj:~# ls /var/www/web
index.html
```
