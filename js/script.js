const noticeEL = document.querySelector('.notice');
const stepperELs = document.querySelectorAll('.stepper');
const burgerEL = document.querySelector('.burger');
const headerListEL = document.querySelector('.header__list');
const filtersBtnEL = document.querySelector('.catalog__mobile-btn');


if (filtersBtnEL) {
    const filtersEL = document.querySelector('.filters');

    filtersBtnEL.addEventListener('click', () => {
        filtersBtnEL.classList.toggle('catalog__mobile-btn--active');
        filtersEL.classList.toggle('filters--active');
    })
}

if (headerListEL) {
    new TransferElements(
        {
            sourceElement: headerListEL,
            breakpoints: {
                767.98: {
                    targetElement: document.querySelector('.header__bottom'),
                    targetPosition: 1
                }
            }
        }
    );
}

if (burgerEL) {
    const body = document.body;
    const menuEL = document.querySelector('.header__bottom');

    burgerEL.addEventListener('click', () => {
        burgerEL.classList.toggle('burger--active');
        menuEL.classList.toggle('header__bottom--active');
        body.classList.toggle('stop-scroll');
    })
}

if (noticeEL) {
    const noticeCloseEL = noticeEL.querySelector('.notice__close');
    noticeCloseEL.addEventListener('click', () => {
        noticeEL.classList.add('notice--hidden');
    })
}

if (stepperELs) {
    stepperELs.forEach(stepperEL => {
        const stepperInputEL = stepperEL.querySelector('.stepper__input');
        const stepperBtnMinusEL = stepperEL.querySelector('.stepper__btn--minus');
        const stepperBtnPlusEL = stepperEL.querySelector('.stepper__btn--plus');

        const stepperMin = Number(stepperInputEL.getAttribute('min'));
        const stepperMax = Number(stepperInputEL.getAttribute('max'));

        let count = Number(stepperInputEL.value);

        stepperInputEL.addEventListener('change', () => {
            stepperBtnMinusEL.disabled = false;
            stepperBtnPlusEL.disabled = false;
            // stepperBtnMinusEL.classList.remove('stepper__btn--disabled');
            // stepperBtnPlusEL.classList.remove('stepper__btn--disabled');

            if (stepperInputEL.value < stepperMin) {
                stepperInputEL.value = stepperMin;
                stepperBtnMinusEL.disabled = true;
                // stepperBtnMinusEL.classList.add('stepper__btn--disabled');
            }

            if (stepperInputEL.value > stepperMax) {
                stepperInputEL.value = stepperMax;
                stepperBtnPlusEL.disabled = true;
                // stepperBtnPlusEL.classList.add('stepper__btn--disabled');
            }
        })

        stepperBtnPlusEL.addEventListener('click', () => {
            let count = Number(stepperInputEL.value);

            if (count < stepperMax) {
                stepperBtnMinusEL.disabled = false;
                stepperBtnPlusEL.disabled = false;
                // stepperBtnMinusEL.classList.remove('stepper__btn--disabled')
                // stepperBtnPlusEL.classList.remove('stepper__btn--disabled')
                count++
                stepperInputEL.value = count
            }

            if (count === stepperMax) {
                stepperBtnPlusEL.disabled = true;
                // stepperBtnPlusEL.classList.add('stepper__btn--disabled')
            }
        })

        stepperBtnMinusEL.addEventListener('click', () => {
            let count = Number(stepperInputEL.value);

            if (count > stepperMin) {
                stepperBtnMinusEL.disabled = false;
                stepperBtnPlusEL.disabled = false;
                // stepperBtnMinusEL.classList.remove('stepper__btn--disabled')
                // stepperBtnPlusEL.classList.remove('stepper__btn--disabled')
                count--;
                stepperInputEL.value = count;
            }

            if (count === stepperMin) {
                stepperBtnMinusEL.disabled = true;
                // stepperBtnMinusEL.classList.add('stepper__btn--disabled')
            }
        })
    })
}