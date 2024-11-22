---
title: Konfigurasi Remote Access Telnet
group: Debian
updatedDate: 2024-11-22T22:47:00.000Z
---
Dengan menggunakan Remote, kita bisa meremote komputer dari jauh tanpa harus berada di depan komputer.

Berikut cara konfigurasi Telnet di Debian:

1. **Konfigurasi IP Address**  
Pastikan komputer server sudah dikonfigurasi dengan IP Address untuk keperluan pengujian nantinya.

2. **Install Paket Telnetd**  
Jalankan perintah berikut untuk menginstall paket aplikasi `telnetd`.

```bash
root@sakutkj:/# apt-get install telnetd
```

3. **Pengujian**  
Pengujian bisa dilakukan melalui komputer kita sendiri atau menggunakan client seperti cmd di Windows atau aplikasi Putty. Berikut adalah contoh menggunakan server Debian kita sendiri.

```bash
root@sakutkj:/# telnet 192.168.1.1
Trying 192.168.1.1... 
Connected to 192.168.1.1. 
Escape character is '^]'.
Debian GNU/Linux 10
sakutkj login: siswa2
Password: (tidak terlihat)
Last login: Sat May 29 19:26:33 WIB 2021 from 192.168.1.3 on pts/0
Linux sakutkj 4.19.0-11-amd #1 SMP Debian 4.19.146-1 (2020-09-17) x86_64
The programs included with the Debian GNU/Linux system are free software; the exact distribution terms for each program are described in the individual files in /usr/share/doc/*/copyright.
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.
siswa2@sakutkj:~$
```

Perintah di atas digunakan untuk meremote server menggunakan telnet dengan alamat IP Address `192.168.1.1`. Kemudian login menggunakan user `siswa2`.
