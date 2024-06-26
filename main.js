function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'KELINCI TONGOS',
                'TIANG AGAMA',
                'PERI MIMI',
                'NAGA BUNTUNG',
                'SETAN OMPONG',
                'TONGKAT SOEKARNO',
                'KECOA KEBALIK',
                'DAJJAL',
                'TIKUS WANGI',
                'TIKUS OMPONG',
                'GATA BUGIL',
                'EDI77PRO',
                'IMAM',
                'SIGIT RENDANG',
                'REEZA SIPIT'

            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});