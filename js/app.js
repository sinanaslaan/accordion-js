// İçeriklerin Alınması //

import accordionItem from './accordionItem.js';
const items = accordionItem;

        const displayAccordion = (items) => {
            const container = document.getElementById("content-type");
            container.innerHTML = accordionContents(items);
        };

        const accordionContents = (items) => {
            return items.map(item => `
                <div class="accordion__item">
                <a class="accordion__title" href="#">
                    <h2>${item.title}</h2>
                    </a>
                    <div class="accordion__content">
                        <p>${item.content}</p>
                    </div>
                </div>
            `).join(''); 
        };

// İçeriklerin Alınması //


// Tıklama Olay Dinleyicisi //

            const toggleActive = () => {
                const activeTitle = document.querySelectorAll('a.accordion__title');
                const accordionContent = document.querySelectorAll('div.accordion__content');

                activeTitle.forEach((title, index) => {
                    title.addEventListener('click', () => {

                        const activeControl = title.classList.contains('active');

                        activeTitle.forEach(item => {
                            item.classList.remove('active');
                        });

                        accordionContent.forEach(content => {
                            content.classList.remove('active');
                        });

                        if (!activeControl) {
                            title.classList.add('active');
                            if (accordionContent[index]) {
                                accordionContent[index].classList.add('active');
                            }
                        }
                    });
                });
            };



// Tıklama Olay Dinleyicisi //



displayAccordion(items);
toggleActive();
