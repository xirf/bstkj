---
title: Konfigurasi DNS Server
group: Debian
updatedDate: 2024-11-22T22:49:00.000Z
---
Domain Name System (DNS) adalah sebuah protokol jaringan komputer yang berfungsi untuk melakukan konversi IP Address menjadi domain atau sebaliknya.

Domain yang akan digunakan dalam contoh ini adalah sakutkj.me.id.

Berikut cara konfigurasi DNS Server pada Debian:

1. **Install Paket bind9**  
Jalankan perintah berikut untuk menginstall paket `bind9`:

```bash
root@sakutkj:~# apt-get install bind9
```

2. **Konfigurasi Domain Zone**  
Arahkan ke direktori `/etc/bind` dan buka file `named.conf` dengan perintah berikut:

```bash
root@sakutkj:/etc/bind# nano named.conf
```

Penjelasan konfigurasi:

- **zone 'sakutkj.me.id'** = membuat domain dengan nama `sakutkj.me.id`
- **type master** = domain yang dibuat adalah primary DNS server
- **file '/etc/bind/db.sakutkj'** = lokasi penyimpanan file konfigurasi domain forward (konversi domain menjadi IP Address)
- **zone '192.in-addr.arpa'** = mendeskripsikan domain reverse yang kita buat
- **file '/etc/bind/db.192'** = lokasi penyimpanan file konfigurasi domain reverse (konversi IP Address menjadi Domain Name)

3. **Konfigurasi Domain Forward**  
Buat file `db.sakutkj` dengan meng-copy `db.local`, lalu modifikasi file `db.sakutkj`:

```bash
root@sakutkj:/etc/bind# cp db.local db.sakutkj
root@sakutkj:/etc/bind# nano db.sakutkj
```

Modifikasi file `db.sakutkj` sesuai kebutuhan.

4. **Konfigurasi Domain Reverse**  
Buat file `db.192` dengan meng-copy `db.127`, lalu modifikasi file `db.192`:

```bash
root@sakutkj:/etc/bind# cp db.127 db.192
root@sakutkj:/etc/bind# nano db.192
```

Modifikasi file `db.192` sesuai kebutuhan. Perhatikan bahwa bagian `(1.1.168)` merupakan kebalikan dari tiga oktet terakhir dari IP Address server.

5. **Restart Service DNS**  
Restart service `bind9` untuk menerapkan konfigurasi:

```bash
root@sakutkj:/etc/bind# service bind9 restart
```

6. **Pengujian**  
Sebelum melakukan pengujian, pastikan resolver sudah diarahkan ke IP Address DNS Server:

```bash
root@sakutkj:/etc/bind# nano /etc/resolv.conf
nameserver 192.168.1.1
```

Pengujian bisa dilakukan menggunakan perintah `nslookup`:

```bash
root@sakutkj:/etc/bind# nslookup sakutkj.me.id
Server: 192.168.1.1
Address: 192.168.1.1#53

Name: sakutkj.me.id
Address: 192.168.1.1
```

Jika `nslookup` tidak bisa digunakan, install terlebih dahulu paket `dnsutils`:

```bash
root@sakutkj:/etc/bind# apt-get install dnsutils
```

Alternatif lainnya, Anda bisa menggunakan perintah `ping` ke domain untuk melakukan pengujian:

```bash
root@sakutkj:/etc/bind# ping bstkj.andka.my.id
```
