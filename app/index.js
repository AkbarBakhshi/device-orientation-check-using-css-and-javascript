import Home from 'pages/Home'
import Four04 from 'pages/Four04'

class App {
    constructor() {
        // console.log('index app')
        this.createContent()
        this.createPages()

        //****************** does not work on safari on iOS *******************/ https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange
        // added the line below to make sure that we get expected result after the original load
        // this.onOrientationChange()
        // // screen.orientation.addEventListener('change', () => this.onOrientationChange())
        // screen.orientation.addEventListener('change', this.onOrientationChange)
        //*********************************************************************/

        this.checkOrientation()

        this.mediaQuery.addEventListener('change', this.checkOrientation)

    }


    createContent() {
        this.content = document.querySelector('.content')
        this.template = this.content.getAttribute('data-template') // this is the value in each pug file under block variables
    }

    createPages() {
        this.pages = {
            home: new Home(),
            four04: new Four04()
        }
        this.page = this.pages[this.template]
        this.page.create()
    }


    //****************** does not work on safari on iOS *******************/
    // onOrientationChange() {
    //     const homeWelcome = document.querySelector('.home__welcome ')

    //     // if (window.innerHeight > window.innerWidth) {
    //     //     homeWelcome.style.display = 'none'
    //     //     console.log('portrait')
    //     // } else {
    //     //     console.log('landscape')
    //     //     homeWelcome.style.display = 'block'
    //     // }

    //     if (screen.availHeight > screen.availWidth) {
    //         homeWelcome.style.display = 'none'
    //         console.log('portrait')
    //     } else {
    //         console.log('landscape')
    //         homeWelcome.style.display = 'block'
    //     }
    // }
    //*********************************************************************/

    checkOrientation() {
        const homeWelcome = document.querySelector('.home__welcome ')
        this.mediaQuery = window.matchMedia('screen and (orientation: portrait)')
        if (this.mediaQuery.matches) {
            homeWelcome.style.display = 'none'
        } else {
            homeWelcome.style.display = 'block'
        }
    }



}

new App()