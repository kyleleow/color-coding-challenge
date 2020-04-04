import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent {
    @Input() tileIndex: number;
    @Input() color: any[] =[0,0,0];
    @Output() tileClick: EventEmitter<number> = new EventEmitter();

    constructor() {}
    
    ngOnInit() {
    }

    onClick() {
        this.tileClick.emit(this.tileIndex);
    }
}
