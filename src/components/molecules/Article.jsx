export default function Article() {
  return (
    <article className="max-w-4xl mx-auto space-y-6 text-slate-900 leading-relaxed">
      <header className="space-y-3">
        <p className="text-sm font-medium text-slate-700 bg-slate-200 inline-block px-3 py-1 rounded-full">
          Personal Finance • Budgeting • UI Project
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Budget Planner UI: Cara Simpel Mengatur Income dan Budget per Kategori
        </h1>

        <p className="text-lg text-slate-700">
          Banyak orang ingin mengatur keuangan, tapi berhenti di tengah jalan
          karena tools yang terlalu kompleks. Padahal, budgeting bisa dimulai
          dari sistem yang sederhana: tahu pemasukan, alokasi budget per
          kategori, lalu cek sisa uang secara instan.
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-slate-700">
          Salah satu cara paling efektif untuk membangun kebiasaan budgeting
          adalah dengan membuat aplikasi kecil yang fokus pada inti masalah.
          Konsep ini dikenal dengan pendekatan{" "}
          <span className="font-semibold text-slate-900">minimal budgeting</span>:
          bukan mengumpulkan terlalu banyak fitur, tapi membangun flow yang
          mudah dipahami dan cepat digunakan.
        </p>

        <p className="text-slate-700">
          Di artikel ini, kita akan membahas konsep{" "}
          <span className="font-semibold text-slate-900">Budget Planner UI</span>,
          yaitu aplikasi sederhana yang memungkinkan user memasukkan{" "}
          <span className="font-semibold text-slate-900">monthly income</span>,
          membuat budget per kategori, dan melihat ringkasan total budget
          beserta sisa uangnya. Konsep ini cocok untuk personal finance tool,
          dashboard mini, atau portfolio project.
        </p>
      </section>

      <div className="h-px w-full bg-slate-300"></div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Apa Itu Budget Planner UI?
        </h2>

        <p className="text-slate-700">
          Budget Planner UI adalah aplikasi budgeting yang berfungsi sebagai
          alat bantu perencanaan keuangan. User dapat menentukan pemasukan
          bulanan lalu membagi uang tersebut ke beberapa kategori pengeluaran.
          Dengan begitu, budgeting terasa lebih terstruktur dan user bisa
          menghindari pengeluaran impulsif.
        </p>

        <p className="text-slate-700">
          Berbeda dari aplikasi keuangan yang rumit, Budget Planner UI hanya
          fokus pada hal-hal penting:
          <span className="font-semibold text-slate-900">income</span>,{" "}
          <span className="font-semibold text-slate-900">budget categories</span>,
          dan <span className="font-semibold text-slate-900">summary</span>. Ini
          membuat aplikasi mudah digunakan oleh pemula sekaligus tetap berguna
          untuk pengguna yang sudah terbiasa budgeting.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Fitur Utama yang Harus Ada di Budget Planner UI
        </h2>

        <p className="text-slate-700">
          Agar aplikasi ini terasa lengkap namun tetap minimalis, berikut fitur
          MVP yang ideal. Semua fitur ini bisa dibuat hanya dengan React state
          management sederhana seperti{" "}
          <code className="bg-slate-200 px-2 py-1 rounded text-sm">useState</code>.
        </p>

        <div className="space-y-4">
          <div className="p-4 border border-slate-300 rounded-xl bg-white">
            <h3 className="font-semibold text-slate-900 text-lg">
              1) Input Monthly Income
            </h3>
            <p className="text-slate-700 mt-2">
              Income menjadi patokan utama untuk budgeting. User cukup
              memasukkan angka pemasukan bulanan, misalnya Rp10.000.000. Dari
              angka ini, sistem bisa menghitung apakah total budget sudah aman
              atau malah over budget.
            </p>
          </div>

          <div className="p-4 border border-slate-300 rounded-xl bg-white">
            <h3 className="font-semibold text-slate-900 text-lg">
              2) Budget Category Input
            </h3>
            <p className="text-slate-700 mt-2">
              User dapat menambahkan kategori seperti Food, Transport, Bills,
              atau Savings. Setiap kategori memiliki nominal budget yang
              ditentukan user. Dengan cara ini, user mulai terbiasa memecah
              pengeluaran besar menjadi bagian kecil yang lebih terkontrol.
            </p>
          </div>

          <div className="p-4 border border-slate-300 rounded-xl bg-white">
            <h3 className="font-semibold text-slate-900 text-lg">3) Budget List</h3>
            <p className="text-slate-700 mt-2">
              Semua kategori yang sudah dibuat ditampilkan dalam bentuk list. UI
              harus clean, mudah dibaca, dan punya action dasar seperti delete.
              Jika list kosong, tampilkan empty state agar halaman tidak terasa
              "mati".
            </p>
          </div>

          <div className="p-4 border border-slate-300 rounded-xl bg-white">
            <h3 className="font-semibold text-slate-900 text-lg">
              4) Summary Total Budget
            </h3>
            <p className="text-slate-700 mt-2">
              Summary adalah bagian paling penting karena user ingin melihat
              gambaran besar. Informasi yang ideal ditampilkan:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-700">
              <li>Total income</li>
              <li>Total budget</li>
              <li>Total kategori</li>
              <li>Remaining balance (income - budget)</li>
            </ul>

            <p className="text-slate-700 mt-3">
              Jika remaining balance negatif, tampilkan status{" "}
              <span className="font-semibold text-red-700 bg-red-100 px-2 py-1 rounded">
                Over Budget
              </span>
              agar user sadar bahwa rencana pengeluaran mereka melebihi
              pemasukan.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-slate-300"></div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Kenapa Budget Planner yang Simpel Lebih Efektif?
        </h2>

        <p className="text-slate-700">
          Banyak orang gagal budgeting bukan karena tidak punya niat, tapi
          karena tools yang digunakan terlalu kompleks. Semakin banyak fitur,
          semakin tinggi mental load yang dibutuhkan untuk memulai.
        </p>

        <p className="text-slate-700">
          Budget Planner UI yang minimal justru menang karena:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Lebih cepat dipahami oleh user baru</li>
          <li>Tidak membuat user overwhelmed</li>
          <li>Lebih mudah dipakai setiap hari</li>
          <li>Fokus pada habit building, bukan sekadar data entry</li>
        </ul>

        <p className="text-slate-700">
          Dalam konteks UI design, aplikasi minimal juga memberi kesan modern,
          calm, dan profesional. Sangat cocok untuk portfolio engineer yang
          ingin menunjukkan skill React, component composition, dan state
          management.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Cara Menggunakan Budget Planner UI (Workflow Praktis)
        </h2>

        <p className="text-slate-700">
          Workflow aplikasi ini sangat straightforward dan bisa dipahami hanya
          dalam beberapa langkah:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>Masukkan monthly income sesuai pemasukan kamu saat ini</li>
          <li>Tambahkan kategori pengeluaran yang kamu butuhkan</li>
          <li>Isi budget nominal untuk tiap kategori</li>
          <li>
            Lihat summary untuk memastikan total budget tidak melebihi income
          </li>
          <li>Jika over budget, revisi kategori atau turunkan nominalnya</li>
        </ol>

        <p className="text-slate-700">
          Dengan flow seperti ini, user bisa langsung melihat apakah rencana
          pengeluaran mereka masuk akal atau tidak. Ini juga membantu membangun
          kebiasaan untuk selalu menyisakan uang untuk tabungan dan dana
          darurat.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Contoh Simulasi Budgeting
        </h2>

        <p className="text-slate-700">
          Misalnya kamu memiliki income Rp10.000.000 per bulan. Kamu membuat
          kategori budget seperti berikut:
        </p>

        <div className="p-4 border border-slate-300 rounded-xl bg-slate-100">
          <ul className="space-y-2 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Food:</span>{" "}
              Rp2.000.000
            </li>
            <li>
              <span className="font-semibold text-slate-900">Transport:</span>{" "}
              Rp1.000.000
            </li>
            <li>
              <span className="font-semibold text-slate-900">Bills:</span>{" "}
              Rp2.500.000
            </li>
          </ul>

          <div className="mt-4 space-y-1 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Total Budget:</span>{" "}
              Rp5.500.000
            </p>
            <p>
              <span className="font-semibold text-slate-900">
                Remaining Balance:
              </span>{" "}
              Rp4.500.000
            </p>
          </div>
        </div>

        <p className="text-slate-700">
          Dari simulasi ini, kamu bisa melihat bahwa masih ada sisa uang yang
          cukup besar. Sisa tersebut bisa dialokasikan ke tabungan, investasi,
          atau dana darurat.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Kenapa Project Ini Bagus untuk Portfolio React Developer?
        </h2>

        <p className="text-slate-700">
          Budget Planner UI adalah contoh project kecil yang punya value nyata.
          Dari sisi engineering, kamu bisa menunjukkan kemampuan dalam hal:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            React state management menggunakan{" "}
            <span className="font-semibold text-slate-900">useState</span>
          </li>
          <li>Component breakdown yang rapi</li>
          <li>
            Derived state menggunakan{" "}
            <span className="font-semibold text-slate-900">reduce()</span>
          </li>
          <li>UI consistency dengan Tailwind utility className</li>
          <li>UX detail seperti validation dan empty state</li>
        </ul>

        <p className="text-slate-700">
          Selain itu, aplikasi ini bisa menjadi dasar untuk pengembangan fitur
          lebih besar seperti localStorage, chart analytics, recurring monthly
          budget, atau export CSV. Tapi untuk MVP, fokus minimal sudah cukup
          untuk menghasilkan project yang terlihat solid.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Kesimpulan</h2>

        <p className="text-slate-700">
          Budget Planner UI adalah solusi simpel namun powerful untuk membantu
          user merencanakan keuangan. Dengan hanya tiga komponen utama —{" "}
          <span className="font-semibold text-slate-900">income</span>,
          <span className="font-semibold text-slate-900">budget categories</span>,
          dan <span className="font-semibold text-slate-900">summary</span> — user
          sudah bisa mendapatkan gambaran finansial yang jelas.
        </p>

        <p className="text-slate-700">
          Kalau kamu ingin membangun kebiasaan budgeting yang konsisten, atau
          ingin membuat mini project portfolio yang terlihat profesional,
          project ini adalah pilihan yang sangat tepat.
        </p>

        <div className="p-4 border border-slate-300 rounded-xl bg-white">
          <p className="text-slate-700">
            Next improvement yang recommended:
            <span className="font-semibold text-slate-900">edit inline</span>,
            <span className="font-semibold text-slate-900">localStorage</span>, atau{" "}
            <span className="font-semibold text-slate-900">chart analytics</span>.
            Tapi untuk MVP, keep it clean and simple.
          </p>
        </div>
      </section>
    </article>
  );
}
