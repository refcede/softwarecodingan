document.addEventListener('DOMContentLoaded', () => {

    // --- FUNGSI DARK MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Cek tema yang tersimpan di local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Simpan preferensi tema
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // --- FUNGSI SEARCH BAR ---
    const searchBar = document.getElementById('search-bar');
    const cards = document.getElementsByClassName('software-card');

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        Array.from(cards).forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });


    // --- FUNGSI VERSION TOGGLE (DROPDOWN) ---
    const versionButtons = document.querySelectorAll('.version-toggle-btn');

    versionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Cari version-list yang ada TEPAT SETELAH tombol ini
            const versionList = button.nextElementSibling;
            
            // 2. Cari icon panah di DALAM tombol ini
            const toggleIcon = button.querySelector('.toggle-icon');

            // 3. Cek apakah list sedang tersembunyi atau tidak
            if (versionList.style.display === 'none') {
                // Jika tersembunyi: Tampilkan
                versionList.style.display = 'block';
                toggleIcon.classList.add('active'); // Putar panah ke atas
            } else {
                // Jika terlihat: Sembunyikan
                versionList.style.display = 'none';
                toggleIcon.classList.remove('active'); // Kembalikan panah ke bawah
            }
        });
    });

});