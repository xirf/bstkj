---
title: Konfigurasi NTP Server
group: Debian
updatedDate: 2024-11-22T23:03:00.000Z
---
Network Time Protocol (NTP) adalah protokol yang digunakan untuk melakukan sinkronisasi waktu antar komputer dalam suatu jaringan.

Dapat disimpulkan bahwa NTP Server adalah server yang bertugas untuk menyamakan waktu seluruh perangkat dalam jaringan, seperti komputer, router, access point, CCTV, dan perangkat lainnya. Hal ini penting untuk menghindari perbedaan waktu antar perangkat di dalam jaringan. Berikut adalah cara konfigurasi NTP Server pada Debian.

### 1. Konfigurasi Waktu
Sebelum melakukan sinkronisasi dengan NTP Server, pastikan waktu pada komputer kita sudah teratur. Berikut adalah perintah untuk melihat waktu pada Debian:

```bash
root@sakutkj:/# date
Sat 29 May 2021 04:18:34 PM WIB
```

Pastikan waktu dan tanggal sudah benar. Jika waktu belum benar, Anda dapat mengaturnya dengan perintah berikut:

**Mengatur Tanggal:**

```bash
root@sakutkj:/# date --set 2021-05-29
Sat 29 May 2021 12:00:00 AM WIB
```

**Mengatur Jam:**

```bash
root@sakutkj:/# date --set 16:21:00
Sat 29 May 2021 04:21:00 PM WIB
```

### 2. Install Paket ntp
Untuk menginstall paket NTP, jalankan perintah berikut:

```bash
root@sakutkj:/# apt-get install ntp
```

### 3. Konfigurasi NTP Server
Setelah menginstall paket, lakukan konfigurasi pada `/etc/ntp.conf` seperti berikut:

```bash
root@sakutkj:/# nano /etc/ntp.conf
```

Pada konfigurasi ini, beri tanda (`#`) atau comment pada baris `pool 0-3` dan tambahkan baris perintah baru seperti berikut:

```bash
#pool: {'<'}http://www.pool.ntp.org/join.html{'> '}
#pool 0.debian.pool.ntp.org iburst
#pool 1.debian.pool.ntp.org iburst
#pool 2.debian.pool.ntp.org iburst
#pool 3.debian.pool.ntp.org iburst
server 127.127.1.0
fudge 127.127.1.0 stratum 1
# Clients from this (example!) subnet have unlimited access, but only if cryptographically authenticated.
#restrict 192.168.123.0 mask 255.255.255.0 notrust
restrict 192.168.1.0 mask 255.255.255.0 nomodify notrap
```

### 4. Restart Service NTP
Setelah konfigurasi, restart layanan NTP untuk menerapkan perubahan:

```bash
root@sakutkj:/# service ntp restart
```

### 5. Pengujian
Cek konfigurasi menggunakan perintah berikut:

![ntp1](https://box.andka.my.id/ntp.png)

Jika tampil seperti gambar di atas, konfigurasi telah berhasil.

Lakukan pengujian pada client, contohnya dengan menggunakan client Windows.

![ntp2](https://box.andka.my.id/ntpcek.png)
