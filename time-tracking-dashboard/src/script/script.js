'use strict';

const allCards = Array.from(document.querySelectorAll('.card'));
const linksContainer = document.querySelector('.profile__activities-list');
////////////////////////////////

// DATA ACTIVITIES AND CARDS ARE SET IN SAME ORDER

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const dataActivities = data;

        // Set daily timeframe as default when data loaded
        allCards.forEach((card, index) =>
            displayDataInDOM(card, dataActivities.at(index), 'daily')
        );

        document.querySelector('a[data-timeframe="daily"]')
        .classList.add('link--active');

        // Switching between timeframes
        linksContainer.addEventListener('click', e => {
            e.preventDefault();

            const target = e.target;
            if (!target.classList.contains('profile__link')) return;

            // Changing style of active and deactive links on click
            linksContainer
                .querySelectorAll('.profile__link')
                .forEach(link => link.classList.remove('link--active'));

            target.classList.add('link--active');

            const timeframe = target.dataset.timeframe;

            allCards.forEach((card, index) =>
                displayDataInDOM(card, dataActivities.at(index), timeframe)
            );
        });
    });

const displayDataInDOM = function (card, data, timeframe) {
    const last =
        (timeframe === 'daily' && 'Yesterday') ||
        (timeframe === 'weekly' && 'Last week') ||
        (timeframe === 'monthly' && 'Last month');

    const { current, previous } = data.timeframes[timeframe]; // Data based on time frame

    // Selecting elemetns in DOM displaying current and previous timeframe
    card.querySelector('.card__current').textContent = `${current}hrs`;
    card.querySelector(
        '.card__previous'
    ).textContent = `${last} - ${previous}hrs`;
};
