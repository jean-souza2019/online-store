import Note from '../assets/images/note.jpg';
import Headset from '../assets/images/headset.jpg';
import Teclado from '../assets/images/Teclado.jpg';
import tecladoRedragon from '../assets/images/tecladoRedragon.jpg';
import Mouse from '../assets/images/mouse.jpg';
import mouseRazer from '../assets/images/mouseRazer.jpg';

export default function itensLoja() {
    return (
        [
            {
                name: 'Notebook',
                image: Note
            },
            {
                name: 'Headset',
                image: Headset
            },
            {
                name: 'Teclado',
                image: Teclado
            },
            {
                name: 'tecladoRedragon',
                image: tecladoRedragon
            },
            {
                name: 'Mouse',
                image: Mouse
            },
            {
                name: 'mouseRazer',
                image: mouseRazer
            }
        ]

    )
}