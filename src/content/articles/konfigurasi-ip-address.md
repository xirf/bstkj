---
title: Konfigurasi IP Address
group: Debian
updatedDate: 2024-11-22T22:42:00.000Z
---
Dalam suatu jaringan, agar suatu komputer dapat terkoneksi ke internet, maka harus memiliki alamat IP Address.

Berikut ini adalah cara konfigurasi IP Address pada Debian.

### 1. Gunakan User root
Sebelum melakukan konfigurasi IP Address, pastikan kalian telah login menggunakan user root.
```bash
siswa2@bstkj:/$ su
Password: 
root@bstkj:/#
```

### 2. Cek IP Address
Gunakan perintah `ip addr` untuk melihat IP Address dan network interface yang terpasang pada komputer kita.

![IP Address](https://box.andka.my.id/cek-ip-address-1.png)

Pada gambar di atas, setelah menggunakan perintah `ip addr`, muncul network interface dan IP address-nya. Terlihat pada poin No. 2 dengan nama network interface-nya `enp0s3` (perlu diperhatikan bahwa penamaan network interface biasanya berbeda-beda, contohnya seperti `eth0`, `eth1`, dan sebagainya). Dan terlihat pada interface `enp0s3` belum memiliki IP Address.

### 3. Konfigurasi IP Static
```bash
root@bstkj:~# nano /etc/network/interfaces
```
Perintah di atas akan membuka file konfigurasi interfaces dan IP Address seperti tampilan berikut ini:
```bash
# This file describes the network interfaces available on 
# your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
```

Pada tampilan di atas, bagian interface `enp0s3` terkonfigurasi sebagai DHCP client.

Ubahlah pada bagian interface yang akan kita konfigurasi, contoh di sini interface `enp0s3` untuk konfigurasi IP secara static atau manual.
```bash
# The primary network interface
auto enp0s3
iface enp0s3 inet static
    address 192.168.1.1/24
```
Pada tampilan di atas, kita memberikan komputer kita dengan IP Address `192.168.1.1` dengan netmask `255.255.255.0` atau `/24`.

### 4. Restart Service Network
Agar hasil konfigurasi IP berjalan, perlu di-restart terlebih dahulu.
```bash
root@bstkj:~# service networking restart
```

![IP Address Konfigurasi](https://box.andka.my.id/bstkjcekip.png)

Bisa dilihat pada gambar di atas bahwa konfigurasi IP Address telah berhasil. Anda bisa melakukan pengujian dengan menggunakan perintah `ping`.
