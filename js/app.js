import accordionItem from './accordionItem.js';
const items = accordionItem;

        const displayAccordion = (items) => {
            const container = document.getElementById("content-type");
            container.innerHTML = accordionContents(items);
        };

        const accordionContents = (items) => {
            return items.map(item => `
                <div class="accordion__item">
                    <h2>${item.title}</h2>
                    <div class="accordion__content">
                        <p>${item.content}</p>
                    </div>
                </div>
            `).join(''); 
        };



displayAccordion(items);
