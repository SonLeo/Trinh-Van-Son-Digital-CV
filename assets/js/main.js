document.addEventListener("DOMContentLoaded", function () {
    // Back to top button
    let backtotop = document.querySelector('.back-to-top');

    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };

        window.addEventListener('load', toggleBacktotop);
        window.addEventListener('scroll', toggleBacktotop);
    }

    // Mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function (e) {
            document.body.classList.toggle('mobile-nav-active');
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
            console.log(mobileNavIcon);
        });
    }

    // Skills Animation
    let skilsContent = document.querySelector('.skill-list');
    if (skilsContent) {
        new Waypoint({
            element: skilsContent,
            offset: '80%',
            handler: function (direction) {
                let progress = document.querySelectorAll('.progress .progress-bar');
                progress.forEach((el) => {
                    el.style.width = el.getAttribute('aria-valuenow') + '%'
                });
            }
        })
    }

    // Ẩn hiện popup
    const portfolioItems = document.querySelectorAll(".portfolio-wrap");
    const popup = document.getElementById("portfolio-popup");
    const popupTitle = document.querySelector(".popup-title");
    const popupImage = document.querySelector(".popup-image");
    const popupDescription = document.querySelector(".popup-description");
    const closePopupBtn = document.querySelector(".close-popup-btn");

    function openPopup(title, imageSrc, descriptions, index) {
        popupTitle.textContent = title;
        popupImage.src = imageSrc;
        popupDescription.innerHTML = descriptions[index];
        popup.style.display = "flex";
    }

    function closePopup() {
        popup.style.display = "none";
    }

    portfolioItems.forEach((item, index) => {
        const plusBtn = item.querySelector(".open-popup");
        const title = item.querySelector(".portfolio-name").textContent;
        const imageSrc = item.querySelector("img").src;
        const descriptions = [
            "<p>Edmicro IELTS là ứng dụng luyện thi IELTS tiên phong, nổi bật với việc sử dụng công nghệ AI để tối ưu hóa quá trình học tập và nâng cao khả năng làm bài thi của người học. Với mục tiêu giúp các học viên đạt được kết quả cao trong kỳ thi IELTS, Edmicro IELTS đã xây dựng một hệ thống khóa học đa dạng, từ cơ bản đến nâng cao, phục vụ mọi nhu cầu học tập.</p><p style='text-align: center; margin-top: 20px; font-style: italic; color: #aaa'>Edmicro IELTS - Dẫn đầu hiệu quả, hướng dẫn bạn trên hành trình chinh phục IELTS một cách thông minh và hiệu quả.</p><a target='_blank' class='popup-link' href='https://ielts-app.onluyen.vn/'>Xem thêm</a>",
            "<p>Ứng dụng ôn luyện tiểu học là một giải pháp giáo dục 4.0 dành cho học sinh tiểu học. Ứng dụng này giúp học sinh tiểu học xây dựng tư duy tự học ở nhà và củng cố kiến thức cùng giáo trình được biên soạn bám sát sách giáo khoa. Hệ thống sử dụng thuật toán thông minh để xây dựng bài luyện phù hợp cho từng học sinh dựa trên lịch sử ôn luyện.</p><a target='_blank' class='popup-link' href='https://ielts-app.onluyen.vn/'>Xem thêm</a>",
            "<p>Flexilearn.vn là một trang web giáo dục trực tuyến cung cấp các khóa học từ lớp 1 đến lớp 12. Trang web này cung cấp các bài giảng tương tác, giúp học sinh tiếp cận kiến thức một cách dễ dàng và thú vị. Các bài giảng được biên soạn bám sát sách giáo khoa, giúp học sinh củng cố kiến thức và chuẩn bị cho kỳ thi THPT Quốc gia.</p><a target='_blank' class='popup-link' href='https://ielts-app.onluyen.vn/'>Xem thêm</a>"
        ];

        plusBtn.addEventListener("click", function () {
            openPopup(title, imageSrc, descriptions, index);
        });
    });

    closePopupBtn.addEventListener("click", closePopup);

    // Testimonials slide
    let testimonialsSlider = new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    let slides = document.querySelectorAll('.testimonials-slider .swiper-slide');
    let maxParagraphHeight = 0;

    slides.forEach(slide => {
        const paragraphHeight = slide.querySelector('p').offsetHeight;
        maxParagraphHeight = Math.max(maxParagraphHeight, paragraphHeight);
    });

    slides.forEach(slide => {
        slide.querySelector('p').style.minHeight = `${maxParagraphHeight}px`;
    });

    // Animation on scroll
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
});