document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            console.log("Hamburger diklik!");
        });

        // Tutup menu saat klik di luar
        document.addEventListener('click', function (event) {
            const navContainer = document.querySelector('.nav-container');
            if (!navContainer.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.warn("Elemen tidak ditemukan di DOM");
    }
});

$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault(); // Mencegah pengiriman form default

        let isValid = true;

        // Bersihkan error sebelumnya
        $('.error-message').remove();
        $('.input-error').removeClass('input-error');

        // Fungsi validasi input text
        function validateRequired(input, fieldName, maxLength = null) {
            const value = input.val().trim();

            if (!value) {
                $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">' + fieldName + ' harus diisi.</div>').insertAfter(input);
                input.addClass('input-error');
                isValid = false;
            } else if (maxLength && value.length > maxLength) {
                $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Maksimal ' + maxLength + ' karakter untuk ' + fieldName + '.</div>').insertAfter(input);
                input.addClass('input-error');
                isValid = false;
            }
        }

        // Validasi First Name
        validateRequired($('input[name="first_name"]'), 'First Name', 50);

        // Validasi Last Name
        validateRequired($('input[name="last_name"]'), 'Last Name', 50);

        // Validasi Email
        const emailInput = $('input[name="email"]');
        const emailValue = emailInput.val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue) {
            $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Email harus diisi.</div>').insertAfter(emailInput);
            emailInput.addClass('input-error');
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Format email tidak valid.</div>').insertAfter(emailInput);
            emailInput.addClass('input-error');
            isValid = false;
        } else if (emailValue.length > 100) {
            $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Email maksimal 100 karakter.</div>').insertAfter(emailInput);
            emailInput.addClass('input-error');
            isValid = false;
        }

        // Validasi Phone Number (Opsional tapi jika diisi harus benar)
        const phoneInput = $('input[name="phone"]');
        const phoneValue = phoneInput.val().trim();
        const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;

        if (phoneValue && !phoneRegex.test(phoneValue)) {
            $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Nomor telepon tidak valid.</div>').insertAfter(phoneInput);
            phoneInput.addClass('input-error');
            isValid = false;
        } else if (phoneValue.length > 20) {
            $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Nomor telepon maksimal 20 karakter.</div>').insertAfter(phoneInput);
            phoneInput.addClass('input-error');
            isValid = false;
        }

        // Validasi Message
        const messageInput = $('textarea[name="message"]');
        const messageValue = messageInput.val().trim();

        if (!messageValue) {
            $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Pesan harus diisi.</div>').insertAfter(messageInput);
            messageInput.addClass('input-error');
            isValid = false;
        } else if (messageValue.length > 500) {
            $('<div class="error-message" style="color:red;font-size:0.8rem;margin-top:4px;">Pesan maksimal 500 karakter.</div>').insertAfter(messageInput);
            messageInput.addClass('input-error');
            isValid = false;
        }

        // Jika semua validasi lolos
        if (isValid) {
            this.submit(); // Kirim form
        }
    });
});