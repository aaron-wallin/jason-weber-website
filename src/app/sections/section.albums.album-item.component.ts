import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-album-item',
    templateUrl: './section.albums.album-item.component.html'
})

export class SectionAlbumItemComponent {
    @Input() album: any;
    @Input() showButtons: boolean = true;
}