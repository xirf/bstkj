---
title: Konfigurasi Remote Access SSH
group: Debian
updatedDate: 2024-11-22T22:46:00.000Z
---
Dengan menggunakan Remote Access, kita bisa meremote komputer dari jauh tanpa harus berada di depan komputer. SSH (Secure Shell) memiliki tingkat keamanan yang jauh lebih tinggi daripada telnet.

Berikut cara konfigurasi SSH di Debian:

1. **Konfigurasi IP Address**  
Pastikan komputer server sudah dikonfigurasi dengan IP Address untuk keperluan pengujian nantinya.

2. **Install Paket OpenSSH-Server**  
Jalankan perintah berikut untuk menginstall paket aplikasi `openssh-server`.

```bash
root@sakutkj:/# apt-get install openssh-server
```

3. **Pengujian**  
Pengujian bisa dilakukan melalui komputer kita sendiri atau menggunakan client seperti cmd di Windows atau aplikasi Putty. Berikut adalah contoh menggunakan komputer Debian kita sendiri.

```bash
root@sakutkj:/# ssh 192.168.1.1 -l siswa2
siswa2@192.168.1.1's password: 
Linux sakutkj 4.19.0-11-amd64 #1 SMP Debian 4.19.146-1 (2020-09-17) x86_64
The programs included with the Debian GNU/Linux system are free software; the exact distribution terms for each program are described in the individual files in /usr/share/doc/*/copyright.
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.
Last login: Thu May 27 23:50:18 2021 from 192.168.1.2
siswa2@sakutkj:~$
```

Perintah di atas digunakan untuk meremote server dengan alamat IP Address `192.168.1.1` menggunakan opsi `-l` untuk user yang digunakan yaitu `siswa2`.
