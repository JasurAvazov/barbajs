import barba from '@barba/core';
import gsap from 'gsap'


export function init() {
    barba.init({
        // transitions: [{
        //   name: 'opacity-transition',
        //   leave(data) {
        //     return gsap.to(data.current.container, {
        //       opacity: 0
        //     });
        //   },
        //   enter(data) {
        //     return gsap.from(data.next.container, {
        //       opacity: 0
        //     });
        //   }
        // }]

        
        // transitions: [{
        //     name: 'default-transition',
        //     leave() {
        //         // create your stunning leave animation here
        //     },
        //     enter() {
        //         // create your amazing enter animation here
        //     }
        // }]

        transitions: [{
            // Настраиваем переход для определенного контейнера
            name: 'slide-transition',
            leave(data) {
              // Скрываем старую страницу с помощью анимации
              return gsap.to(data.current.container, {
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut'
              });
            },
            enter(data) {
              // Показываем новую страницу с помощью анимации
              return gsap.from(data.next.container, {
                duration: 0,
                ease: 'power2.inOut'
              });
            }
        }]
    });
}