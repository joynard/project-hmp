import { Injectable } from '@angular/core';

//reply & komen
export interface Reply {
  user: string;
  text: string;
}
export interface Comment {
  user: string;
  text: string;
  replies: Reply[];
  showReply?: boolean;
}
export interface Berita {
  id: string;
  title: string;
  kategori: string[];
  image: string;
  images: string[];
  content: string;
  rating: number[];
  comments: Comment[];
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private semuaBerita: Berita[] = [
    // === KATEGORI: EKONOMI (5 Berita) ===
    { 
      id: 'eko1', title: 'Inflasi Turun di Kuartal Tiga', kategori: ['economy'], image: 'https://picsum.photos/seed/economy/600/400', 
      images: ['https://picsum.photos/seed/graph/800/600', 'https://picsum.photos/seed/market/800/600', 'https://picsum.photos/seed/finance/800/600', 'https://picsum.photos/seed/growth/800/600'],
      content: 'Data terbaru dari Badan Pusat Statistik menunjukkan bahwa tingkat inflasi pada kuartal ketiga tahun ini mengalami penurunan yang signifikan, memberikan sinyal positif bagi daya beli masyarakat dan perekonomian nasional.',
      rating: [4, 5, 3, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'eko2', title: 'Bank Sentral Kembali Naikkan Suku Bunga Acuan', kategori: ['economy'], image: 'https://picsum.photos/seed/bank/600/400', 
      images: ['https://picsum.photos/seed/currency/800/600', 'https://picsum.photos/seed/money/800/600', 'https://picsum.photos/seed/interest/800/600', 'https://picsum.photos/seed/meeting/800/600'],
      content: 'Keputusan ini diambil oleh Bank Sentral dalam rapat dewan gubernur untuk menjaga stabilitas nilai tukar rupiah dan mengendalikan ekspektasi inflasi di tengah ketidakpastian ekonomi global.',
      rating: [4, 4, 3], comments: [], isFavorite: false 
    },
    { 
      id: 'eko3', title: 'Startup Lokal Dapatkan Pendanaan Seri B', kategori: ['economy', 'tech'], image: 'https://picsum.photos/seed/startup/600/400', 
      images: ['https://picsum.photos/seed/investment/800/600', 'https://picsum.photos/seed/office/800/600', 'https://picsum.photos/seed/presentation/800/600', 'https://picsum.photos/seed/work/800/600'],
      content: 'Dengan suntikan dana segar dari investor asing, startup lokal di bidang edutech ini siap melebarkan sayapnya ke pasar Asia Tenggara dan mengembangkan produk inovatif baru.',
      rating: [5, 4, 5], comments: [], isFavorite: false 
    },
    { 
      id: 'eko4', title: 'Pemerintah Luncurkan Insentif Pajak Baru', kategori: ['economy'], image: 'https://picsum.photos/seed/tax/600/400', 
      images: ['https://picsum.photos/seed/document/800/600', 'https://picsum.photos/seed/justice/800/600', 'https://picsum.photos/seed/policy/800/600', 'https://picsum.photos/seed/parliament/800/600'],
      content: 'Untuk mendorong investasi di sektor manufaktur, pemerintah secara resmi meluncurkan paket insentif pajak yang diharapkan dapat menarik investor domestik dan asing.',
      rating: [4, 4, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'eko5', title: 'Ekspor Komoditas Unggulan Melonjak 15%', kategori: ['economy'], image: 'https://picsum.photos/seed/export/600/400', 
      images: ['https://picsum.photos/seed/port/800/600', 'https://picsum.photos/seed/commodity/800/600', 'https://picsum.photos/seed/trade/800/600', 'https://picsum.photos/seed/industry/800/600'],
      content: 'Nilai ekspor komoditas kelapa sawit dan batu bara mengalami lonjakan signifikan pada bulan lalu, didorong oleh permintaan tinggi dari pasar global.',
      rating: [5, 5, 4], comments: [], isFavorite: false 
    },

    // === KATEGORI: OLAH RAGA (5 Berita) ===
    { 
      id: 'ola1', title: 'Timnas Sepak Bola Menang Dramatis di Final', kategori: ['sports'], image: 'https://picsum.photos/seed/soccer/600/400', 
      images: ['https://picsum.photos/seed/indonesia/800/600', 'https://picsum.photos/seed/stadium/800/600', 'https://picsum.photos/seed/trophy/800/600', 'https://picsum.photos/seed/goal/800/600'],
      content: 'Gol di menit akhir pertandingan membawa kemenangan bagi timnas dalam laga final yang menegangkan. Kemenangan ini disambut sorak sorai pendukung yang memadati stadion.',
      rating: [5, 5, 4], 
      comments: [
        { user: 'Kenny', text: 'Gacorrrrr', replies: [{ user: 'Hansen', text: 'Rillll, kek gini yo punya timnas jago'}] },
        { user: 'Darren', text: 'Gw ga nonton ae sek menang gilaa', replies: [] }
      ], 
      isFavorite: true 
    },
    { 
      id: 'ola2', title: 'Jadwal Pertandingan Liga Champions Dirilis', kategori: ['sports'], image: 'https://picsum.photos/seed/champions/600/400', 
      images: ['https://picsum.photos/seed/ball/800/600', 'https://picsum.photos/seed/calendar/800/600', 'https://picsum.photos/seed/uefa/800/600', 'https://picsum.photos/seed/pitch/800/600'],
      content: 'UEFA telah secara resmi merilis jadwal lengkap untuk fase grup Liga Champions musim ini. Beberapa pertandingan besar akan tersaji di pekan pertama.',
      rating: [5, 5, 5, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'ola3', title: 'Atlet Bulu Tangkis Raih Medali Emas', kategori: ['sports'], image: 'https://picsum.photos/seed/badminton/600/400', 
      images: ['https://picsum.photos/seed/athlete/800/600', 'https://picsum.photos/seed/medal/800/600', 'https://picsum.photos/seed/flag/800/600', 'https://picsum.photos/seed/shuttlecock/800/600'],
      content: 'Pasangan ganda putra andalan Indonesia berhasil merebut medali emas di kejuaraan dunia setelah mengalahkan wakil dari Tiongkok dalam pertarungan tiga set yang sengit.',
      rating: [5, 5, 5], comments: [], isFavorite: false 
    },
    { 
      id: 'ola4', title: 'Pembalap Muda Juarai Seri Balapan Terakhir', kategori: ['sports'], image: 'https://picsum.photos/seed/racing/600/400', 
      images: ['https://picsum.photos/seed/motorcycle/800/600', 'https://picsum.photos/seed/podium/800/600', 'https://picsum.photos/seed/helmet/800/600', 'https://picsum.photos/seed/finish/800/600'],
      content: 'Pembalap muda berbakat dari tim satelit berhasil mengunci gelar juara dunia setelah finis pertama di seri balapan terakhir yang berlangsung di sirkuit Valencia.',
      rating: [4, 5, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'ola5', title: 'Tim Basket Nasional Lolos ke Piala Dunia', kategori: ['sports'], image: 'https://picsum.photos/seed/basketball/600/400', 
      images: ['https://picsum.photos/seed/action/800/600', 'https://picsum.photos/seed/team/800/600', 'https://picsum.photos/seed/worldcup/800/600', 'https://picsum.photos/seed/arena/800/600'],
      content: 'Untuk pertama kalinya dalam sejarah, tim bola basket nasional berhasil memastikan satu tempat di putaran final Piala Dunia setelah memenangkan babak kualifikasi zona Asia.',
      rating: [5, 5, 5], comments: [], isFavorite: false 
    },

    // === KATEGORI: TEKNOLOGI (5 Berita) ===
    { 
      id: 'tek1', title: 'Peluncuran Smartphone Terbaru Pecahkan Rekor Penjualan', kategori: ['tech'], image: 'https://picsum.photos/seed/smartphone/600/400', 
      images: ['https://picsum.photos/seed/newphone/800/600', 'https://picsum.photos/seed/event/800/600', 'https://picsum.photos/seed/store/800/600', 'https://picsum.photos/seed/screen/800/600'],
      content: 'Antusiasme publik sangat tinggi terhadap peluncuran smartphone flagship terbaru. Perusahaan mengumumkan bahwa rekor penjualan hari pertama telah terpecahkan hanya dalam beberapa jam.',
      rating: [5, 4, 5], comments: [], isFavorite: false 
    },
    { 
      id: 'tek2', title: 'Kecerdasan Buatan (AI) Mengubah Dunia Kerja', kategori: ['tech'], image: 'https://picsum.photos/seed/ai/600/400', 
      images: ['https://picsum.photos/seed/robot/800/600', 'https://picsum.photos/seed/automation/800/600', 'https://picsum.photos/seed/server/800/600', 'https://picsum.photos/seed/code/800/600'],
      content: 'Perkembangan pesat dalam teknologi AI diprediksi akan mengotomatisasi banyak pekerjaan rutin, namun juga membuka peluang karir baru di bidang analisis data dan pengembangan AI.',
      rating: [4, 4, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'tek3', title: 'Jaringan 5G Diperluas ke Lebih Banyak Kota', kategori: ['tech'], image: 'https://picsum.photos/seed/5g/600/400', 
      images: ['https://picsum.photos/seed/network/800/600', 'https://picsum.photos/seed/city/800/600', 'https://picsum.photos/seed/fast/800/600', 'https://picsum.photos/seed/connection/800/600'],
      content: 'Operator seluler terkemuka mengumumkan perluasan jangkauan jaringan 5G mereka ke 20 kota baru, menjanjikan kecepatan internet super cepat bagi lebih banyak pengguna.',
      rating: [5, 4, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'tek4', title: 'Ancaman Keamanan Siber Meningkat, Apa Solusinya?', kategori: ['tech'], image: 'https://picsum.photos/seed/cybersecurity/600/400', 
      images: ['https://picsum.photos/seed/hacker/800/600', 'https://picsum.photos/seed/protection/800/600', 'https://picsum.photos/seed/security/800/600', 'https://picsum.photos/seed/binary/800/600'],
      content: 'Dengan semakin banyaknya data yang disimpan secara digital, para ahli keamanan siber mengingatkan pentingnya penggunaan autentikasi dua faktor dan manajemen kata sandi yang kuat.',
      rating: [4, 4, 3], comments: [], isFavorite: false 
    },
    { 
      id: 'tek5', title: 'Komputer Kuantum: Masa Depan Komputasi?', kategori: ['tech'], image: 'https://picsum.photos/seed/quantum/600/400', 
      images: ['https://picsum.photos/seed/processor/800/600', 'https://picsum.photos/seed/science/800/600', 'https://picsum.photos/seed/abstract/800/600', 'https://picsum.photos/seed/datacenter/800/600'],
      content: 'Para peneliti berhasil mencapai terobosan baru dalam pengembangan komputer kuantum yang berpotensi merevolusi bidang farmasi, keuangan, dan ilmu material.',
      rating: [5, 5, 4], comments: [], isFavorite: false 
    },

    // === KATEGORI: KESEHATAN (5 Berita) ===
    { 
      id: 'kes1', title: 'Pentingnya Tidur Cukup untuk Kesehatan Mental', kategori: ['health'], image: 'https://picsum.photos/seed/sleep/600/400', 
      images: ['https://picsum.photos/seed/relax/800/600', 'https://picsum.photos/seed/brain/800/600', 'https://picsum.photos/seed/woman/800/600', 'https://picsum.photos/seed/night/800/600'],
      content: 'Studi terbaru menunjukkan hubungan kuat antara kurang tidur dengan peningkatan risiko depresi dan kecemasan. Para ahli merekomendasikan 7-9 jam tidur setiap malam.',
      rating: [5, 4, 5], comments: [], isFavorite: false 
    },
    { 
      id: 'kes2', title: 'Vaksinasi Booster Terbukti Efektif Lawan Varian Baru', kategori: ['health'], image: 'https://picsum.photos/seed/vaccine/600/400', 
      images: ['https://picsum.photos/seed/doctor/800/600', 'https://picsum.photos/seed/lab/800/600', 'https://picsum.photos/seed/hospital/800/600', 'https://picsum.photos/seed/virus/800/600'],
      content: 'Kementerian Kesehatan mengumumkan hasil penelitian yang membuktikan bahwa dosis booster vaksin COVID-19 secara signifikan meningkatkan antibodi untuk melawan varian virus terbaru.',
      rating: [5, 5, 5], comments: [], isFavorite: false 
    },
    { 
      id: 'kes3', title: 'Tips Menjaga Kesehatan Jantung Sejak Dini', kategori: ['health'], image: 'https://picsum.photos/seed/heart/600/400', 
      images: ['https://picsum.photos/seed/exercise/800/600', 'https://picsum.photos/seed/food/800/600', 'https://picsum.photos/seed/stethoscope/800/600', 'https://picsum.photos/seed/check/800/600'],
      content: 'Dokter spesialis jantung menyarankan untuk rutin berolahraga, mengonsumsi makanan seimbang, dan mengelola stres sebagai kunci utama menjaga kesehatan kardiovaskular.',
      rating: [4, 4, 5], comments: [], isFavorite: false 
    },
    { 
      id: 'kes4', title: 'Manfaat Puasa Intermiten untuk Metabolisme Tubuh', kategori: ['health', 'lifestyle'], image: 'https://picsum.photos/seed/diet/600/400', 
      images: ['https://picsum.photos/seed/salad/800/600', 'https://picsum.photos/seed/time/800/600', 'https://picsum.photos/seed/water/800/600', 'https://picsum.photos/seed/fit/800/600'],
      content: 'Pola makan dengan jendela waktu tertentu atau puasa intermiten menjadi tren. Penelitian menunjukkan manfaatnya dalam meningkatkan sensitivitas insulin dan membantu penurunan berat badan.',
      rating: [4, 3, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'kes5', title: 'Bahaya Paparan Sinar Biru dari Gadget', kategori: ['health'], image: 'https://picsum.photos/seed/gadget/600/400', 
      images: ['https://picsum.photos/seed/eyes/800/600', 'https://picsum.photos/seed/tired/800/600', 'https://picsum.photos/seed/glasses/800/600', 'https://picsum.photos/seed/filter/800/600'],
      content: 'Terlalu lama menatap layar gadget dapat menyebabkan mata lelah dan mengganggu pola tidur karena paparan sinar biru. Gunakan mode malam dan istirahatkan mata secara berkala.',
      rating: [4, 4, 4], comments: [], isFavorite: false 
    },

    // === KATEGORI: GAYA HIDUP (5 Berita) ===
    { 
      id: 'gay1', title: 'Tren Fashion Berkelanjutan Semakin Diminati', kategori: ['lifestyle'], image: 'https://picsum.photos/seed/fashion/600/400', 
      images: ['https://picsum.photos/seed/clothes/800/600', 'https://picsum.photos/seed/fabric/800/600', 'https://picsum.photos/seed/style/800/600', 'https://picsum.photos/seed/recycle/800/600'],
      content: 'Konsumen kini lebih sadar lingkungan, mendorong merek-merek fashion untuk mengadopsi bahan daur ulang dan proses produksi yang ramah lingkungan.',
      rating: [4, 5, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'gay2', title: 'Wisata Alam Domestik Jadi Pilihan Utama Liburan', kategori: ['lifestyle'], image: 'https://picsum.photos/seed/travel/600/400', 
      images: ['https://picsum.photos/seed/mountain/800/600', 'https://picsum.photos/seed/beach/800/600', 'https://picsum.photos/seed/waterfall/800/600', 'https://picsum.photos/seed/camping/800/600'],
      content: 'Destinasi wisata alam seperti gunung, pantai, dan air terjun di dalam negeri menjadi primadona pasca-pandemi, mengalahkan perjalanan ke luar negeri.',
      rating: [5, 5, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'gay3', title: 'Resep Kopi Susu Kekinian ala Kafe', kategori: ['lifestyle'], image: 'https://picsum.photos/seed/coffee/600/400', 
      images: ['https://picsum.photos/seed/barista/800/600', 'https://picsum.photos/seed/beans/800/600', 'https://picsum.photos/seed/cafe/800/600', 'https://picsum.photos/seed/iced/800/600'],
      content: 'Tidak perlu ke kafe, Anda bisa membuat sendiri es kopi susu gula aren yang sedang tren dengan resep sederhana dan bahan-bahan yang mudah ditemukan.',
      rating: [5, 4, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'gay4', title: 'Budidaya Tanaman Hias Kembali Populer', kategori: ['lifestyle'], image: 'https://picsum.photos/seed/plants/600/400', 
      images: ['https://picsum.photos/seed/monstera/800/600', 'https://picsum.photos/seed/gardening/800/600', 'https://picsum.photos/seed/pot/800/600', 'https://picsum.photos/seed/planting/800/600'],
      content: 'Hobi merawat tanaman hias kembali digandrungi banyak kalangan sebagai cara untuk menghilangkan stres dan mempercantik interior rumah.',
      rating: [4, 4, 4], comments: [], isFavorite: false 
    },
    { 
      id: 'gay5', title: 'Film Adaptasi Novel Laris Tayang di Bioskop', kategori: ['lifestyle'], image: 'https://picsum.photos/seed/movie/600/400', 
      images: ['https://picsum.photos/seed/projector/800/600', 'https://picsum.photos/seed/popcorn/800/600', 'https://picsum.photos/seed/audience/800/600', 'https://picsum.photos/seed/novel/800/600'],
      content: 'Film yang diadaptasi dari novel best-seller nasional akhirnya tayang serentak di bioskop dan mendapatkan ulasan positif dari para kritikus film.',
      rating: [5, 4, 5], comments: [], isFavorite: false 
    }
  ];

  constructor() { }

  getBeritaList(): Berita[] {
    return this.semuaBerita;
  }

  getBeritaById(id: string): Berita | undefined {
    return this.semuaBerita.find(b => b.id === id);
  }
}

