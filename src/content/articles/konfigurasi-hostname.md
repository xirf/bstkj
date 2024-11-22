---
title: Konfigurasi Hostname
group: Debian
updatedDate: 2024-11-22T22:43:00.000Z
---
Hostname merupakan nama sebuah perangkat dalam sebuah jaringan yang digunakan untuk membedakan perangkat satu dengan yang lainnya. Hostname dibuat ketika kita melakukan instalasi sistem operasi. Jika kita ingin merubah hostname, maka kita bisa mengkonfigurasinya. Berikut cara konfigurasi hostname pada Debian.

### 1. Gunakan Akses User root
Sebelum melakukan konfigurasi, pastikan telah login dengan menggunakan user root.

### 2. Konfigurasi Hostname
```bash
root@bukusakutkj:~# nano /etc/hostname
bukusakutkj
```
Perintah di atas akan membuka file `hostname` yang berisi kata `bukusakutkj`. Kita bisa merubah hostname dengan cara menghapus kata `bukusakutkj` dan menggantinya dengan nama hostname baru kita, misalnya `sakutkj`.
```bash
sakutkj
```

Lalu lanjut konfigurasi file `hosts` dengan perintah berikut:
```bash
root@bukusakutkj:~# nano /etc/hosts
127.0.0.1 localhost
127.0.1.1 bukusakutkj.bukusakutkj.me.id bukusakutkj

# The following lines are desirable for IPv6 capable hosts
::1 localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

Pada tampilan di atas, ubah pada baris kedua saja. Hasilnya seperti berikut ini:
```bash
127.0.0.1 localhost
127.0.1.1 sakutkj.sakutkj.me.id sakutkj
```

### 3. Reboot
Restart komputer Anda untuk melihat hasil konfigurasi hostname.
