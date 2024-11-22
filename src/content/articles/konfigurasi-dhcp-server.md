---
title: Konfigurasi DHCP Server
group: Debian
updatedDate: 2024-11-22T23:11:00.000Z
---
Dynamic Host Configuration Protocol (DHCP) adalah protokol yang digunakan untuk memberikan IP Address secara dinamis (otomatis) kepada client.

Dengan DHCP, client yang terkoneksi ke server tidak perlu mengatur IP Address secara manual, karena IP Address akan diberikan secara otomatis oleh server.

Berikut adalah cara konfigurasi DHCP Server pada Debian.

### 1. Konfigurasi IP Address
Pastikan komputer server sudah dikonfigurasi dengan IP Address yang sesuai.

### 2. Install Paket isc-dhcp-server
Untuk menginstall paket DHCP Server, jalankan perintah berikut:

```bash
root@sakutkj:/# apt-get install isc-dhcp-server
```

### 3. Konfigurasi DHCP Server
Kita perlu mengedit beberapa konfigurasi pada file `/etc/dhcp/dhcpd.conf` seperti berikut:

```bash
root@sakutkj:~# nano /etc/dhcp/dhcpd.conf
```

Scroll ke bawah dan cari baris perintah seperti berikut:

```bash
# A slightly different configuration for an internal subnet.
#subnet 10.5.5.0 netmask 255.255.255.224 {
# range 10.5.5.26 10.5.5.30;
# option domain-name-servers ns1.internal.example.org;
# option domain-name "internal.example.org";
# option routers 10.5.5.1;
# option broadcast-address 10.5.5.31;
# default-lease-time 600;
# max-lease-time 7200;
#}
```

Lalu edit baris tersebut menjadi seperti contoh berikut ini:

```bash
# A slightly different configuration for an internal subnet.
subnet 192.168.1.0 netmask 255.255.255.0 {
  range 192.168.1.2 192.168.1.100;
  option domain-name-servers 192.168.1.1;
  option domain-name "sakutkj.me.id";
  option routers 192.168.1.1;
  option broadcast-address 192.168.1.255;
  default-lease-time 600;
  max-lease-time 7200;
}
```

**Penjelasan:**
- **subnet & netmask** = Subnet dan Netmask yang dimiliki client
- **range** = Rentang IP yang akan dibagikan ke client
- **option domain-name-servers** = DNS resolver yang dibagikan ke client
- **option domain-name** = Penamaan host lokal
- **option routers** = IP Gateway yang dibagikan ke client
- **option broadcast** = IP Broadcast yang dibagikan ke client
- **default-lease-time** = Lama waktu server meminjamkan IP kepada client
- **max-lease-time** = Waktu maksimal peminjaman IP Address

### 4. Restart Service DHCP
Setelah konfigurasi selesai, restart layanan DHCP dengan perintah berikut:

```bash
root@sakutkj:~# service isc-dhcp-server restart
```

### 5. Pengujian
Berikut adalah contoh pengujian dengan menggunakan client Windows:

![dhcp](https://box.andka.my.id/dhcp.png)
